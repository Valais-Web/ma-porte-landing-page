import { Thermometer, Shield, Palette, DollarSign, MapPin, TrendingUp } from 'lucide-react';
interface BenefitsProps {
  onShowForm?: () => void;
}
export const Benefits = ({
  onShowForm
}: BenefitsProps) => {
  const benefits = [{
    icon: Thermometer,
    title: 'Isolation & économies d\'énergie',
    description: 'Panneau alu isolé + triple vitrage : coefficient Uw jusqu\'à 0,65 W/m²K et forte atténuation du bruit extérieur — plus de courants d\'air ni de vacarme de rue'
  }, {
    icon: Shield,
    title: 'Sécurité renforcée',
    description: 'Serrure multipoints 5 crochets, rosaces anti-perçage, charnière renforcée, vitrage feuilleté ou blindés, serrures biométriques, portes testées & certifiées RC2/RC3 pour résister aux tentatives d\'effraction'
  }, {
    icon: Palette,
    title: 'Design 100 % personnalisé',
    description: '+ 400 modèles, palette RAL illimitée, matériaux, poignées, vitrage, inserts LED, biométrie optionnelle : créez une entrée unique qui reflète votre style'
  }, {
    icon: DollarSign,
    title: 'Rapport qualité-prix optimal',
    description: 'Investissez une fois pour toutes : durabilité alu, garanties solides et valeur bien supérieure au coût long terme, plébiscité par nos clients'
  }, {
    icon: MapPin,
    title: 'Service local & SAV rapide',
    description: 'Conseils sur place, délais tenus, assistance réactive : la proximité assure des interventions sans stress lorsque c\'est nécessaire'
  }, {
    icon: TrendingUp,
    title: 'Valorisation de votre bien',
    description: 'Une porte haut de gamme améliore instantanément l\'esthétique et la valeur patrimoniale de la maison, un atout pour la revente'
  }];
  return <section className="py-20 bg-maporte-beige">
      <div className="container-maporte">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-jost font-semibold text-maporte-black mb-4">
            Les bénéfices qui comptent pour VOUS
          </h2>
          <p className="text-xl text-maporte-gray-medium font-roboto max-w-2xl mx-auto">
            Au-delà d'une simple porte, un investissement durable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-16 h-16 bg-maporte-orange/10 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-8 h-8 text-maporte-orange" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-jost font-medium text-maporte-black">
                  {benefit.title}
                </h4>
              </div>
              <p className="text-base text-maporte-gray-medium font-roboto leading-relaxed">
                {benefit.description}
              </p>
            </div>)}
        </div>

        <div className="text-center">
          <button onClick={onShowForm} className="bg-maporte-orange hover:bg-maporte-orange/90 text-white font-roboto font-medium px-8 py-4 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">Obtenir mon devis gratuit et personnalisé</button>
        </div>
      </div>
    </section>;
};