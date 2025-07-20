
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// Remove direct import of WOW

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    // Initialize WOW.js on component mount
    if (typeof window !== 'undefined' && (window as any).WOW) {
      // Use the globally available WOW from the script tag in index.html
      new (window as any).WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 50,
        mobile: true,
        live: true,
        callback: function(box: any) {
          // Can add callbacks here if needed
        },
        scrollContainer: null
      }).init();
    }

    // Smooth scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Add overflow-x hidden to body element to prevent horizontal scrollbar
    document.body.style.overflowX = 'hidden';
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-pattern">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
