
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

interface RealizationsProps {
  onShowForm?: () => void;
}

export const Realizations = ({ onShowForm }: RealizationsProps) => {
  const realizations = [{
    image: '/lovable-uploads/c9440a32-39ed-48d2-992b-d622001fd03b.png',
    title: 'Design contemporain bois & verre',
    category: 'Villa moderne',
    description: 'Une entrée sculpturale qui joue avec les matières naturelles'
  }, {
    image: '/lovable-uploads/a8e654c5-a033-456a-ac3c-f84a88fa46b3.png',
    title: 'Élégance minimaliste',
    category: 'Architecture contemporaine',
    description: 'Des lignes pures pour une esthétique intemporelle'
  }, {
    image: '/lovable-uploads/c0e010d8-9a98-400d-9001-b6b4b1940b8f.png',
    title: 'Combinaison bois-métal',
    category: 'Maison familiale',
    description: 'Le parfait équilibre entre chaleur et modernité'
  }, {
    image: '/lovable-uploads/10dcd534-4ac0-4105-b985-757beb098760.png',
    title: 'Sophistication urbaine',
    category: 'Résidence premium',
    description: 'Une porte qui affirme le caractère de votre habitat'
  }, {
    image: '/lovable-uploads/b8725872-63dd-49d0-8770-fd540ead1f46.png',
    title: 'Pureté architecturale',
    category: 'Villa contemporaine',
    description: 'L\'art de sublimer l\'entrée par la simplicité'
  }, {
    image: '/lovable-uploads/3257b4c9-3c16-48ab-962e-5ab35c690a91.png',
    title: 'Raffinement moderne',
    category: 'Maison de prestige',
    description: 'Des détails soignés pour une première impression parfaite'
  }, {
    image: '/lovable-uploads/6424b3a7-06c7-4b51-a49b-3dacd61ad348.png',
    title: 'Distinction classique',
    category: 'Architecture traditionnelle',
    description: 'L\'élégance qui traverse les époques'
  }, {
    image: '/lovable-uploads/38be85ef-9815-40d9-9261-c90032b4ea4c.png',
    title: 'Harmonie des matières',
    category: 'Style authentique',
    description: 'Quand la pierre dialogue avec le verre'
  }, {
    image: '/lovable-uploads/23522c80-6978-4a51-a5a0-fdf3b3152a57.png',
    title: 'Grandeur naturelle',
    category: 'Villa d\'exception',
    description: 'Une entrée majestueuse aux proportions parfaites'
  }, {
    image: '/lovable-uploads/bdded88f-7c92-4aaf-a5b6-de1f9338483e.png',
    title: 'Innovation architecturale',
    category: 'Design avant-gardiste',
    description: 'L\'audace au service de l\'esthétique'
  }];

  return (
    <section className="py-20 bg-gradient-to-br from-maporte-beige to-white overflow-hidden">
      <div className="container-maporte">
        {/* Header with enhanced typography */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-jost font-semibold text-maporte-black mb-6 tracking-tight">
            Inspirez-vous
          </h2>
          <p className="text-xl text-maporte-gray-medium font-roboto max-w-3xl mx-auto leading-relaxed">
            Chaque porte raconte une histoire. Découvrez comment nos créations sur-mesure transforment l'entrée en véritable signature architecturale.
          </p>
        </div>

        {/* Desktop: Masonry Grid with better distribution */}
        <div className="hidden lg:grid grid-cols-4 gap-4 mb-20">
          {realizations.map((realization, index) => {
            // Better distribution pattern for visual appeal
            const getGridClasses = (idx: number) => {
              const patterns = [
                'col-span-2 row-span-2', // Large square
                'col-span-1 row-span-1', // Small
                'col-span-1 row-span-2', // Tall
                'col-span-1 row-span-1', // Small
                'col-span-2 row-span-1', // Wide
                'col-span-1 row-span-1', // Small
                'col-span-1 row-span-2', // Tall
                'col-span-2 row-span-1', // Wide
                'col-span-1 row-span-1', // Small
                'col-span-1 row-span-1', // Small
              ];
              return patterns[idx % patterns.length];
            };

            return (
              <div 
                key={index} 
                className={`group cursor-pointer animate-fade-in transform-gpu ${getGridClasses(index)}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:-translate-y-2 h-full">
                  <div className="relative overflow-hidden h-full">
                    <img 
                      src={realization.image} 
                      alt={realization.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" 
                    />
                    
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
            );
          })}
        </div>

        {/* Mobile & Tablet: Horizontal Scroll Carousel */}
        <div className="lg:hidden mb-20">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {realizations.map((realization, index) => (
                <CarouselItem key={index} className="pl-4 basis-4/5 sm:basis-1/2 md:basis-1/3">
                  <div className="group cursor-pointer transform-gpu">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                      <div className="relative overflow-hidden aspect-[3/4]">
                        <img 
                          src={realization.image} 
                          alt={realization.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        
                        {/* Mobile overlay content */}
                        <div className="absolute inset-0 bg-gradient-to-t from-maporte-black/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <div className="mb-2">
                            <span className="text-xs font-roboto font-medium text-maporte-orange bg-maporte-orange/20 px-2 py-1 rounded-full backdrop-blur-sm">
                              {realization.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-jost font-semibold mb-2 leading-tight">
                            {realization.title}
                          </h3>
                          <p className="text-white/90 font-roboto text-sm">
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
        <div className="text-center animate-fade-in" style={{ animationDelay: '1000ms' }}>
          <div 
            onClick={onShowForm}
            className="inline-flex items-center space-x-4 bg-white rounded-2xl px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-maporte-orange/10 hover:border-maporte-orange/30"
          >
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
                <p className="text-maporte-gray-medium font-roboto text-sm">
                  Recevez votre devis personnalisé
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
