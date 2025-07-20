
import React, { useEffect, useState } from 'react';
import { Layout } from '@/components/Layout';
import { SkillsCounter } from '@/components/SkillsCounter';
import { SkillsProgress } from '@/components/SkillsProgress';
import { CurrentlyStudying } from '@/components/CurrentlyStudying';
import { ExperienceSection } from '@/components/ExperienceSection';
import ScrollToTop from '@/components/ScrollToTop';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Define skill categories
  const skillCategories = [
    {
      name: "Technical Skills",
      skills: ["JavaScript", "TypeScript", "React", "Node.js", "Express", "GraphQL", "REST API", "Git"]
    },
    {
      name: "Frontend Skills",
      skills: ["HTML5", "CSS3", "Sass", "Tailwind CSS", "Material UI", "Redux", "React Router", "Webpack"]
    },
    {
      name: "Backend Skills",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "AWS", "Docker", "CI/CD"]
    },
    {
      name: "Database Skills",
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Prisma", "Mongoose", "SQL", "NoSQL"]
    },
    {
      name: "Soft Skills",
      skills: ["Communication", "Teamwork", "Problem Solving", "Time Management", "Leadership", "Adaptability"]
    },
    {
      name: "Communication Skills",
      skills: ["Technical Writing", "Presentation", "Documentation", "Mentoring", "Code Reviews"]
    },
    {
      name: "Other Skills",
      skills: ["Project Management", "Agile Methodology", "Scrum", "UI/UX Design", "SEO", "Analytics", "Testing"]
    }
  ];

  // Define learned skills
  const learnedSkills = [
    { name: "JavaScript", level: "Advanced", years: 4, category: "Technical" },
    { name: "React", level: "Advanced", years: 3, category: "Frontend" },
    { name: "HTML/CSS", level: "Advanced", years: 5, category: "Frontend" },
    { name: "Node.js", level: "Intermediate", years: 2, category: "Backend" },
    { name: "TypeScript", level: "Intermediate", years: 2, category: "Technical" },
    { name: "Git", level: "Advanced", years: 4, category: "DevOps" },
    { name: "RESTful APIs", level: "Advanced", years: 3, category: "Backend" },
    { name: "MongoDB", level: "Intermediate", years: 2, category: "Database" }
  ];
  
  // Define skills to learn
  const skillsToLearn = [
    { name: "GraphQL", priority: "High", timeframe: "3 months", reason: "Better API Query Efficiency" },
    { name: "Docker", priority: "Medium", timeframe: "6 months", reason: "Containerization and Deployment" },
    { name: "AWS", priority: "High", timeframe: "6 months", reason: "Cloud Infrastructure Management" },
    { name: "Vue.js", priority: "Medium", timeframe: "4 months", reason: "Expand Frontend Framework Knowledge" },
    { name: "Python", priority: "Low", timeframe: "8 months", reason: "Data Analysis Capabilities" },
    { name: "Kubernetes", priority: "Medium", timeframe: "9 months", reason: "Container Orchestration" }
  ];

  return (
    <Layout>
      <div className="bg-pattern min-h-screen py-12 overflow-x-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 wow fadeInUp"
            data-wow-duration="1s"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#7E69EB]">My Skills</h1>
            <p className="text-xl text-[#7E69af] max-w-2xl mx-auto">
              Exploring my technical expertise and continuous learning journey
            </p>
          </motion.div>
          
          <div className="mb-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
            <SkillsCounter />
          </div>
          
          <Tabs defaultValue="studying" className="w-full mb-5">
            <TabsList className="w-full flex flex-wrap justify-center mb-20 wow fadeInUp " data-wow-duration="1s" data-wow-delay="0.3s">
              <TabsTrigger value="studying" className="text-lg px-6 mb-2 sm:mb-0">Currently Studying</TabsTrigger>
              <TabsTrigger value="progress" className="text-lg px-6 mb-2 sm:mb-0">Skills Progress</TabsTrigger>
              <TabsTrigger value="learned" className="text-lg px-6 mb-2 sm:mb-0">Learned Skills</TabsTrigger>
              <TabsTrigger value="tolearn" className="text-lg px-6 mb-2 sm:mb-0">Skills To Learn</TabsTrigger>
              <TabsTrigger value="categories" className="text-lg px-6 mb-2 sm:mb-0">Skill Categories</TabsTrigger>
              <TabsTrigger value="experience" className="text-lg px-6 mb-2 sm:mb-0">Experience</TabsTrigger>
            </TabsList>
            
            <TabsContent value="studying" className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <CurrentlyStudying />
              </motion.div>
            </TabsContent>
            
            <TabsContent value="progress" className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <SkillsProgress />
              </motion.div>
            </TabsContent>
            
            <TabsContent value="learned" className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {learnedSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="wow bounceIn"
                    data-wow-delay={`${0.1 * index}s`}
                  >
                    <Card className="h-full border-l-4 border-l-[#9b87f5] hover:shadow-lg transition-all duration-300">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex justify-between items-center">
                          <span className="text-[#7E69AB]">{skill.name}</span>
                          <Badge className="bg-[#9b87f5]">{skill.level}</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-sm text-gray-500 mb-2">
                          <span className="font-medium text-[#7E69AB]">{skill.years} years</span> of experience
                        </div>
                        <Badge variant="outline" className="text-[#7E69AB] border-[#9b87f5]/40">
                          {skill.category}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="tolearn" className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {skillsToLearn.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="wow fadeIn"
                    data-wow-delay={`${0.1 * index}s`}
                  >
                    <Card className="h-full border-t-4 border-t-[#9b87f5] hover:shadow-lg transition-all duration-300">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex justify-between items-center">
                          <span className="text-[#7E69AB]">{skill.name}</span>
                          <Badge className={`
                            ${skill.priority === 'High' ? 'bg-[#9b87f5]' : 
                              skill.priority === 'Medium' ? 'bg-[#a495f6]/80' : 'bg-[#b7acf7]/60'}
                          `}>
                            {skill.priority} Priority
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-2">{skill.reason}</p>
                        <div className="text-xs text-gray-500">
                          Target timeframe: <span className="font-semibold">{skill.timeframe}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="categories" className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 gap-6"
              >
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    variants={itemVariants}
                    className="wow fadeIn"
                    data-wow-delay={`${0.2 * index}s`}
                  >
                    <Card className="h-full border-l-4 border-l-[#9b87f5] hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-[#7E69AB]">{category.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, idx) => (
                            <Badge 
                              key={idx} 
                              className="bg-gradient-to-r from-[#9b87f5]/80 to-[#7E69AB] hover:from-[#7E69AB] hover:to-[#9b87f5] text-white py-1 px-3"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="experience" className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <ExperienceSection />
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <ScrollToTop />
    </Layout>
  );
};

export default Skills;
