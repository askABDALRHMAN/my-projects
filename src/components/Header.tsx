
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Abdalrhman";
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    
    if (isTyping) {
      if (text.length < fullText.length) {
        timer = setTimeout(() => {
          setText(fullText.substring(0, text.length + 1));
        }, 150);
      } else {
        setIsTyping(false);
        timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(text.substring(0, text.length - 1));
        }, 100);
      } else {
        setIsTyping(true);
        timer = setTimeout(() => {
          setIsTyping(true);
        }, 1000);
      }
    }
    
    return () => clearTimeout(timer);
  }, [text, isTyping]);
  
  return (
    <header className="bg-gradient-to-br from-navy to-navy-dark text-white py-32 md:py-40 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-navy-dark/30"></div>
      
      {/* Additional decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-teal/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-coral/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-10 w-16 h-16 bg-teal/30 rounded-full blur-lg animate-float"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-navy-light/20 rounded-full blur-xl animate-pulse"></div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-navy-dark/40"></div>
      
      {/* Header content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center md:text-left md:mx-0">
          <div className="mb-4 inline-block wow fadeInDown" data-wow-delay="0.2s">
            <span className="bg-teal px-4 py-1.5 text-sm font-medium rounded-full text-white ml-[-5px]">
              Frontend Developer 
            </span>
            <span className="bg-teal px-4 py-1.5 text-sm font-medium rounded-full text-white ml-[5px] ">
              UI & UX Designer
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 flex flex-col md:flex-row md:items-center wow fadeInUp" data-wow-delay="0.4s">
            <span className="mr-3">Hello, I'm</span>
            <span className="typing-container overflow-hidden whitespace-nowrap border-r-4 border-teal-light text-teal-light">
              {text}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl leading-relaxed wow fadeInUp" data-wow-delay="0.6s">
            I create beautiful, responsive websites and applications with a focus on user experience, clean code, and modern technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start wow fadeInUp" data-wow-delay="0.8s">
            <Button className="btn-primary text-lg px-8 py-6 bg-teal hover:bg-teal " asChild>
              <Link to="/projects">View My Work</Link>
            </Button>
            <Button variant="outline" className="btn-secondary text-lg px-8 py-6 bg-transparent text-white border-teal hover:bg-white/10 hover:text-teal" asChild>
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
          
          {/* Stats section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 wow fadeInUp" data-wow-delay="1s">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center ">
              <h3 className="text-3xl font-bold text-teal-light">2+</h3>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <h3 className="text-3xl font-bold text-teal-light">50+</h3>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <h3 className="text-3xl font-bold text-teal-light">30+</h3>
              <p className="text-gray-300">Happy Clients</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <h3 className="text-3xl font-bold text-teal-light">10+</h3>
              <p className="text-gray-300">Technologies</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;
