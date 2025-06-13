
export const Realizations = () => {
  const realizations = [
    {
      image: '/lovable-uploads/7d74006e-82bf-47c7-8b31-9944f08836c2.png',
      title: 'Porte modèle AR 135',
      location: 'Montreux',
      benefit: 'isolation divisée par 3 !'
    },
    {
      image: '/lovable-uploads/b5a7fa57-0fad-4f10-a569-12f5e475bb90.png',
      title: 'Porte modèle Modern Plus',
      location: 'Lausanne',
      benefit: 'sécurité RC3 certifiée'
    },
    {
      image: '/lovable-uploads/409fb4d1-04af-4d34-a877-4dffdd531a0b.png',
      title: 'Porte modèle Classic Wood',
      location: 'Fribourg',
      benefit: 'design unique personnalisé'
    },
    {
      image: '/lovable-uploads/8c2bb453-5152-4543-a9df-51fc5f71ac49.png',
      title: 'Porte modèle Urban',
      location: 'Neuchâtel',
      benefit: 'finition impeccable'
    },
    {
      image: '/lovable-uploads/a8ac5620-c3ca-46af-8235-130f775ea9a5.png',
      title: 'Porte modèle Elegance',
      location: 'Genève',
      benefit: 'luminosité optimisée'
    },
    {
      image: '/lovable-uploads/ab5d5c2e-6f2f-4f4f-8ad1-ef8cba8f5e16.png',
      title: 'Porte modèle Contemporary',
      location: 'Yverdon',
      benefit: 'isolation phonique parfaite'
    }
  ];

  return (
    <section className="py-20 bg-maporte-beige">
      <div className="container-maporte">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-jost font-semibold text-maporte-black mb-4">
            Inspirez-vous : 6 réalisations coups de cœur
          </h2>
          <p className="text-xl text-maporte-gray-medium font-roboto">
            Des portes uniques pour des maisons d'exception en Suisse romande
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {realizations.map((realization, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={realization.image}
                  alt={`${realization.title} - ${realization.location}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maporte-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-jost font-semibold text-maporte-black mb-2">
                  {realization.title}
                </h3>
                <p className="text-maporte-gray-medium font-roboto mb-3">
                  {realization.location} — <span className="text-maporte-orange font-medium">{realization.benefit}</span>
                </p>
                <button className="text-maporte-orange font-roboto font-medium hover:underline text-sm">
                  Je veux une porte comme celle-ci
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
