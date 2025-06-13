
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: 'Combien coûte vos portes d\'entrées ?',
      answer: 'Nos prix démarrent à environ 5 000 CHF pour une porte basique et la pose. Les montants varient selon les options choisies (matériaux, design, sécurité). Remplissez le formulaire ci-dessous pour obtenir un devis gratuit adapté à votre projet. Vous recevrez également le lien pour accéder au configurateur de portes comprenant tous les modèles et leurs options.'
    },
    {
      question: 'C\'est trop cher !',
      answer: 'Nous comprenons totalement que le coût peut sembler élevé à première vue, mais nos portes représentent un investissement durable. Imaginez : une porte robuste, ultra-sécurisée et parfaitement isolée qui réduit vos factures énergétiques. Les matériaux de qualité supérieure et les options de sécurité innovantes garantissent votre tranquillité tout en valorisant votre bien immobilier. De plus, nous vous accompagnons à chaque étape grâce à un service clé en main sans tracas. Votre maison mérite le meilleur, n\'est-ce pas ?'
    },
    {
      question: 'J\'ai vu des portes moins chères ailleurs, comment cela se fait-il ?',
      answer: 'Certaines grandes surfaces (par ex. Hornbach) vendent effectivement des portes à prix réduit, souvent en PVC, moins robuste et moins isolant que l\'aluminium. Ces tarifs n\'incluent généralement pas la pose professionnelle, primordiale pour garantir sécurité et durabilité. Chez Ma Porte, nous proposons des portes aluminium haut de gamme, entièrement personnalisables, avec pose et support client inclus. Investir dans la qualité, c\'est investir dans la tranquillité et la longévité.'
    },
    {
      question: 'Est-ce que j\'ai vraiment besoin d\'une nouvelle porte d\'entrée ?',
      answer: 'Une porte d\'entrée est bien plus qu\'un simple accès : c\'est la première impression de votre maison, votre barrière de sécurité et un élément clé pour réduire vos factures d\'énergie grâce à une isolation moderne. Si votre porte est moins sécurisée, mal isolée ou démodée, c\'est peut-être le moment d\'investir dans une porte qui protège votre famille, embellit votre maison et augmente sa valeur.'
    },
    {
      question: 'Les portes sont-elles sécurisées ?',
      answer: 'Absolument. Nos portes comptent parmi les plus sûres du marché grâce à des fonctionnalités de pointe : Serrures multipoints avancées (jusqu\'à 5 crochets massifs et plaques anti-perçage en acier), serrures biométriques (ouverture par empreinte digitale ou code PIN), vitrage de sécurité (verres feuilletés ou blindés), matériaux ultra-résistants (aluminium conçu pour résister aux intempéries et effractions), normes certifiées RC2/RC3, et charnières renforcées anti-dégondage. Avec nos portes, vous protégez ce qui compte le plus : votre famille et votre tranquillité d\'esprit.'
    },
    {
      question: 'Combien de temps prend l\'installation d\'une porte d\'entrée ?',
      answer: 'En général, une journée suffit. Nous retirons l\'ancienne porte, préparons l\'ouverture et posons la nouvelle avec toutes les finitions, en minimisant les interruptions pour que vous profitiez de votre porte le jour même.'
    },
    {
      question: 'Quel est le délai pour recevoir ma porte ?',
      answer: 'Selon la personnalisation, comptez 6 à 8 semaines après validation de la commande (conception, fabrication, logistique). Nous vous tenons informé à chaque étape.'
    },
    {
      question: 'Puis-je personnaliser ma porte ?',
      answer: 'Bien sûr ! Plus de 400 modèles de base, des centaines de couleurs, finitions, poignées, vitrages décoratifs, serrures biométriques… Chaque porte est conçue sur mesure. Avec notre configurateur en ligne, créer votre porte unique n\'a jamais été aussi simple ; nous vous envoyons le lien après le formulaire.'
    },
    {
      question: 'Comment voir les différents modèles de portes ?',
      answer: 'Utilisez notre configurateur en ligne pour visualiser designs, couleurs et options. Remplissez le formulaire et recevez le lien par e-mail. Besoin d\'inspiration supplémentaire ? Contactez-nous et nous vous enverrons des photos de réalisations.'
    },
    {
      question: 'Offrez-vous une garantie ?',
      answer: 'Oui, une garantie complète couvre défauts de fabrication, installation et durabilité des matériaux. Vous profitez d\'une porte haut de gamme et d\'un SAV réactif. Avec Ma Porte, vous êtes entre de bonnes mains.'
    },
    {
      question: 'Comment puis-je être sûr que votre entreprise est fiable ?',
      answer: 'Nous sommes partenaire agréé d\'Inotherm, marque européenne renommée pour ses portes haut de gamme. Des centaines de clients satisfaits témoignent de notre expertise. Nous fournissons avis, exemples et photos sur demande ; notre service personnalisé et notre exigence de qualité font la différence.'
    },
    {
      question: 'Quelle est la durée de vie de vos portes ?',
      answer: 'Nos portes aluminium haut de gamme sont conçues pour durer des décennies : matériaux premium, finitions résistantes aux intempéries, entretien minimal. En partenariat avec Inotherm, nous vous offrons une porte qui protège et embellit votre maison pendant de très longues années.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-maporte">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-jost font-semibold text-maporte-black mb-4">
            Questions fréquentes
          </h2>
          <p className="text-xl text-maporte-gray-medium font-roboto">
            Toutes les réponses à vos interrogations
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-maporte-gray-light rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-jost font-semibold text-maporte-black pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-6 h-6 text-maporte-orange transition-transform flex-shrink-0 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-6">
                  <p className="text-maporte-gray-medium font-roboto leading-relaxed">
                    {faq.answer}
                  </p>
                  <button className="mt-4 text-maporte-orange font-roboto font-medium hover:underline">
                    Retour au formulaire
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
