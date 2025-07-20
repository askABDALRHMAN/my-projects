
import React from 'react';
import { Button } from '@/components/ui/button';

const CTA: React.FC = () => {
  return (
    <section className="overflow-hidden py-20 bg-gradient-to-r from-teal to-teal-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl mb-8">
            Let's work together to create something amazing. Get in touch today!
          </p>
          <a href='/contact' className="bg-white text-teal-dark hover:bg-gray-100 font-bold py-3 px-8 rounded-md text-lg transition-all">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
