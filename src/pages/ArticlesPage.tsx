
import React, { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';
import { FileText, Search, Tag, Calendar, Clock, Bookmark, Share2, ThumbsUp, MessageSquare, User, Eye } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import VisitorCounter from '../components/VisitorCounter';
import ScrollToTop from '../components/ScrollToTop';
import ArticleCard from '../components/ArticleCard';

const ArticlesPage = () => {
  const [selectedArticle, setSelectedArticle] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const { toast } = useToast();
  
  useEffect(() => {
    document.title = 'Articles | John Doe';
  }, []);

  const articles = [
    {
      id: 1,
      title: "Understanding React Hooks: A Comprehensive Guide",
      description: "A deep dive into React Hooks and how they can simplify your code.",
      date: "May 15, 2023",
      readTime: "5 min read",
      category: "React",
      tags: ["React", "Hooks", "JavaScript", "Web Development"],
      content: `
        React Hooks are a revolutionary addition to React that allows you to use state and other React features without writing a class. This leads to more concise and easier-to-understand code.

        ## What are Hooks?

        Hooks are functions that let you "hook into" React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes.

        ## The Most Common Hooks

        ### useState

        The useState hook is the most basic one. It lets you add state to functional components. Let's look at a simple example:

        \`\`\`jsx
        import React, { useState } from 'react';

        function Counter() {
          const [count, setCount] = useState(0);
          
          return (
            <div>
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>
                Click me
              </button>
            </div>
          );
        }
        \`\`\`

        ### useEffect

        The useEffect hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes.

        \`\`\`jsx
        import React, { useState, useEffect } from 'react';

        function Example() {
          const [count, setCount] = useState(0);

          useEffect(() => {
            document.title = \`You clicked \${count} times\`;
            
            // Cleanup function (optional)
            return () => {
              document.title = 'React App';
            };
          }, [count]); // Only re-run if count changes
          
          return (
            <div>
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>
                Click me
              </button>
            </div>
          );
        }
        \`\`\`

        ## Custom Hooks

        One of the best features of Hooks is that you can create your own Hooks to extract component logic into reusable functions.

        \`\`\`jsx
        import { useState, useEffect } from 'react';

        function useWindowSize() {
          const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
          });
          
          useEffect(() => {
            function handleResize() {
              setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
              });
            }
            
            window.addEventListener('resize', handleResize);
            handleResize(); // Set initial size
            
            return () => window.removeEventListener('resize', handleResize);
          }, []);
          
          return windowSize;
        }
        \`\`\`

        ## Rules of Hooks

        Hooks come with two essential rules:

        1. Only call Hooks at the top level. Don't call Hooks inside loops, conditions, or nested functions.
        2. Only call Hooks from React function components or custom Hooks. Don't call Hooks from regular JavaScript functions.

        ## Conclusion

        Hooks transform the way we write React components, making them more concise, easier to understand, and promoting code reuse through custom hooks. Though there's a small learning curve, the benefits are substantial once you get comfortable with the pattern.
      `,
      image: "https://placehold.co/800x400/navy/white?text=React+Hooks",
      author: {
        name: "John Doe",
        avatar: "https://placehold.co/100/navy/white?text=JD",
        role: "Frontend Developer"
      },
      interactions: {
        likes: 124,
        comments: 18,
        views: 3240
      }
    },
    {
      id: 2,
      title: "CSS Grid Layout: A Complete Guide for 2023",
      description: "Everything you need to know about CSS Grid Layout to create complex web designs.",
      date: "April 20, 2023",
      readTime: "8 min read",
      category: "CSS",
      tags: ["CSS", "Grid", "Layout", "Web Design"],
      content: `
        CSS Grid Layout is a two-dimensional layout system designed specifically for the web. It allows you to organize content into rows and columns and has many features that make building complex layouts straightforward.

        ## Why Use CSS Grid?

        CSS Grid gives you precise control over the placement of elements in a layout, both horizontally and vertically. It simplifies the creation of designs that were previously only possible with positioning hacks or JavaScript.

        ## Basic Concepts

        ### Grid Container and Grid Items

        To create a grid layout, you need a grid container (parent) and grid items (children):

        \`\`\`css
        .container {
          display: grid; /* or display: inline-grid */
          grid-template-columns: 1fr 1fr 1fr; /* three equal columns */
          grid-template-rows: 100px auto 100px; /* fixed height, auto height, fixed height */
          gap: 10px; /* gap between grid items */
        }
        \`\`\`

        ### Defining Grid Tracks

        Grid tracks are the spaces between grid lines — essentially, the rows and columns of your grid:

        \`\`\`css
        .container {
          display: grid;
          grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
          grid-template-rows: 100px 200px; /* 2 rows with explicit heights */
        }
        \`\`\`

        ## Positioning Grid Items

        You can precisely place items in your grid:

        \`\`\`css
        .item {
          grid-column: 1 / 3; /* Start at column line 1, end at line 3 (spans 2 columns) */
          grid-row: 2 / 4; /* Start at row line 2, end at line 4 (spans 2 rows) */
        }

        /* Alternative shorthand */
        .item {
          grid-area: 2 / 1 / 4 / 3; /* row-start / column-start / row-end / column-end */
        }
        \`\`\`

        ## Named Grid Areas

        You can name areas of your grid for even easier positioning:

        \`\`\`css
        .container {
          display: grid;
          grid-template-columns: 1fr 3fr;
          grid-template-rows: auto 1fr auto;
          grid-template-areas:
            "header header"
            "sidebar content"
            "footer footer";
        }

        .header { grid-area: header; }
        .sidebar { grid-area: sidebar; }
        .content { grid-area: content; }
        .footer { grid-area: footer; }
        \`\`\`

        ## Alignment Control

        Grid offers powerful alignment capabilities:

        \`\`\`css
        .container {
          /* Align grid items along the row axis (horizontal) */
          justify-items: start | end | center | stretch;
          
          /* Align grid items along the column axis (vertical) */
          align-items: start | end | center | stretch;
          
          /* Align the entire grid within the container */
          justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
          align-content: start | end | center | stretch | space-around | space-between | space-evenly;
        }
        \`\`\`

        ## Responsive Grids

        CSS Grid makes responsive design straightforward, especially with these techniques:

        ### minmax()

        \`\`\`css
        .container {
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        }
        \`\`\`

        ### auto-fill and auto-fit

        \`\`\`css
        /* Creates as many columns as will fit with minimum width of 250px */
        .container {
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        }

        /* Similar to auto-fill, but collapses empty tracks */
        .container {
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }
        \`\`\`

        ## Conclusion

        CSS Grid is a powerful layout system that has transformed how we build web layouts. By understanding its core concepts, you can create sophisticated, responsive designs without the complexity of earlier techniques. Combined with Flexbox for one-dimensional layouts, Grid gives you complete control over your web page structure.
      `,
      image: "https://placehold.co/800x400/teal/white?text=CSS+Grid",
      author: {
        name: "Jane Smith",
        avatar: "https://placehold.co/100/teal/white?text=JS",
        role: "UI/UX Designer"
      },
      interactions: {
        likes: 98,
        comments: 24,
        views: 2850
      }
    },
    {
      id: 3,
      title: "TypeScript for Beginners: A Practical Introduction",
      description: "Getting started with TypeScript in your web projects.",
      date: "March 10, 2023",
      readTime: "6 min read",
      category: "TypeScript",
      tags: ["TypeScript", "JavaScript", "Programming", "Web Development"],
      content: `
        TypeScript is a superset of JavaScript that adds static typing to the language. This can help catch errors during development rather than at runtime, leading to more robust applications.

        ## Why TypeScript?

        JavaScript is dynamically typed, which means variables can change types during runtime. While this offers flexibility, it can lead to unexpected bugs. TypeScript addresses this by adding optional static typing.

        Benefits include:
        - Better tooling and editor support (autocomplete, type checking)
        - Catching errors at compile time rather than runtime
        - Better documentation of code through type definitions
        - Enhanced refactoring capabilities

        ## Getting Started

        ### Installation

        You can install TypeScript using npm:

        \`\`\`bash
        npm install -g typescript
        \`\`\`

        ### Your First TypeScript File

        Create a file with the .ts extension:

        \`\`\`typescript
        // greeting.ts
        function greet(name: string): string {
          return \`Hello, \${name}!\`;
        }

        console.log(greet("TypeScript"));
        \`\`\`

        ### Compilation

        Compile the TypeScript file to JavaScript:

        \`\`\`bash
        tsc greeting.ts
        \`\`\`

        This produces a greeting.js file that can be run in any JavaScript environment.

        ## Basic Types

        TypeScript provides several basic types:

        \`\`\`typescript
        // Boolean
        let isDone: boolean = false;

        // Number
        let decimal: number = 6;
        let hex: number = 0xf00d;

        // String
        let color: string = "blue";

        // Array
        let list: number[] = [1, 2, 3];
        let list2: Array<number> = [1, 2, 3]; // Alternative syntax

        // Tuple
        let x: [string, number] = ["hello", 10];

        // Enum
        enum Color {Red, Green, Blue}
        let c: Color = Color.Green;

        // Any
        let notSure: any = 4;
        notSure = "maybe a string";
        notSure = false;

        // Void
        function warnUser(): void {
          console.log("This is a warning message");
        }

        // Null and Undefined
        let u: undefined = undefined;
        let n: null = null;

        // Never
        function error(message: string): never {
          throw new Error(message);
        }
        \`\`\`

        ## Interfaces

        Interfaces define the structure that objects must adhere to:

        \`\`\`typescript
        interface Person {
          firstName: string;
          lastName: string;
          age?: number; // Optional property
          readonly id: number; // Can't be modified after creation
        }

        function greetPerson(person: Person): string {
          return \`Hello, \${person.firstName} \${person.lastName}!\`;
        }

        const john: Person = {
          firstName: "John",
          lastName: "Doe",
          id: 1
        };

        console.log(greetPerson(john)); // "Hello, John Doe!"
        \`\`\`

        ## Classes

        TypeScript supports class-based object orientation:

        \`\`\`typescript
        class Animal {
          private name: string;
          
          constructor(name: string) {
            this.name = name;
          }
          
          move(distanceInMeters: number = 0): void {
            console.log(\`\${this.name} moved \${distanceInMeters}m.\`);
          }
        }

        class Dog extends Animal {
          bark(): void {
            console.log('Woof! Woof!');
          }
          
          move(distanceInMeters = 5): void {
            console.log('Running...');
            super.move(distanceInMeters);
          }
        }

        const dog = new Dog('Rex');
        dog.bark(); // "Woof! Woof!"
        dog.move(10); // "Running..." "Rex moved 10m."
        \`\`\`

        ## Conclusion

        TypeScript brings strong typing to JavaScript, helping catch errors early and making your codebase more maintainable. While there's a learning curve, the productivity benefits make it a worthy investment for many projects.

        As you grow more comfortable with TypeScript, explore advanced features like generics, decorators, and utility types to make your code even more robust and expressive.
      `,
      image: "https://placehold.co/800x400/coral/white?text=TypeScript",
      author: {
        name: "Alex Johnson",
        avatar: "https://placehold.co/100/coral/white?text=AJ",
        role: "Software Engineer"
      },
      interactions: {
        likes: 87,
        comments: 12,
        views: 2140
      }
    },
    {
      id: 4,
      title: "Optimizing React Performance: Advanced Techniques",
      description: "Techniques and best practices for making your React apps faster.",
      date: "February 5, 2023",
      readTime: "7 min read",
      category: "Performance",
      tags: ["React", "Performance", "Optimization", "JavaScript"],
      content: `
        React is already quite fast out of the box, but there are many techniques you can use to optimize your React applications further.

        In this article, we'll explore various performance optimization techniques like memoization with React.memo, useMemo, and useCallback, as well as code splitting, lazy loading, and efficient state management.

        Let's begin with understanding how React's rendering process works...
      `,
      image: "https://placehold.co/800x400/navy/white?text=React+Performance",
      author: {
        name: "Sarah Lee",
        avatar: "https://placehold.co/100/navy/white?text=SL",
        role: "Frontend Architect"
      },
      interactions: {
        likes: 112,
        comments: 17,
        views: 3050
      }
    },
    {
      id: 5,
      title: "Building Accessible Web Forms: Best Practices",
      description: "A guide to creating inclusive and accessible forms for all users.",
      date: "January 15, 2023",
      readTime: "6 min read",
      category: "Accessibility",
      tags: ["Accessibility", "HTML", "Forms", "UX"],
      content: `
        Accessible web forms are essential for ensuring all users, including those with disabilities, can interact with your website effectively. This article covers best practices for creating accessible forms...
      `,
      image: "https://placehold.co/800x400/9b87f5/white?text=Accessibility",
      author: {
        name: "Michael Torres",
        avatar: "https://placehold.co/100/9b87f5/white?text=MT",
        role: "Accessibility Specialist"
      },
      interactions: {
        likes: 75,
        comments: 9,
        views: 1820
      }
    },
    {
      id: 6,
      title: "Mastering CSS Flexbox Layout",
      description: "A complete guide to using CSS Flexbox for modern layouts.",
      date: "December 10, 2022",
      readTime: "5 min read",
      category: "CSS",
      tags: ["CSS", "Flexbox", "Layout", "Web Design"],
      content: `
        CSS Flexbox provides a powerful way to create flexible layouts for modern web applications. This guide explores all the key features and use cases...
      `,
      image: "https://placehold.co/800x400/teal/white?text=CSS+Flexbox",
      author: {
        name: "Emma Wilson",
        avatar: "https://placehold.co/100/teal/white?text=EW",
        role: "Frontend Developer"
      },
      interactions: {
        likes: 92,
        comments: 13,
        views: 2430
      }
    }
  ];

  // Filter articles based on search term and category
  const filteredArticles = articles.filter(article => {
    // Filter by search term if present
    const matchesSearch = searchTerm 
      ? article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      : true;
      
    // Filter by category if not "all"
    const matchesCategory = activeTab === 'all' ? true : article.category.toLowerCase() === activeTab.toLowerCase();
      
    return matchesSearch && matchesCategory;
  });

  // Get unique categories from articles
  const categories = ['all', ...Array.from(new Set(articles.map(article => article.category)))];

  const handleBookmark = (articleId: number) => {
    toast({
      title: "Article Bookmarked",
      description: "This article has been saved to your bookmarks.",
      duration: 3000,
    });
  };

  const handleShare = (articleId: number) => {
    toast({
      title: "Share Link Copied",
      description: "Article link has been copied to clipboard.",
      duration: 3000,
    });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <div className="text-center mb-12 wow fadeIn" data-wow-delay="0.2s">
            <div className="flex items-center gap-3 justify-center mb-4">
              <FileText className="text-[#9b87f5] h-8 w-8" />
              <h1 className="text-4xl md:text-6xl font-bold text-navy">Articles</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights on web development and design
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto mb-12 wow fadeInUp" data-wow-delay="0.3s">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="Search articles by title, description or tags..." 
                className="pl-10 py-6 text-lg"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
          
          <div className="mb-12 wow fadeInUp" data-wow-delay="0.4s">
            <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-gray-100 p-1">
                  {categories.map((category, idx) => (
                    <TabsTrigger 
                      key={idx} 
                      value={category}
                      className="px-4 py-2 data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white capitalize"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </Tabs>
          </div>
        </section>
        
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 wow fadeIn mb-10" data-wow-delay="0.3s">
              <div className="h-64 sm:h-80 overflow-hidden">
                <img 
                  src={articles[selectedArticle].image} 
                  alt={articles[selectedArticle].title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between mb-2 gap-2">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-[#9b87f5]" />
                      <span className="text-gray-500">{articles[selectedArticle].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-[#9b87f5]" />
                      <span className="text-gray-500">{articles[selectedArticle].readTime}</span>
                    </div>
                  </div>
                  <Badge className="bg-[#9b87f5] hover:bg-[#8a76e4] text-white px-3 py-1">
                    {articles[selectedArticle].category}
                  </Badge>
                </div>
                <CardTitle className="text-3xl">{articles[selectedArticle].title}</CardTitle>
                <CardDescription className="text-lg mt-2">{articles[selectedArticle].description}</CardDescription>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {articles[selectedArticle].tags.map((tag, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="flex items-center gap-1 px-3 py-1 border-[#9b87f5]/30"
                    >
                      <Tag className="h-3 w-3 text-[#9b87f5]" />
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center mt-6 gap-3">
                  <img 
                    src={articles[selectedArticle].author.avatar} 
                    alt={articles[selectedArticle].author.name} 
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{articles[selectedArticle].author.name}</p>
                    <p className="text-sm text-gray-500">{articles[selectedArticle].author.role}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ScrollArea className="h-64 md:h-72">
                  <div className="space-y-4 text-lg prose max-w-none">
                    {articles[selectedArticle].content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
              
              <CardFooter className="flex justify-between border-t pt-4">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleBookmark(articles[selectedArticle].id)}>
                    <Bookmark className="h-4 w-4 mr-2" />
                    Bookmark
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleShare(articles[selectedArticle].id)}>
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
                <Button className="bg-[#9b87f5] hover:bg-[#8a76e4] text-white">
                  Read Full Article
                </Button>
              </CardFooter>
              
              <div className="px-6 pb-6 flex items-center justify-between border-t pt-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-600">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{articles[selectedArticle].interactions.likes}</span>
                    </Button>
                  </div>
                  <div className="flex items-center">
                    <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-600">
                      <MessageSquare className="h-4 w-4" />
                      <span>{articles[selectedArticle].interactions.comments}</span>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center">
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-600">
                    <Eye className="h-4 w-4" />
                    <span>{articles[selectedArticle].interactions.views} views</span>
                  </Button>
                </div>
              </div>
            </Card>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 wow fadeIn" data-wow-delay="0.2s">You May Also Like</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {articles
                  .filter((_, index) => index !== selectedArticle)
                  .slice(0, 2)
                  .map((article, index) => (
                    <ArticleCard 
                      key={article.id} 
                      article={article} 
                      onClick={() => setSelectedArticle(articles.findIndex(a => a.id === article.id))}
                      delay={0.2 * index}
                    />
                  ))
                }
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-8">
              <Card className="shadow-md wow fadeInRight" data-wow-delay="0.3s">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText size={20} className="text-[#9b87f5]" />
                    Recent Articles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {filteredArticles.slice(0, 5).map((article, index) => (
                    <div 
                      key={article.id}
                      className={`cursor-pointer transition-all duration-300 hover:bg-gray-50 p-3 rounded-md ${
                        selectedArticle === articles.findIndex(a => a.id === article.id) ? 'border-l-4 border-[#9b87f5] bg-gray-50' : ''
                      }`}
                      onClick={() => setSelectedArticle(articles.findIndex(a => a.id === article.id))}
                    >
                      <h4 className="font-medium line-clamp-2">{article.title}</h4>
                      <div className="flex justify-between mt-2 text-sm text-gray-500">
                        <span>{article.date}</span>
                        <Badge variant="outline" className="text-xs">
                          {article.category}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              <Card className="shadow-md wow fadeInRight" data-wow-delay="0.4s">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Tag size={20} className="text-[#9b87f5]" />
                    Popular Tags
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(new Set(articles.flatMap(article => article.tags)))
                      .slice(0, 12)
                      .map((tag, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline" 
                          className="cursor-pointer hover:bg-[#9b87f5]/10"
                          onClick={() => setSearchTerm(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md wow fadeInRight" data-wow-delay="0.5s">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User size={20} className="text-[#9b87f5]" />
                    About the Author
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex flex-col items-center">
                    <img 
                      src={articles[selectedArticle].author.avatar} 
                      alt={articles[selectedArticle].author.name} 
                      className="w-20 h-20 rounded-full mb-3"
                    />
                    <h4 className="font-bold text-lg">{articles[selectedArticle].author.name}</h4>
                    <p className="text-gray-500 mb-4">{articles[selectedArticle].author.role}</p>
                    <p className="text-sm text-gray-600 mb-4">
                      Passionate about creating clean, efficient code and sharing knowledge with the developer community.
                    </p>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm">View Profile</Button>
                      <Button size="sm" className="bg-[#9b87f5] hover:bg-[#8a76e4] text-white">Follow</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md overflow-hidden bg-gradient-to-br from-[#9b87f5]/20 to-teal/20 wow fadeInRight" data-wow-delay="0.6s">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-3">Subscribe to Newsletter</h3>
                  <p className="text-gray-600 mb-4">
                    Get the latest articles and news delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <Input placeholder="Your email address" />
                    <Button className="w-full bg-gradient-to-r from-[#9b87f5] to-teal text-white">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <VisitorCounter />
      <ScrollToTop />
    </Layout>
  );
};

export default ArticlesPage;

