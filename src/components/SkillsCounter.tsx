
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

export const SkillsCounter: React.FC = () => {
  const [count, setCount] = useState(0);
  const totalSkills = 25; // Total number of skills
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount < totalSkills) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-gradient-to-br from-[#f0edff] to-white border border-[#9b87f5]/20 shadow-lg">
        <CardContent className="p-6 text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#7E69AB]">Professional Skills</h2>
          <div className="flex justify-center items-center gap-4">
            <div className="text-5xl font-bold text-[#9b87f5] wow pulse" data-wow-iteration="infinite">
              {count}
            </div>
            <div className="text-3xl text-gray-400 font-light">/</div>
            <div className="text-3xl text-gray-500 font-medium">{totalSkills}</div>
          </div>
          <p className="mt-6 text-gray-600 max-w-md mx-auto">
            Technologies and frameworks I've mastered throughout my professional journey
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {['Frontend', 'Backend', 'Design', 'DevOps', 'Mobile'].map((category, index) => (
              <motion.span 
                key={index}
                className="px-3 py-1 bg-[#9b87f5]/10 text-[#7E69AB] rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {category}
              </motion.span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
