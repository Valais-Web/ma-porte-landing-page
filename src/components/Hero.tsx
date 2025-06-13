
import { Shield, Thermometer, Brush, Clock } from 'lucide-react';
interface HeroProps {
  onShowForm: () => void;
}
export const Hero = ({
  onShowForm
}: HeroProps) => {
  return <section className="relative min-h-screen flex items-center bg-gradient-to-br from-maporte-beige to-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/lovable-uploads/a345c8d4-c786-45a8-b897-569a69940eb8.png" alt="Porte d'entrée aluminium personnalisée sur maison moderne en Suisse romande" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/60"></div>
      </div>

      <div className="container-maporte relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/38dd7b83-8a78-429b-ba49-792e411d24b8.png" alt="Ma Porte Logo" className="h-12 w-auto" />
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-jost font-semibold text-maporte-black leading-relaxed" style={{
              lineHeight: '1.1'
            }}>
                La porte d'entrée sur mesure qui{' '}
                <span className="text-maporte-orange">sécurise</span>,{' '}
                <span className="text-maporte-orange">isole</span> et{' '}
                <span className="text-maporte-orange">sublime</span> votre maison.
              </h1>
              
              <p className="text-xl text-maporte-gray-medium font-roboto max-w-xl">
                400 modèles, personnalisation illimitée, installation experte partout en Suisse romande.
              </p>
            </div>

            {/* USP Bullets */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-maporte-orange/10 rounded-lg flex items-center justify-center">
                  <Thermometer className="w-5 h-5 text-maporte-orange" />
                </div>
                <span className="font-roboto text-maporte-black">Isolation thermique et sonore haute performance</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-maporte-orange/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-maporte-orange" />
                </div>
                <span className="font-roboto text-maporte-black">Sécurité anti-effraction avancée</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-maporte-orange/10 rounded-lg flex items-center justify-center">
                  <Brush className="w-5 h-5 text-maporte-orange" />
                </div>
                <span className="font-roboto text-maporte-black">Qualité de fabrication Inotherm premium

              </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-maporte-orange/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-maporte-orange" />
                </div>
                <span className="font-roboto text-maporte-black">Pose professionnelle rapide &amp; service local</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button onClick={onShowForm} className="btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 font-medium rounded-lg">Obtenir mon devis gratuit et personnalisé</button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="/lovable-uploads/7d74006e-82bf-47c7-8b31-9944f08836c2.png" alt="Porte d'entrée moderne Ma Porte" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-maporte-black/20 to-transparent"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-maporte-orange/20">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1">
                  <span className="text-2xl font-jost font-semibold text-maporte-orange">5/5</span>
                  <img src="/lovable-uploads/f8673fb7-bf58-4aa1-8f76-02534fb85147.png" alt="Google logo" className="w-5 h-5" />
                </div>
                <div className="text-sm text-maporte-gray-medium font-roboto">39 avis Google</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
