
import { Search, Ruler, Cog, CheckCircle } from 'lucide-react';

export const Process = () => {
  const steps = [
    {
      icon: Search,
      title: 'Configuration en ligne / appel expert',
      description: 'Choisissez votre modèle et personnalisez-le selon vos goûts'
    },
    {
      icon: Ruler,
      title: 'Mesures & conseils chez vous',
      description: 'Notre menuisier se déplace gratuitement pour les mesures'
    },
    {
      icon: Cog,
      title: 'Fabrication sur mesure 5–7 sem.',
      description: 'Production Inotherm avec suivi qualité à chaque étape'
    },
    {
      icon: CheckCircle,
      title: 'Pose propre en 1 jour & suivi',
      description: 'Installation professionnelle et service après-vente garanti'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-maporte">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-jost font-semibold text-maporte-black mb-4">
            Processus clair en 4 étapes
          </h2>
          <p className="text-xl text-maporte-gray-medium font-roboto">
            Vous restez maître, nous gérons tout.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-maporte-orange/20 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step number */}
                <div className="w-16 h-16 bg-maporte-orange rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-jost font-semibold text-maporte-black mb-3">
                  {step.title}
                </h3>
                <p className="text-maporte-gray-medium font-roboto text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
