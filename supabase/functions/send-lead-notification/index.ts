
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface LeadData {
  name: string;
  email: string;
  phone: string;
  postalCode: string;
  project: string;
  priority: string;
  budget: string;
  timeline: string;
  gclid?: string;
}

interface EmailRequest {
  leadData: LeadData;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { leadData }: EmailRequest = await req.json();
    console.log("Processing lead notification:", leadData);

    const emailContent = `
      <h2>Nouvelle demande de devis - Ma Porte</h2>

      <h3>Informations du contact</h3>
      <ul>
        <li><strong>Nom:</strong> ${leadData.name}</li>
        <li><strong>Email:</strong> ${leadData.email}</li>
        <li><strong>Téléphone:</strong> ${leadData.phone}</li>
        <li><strong>Code postal:</strong> ${leadData.postalCode}</li>
      </ul>

      <h3>Détails du projet</h3>
      <ul>
        <li><strong>Type de projet:</strong> ${leadData.project}</li>
        <li><strong>Priorité:</strong> ${leadData.priority}</li>
        <li><strong>Budget:</strong> ${leadData.budget}</li>
        <li><strong>Délais:</strong> ${leadData.timeline}</li>
        ${leadData.gclid ? `<li><strong>GCLID:</strong> ${leadData.gclid}</li>` : ''}
      </ul>

      <p><em>Demande reçue le ${new Date().toLocaleString('fr-FR')}</em></p>
    `;

    // Send notification email to Ma Porte team
    const emailResponse = await resend.emails.send({
      from: "Ma Porte <onboarding@resend.dev>",
      to: ["info@ma-porte.ch"], // Replace with your actual email
      subject: `Nouvelle demande de devis - ${leadData.name}`,
      html: emailContent,
    });

    console.log("Email sent successfully:", emailResponse);

    // Send confirmation email to the lead
    // const confirmationResponse = await resend.emails.send({
    //   from: "Ma Porte <onboarding@resend.dev>",
    //   to: [leadData.email],
    //   subject: "Confirmation de votre demande - Ma Porte",
    //   html: `
    //     <h2>Merci pour votre demande !</h2>
    //     <p>Bonjour ${leadData.name.split(' ')[0]},</p>
    //     <p>Nous avons bien reçu votre demande de devis pour votre projet de ${leadData.project.toLowerCase()}.</p>
    //     <p>Un expert Ma Porte vous rappellera sous 24 h (jours ouvrés) pour valider vos choix et établir un devis précis.</p>
    //     <p>À très bientôt !</p>
    //     <p><strong>L'équipe Ma Porte</strong></p>
    //   `,
    // });

    // console.log("Confirmation email sent:", confirmationResponse);

    return new Response(
      JSON.stringify({
        success: true,
        emailId: emailResponse.data?.id,
        confirmationId: confirmationResponse.data?.id
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-lead-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
