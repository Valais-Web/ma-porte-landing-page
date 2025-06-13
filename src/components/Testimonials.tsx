
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: 'Martine MNP',
      location: 'Corcelles-Cormondrèche (NE)',
      rating: 5,
      text: 'Entreprise faisant preuve d\'un grand professionnalisme. La pose de la porte, constituée de matériaux de haute qualité, a été effectuée de manière rapide et soignée et nous donne entière satisfaction. Ma porte Sàrl est une adresse à vivement recommander.',
      image: '/lovable-uploads/99ab8d39-2102-44d6-953d-abd85cbf27c0.png'
    },
    {
      name: 'Cédric Ducrest',
      location: 'Marly (FR)',
      rating: 5,
      text: 'Super travail; du conseil à la proposition et la réalisation, tout a été parfait et conforme aux attentes.',
      image: '/lovable-uploads/4e5df394-3a9e-4eaf-8b6e-3148c80e00a1.png'
    },
    {
      name: 'Mathilde-Elsa Zinggeler',
      location: 'Anières (GE)',
      rating: 5,
      text: 'Un grand merci à Monsieur Cretenoud pour son professionnalisme, sa patience et son perfectionnisme. Monsieur Cretenoud a su être à notre écoute et nous a intelligemment conseillé sur le type de porte choisie. Le résultat est à la hauteur de nos attentes. Vous pouvez y aller les yeux fermés !',
      image: '/lovable-uploads/9f340406-349f-4268-a818-ed31684c9eb8.png'
    },
    {
      name: 'Fanny Manzanares',
      location: 'Concise (VD)',
      rating: 5,
      text: 'Plus que satisfait! L\'entreprise Ma Porte, en particulier M. Cretenoud, nous a accompagné pour imaginer, créer et rendre réalisable notre projet avec de précieux conseils et un grand investissement. Un travail de grande qualité, fourni avec engagement et enthousiasme.',
      image: '/lovable-uploads/3d03bcfe-850e-4e17-a0d0-16d8d70236b3.png'
    },
    {
      name: 'Laura Baumlin',
      location: 'Le Locle (NE)',
      rating: 5,
      text: 'Nous avons fait appel aux services de Ma Porte Sàrl pour le choix de notre porte d\'entrée et nous en sommes plus que satisfaits! La porte est d\'une superbe qualité tant sur l\'isolation que sur l\'aspect visuel. La qualité prix est également excellente!',
      image: '/lovable-uploads/e0946b45-dd0b-4a84-9828-d763b8caf1fb.png'
    },
    {
      name: 'Sybille Perroud',
      location: 'Mont-la-Ville (VD)',
      rating: 5,
      text: 'Entreprise sérieuse et professionnelle du début à la fin. Super qualité de produit et installation tip top. Fiable et respecte les délais',
      image: '/lovable-uploads/94c1094c-4083-420a-8a8a-652a80f62923.png'
    },
    {
      name: 'Olivier Bader',
      location: 'Granson (VD)',
      rating: 5,
      text: 'Nous avons particulièrement apprécié la collaboration avec M. Ludovic Cretenoud : conseils, expertise, fiabilité, attention aux délais et amabilité. Ludovic est du métier et propose un produit de qualité.',
      image: '/lovable-uploads/dd9f46c8-d64b-4770-b72b-a4d0d2146c53.png'
    },
    {
      name: 'Blaise Corday',
      location: 'Valeyres-sous-Montagny (VD)',
      rating: 5,
      text: 'Un grand merci pour votre travail rapide et efficace ! Les portes sont magnifiques et s\'intègrent parfaitement à notre intérieur. Nous sommes ravis du résultat et tenions à vous remercier pour votre professionnalisme.',
      image: '/lovable-uploads/f6348aab-c21f-4dba-9852-c253f4951c5b.png'
    },
    {
      name: 'Aurélie Badoux',
      location: 'Suisse',
      rating: 5,
      text: 'Nous avons trouvé l\'entreprise Ma Porte, en particulier M. Cretenoud, qui nous a parfaitement conseillé. Nous sommes particulièrement satisfait d\'avoir choisi une serrure avec un lecteur d\'empreinte, c\'est le top pour nos enfants.',
      image: '/lovable-uploads/5c38206a-0399-435e-b233-a659616dbefb.png'
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

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % testimonials.length;
              const testimonial = testimonials[index];
              
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg transition-transform duration-300 h-[500px] flex flex-col ${
                    offset === 1 ? 'md:scale-105 md:z-10' : 'md:scale-95'
                  }`}
                >
                  {/* Image de la porte */}
                  <div className="h-56 overflow-hidden rounded-t-2xl flex justify-center items-center bg-gray-50">
                    <img 
                      src={testimonial.image} 
                      alt={`Porte installée chez ${testimonial.name}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  
                  {/* Contenu de l'avis */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-maporte-black font-roboto mb-4 italic text-sm leading-relaxed flex-1 overflow-hidden">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="border-t pt-4 mt-auto">
                      <p className="font-jost font-semibold text-maporte-black">
                        {testimonial.name}
                      </p>
                      <p className="text-maporte-gray-medium text-sm">
                        {testimonial.location}
                      </p>
                    </div>
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
