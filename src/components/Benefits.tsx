
import { Home, Shield, Palette, DollarSign, MapPin, TrendingUp } from 'lucide-react';

export const Benefits = () => {
  const benefits = [
    {
      icon: Home,
      title: 'Isolation & économies d\'énergie',
      description: 'Panneau alu isolé + triple vitrage : coefficient Uw jusqu\'à 0,65 W/m²K et forte atténuation du bruit extérieur — plus de courants d\'air ni de vacarme de rue'
    },
    {
      icon: Shield,
      title: 'Sécurité renforcée',
      description: 'Serrure multipoints 5 crochets, rosaces anti-perçage, charnière renforcée, vitrage feuilleté ou blindés, serrures biométriques, portes testées & certifiées RC2/RC3 pour résister aux tentatives d\'effraction'
    },
    {
      icon: Palette,
      title: 'Design 100 % personnalisé',
      description: '+ 400 modèles, palette RAL illimitée, matériaux, poignées, vitrage, inserts LED, biométrie optionnelle : créez une entrée unique qui reflète votre style'
    },
    {
      icon: DollarSign,
      title: 'Rapport qualité-prix optimal',
      description: 'Investissez une fois pour toutes : durabilité alu, garanties solides et valeur bien supérieure au coût long terme, plébiscité par nos clients'
    },
    {
      icon: MapPin,
      title: 'Service local & SAV rapide',
      description: 'Conseils sur place, délais tenus, assistance réactive : la proximité assure des interventions sans stress lorsque c\'est nécessaire'
    },
    {
      icon: TrendingUp,
      title: 'Valorisation de votre bien',
      description: 'Une porte haut de gamme améliore instantanément l\'esthétique et la valeur patrimoniale de la maison, un atout pour la revente'
    }
  ];

  return (
    <section className="py-20 bg-maporte-beige">
      <div className="container-maporte">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-jost font-semibold text-maporte-black mb-4">
            Les bénéfices d'une porte Ma Porte
          </h2>
          <p className="text-xl text-maporte-gray-medium font-roboto max-w-2xl mx-auto">
            Découvrez tous les avantages d'investir dans une porte d'entrée de qualité suisse
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <benefit.icon className="w-8 h-8 text-maporte-orange mr-4" strokeWidth={1.5} />
                <h4 className="text-xl font-jost font-medium text-maporte-black">
                  {benefit.title}
                </h4>
              </div>
              <p className="text-base text-maporte-gray-medium font-roboto leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
