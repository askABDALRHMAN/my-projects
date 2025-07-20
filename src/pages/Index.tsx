
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Features from '../components/Features';
import Articles from '../components/Articles';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import VisitorCounter from '../components/VisitorCounter';
import ScrollToTop from '../components/ScrollToTop';
import { Card } from '@/components/ui/card';

const Index = () => {
  useEffect(() => {
    // Initialize WOW.js
    if (typeof window !== 'undefined' && (window as any).WOW) {
      new (window as any).WOW().init();
    }
    
    // Add title
    document.title = 'John Doe | Personal Portfolio';
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-pattern">
      <Navbar />
      <Header />
      
      {/* Additional home section with skills overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-dark">What I Do</h2>
            <p className="text-lg text-gray-600">
              I create beautiful, responsive websites and applications with a focus on user experience and performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="wow fadeInUp" data-wow-delay="0.2s">
              <Card className="h-full p-6 text-center hover:shadow-lg transition-shadow duration-300 border-t-4 border-teal">
                <div className="bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Web Development</h3>
                <p className="text-gray-600">Modern, responsive websites that look great on any device. I use the latest technologies to ensure your site is fast and accessible.</p>
              </Card>
            </div>
            
            <div className="wow fadeInUp" data-wow-delay="0.4s">
              <Card className="h-full p-6 text-center hover:shadow-lg transition-shadow duration-300 border-t-4 border-coral">
                <div className="bg-coral/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
                <p className="text-gray-600">User-centered design that focuses on creating intuitive, enjoyable experiences. I create interfaces that users love to interact with.</p>
              </Card>
            </div>
            
            <div className="wow fadeInUp" data-wow-delay="0.6s">
              <Card className="h-full p-6 text-center hover:shadow-lg transition-shadow duration-300 border-t-4 border-navy">
                <div className="bg-navy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Full-Stack Development</h3>
                <p className="text-gray-600">End-to-end solutions from database design to frontend implementation. I build complete applications that meet your business needs.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-dark">What People Say</h2>
            <p className="text-lg text-gray-600">
              Don't just take my word for it - hear what others have to say about working with me.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="wow fadeInLeft" data-wow-delay="0.2s">
              <Card className="p-8 relative">
                <svg className="absolute top-6 left-6 w-8 h-8 text-teal opacity-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <div className="ml-6">
                  <p className="text-gray-600 mb-4">John delivered our e-commerce website ahead of schedule and exceeded all of our expectations. His attention to detail and problem-solving abilities are exceptional.</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-navy-light rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold">Sarah Johnson</h4>
                      <p className="text-sm text-gray-500">CEO, Fashion Boutique</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="wow fadeInRight" data-wow-delay="0.4s">
              <Card className="p-8 relative">
                <svg className="absolute top-6 left-6 w-8 h-8 text-teal opacity-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <div className="ml-6">
                  <p className="text-gray-600 mb-4">Working with John was a pleasure. He understood our vision immediately and translated it into a beautiful, functional website that has significantly increased our online presence.</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-teal-light rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold">Michael Rodriguez</h4>
                      <p className="text-sm text-gray-500">Marketing Director, Tech Startup</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <Features />
      <Articles />
      <CTA />
      <Footer />
      <VisitorCounter />
      <ScrollToTop />
    </div>
  );
};

export default Index;
