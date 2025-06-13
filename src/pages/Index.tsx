
import { Hero } from '../components/Hero';
import { LeadForm } from '../components/LeadForm';
import { WhyMaPorte } from '../components/WhyMaPorte';
import { Realizations } from '../components/Realizations';
import { Benefits } from '../components/Benefits';
import { Process } from '../components/Process';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { useState } from 'react';

const Index = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
    // Scroll to form section
    setTimeout(() => {
      document.getElementById('lead-form')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero onShowForm={handleShowForm} />
      
      {showForm && (
        <section id="lead-form" className="py-16 bg-maporte-gray-light">
          <LeadForm />
        </section>
      )}
      
      <WhyMaPorte />
      <Realizations onShowForm={handleShowForm} />
      <Benefits onShowForm={handleShowForm} />
      <Process onShowForm={handleShowForm} />
      <Testimonials />
      <FAQ />
      <CTA onShowForm={handleShowForm} />
      <Footer />
    </div>
  );
};

export default Index;
