
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: 'Combien coûte une porte d\'entrée posée ?',
      answer: 'Le prix varie de 5 000 à 15 000 CHF selon le modèle, les options de sécurité et de personnalisation choisies. Nous proposons un devis gratuit et détaillé après prise de mesures à domicile. Possibilité de paiement échelonné sans frais.'
    },
    {
      question: 'En quoi votre porte est-elle plus sûre qu\'un modèle à 1 500 CHF ?',
      answer: 'Nos portes Inotherm intègrent un verrouillage 5 crochets, blindage RC2/RC3 certifié, rosace inox anti-perçage et options biométriques. Tests de résistance > 5 minutes contre l\'effraction, garantie d\'assurance. Sécurité éprouvée par 45 000 installations/an.'
    },
    {
      question: 'Quels délais entre la commande et la pose ?',
      answer: 'Délai standard de 5-7 semaines pour la fabrication sur mesure Inotherm. Installation en une journée par nos menuisiers salariés. Planning optimisé pour minimiser les délais, avec suivi personnalisé de votre commande.'
    },
    {
      question: 'Quelle garantie produit & installation ?',
      answer: 'Garantie fabricant Inotherm 10 ans sur la porte, 2 ans sur les mécanismes. Garantie Ma Porte 2 ans sur la pose et les réglages. SAV local réactif avec intervention sous 48h en Suisse romande. Service de maintenance préventive disponible.'
    },
    {
      question: 'Puis-je vraiment tout personnaliser ?',
      answer: 'Oui : 400 modèles de base, couleurs RAL illimitées (mates, brillantes, structurées), décors bois, types de vitrage, poignées design, éclairage LED intégré, accessoires connectés. Configurateur en ligne avec visualisation 3D temps réel.'
    },
    {
      question: 'Comment se passe le SAV ?',
      answer: 'Numéro direct Ma Porte, intervention sous 48h en Suisse romande. Menuisiers salariés formés Inotherm (pas de sous-traitance). Stock de pièces détachées garanti 10 ans. Contrats de maintenance préventive pour les copropriétés et professionnels.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-maporte">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-jost font-semibold text-maporte-black mb-4">
            Questions fréquentes
          </h2>
          <p className="text-xl text-maporte-gray-medium font-roboto">
            Toutes les réponses à vos interrogations
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-maporte-gray-light rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-jost font-semibold text-maporte-black pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-6 h-6 text-maporte-orange transition-transform flex-shrink-0 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-6">
                  <p className="text-maporte-gray-medium font-roboto leading-relaxed">
                    {faq.answer}
                  </p>
                  <button className="mt-4 text-maporte-orange font-roboto font-medium hover:underline">
                    Retour au formulaire
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
