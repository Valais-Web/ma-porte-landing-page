
import { Target, Award, Wrench } from 'lucide-react';

export const WhyMaPorte = () => {
  const reasons = [
    {
      icon: Target,
      title: 'Spécialiste portes d\'entrée, rien d\'autre',
      description: 'Focus 100% sur la porte aluminium haut de gamme depuis 20 ans.'
    },
    {
      icon: Award,
      title: 'Fabrication Inotherm #1 européen',
      description: '95 mm monobloc, vitrage triple, plus de 400 modèles entièrement configurables.'
    },
    {
      icon: Wrench,
      title: 'Service local « zéro souci »',
      description: 'Prise de mesures à domicile, pose en 1 jour, SAV réactif en Suisse romande – garanti.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-maporte">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-jost font-semibold text-maporte-black mb-4">
            Pourquoi Ma Porte ?
          </h2>
          <p className="text-xl text-maporte-gray-medium font-roboto max-w-2xl mx-auto">
            L'expertise suisse au service de votre sécurité et confort
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-maporte-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-maporte-orange/20 transition-colors">
                <reason.icon className="w-8 h-8 text-maporte-orange" />
              </div>
              <h3 className="text-xl font-jost font-semibold text-maporte-black mb-4">
                {reason.title}
              </h3>
              <p className="text-maporte-gray-medium font-roboto leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
