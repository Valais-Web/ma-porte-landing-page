
interface CTAProps {
  onShowForm: () => void;
}
export const CTA = ({
  onShowForm
}: CTAProps) => {
  return <section className="py-20 bg-gradient-to-br from-maporte-orange to-orange-600 text-white">
      <div className="container-maporte">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/lovable-uploads/0de0e095-75b1-493b-9472-aba73837ec98.png" alt="Famille devant leur nouvelle porte Ma Porte" className="rounded-2xl shadow-2xl" />
          </div>
          
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-jost font-semibold">
              Prêt à transformer votre entrée ?
            </h2>
            
            <p className="text-xl opacity-90 font-roboto leading-relaxed">Profitez d’une porte d’entrée sur-mesure qui allie isolation thermique & phonique, sécurité certifiée et design illimité, installée par nos experts locaux. Obtenez votre devis gratuit et personnalisé sous 24 h, sans engagement.</p>
            
            <button onClick={onShowForm} className="bg-white text-maporte-orange hover:bg-gray-100 transition-colors duration-200 font-roboto font-semibold px-8 py-4 rounded-lg text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all flex items-center space-x-2">
              <span>Obtenir mon devis gratuit et personnalisé</span>
              <span>→</span>
            </button>
            
            {/* Trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl font-jost font-semibold">150+</div>
                <div className="text-sm opacity-80">Portes installées</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-jost font-semibold">5/5</div>
                <div className="text-sm opacity-80">Note Google</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-jost font-semibold">20 ans</div>
                <div className="text-sm opacity-80">D'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-jost font-semibold">24h</div>
                <div className="text-sm opacity-80">Délai de réponse</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
