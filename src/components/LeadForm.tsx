
import { useState } from 'react';
import { ChevronRight, ChevronLeft, Star, Shield } from 'lucide-react';

export const LeadForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    project: '',
    priority: '',
    budget: '',
    timeline: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    postalCode: ''
  });

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="container-maporte">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-maporte-gray-medium mb-2">
              <span>Étape {currentStep} sur {totalSteps}</span>
              <span>{Math.round(progress)}% complété</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-maporte-orange h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Project Type */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-jost font-semibold text-maporte-black">
                  Quel est votre projet ?
                </h2>
                <p className="text-maporte-gray-medium">
                  Nous adaptons l'offre à votre situation.
                </p>
                <div className="grid gap-4">
                  {['Rénovation', 'Construction neuve'].map((option) => (
                    <label key={option} className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-maporte-orange transition-colors">
                      <input
                        type="radio"
                        name="project"
                        value={option}
                        checked={formData.project === option}
                        onChange={(e) => setFormData({...formData, project: e.target.value})}
                        className="mr-3 text-maporte-orange"
                      />
                      <span className="font-roboto">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Priority */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-jost font-semibold text-maporte-black">
                  Votre priorité nº1 ?
                </h2>
                <p className="text-maporte-gray-medium">
                  Choisissez ce qui compte le plus pour vous.
                </p>
                <div className="grid gap-4">
                  {[
                    'Isolation & économies',
                    'Design & personnalisation', 
                    'Sécurité renforcée'
                  ].map((option) => (
                    <label key={option} className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-maporte-orange transition-colors">
                      <input
                        type="radio"
                        name="priority"
                        value={option}
                        checked={formData.priority === option}
                        onChange={(e) => setFormData({...formData, priority: e.target.value})}
                        className="mr-3 text-maporte-orange"
                      />
                      <span className="font-roboto">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Budget */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-jost font-semibold text-maporte-black">
                  Fourchette de budget
                </h2>
                <p className="text-maporte-gray-medium">
                  Estimation, sans engagement.
                </p>
                <div className="grid gap-4">
                  {[
                    '< 5 000 CHF',
                    '5–10 000 CHF',
                    '> 10 000 CHF',
                    'Je ne sais pas encore'
                  ].map((option) => (
                    <label key={option} className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-maporte-orange transition-colors">
                      <input
                        type="radio"
                        name="budget"
                        value={option}
                        checked={formData.budget === option}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        className="mr-3 text-maporte-orange"
                      />
                      <span className="font-roboto">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Timeline */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-jost font-semibold text-maporte-black">
                  Délais souhaités
                </h2>
                <div className="grid gap-4">
                  {[
                    '< 1 mois', 
                    '1–3 mois', 
                    '> 3 mois'
                  ].map((option) => (
                    <label key={option} className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-maporte-orange transition-colors">
                      <input
                        type="radio"
                        name="timeline"
                        value={option}
                        checked={formData.timeline === option}
                        onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                        className="mr-3 text-maporte-orange"
                      />
                      <span className="font-roboto">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Contact Info */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-jost font-semibold text-maporte-black">
                  Vos coordonnées
                </h2>
                <p className="text-maporte-gray-medium">
                  Un expert Ma Porte vous rappelle sous 24 h.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Prénom *"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="p-3 border border-gray-200 rounded-lg focus:border-maporte-orange focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Nom *"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="p-3 border border-gray-200 rounded-lg focus:border-maporte-orange focus:outline-none"
                    required
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Téléphone *"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-maporte-orange focus:outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-maporte-orange focus:outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Code postal *"
                  value={formData.postalCode}
                  onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-maporte-orange focus:outline-none"
                  required
                />
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex items-center px-4 py-2 text-maporte-gray-medium hover:text-maporte-black transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  Précédent
                </button>
              )}
              
              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="btn-primary ml-auto flex items-center"
                  disabled={
                    (currentStep === 1 && !formData.project) ||
                    (currentStep === 2 && !formData.priority) ||
                    (currentStep === 3 && !formData.budget) ||
                    (currentStep === 4 && !formData.timeline)
                  }
                >
                  Suivant
                  <ChevronRight className="w-5 h-5 ml-1" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn-primary ml-auto"
                >
                  Recevoir mon devis
                </button>
              )}
            </div>

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-6 text-sm text-maporte-gray-medium">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>Note Google 4,9/5 (74 avis)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>Données 100% confidentielles</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
