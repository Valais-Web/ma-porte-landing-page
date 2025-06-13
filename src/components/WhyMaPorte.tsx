
import { Award, HandHeart, Shield, FileText, MapPin } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

export const WhyMaPorte = () => {
  const pillars = [
    {
      icon: Award,
      title: '20 ans d\'expertise 100 % portes d\'entrée',
      description: 'Vous profitez d\'un savoir-faire ultra-spécialisé : nos équipes ne font que ça, et ça se voit dans le résultat.'
    },
    {
      icon: HandHeart,
      title: 'Accompagnement clé en main',
      description: 'Du premier appel au SAV, tout est géré par nos équipes internes : un interlocuteur unique, pas de surprises.'
    },
    {
      icon: Shield,
      title: 'Garantie tranquillité 10 ans & SAV 48 h',
      description: 'Votre investissement est protégé ; en cas de souci, un technicien intervient sous deux jours ouvrés max.'
    },
    {
      icon: FileText,
      title: 'Devis clair & conseils neutres',
      description: 'Pas de jargon, pas de pression : nous bâtissons l\'offre autour de vos priorités, et vous décidez en toute confiance.'
    },
    {
      icon: MapPin,
      title: 'Entreprise locale au service des Romands',
      description: 'Société familiale vaudoise, proche de chez vous : soutien à l\'économie locale et réactivité terrain garantie.'
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

        {/* Desktop Grid - 5 columns */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-6">
                <pillar.icon className="w-8 h-8 text-maporte-orange" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-jost font-medium text-maporte-black mb-4 leading-tight">
                {pillar.title}
              </h3>
              <p className="text-base text-maporte-gray-medium font-roboto leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="lg:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {pillars.map((pillar, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="text-center p-6">
                    <div className="flex items-center justify-center mb-6">
                      <pillar.icon className="w-8 h-8 text-maporte-orange" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-jost font-medium text-maporte-black mb-4 leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-base text-maporte-gray-medium font-roboto leading-relaxed max-w-md mx-auto">
                      {pillar.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
