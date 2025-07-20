
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface StudyItem {
  name: string;
  description: string;
  category: string;
  color: string;
}

export const CurrentlyStudying: React.FC = () => {
  const studyItems: StudyItem[] = [
    {
      name: "Machine Learning",
      description: "Focusing on neural networks and deep learning algorithms for image recognition",
      category: "AI",
      color: "bg-teal"
    },
    {
      name: "GraphQL",
      description: "Learning advanced query techniques and server implementation strategies",
      category: "Backend",
      color: "bg-coral"
    },
    {
      name: "WebAssembly",
      description: "Exploring high-performance web applications with Rust and WASM",
      category: "Web",
      color: "bg-navy"
    },
    {
      name: "SwiftUI",
      description: "Building modern iOS applications with declarative UI patterns",
      category: "Mobile",
      color: "bg-teal"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {studyItems.map((item, index) => (
        <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className={`h-2 ${item.color}`}></div>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <Badge className={`${item.color} text-white`}>{item.category}</Badge>
            </div>
            <p className="text-gray-600">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
