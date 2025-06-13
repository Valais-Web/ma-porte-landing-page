
export const Realizations = () => {
  const realizations = [
    {
      image: '/lovable-uploads/d0f738fb-f5fe-427e-8201-099467fa5495.png',
      title: 'Porte moderne avec vitrage',
      location: 'Villa contemporaine',
      benefit: 'luminosité maximale'
    },
    {
      image: '/lovable-uploads/bafdd4c1-6816-4a0d-a8ac-f4bfc40e744d.png',
      title: 'Design épuré bois & verre',
      location: 'Architecture minimaliste',
      benefit: 'élégance naturelle'
    },
    {
      image: '/lovable-uploads/31eb447e-8270-4366-b04f-44102ffefde0.png',
      title: 'Entrée sécurisée RC3',
      location: 'Résidence familiale',
      benefit: 'sécurité optimale'
    },
    {
      image: '/lovable-uploads/e0494269-4ecf-4f99-8c5c-743685a3c7ab.png',
      title: 'Style contemporain',
      location: 'Maison individuelle',
      benefit: 'design moderne'
    },
    {
      image: '/lovable-uploads/43645dd8-d0f2-43f8-b6ad-177e8699607c.png',
      title: 'Combinaison bois-aluminium',
      location: 'Villa de prestige',
      benefit: 'finition premium'
    },
    {
      image: '/lovable-uploads/5d5ada98-e840-48ea-b7ac-6116a514abfa.png',
      title: 'Design classique revisité',
      location: 'Rénovation haut de gamme',
      benefit: 'charme intemporel'
    }
  ];

  return (
    <section className="py-20 bg-maporte-beige overflow-hidden">
      <div className="container-maporte">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-jost font-semibold text-maporte-black mb-4">
            Inspirez-vous : nos plus belles réalisations
          </h2>
          <p className="text-xl text-maporte-gray-medium font-roboto max-w-2xl mx-auto">
            Découvrez l'excellence Ma Porte à travers ces créations uniques qui transforment chaque entrée en signature architecturale
          </p>
        </div>

        {/* Masonry-style grid for visual impact */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {realizations.map((realization, index) => (
            <div 
              key={index}
              className={`
                bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
                transition-all duration-500 group cursor-pointer
                animate-fade-in hover:scale-[1.02] transform-gpu
                ${index % 3 === 0 ? 'lg:row-span-2' : ''}
                ${index === 1 ? 'md:translate-y-8' : ''}
                ${index === 4 ? 'lg:translate-y-12' : ''}
              `}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={realization.image}
                    alt={`${realization.title} - ${realization.location}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
                
                {/* Elegant overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-maporte-black/80 via-maporte-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating content on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <h3 className="text-xl font-jost font-semibold mb-2">
                    {realization.title}
                  </h3>
                  <p className="text-white/90 font-roboto text-sm mb-3">
                    {realization.location}
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-maporte-orange rounded-full animate-pulse"></div>
                    <span className="text-maporte-orange font-roboto font-medium text-sm">
                      {realization.benefit}
                    </span>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-12 h-12 border-2 border-white/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:rotate-45 transform origin-center"></div>
              </div>

              {/* Card content - visible by default on mobile */}
              <div className="p-6 lg:hidden">
                <h3 className="text-lg font-jost font-semibold text-maporte-black mb-2">
                  {realization.title}
                </h3>
                <p className="text-maporte-gray-medium font-roboto mb-3">
                  {realization.location} — <span className="text-maporte-orange font-medium">{realization.benefit}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action with subtle animation */}
        <div className="text-center mt-16 animate-fade-in" style={{animationDelay: '800ms'}}>
          <div className="inline-flex items-center space-x-3 bg-white rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
            <span className="text-maporte-black font-roboto font-medium">
              Découvrez votre porte idéale
            </span>
            <div className="w-8 h-8 bg-maporte-orange rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
