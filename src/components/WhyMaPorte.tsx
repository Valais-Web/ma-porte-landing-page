import { Award, HandHeart, Shield, FileText, MapPin } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

export const WhyMaPorte = () => {
  const pillars = [
    {
      icon: Award,
      title: 'Expertise 100 % portes d\'entrée',
      description: 'Vous profitez d\'un savoir-faire ultra-spécialisé : Depuis plus de 20 ans, nos équipes ne font que ça, et ça se voit dans le résultat.'
    },
    {
      icon: HandHeart,
      title: 'Accompagnement clé en main',
      description: 'Du premier appel au SAV, tout est géré par nos équipes internes : un interlocuteur unique, pas de surprises.'
    },
    {
      icon: Shield,
      title: 'Garantie tranquillité & SAV réactif',
      description: 'Votre investissement est protégé ; en cas de besoin, notre équipe technique intervient rapidement.'
    },
    {
      icon: FileText,
      title: 'Devis clair & conseils neutres',
      description: 'Pas de jargon, pas de pression : nous bâtissons l\'offre autour de vos priorités, et vous décidez en toute confiance.'
    },
    {
      icon: MapPin,
      title: 'Entreprise locale',
      description: 'Société familiale vaudoise, proche de chez vous : soutien à l\'économie régionale et intervention rapide.'
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
        <div className="hidden lg:grid lg:grid-cols-5 gap-8 mb-16">
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
        <div className="lg:hidden mb-16">
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

        {/* Team Images Section */}
        <div className="bg-maporte-gray-light rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-jost font-medium text-maporte-black mb-3">
              Nos équipes à l'œuvre
            </h3>
            <p className="text-lg text-maporte-gray-medium font-roboto">
              Professionnalisme et expertise technique au service de votre projet
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main image - larger on desktop */}
            <div className="lg:col-span-2">
              <div className="relative rounded-xl overflow-hidden shadow-lg group bg-white">
                <img 
                  src="/lovable-uploads/af4ed72f-85b6-43f6-9e20-91ea365ef202.png"
                  alt="Équipe Ma Porte installant une porte d'entrée avec précision et professionnalisme"
                  className="w-full h-64 lg:h-80 object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maporte-black/10 to-transparent"></div>
              </div>
            </div>
            
            {/* Secondary images - stacked on desktop */}
            <div className="space-y-6">
              <div className="relative rounded-xl overflow-hidden shadow-lg group bg-white">
                <img 
                  src="/lovable-uploads/b5a981f1-e680-4880-aeb5-f013784c0e8f.png"
                  alt="Technicien Ma Porte effectuant des mesures précises lors de l'installation"
                  className="w-full h-32 lg:h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maporte-black/10 to-transparent"></div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden shadow-lg group bg-white">
                <img 
                  src="/lovable-uploads/d07d2b35-e369-415e-a0de-49498b143fe0.png"
                  alt="Expert Ma Porte vérifiant les détails techniques d'une installation de porte"
                  className="w-full h-32 lg:h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maporte-black/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
