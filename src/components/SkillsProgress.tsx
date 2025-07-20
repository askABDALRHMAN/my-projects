
import React, { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface SkillProgress {
  name: string;
  percentage: number;
  category: string;
  description: string;
  years: string;
}

export const SkillsProgress: React.FC = () => {
  const [animatedValue, setAnimatedValue] = useState<Record<string, number>>({});

  const skills: SkillProgress[] = [
    { 
      name: "React", 
      percentage: 90, 
      category: "Frontend",
      description: "Building complex interactive UIs with React hooks and context API",
      years: "4+ years" 
    },
    { 
      name: "TypeScript", 
      percentage: 85, 
      category: "Language",
      description: "Type-safe development for scalable applications", 
      years: "3+ years"
    },
    { 
      name: "Node.js", 
      percentage: 80, 
      category: "Backend",
      description: "Server-side JavaScript with Express and RESTful APIs", 
      years: "4+ years" 
    },
    { 
      name: "Python", 
      percentage: 75, 
      category: "Language",
      description: "Data analysis, automation and backend development", 
      years: "3+ years" 
    },
    { 
      name: "UI/UX Design", 
      percentage: 70, 
      category: "Design",
      description: "Creating intuitive interfaces with Figma and Adobe XD", 
      years: "2+ years" 
    },
    { 
      name: "AWS", 
      percentage: 65, 
      category: "Cloud",
      description: "Deploying and managing cloud infrastructure", 
      years: "2+ years" 
    },
    { 
      name: "Docker", 
      percentage: 60, 
      category: "DevOps",
      description: "Containerization for consistent deployment environments", 
      years: "1+ years" 
    },
    { 
      name: "React Native", 
      percentage: 70, 
      category: "Mobile",
      description: "Cross-platform mobile app development", 
      years: "2+ years" 
    },
  ];
  
  useEffect(() => {
    // Animate progress bars
    const timer = setTimeout(() => {
      const initialValues: Record<string, number> = {};
      skills.forEach(skill => {
        initialValues[skill.name] = skill.percentage;
      });
      setAnimatedValue(initialValues);
    }, 500);
    
    return () => clearTimeout(timer);
  });
  
  // Group skills by category
  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, SkillProgress[]>);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="space-y-8">
      {Object.entries(categories).map(([category, categorySkills]) => (
        <motion.div
          key={category}
          className="mb-8 wow fadeIn" 
          data-wow-duration="1s"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-xl font-bold mb-4 border-b pb-2 inline-block border-[#9b87f5]">{category}</h3>
          <div className="grid grid-cols-1 gap-4">
            {categorySkills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants} className="wow bounceIn" data-wow-delay={`${0.1 * index}s`}>
                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300 border-l-4 border-l-[#9b87f5]">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium text-lg">{skill.name}</h4>
                        <p className="text-gray-500 text-sm">{skill.description}</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-[#9b87f5] font-bold">{skill.percentage}%</span>
                        <span className="text-xs text-gray-500">{skill.years}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Progress 
                        value={animatedValue[skill.name] || 0} 
                        className={`h-2 bg-secondary ${
                          skill.percentage > 80 ? 'bg-gradient-to-r from-[#9b87f5] to-[#b4a6f5]' : 
                          skill.percentage > 60 ? 'bg-gradient-to-r from-[#7E69AB] to-[#9b87f5]' : 
                          'bg-gradient-to-r from-[#627092] to-[#7E69AB]'
                        }`}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
