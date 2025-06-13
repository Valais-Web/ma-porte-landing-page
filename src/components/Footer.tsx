
export const Footer = () => {
  return (
    <footer className="bg-maporte-black text-white py-12">
      <div className="container-maporte">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/38dd7b83-8a78-429b-ba49-792e411d24b8.png" 
              alt="Ma Porte Logo" 
              className="h-8 w-auto brightness-0 invert"
            />
            <div>
              <div className="font-jost font-semibold">Ma Porte Sàrl</div>
              <div className="text-sm text-gray-400">Expert de la porte d'entrée en Suisse romande</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Protection des données</a>
            <a href="#" className="hover:text-white transition-colors">CGV</a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Ma Porte Sàrl. Tous droits réservés. | Arnex-sur-Orbe, Suisse</p>
        </div>
      </div>
    </footer>
  );
};
