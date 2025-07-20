
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-teal hover:bg-teal-dark text-white rounded-full shadow-lg z-50 transition-all hover:scale-110 h-10 w-10 flex items-center justify-center wow fadeInUp"
          aria-label="Scroll to top"
          size="icon"
          data-wow-duration="0.5s"
        >
          <ChevronUp size={20} />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;
