
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface ExperienceItem {
  title: string;
  skills: string[];
  years: string;
  description: string;
}

export const ExperienceSection: React.FC = () => {
  const experienceItems: ExperienceItem[] = [
    {
      title: "Frontend Development",
      skills: ["HTML/CSS", "JavaScript", "React", "Vue.js", "Angular"],
      years: "5+ years",
      description: "Extensive experience building responsive and accessible web applications with modern frameworks"
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "Django", "Ruby on Rails", "SQL/NoSQL Databases"],
      years: "4+ years",
      description: "Designing and implementing scalable APIs and server-side architecture"
    },
    {
      title: "Mobile Development",
      skills: ["React Native", "iOS (Swift)", "Android (Kotlin)", "Flutter"],
      years: "3+ years",
      description: "Creating cross-platform and native mobile applications for iOS and Android"
    },
    {
      title: "DevOps & Cloud",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      years: "2+ years",
      description: "Setting up infrastructure, deployment pipelines, and cloud architecture"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {experienceItems.map((item, index) => (
        <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <span className="text-teal-dark font-semibold">{item.years}</span>
            </div>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <div className="space-y-2">
              {item.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-center">
                  <Check size={16} className="text-teal mr-2" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
