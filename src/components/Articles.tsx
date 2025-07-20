
import React from 'react';
import { Button } from '@/components/ui/button';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}

const Articles: React.FC = () => {
  // In a real app, this would come from an API or database
  const articles: Article[] = [
    {
      id: 1,
      title: "The Future of Web Development: What to Expect in 2025",
      excerpt: "Exploring the upcoming trends and technologies that will shape web development in the coming years.",
      date: "May 1, 2025",
      category: "Tech Trends",
      imageUrl: "/images/futur.png"
    },
    {
      id: 2,
      title: "Mastering CSS Grid: Advanced Layout Techniques",
      excerpt: "Learn how to create complex layouts easily with CSS Grid's powerful features.",
      date: "April 15, 2025",
      category: "CSS",
      imageUrl: "/images/cssgrid.jpg"
    },
    {
      id: 3,
      title: "Building Accessible Web Applications: A Complete Guide",
      excerpt: "Practical tips and techniques for making your web apps accessible to all users.",
      date: "March 28, 2025",
      category: "Accessibility",
      imageUrl: "/images/web-accessibility-1.png"
    }
  ];
  
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights and tutorials on web development, design, and technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div 
              key={article.id} 
              className="article-card wow animate__animated animate__fadeInUp"
              data-wow-delay={`${0.2 * article.id}s`}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-teal">{article.category}</span>
                  <span className="text-sm text-gray-500 text-[#7E69EB]">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 hover:text-teal transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 text-[#9A91CB]">{article.excerpt}</p>
                <a href={`/articles/#${article.id}`} className="inline-flex items-center text-teal font-medium hover:underline">
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href='articles' className="btn-secondary" >View All Articles</a> 
        </div>
      </div>
    </section>
  );
};

export default Articles;
