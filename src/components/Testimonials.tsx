
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: 'Jean C.',
      location: 'Yverdon',
      rating: 5,
      text: 'Isolation bluffante, plus de courants d\'air, service super ! L\'équipe Ma Porte a été d\'un professionnalisme exemplaire.'
    },
    {
      name: 'Sophie & Marc',
      location: 'Gland',
      rating: 5,
      text: 'Résultat au-delà de nos attentes : porte unique, LED intégrées. Le configurateur en ligne est fantastique.'
    },
    {
      name: 'Michel D.',
      location: 'Fribourg',
      rating: 5,
      text: 'Après le cambriolage, je dors enfin tranquille. SAV irréprochable. La sécurité RC3 fait vraiment la différence.'
    },
    {
      name: 'Catherine L.',
      location: 'Neuchâtel',
      rating: 5,
      text: 'Installation en une journée comme promis. Les menuisiers sont très propres et professionnels. Excellent suivi.'
    },
    {
      name: 'Pierre-Alain',
      location: 'Valais',
      rating: 5,
      text: 'Économies de chauffage visibles dès le premier hiver. Investissement rentabilisé plus vite que prévu.'
    },
    {
      name: 'Famille Dubois',
      location: 'Genève',
      rating: 5,
      text: 'Design parfaitement intégré à notre maison moderne. Nombreux compliments de nos voisins !'
    },
    {
      name: 'Laurent M.',
      location: 'Lausanne',
      rating: 5,
      text: 'Service client exceptionnel, de la commande au SAV. Je recommande Ma Porte les yeux fermés.'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-maporte-beige">
      <div className="container-maporte">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-jost font-semibold text-maporte-black mb-4">
            Avis clients vérifiés
          </h2>
          <p className="text-xl text-maporte-gray-medium font-roboto">
            Ils nous ont fait confiance, découvrez leur expérience
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % testimonials.length;
              const testimonial = testimonials[index];
              
              return (
                <div 
                  key={index}
                  className={`bg-white p-6 rounded-2xl shadow-lg transition-transform duration-300 ${
                    offset === 1 ? 'md:scale-105 md:z-10' : 'md:scale-95'
                  }`}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-maporte-black font-roboto mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-jost font-semibold text-maporte-black">
                      {testimonial.name}
                    </p>
                    <p className="text-maporte-gray-medium text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-maporte-orange hover:text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-maporte-orange hover:text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-maporte-orange' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
