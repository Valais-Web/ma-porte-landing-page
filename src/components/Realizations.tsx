import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useEffect, useState } from 'react';

interface RealizationsProps {
  onShowForm?: () => void;
}

export const Realizations = ({
  onShowForm
}: RealizationsProps) => {
  const [api, setApi] = useState<any>();
  const [mobileApi, setMobileApi] = useState<any>();

  const realizations = [
    {
      image: '/lovable-uploads/25c679f1-057b-4cc6-8fc2-8c6fb5a765d8.png',
      title: 'Entrée moderne bois & métal',
      category: 'Villa contemporaine',
      description: 'Une porte d\'entrée alliant chaleur du bois et robustesse du métal'
    }, {
      image: '/lovable-uploads/795d5e1d-d42c-4115-acb4-711a311ad270.png',
      title: 'Design épuré avec terrasse',
      category: 'Maison familiale',
      description: 'Une entrée qui s\'intègre parfaitement dans l\'architecture moderne'
    }, {
      image: '/lovable-uploads/99da95a3-0a0a-4897-8f23-af409d1f5cd9.png',
      title: 'Élégance minimaliste',
      category: 'Architecture contemporaine',
      description: 'Des lignes pures pour une esthétique intemporelle et raffinée'
    }, {
      image: '/lovable-uploads/079fc471-4cf2-4762-9c83-c03d8856af7b.png',
      title: 'Porte vitrée moderne',
      category: 'Style contemporain',
      description: 'Luminosité maximale avec sécurité renforcée'
    }, {
      image: '/lovable-uploads/7836f6c7-0592-421c-b8fb-c3d8d2a2230a.png',
      title: 'Maison familiale moderne',
      category: 'Résidence premium',
      description: 'Une entrée qui reflète le caractère unique de votre habitat'
    }, {
      image: '/lovable-uploads/ac421f2c-5548-493d-8759-e34d7e4a0e33.png',
      title: 'Entrée protégée élégante',
      category: 'Villa d\'exception',
      description: 'Design contemporain avec protection optimale'
    }, {
      image: '/lovable-uploads/d120211f-57ce-4216-ac3e-89324f62e8d9.png',
      title: 'Sophistication urbaine',
      category: 'Maison de prestige',
      description: 'Une porte qui affirme votre style architectural'
    }, {
      image: '/lovable-uploads/e0986479-ab0e-40fc-a2d4-5ad3d3455d42.png',
      title: 'Design classique moderne',
      category: 'Architecture traditionnelle',
      description: 'L\'élégance intemporelle au service de la modernité'
    }, {
      image: '/lovable-uploads/a0fa0117-87f2-41e9-b92a-f7277d081352.png',
      title: 'Combinaison pierre & verre',
      category: 'Style authentique',
      description: 'Matériaux nobles pour une entrée de caractère'
    }, {
      image: '/lovable-uploads/55b74da1-d3e7-43d1-b85e-86e9181802b7.png',
      title: 'Grandeur architecturale',
      category: 'Design avant-gardiste',
      description: 'Une entrée majestueuse aux proportions parfaites'
    }
  ];

  // Auto-scroll every 7 seconds for desktop gallery
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 7000);

    return () => clearInterval(interval);
  }, [api]);

  // Auto-scroll every 5 seconds for mobile gallery
  useEffect(() => {
    if (!mobileApi) return;

    const interval = setInterval(() => {
      mobileApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [mobileApi]);

  return (
    <section className="py-20 bg-gradient-to-br from-maporte-beige to-white overflow-hidden">
      <div className="container-maporte">
        {/* Header with enhanced typography */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-jost font-semibold text-maporte-black mb-6 tracking-tight">
            Inspirez-vous
          </h2>
          <p className="text-xl text-maporte-gray-medium font-roboto max-w-3xl mx-auto leading-relaxed">
            Découvrez nos réalisations récentes. Des portes d'entrée sur-mesure qui allient isolation, sécurité et design pour s'adapter parfaitement à votre architecture.
          </p>
        </div>

        {/* Desktop: Horizontal Slider */}
        <div className="hidden lg:block mb-20">
          <Carousel 
            className="w-full" 
            opts={{
              align: "start",
              loop: true
            }}
            setApi={setApi}
          >
            <CarouselContent className="-ml-6">
              {realizations.map((realization, index) => (
                <CarouselItem key={index} className="pl-6 basis-1/3">
                  <div className="group cursor-pointer transform-gpu">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:-translate-y-2">
                      <div className="relative overflow-hidden aspect-[4/5]">
                        <img src={realization.image} alt={realization.title} className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" />
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-maporte-black/90 via-maporte-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Badge catégorie */}
                        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-roboto font-medium bg-white/90 backdrop-blur-sm text-maporte-black">
                            {realization.category}
                          </span>
                        </div>

                        {/* Contenu au survol */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out">
                          <h3 className="text-xl font-jost font-semibold mb-3 leading-tight">
                            {realization.title}
                          </h3>
                          <p className="text-white/90 font-roboto text-sm leading-relaxed">
                            {realization.description}
                          </p>
                        </div>

                        {/* Effet de brillance */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/90 border-maporte-gray-medium/20 hover:bg-white" />
            <CarouselNext className="right-4 bg-white/90 border-maporte-gray-medium/20 hover:bg-white" />
          </Carousel>
        </div>

        {/* Mobile & Tablet: Horizontal Scroll Carousel with auto-scroll */}
        <div className="lg:hidden mb-20">
          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true
            }}
            setApi={setMobileApi}
          >
            <CarouselContent className="-ml-4">
              {realizations.map((realization, index) => (
                <CarouselItem key={index} className="pl-4 basis-4/5 sm:basis-1/2 md:basis-1/3">
                  <div className="group cursor-pointer transform-gpu">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                      <div className="relative overflow-hidden aspect-[3/4]">
                        <img src={realization.image} alt={realization.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        
                        {/* Mobile overlay content - only visible on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-maporte-black/90 via-maporte-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
                          <div className="mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            <span className="text-xs font-roboto font-medium text-maporte-orange bg-maporte-orange/20 px-2 py-1 rounded-full backdrop-blur-sm">
                              {realization.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-jost font-semibold mb-2 leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                            {realization.title}
                          </h3>
                          <p className="text-white/90 font-roboto text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                            {realization.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Call to action with form trigger */}
        <div className="text-center animate-fade-in" style={{
          animationDelay: '1000ms'
        }}>
          <div onClick={onShowForm} className="inline-flex items-center space-x-4 bg-white rounded-2xl px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-maporte-orange/10 hover:border-maporte-orange/30">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-maporte-orange to-maporte-orange/80 rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-maporte-black font-jost font-semibold text-lg">
                  Prêt à créer la vôtre ?
                </p>
                <p className="text-maporte-gray-medium font-roboto text-sm">Recevez votre devis gratuit et personnalisé</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
