
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { FileText } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
}

interface ArticleCardProps {
  article: Article;
  onClick: () => void;
  delay?: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onClick, delay = 0 }) => {
  return (
    <Card 
      className="overflow-hidden cursor-pointer hover:shadow-md transition-all duration-300 wow fadeInUp h-full flex flex-col"
      data-wow-delay={`${delay}s`}
      onClick={onClick}
    >
      <div className="h-40 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <CardHeader className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">{article.date}</span>
          <span className="bg-teal/10 text-teal px-2 py-1 text-xs rounded-full">
            {article.category}
          </span>
        </div>
        <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-gray-600 line-clamp-3">{article.description}</p>
      </CardContent>
      
      <CardFooter className="border-t pt-3 flex items-center gap-2">
        <FileText size={16} className="text-teal" />
        <span className="text-sm font-medium text-teal">{article.readTime}</span>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
