
import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';
import { Globe, Github, ExternalLink, Code, BookOpen, Coffee, Star, Eye } from 'lucide-react';
import VisitorCounter from '../components/VisitorCounter';
import ScrollToTop from '../components/ScrollToTop';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  React.useEffect(() => {
    document.title = 'Projects | John Doe';
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform built with React, Node.js, and PostgreSQL. Includes product catalog, shopping cart, user authentication, checkout with Stripe integration, and admin dashboard.",
      longDescription: "This comprehensive e-commerce solution provides businesses with everything needed to sell products online. The platform features responsive design, fast loading times, and SEO optimization. The admin dashboard allows for easy product management, order tracking, and customer analytics.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
      image: "https://placehold.co/600x400/teal/white?text=E-commerce",
      link: "#",
      github: "#",
      category: "web",
      featured: true,
      stats: {
        commits: 246,
        contributors: 3,
        linesOfCode: "15K+"
      }
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A task management application with drag-and-drop capabilities, user authentication, and real-time updates using WebSockets.",
      longDescription: "This productivity tool helps teams stay organized with features like task assignment, priority levels, due dates, and status tracking. The intuitive drag-and-drop interface makes managing workflows simple and efficient. Real-time notifications keep everyone in sync as tasks progress.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Socket.io", "TypeScript"],
      image: "https://placehold.co/600x400/navy/white?text=Task+Manager",
      link: "#",
      github: "#",
      category: "web",
      featured: true,
      stats: {
        commits: 189,
        contributors: 2,
        linesOfCode: "8K+"
      }
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current weather conditions and forecasts for multiple locations using data from a weather API.",
      longDescription: "This interactive weather application provides detailed meteorological data with beautiful visualizations. Users can save favorite locations, view hourly and 7-day forecasts, and receive severe weather alerts. The app uses geolocation to automatically detect the user's current position.",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API", "Progressive Web App"],
      image: "https://placehold.co/600x400/coral/white?text=Weather+App",
      link: "#",
      github: "#",
      category: "web",
      featured: false,
      stats: {
        commits: 97,
        contributors: 1,
        linesOfCode: "5K+"
      }
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my projects, skills, and experience. Built with React and Tailwind CSS.",
      longDescription: "This modern portfolio site was designed to highlight my work and professional capabilities. The site features smooth animations, responsive layouts for all device sizes, and optimized performance. The design emphasizes easy navigation and accessibility.",
      technologies: ["React", "Tailwind CSS", "Vite", "Framer Motion", "TypeScript"],
      image: "https://placehold.co/600x400/teal/white?text=Portfolio",
      link: "#",
      github: "#",
      category: "web",
      featured: false,
      stats: {
        commits: 78,
        contributors: 1,
        linesOfCode: "3K+"
      }
    },
    {
      id: 5,
      title: "Financial Analytics Dashboard",
      description: "A comprehensive financial analytics dashboard built for tracking investments, expenses, and financial goals.",
      longDescription: "This financial tool helps users visualize their financial data through interactive charts and reports. Features include expense categorization, investment tracking, budget planning, and financial goal setting. Data is presented in an intuitive interface that helps users make informed financial decisions.",
      technologies: ["React", "D3.js", "Node.js", "MongoDB", "Express", "Redux"],
      image: "https://placehold.co/600x400/9b87f5/white?text=Finance+Dashboard",
      link: "#",
      github: "#",
      category: "dashboard",
      featured: true,
      stats: {
        commits: 156,
        contributors: 2,
        linesOfCode: "12K+"
      }
    },
    {
      id: 6,
      title: "Fitness Tracker Mobile App",
      description: "A React Native mobile application for tracking workouts, nutrition, and fitness progress.",
      longDescription: "This fitness companion app helps users maintain consistent workout routines and nutrition plans. Users can log exercises, track calories, monitor body metrics, and view progress over time. The app includes workout libraries, custom routine builders, and social features for connecting with friends.",
      technologies: ["React Native", "Expo", "Firebase", "AsyncStorage", "Health Kit Integration"],
      image: "https://placehold.co/600x400/coral/white?text=Fitness+App",
      link: "#",
      github: "#",
      category: "mobile",
      featured: false,
      stats: {
        commits: 132,
        contributors: 2,
        linesOfCode: "7K+"
      }
    },
    {
      id: 7,
      title: "AI Image Generator",
      description: "A web application that leverages machine learning to generate custom images based on text prompts.",
      longDescription: "This creative tool uses state-of-the-art AI models to transform text descriptions into unique images. Users can adjust various parameters to fine-tune results, save their favorite generations, and share creations on social media. The application includes a gallery of community creations for inspiration.",
      technologies: ["React", "Python", "TensorFlow", "Flask", "WebSockets"],
      image: "https://placehold.co/600x400/9b87f5/white?text=AI+Generator",
      link: "#",
      github: "#",
      category: "ai",
      featured: true,
      stats: {
        commits: 201,
        contributors: 3,
        linesOfCode: "10K+"
      }
    },
    {
      id: 8,
      title: "Smart Home Control System",
      description: "An IoT control system for managing smart home devices through a centralized web interface.",
      longDescription: "This smart home solution provides a unified interface for controlling various IoT devices around the home. Users can create automated routines, monitor energy usage, and remotely control devices from anywhere. The system supports multiple popular smart home protocols and devices from different manufacturers.",
      technologies: ["React", "Node.js", "MQTT", "WebSockets", "Raspberry Pi"],
      image: "https://placehold.co/600x400/teal/white?text=Smart+Home",
      link: "#",
      github: "#",
      category: "iot",
      featured: false,
      stats: {
        commits: 145,
        contributors: 2,
        linesOfCode: "8K+"
      }
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'dashboard', name: 'Dashboards' },
    { id: 'ai', name: 'AI Projects' },
    { id: 'iot', name: 'IoT Solutions' }
  ];
  
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <section className="mb-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-navy wow fadeIn" data-wow-delay="0.2s">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto wow fadeIn" data-wow-delay="0.3s">
              A showcase of my recent work, personal projects, and contributions
            </p>
          </div>
          
          <div className="mb-16 wow fadeIn" data-wow-delay="0.4s">
            <Card className="overflow-hidden shadow-lg border-none bg-gradient-to-r from-[#9b87f5]/10 to-teal/10">
              <div className="md:flex">
                <div className="md:w-1/2 p-8 flex items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Crafting Digital Experiences</h2>
                    <p className="text-gray-600 mb-6">
                      I specialize in building modern, responsive web applications that provide exceptional user experiences.
                      My projects range from small business websites to complex enterprise applications.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <Badge className="bg-[#9b87f5] text-white px-3 py-1">Frontend</Badge>
                      <Badge className="bg-teal text-white px-3 py-1">Backend</Badge>
                      <Badge className="bg-navy text-white px-3 py-1">Full-stack</Badge>
                      <Badge className="bg-coral text-white px-3 py-1">Mobile</Badge>
                    </div>
                    <div className="flex gap-4">
                      <Button className="bg-[#9b87f5] hover:bg-[#8a76e4] text-white">
                        <GitHub className="mr-2 h-4 w-4" />
                        GitHub Profile
                      </Button>
                      <Button variant="outline">
                        <Coffee className="mr-2 h-4 w-4" />
                        Support Me
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 bg-gradient-to-br from-[#9b87f5] to-teal p-8 text-white flex items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Code className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">200,000+</h3>
                        <p className="text-white/80">Lines of Code</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">50+</h3>
                        <p className="text-white/80">Projects Completed</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Star className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">30+</h3>
                        <p className="text-white/80">Satisfied Clients</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {featuredProjects.length > 0 && (
            <div className="mb-20">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 wow fadeInUp" data-wow-delay="0.2s">
                <Star className="h-6 w-6 text-[#9b87f5]" />
                Featured Projects
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {featuredProjects.slice(0, 2).map((project, index) => (
                  <div 
                    key={project.id}
                    className="wow fadeInUp"
                    data-wow-delay={`${0.3 + index * 0.2}s`}
                  >
                    <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#9b87f5]">
                      <div className="h-48 overflow-hidden relative group">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                          <Button variant="secondary" size="sm" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </a>
                          </Button>
                          <Button size="sm" asChild>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                      
                      <CardHeader>
                        <CardTitle className="flex justify-between items-start">
                          <span>{project.title}</span>
                          <Star className="h-5 w-5 text-[#9b87f5]" />
                        </CardTitle>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.technologies.slice(0, 4).map((tech, idx) => (
                            <span 
                              key={idx} 
                              className="bg-[#9b87f5]/10 text-[#9b87f5] px-2 py-1 text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-gray-600">{project.description}</p>
                        
                        <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                          <div className="bg-gray-50 p-2 rounded-lg">
                            <div className="text-lg font-semibold text-[#9b87f5]">{project.stats.commits}</div>
                            <div className="text-xs text-gray-500">Commits</div>
                          </div>
                          <div className="bg-gray-50 p-2 rounded-lg">
                            <div className="text-lg font-semibold text-[#9b87f5]">{project.stats.contributors}</div>
                            <div className="text-xs text-gray-500">Contributors</div>
                          </div>
                          <div className="bg-gray-50 p-2 rounded-lg">
                            <div className="text-lg font-semibold text-[#9b87f5]">{project.stats.linesOfCode}</div>
                            <div className="text-xs text-gray-500">Code</div>
                          </div>
                        </div>
                      </CardContent>
                      
                      <CardFooter className="flex justify-between border-t pt-4">
                        <Button variant="ghost" className="text-[#9b87f5]">
                          Learn More
                        </Button>
                        <div className="flex items-center text-gray-600">
                          <Eye className="h-4 w-4 mr-1" />
                          <span className="text-sm">1.2k</span>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="mb-8 wow fadeIn" data-wow-delay="0.2s">
            <Tabs defaultValue="all" onValueChange={setSelectedCategory} className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-gray-100 p-1">
                  {categories.map(category => (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="px-4 py-2 data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {categories.map(category => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                      <motion.div 
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="wow fadeInUp"
                        data-wow-delay={`${0.1 + index * 0.1}s`}
                      >
                        <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                          </div>
                          
                          <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {project.technologies.slice(0, 3).map((tech, idx) => (
                                <span 
                                  key={idx} 
                                  className="bg-[#9b87f5]/10 text-[#9b87f5] px-2 py-1 text-xs rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.technologies.length > 3 && (
                                <span className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-full">
                                  +{project.technologies.length - 3}
                                </span>
                              )}
                            </div>
                          </CardHeader>
                          
                          <CardContent>
                            <p className="text-gray-600 line-clamp-3">{project.description}</p>
                          </CardContent>
                          
                          <CardFooter className="flex justify-between border-t pt-4">
                            <Button variant="outline" size="sm" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                              </a>
                            </Button>
                            <Button size="sm" asChild>
                              <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                              </a>
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        <section className="mb-20 wow fadeIn" data-wow-delay="0.2s">
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-[#9b87f5]/5 to-teal/5">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-6">Have a project in mind?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                I'm always looking for interesting projects to work on. If you have an idea you'd like to discuss, feel free to reach out!
              </p>
              <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#9b87f5] to-teal text-white font-medium hover:opacity-90 transition-opacity">
                Let's Talk
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

// Import component for GitHub icon
const GitHub = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export default Projects;

