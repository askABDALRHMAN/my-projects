
import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";

const VisitorCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // In a real application, this would fetch from a backend
    const storedCount = localStorage.getItem('visitorCount');
    const initialCount = storedCount ? parseInt(storedCount) : 0;
    
    // Increment the count for this visit
    const newCount = initialCount + 1;
    localStorage.setItem('visitorCount', newCount.toString());
    setCount(newCount);
    
    // Check system preference for dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedMode = localStorage.getItem('darkMode');
    
    // Use saved preference or system preference
    const shouldUseDarkMode = savedMode !== null ? savedMode === 'true' : prefersDark;
    setIsDarkMode(shouldUseDarkMode);
    
    // Apply theme
    document.documentElement.classList.toggle('dark', shouldUseDarkMode);
  }, []);
  
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    
    // Save preference
    localStorage.setItem('darkMode', newMode.toString());
    
    toast({
      title: newMode ? "Dark mode enabled" : "Light mode enabled",
      description: "Your preference has been saved.",
      duration: 2000,
    });
  };
  
  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-4 wow fadeInUp" data-wow-delay="0.5s">
      <div className={`flex items-center gap-2 rounded-full px-4 py-2 ${isDarkMode ? 'bg-navy-dark text-white' : 'bg-white text-navy'} shadow-md transition-all duration-300`}>
        <span className="text-sm font-medium">Visitors: {count.toLocaleString()}</span>
      </div>
      
      <Button
        variant="outline"
        size="icon"
        className={`rounded-full ${isDarkMode ? 'bg-navy-dark text-white border-white/20' : 'bg-white text-navy border-navy/20'} transition-transform hover:scale-110`}
        onClick={toggleTheme}
      >
        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
      </Button>
    </div>
  );
};

export default VisitorCounter;
