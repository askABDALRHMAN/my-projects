
import React, { useEffect } from 'react';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with a focus on user experience.",
      icon: "✏️"
    },
    {
      title: "Full-Stack Development",
      description: "Building robust applications with modern technologies for both frontend and backend.",
      icon: "💻"
    },
    {
      title: "Mobile App Development",
      description: "Developing cross-platform mobile applications that perform seamlessly.",
      icon: "📱"
    },
    {
      title: "API Integration",
      description: "Connecting your applications with third-party services and data sources.",
      icon: "🔌"
    },
  ];
  
  useEffect(() => {
    // Initialize WOW.js
    if (typeof window !== 'undefined' && (window as any).WOW) {
      new (window as any).WOW().init();
    }
  }, []);
  
  return (
    <section id="featuresSection" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Distinctive Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here's what sets me apart and makes working with me a unique experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card wow animate__animated animate__fadeInUp"
              data-wow-delay={`${0.2 * index}s`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
