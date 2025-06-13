
import { Home, Lock, Palette, Droplets, Wrench, TrendingUp } from 'lucide-react';

export const Benefits = () => {
  const benefits = [
    {
      icon: Home,
      title: 'Isolation thermique passive',
      description: '−30% de pertes d\'énergie mesurées.'
    },
    {
      icon: Lock,
      title: 'Sécurité RC3 prouvée',
      description: 'Résiste > 5 min aux effractions courantes.'
    },
    {
      icon: Palette,
      title: 'Design illimité',
      description: '400 modèles + RAL illimité + LED intégrées.'
    },
    {
      icon: Droplets,
      title: 'Zéro entretien alu',
      description: 'Pas de gonflement, pas de peinture.'
    },
    {
      icon: Wrench,
      title: 'Pose & SAV internes',
      description: 'Nos menuisiers salariés, pas de sous-traitance.'
    },
    {
      icon: TrendingUp,
      title: 'Valeur patrimoniale',
      description: 'Une entrée qui revalorise la maison au premier regard.'
    }
  ];

  return (
    <section className="py-20 bg-maporte-gray-light">
      <div className="container-maporte">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-jost font-semibold text-maporte-black mb-4">
            Les bénéfices qui comptent pour VOUS
          </h2>
          <p className="text-xl text-maporte-gray-medium font-roboto">
            Au-delà d'une simple porte, un investissement durable
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-maporte-orange/10 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-maporte-orange" />
              </div>
              <h3 className="text-lg font-jost font-semibold text-maporte-black mb-3">
                {benefit.title}
              </h3>
              <p className="text-maporte-gray-medium font-roboto">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
