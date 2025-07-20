
import React from 'react';
import { Layout } from '../components/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { BookOpen, Award, Briefcase, Globe, Heart, Clock, Coffee, Code } from 'lucide-react';
import VisitorCounter from '../components/VisitorCounter';
import ScrollToTop from '../components/ScrollToTop';

const About = () => {
  React.useEffect(() => {
    document.title = 'About | ASK-Abdalrhman-Sabry';
  }, []);

  const timelineItems = [
    {
      year: '2022 - Present',
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      description: 'Leading UI/UX development for enterprise SaaS products using React, TypeScript and Next.js.'
    },
    {
      year: '2019 - 2022',
      title: 'Frontend Developer',
      company: 'Digital Solutions Agency',
      description: 'Developed responsive web applications and e-commerce platforms with modern JavaScript frameworks.'
    },
    {
      year: '2016 - 2019',
      title: 'Junior Web Developer',
      company: 'Creative Studio',
      description: 'Created and maintained websites for clients across various industries.'
    }
  ];

  const personalValues = [
    { icon: <Code className="h-8 w-8 text-[#9b87f5]" />, title: 'Clean Code', description: 'Writing maintainable, readable, and efficient code.' },
    { icon: <Heart className="h-8 w-8 text-[#9b87f5]" />, title: 'Passion', description: 'Deeply passionate about creating exceptional digital experiences.' },
    { icon: <Clock className="h-8 w-8 text-[#9b87f5]" />, title: 'Timeliness', description: 'Respecting deadlines and delivering projects on time.' },
    { icon: <Coffee className="h-8 w-8 text-[#9b87f5]" />, title: 'Continuous Learning', description: 'Always expanding my knowledge and skills.' }
  ];

  const funFacts = [
    { count: '500+', text: 'Cups of Coffee' },
    { count: '50+', text: 'Completed Projects' },
    { count: '1000+', text: 'Hours Coding' },
    { count: '20+', text: 'Happy Clients' }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <section className="mb-20">
          <div className="text-center mb-12 wow fadeIn" data-wow-delay="0.2s">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#7E69EB] relative inline-block">
              About Me
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#9b87f5] to-teal"></span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate web developer dedicated to creating beautiful, functional, and user-friendly web experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="wow fadeInUp" data-wow-delay="0.3s">
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#9b87f5]">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-[#9b87f5]" />
                    My Story
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-lg space-y-4">
                  <p>
                    I'm a passionate full-stack developer with 7+ years of experience creating beautiful, responsive websites
                    and applications. My journey in web development started when I built my first website at the age of 16.
                  </p>
                  <p>
                    Since then, I've worked with various technologies and frameworks, always striving to create clean,
                    maintainable code that delivers exceptional user experiences.
                  </p>
                  <p>
                    I believe that great design combined with intuitive functionality creates memorable digital experiences
                    that users love to interact with.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="wow fadeInUp" data-wow-delay="0.5s">
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-teal">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Award className="h-6 w-6 text-teal" />
                    Skills & Expertise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-3 text-[#9A90f9]">Frontend</h3>
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          {['React', 'NextJS', 'TypeScript', 'Tailwind CSS', 'UI/UX Design'].map((skill, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 * idx, duration: 0.3 }}
                            >
                              <Badge className="bg-[#9b87f5]/10 text-[#9b87f5] hover:bg-[#9b87f5]/20 px-3 py-1 text-sm">
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-lg mb-3 mt-6 text-green-700">Tools</h3>
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          {['Git', 'VS Code', 'Figma', 'Adobe XD', 'Webpack'].map((skill, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 + 0.1 * idx, duration: 0.3 }}
                            >
                              <Badge className="bg-teal/10 text-teal hover:bg-teal/20 px-3 py-1 text-sm">
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-3 text-blue-300">Backend</h3>
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          {['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'RESTful APIs', 'GraphQL'].map((skill, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 + 0.1 * idx, duration: 0.3 }}
                            >
                              <Badge className="bg-blue-300/25 text-blue-400 hover:bg-text-blue-300/20 px-3 py-1 text-sm">
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-lg mb-3 mt-6 text-red-700">Other</h3>
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          {['CI/CD', 'Docker', 'AWS', 'Testing', 'Agile'].map((skill, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 + 0.1 * idx, duration: 0.3 }}
                            >
                              <Badge className="bg-coral/10 text-coral-dark hover:bg-coral/20 px-3 py-1 text-sm">
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section className="mb-20 wow fadeInUp" data-wow-delay="1s">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold inline-block relative">
              Professional Experience
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#9b87f5] to-teal"></span>
            </h2>
          </div>
          
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="space-y-10">
                {timelineItems.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="relative pl-10 wow fadeInLeft"
                    data-wow-delay={`${0.2 + idx * 0.2}s`}
                  >
                    {idx < timelineItems.length - 1 && (
                      <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-[#9b87f5] to-teal"></div>
                    )}
                    <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-gradient-to-r from-[#9b87f5] to-teal flex items-center justify-center text-white">
                      <Briefcase className="h-4 w-4" />
                    </div>
                    
                    <div className="mb-1 text-sm font-medium text-teal">{item.year}</div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-[#9b87f5] font-medium">{item.company}</p>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-20 pb-10">
          <div className="text-center mb-12 wow fadeIn" data-wow-delay="0.2s">
            <h2 className="text-3xl font-bold inline-block relative">
              My Values
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#9b87f5] to-teal"></span>
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalValues.map((value, idx) => (
              <Card 
                key={idx} 
                className="text-center shadow-md hover:shadow-xl transition-all duration-300 wow fadeInUp"
                data-wow-delay={`${0.2 + idx * 0.1}s`}
              >
                <CardContent className="p-6">
                  <div className="mx-auto my-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#9b87f5]/10">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        <section className="mb-11 pb-10">
          <div className="text-center mb-12 wow fadeIn" data-wow-delay="0.2s">
            <h2 className="text-3xl font-bold inline-block relative">
              Fun Facts
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#9b87f5] to-teal"></span>
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {funFacts.map((fact, idx) => (
              <div 
                key={idx} 
                className="text-center bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 wow fadeInUp"
                data-wow-delay={`${0.2 + idx * 0.1}s`}
              >
                <h3 className="text-4xl font-bold text-[#9b87f5]">{fact.count}</h3>
                <p className="text-gray-600 mt-2">{fact.text}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-10 wow fadeIn" data-wow-delay="0.3s">
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-[#9b87f5]/5 to-teal/5">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                I'm currently available for freelance work. If you have a project that you want to get started, think you need my help with something, or just fancy saying hey, then get in touch.
              </p>
              <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#9b87f5] to-teal text-white font-medium hover:opacity-90 transition-opacity">
                Get in Touch
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </CardContent>
          </Card>
        </section>
      </div>
      <VisitorCounter />
      <ScrollToTop />
    </Layout>
  );
};

export default About;

