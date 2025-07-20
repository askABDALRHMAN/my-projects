
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  // JD Studio purple color for active links
  const activeColor = "text-[#9b87f5]";
  // Neutral color for inactive links (when scrolled or not on homepage)
  const inactiveScrolledColor = "text-navy";
  // White color for inactive links when on homepage and not scrolled
  const inactiveHomeColor = "text-white";
  
  return (
    <nav 
      className={`py-4 px-6 md:px-10 flex items-center justify-between fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center">
        <Link 
          to="/" 
          className={`text-2xl font-bold ${isScrolled || location.pathname !== '/' ? 'text-navy' : 'text-white'} transition-colors duration-300 hover:text-teal`}
        >
          <span className="text-teal">A</span><span className='text-[#7E59af]'>SK</span>
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <NavigationMenu>
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <Link 
                to="/"
                className={`px-4 py-2 rounded-md text-lg font-medium transition-colors duration-300 ${
                  isActive('/') 
                    ? activeColor
                    : isScrolled || location.pathname !== '/' 
                      ? inactiveScrolledColor 
                      : inactiveHomeColor
                } hover:text-teal`}
              >
                Home
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link 
                to="/about"
                className={`px-4 py-2 rounded-md text-lg font-medium transition-colors duration-300 ${
                  isActive('/about') 
                    ? activeColor
                    : isScrolled || location.pathname !== '/' 
                      ? inactiveScrolledColor 
                      : inactiveHomeColor
                } hover:text-teal `}
              >
                About
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link 
                to="/skills"
                className={`px-4 py-2 rounded-md text-lg font-medium transition-colors duration-300 ${
                  isActive('/skills') 
                    ? activeColor
                    : isScrolled || location.pathname !== '/' 
                      ? inactiveScrolledColor 
                      : inactiveHomeColor
                } hover:text-teal`}
              >
                Skills
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className={`text-lg font-medium ${
                isActive('/projects') 
                  ? activeColor
                  : isScrolled || location.pathname !== '/' 
                    ? inactiveScrolledColor 
                    : inactiveHomeColor
              } hover:text-teal bg-transparent hover:bg-transparent focus:bg-transparent`}>
                Projects
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-teal to-[#7E69AB] p-6 no-underline outline-none focus:shadow-md"
                        to="/projects"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-white ">
                          Featured Projects
                        </div>
                        <p className="text-sm leading-tight text-white/90">
                          Explore my latest and most impressive work
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/projects"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Web Applications</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Complex web applications with React
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/projects"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">E-commerce</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Online stores and shopping experiences
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link 
                to="/articles"
                className={`px-4 py-2 rounded-md text-lg font-medium transition-colors duration-300 ${
                  isActive('/articles') 
                    ? activeColor
                    : isScrolled || location.pathname !== '/' 
                      ? inactiveScrolledColor 
                      : inactiveHomeColor
                } hover:text-teal`}
              >
                Articles
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link 
                to="/contact"
                className={`px-4 py-2 rounded-md text-lg font-medium transition-colors duration-300 ${
                  isActive('/contact') 
                    ? activeColor
                    : isScrolled || location.pathname !== '/' 
                      ? inactiveScrolledColor 
                      : inactiveHomeColor
                } hover:text-teal`}
              >
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      
      <div className="flex items-center">
        <Button 
          className={`btn-primary hidden lg:flex ${
            isScrolled ? 'bg-gradient-to-b from-teal to-[#7E69AB] text-white hover:bg-[#7E69AB]' : 'bg-white text-navy hover:bg-teal hover:text-white '
          }`}
          asChild
        >
          <Link to="/contact">Get in Touch</Link>
        </Button>
        
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          className="lg:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${isScrolled || location.pathname !== '/' ? 'text-purple-400' : 'text-teal'} transition-colors duration-300 hover:text-[#9e00ee]`}>
            {isMenuOpen ? '✕' : '☰'}
          </span>
        </Button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-2">
          <Link 
            to="/" 
            className={`py-2 text-lg ${isActive('/') ? 'text-[#9b87f5] font-medium transition-colors duration-300 hover:text-teal  ' : 'text-navy transition-colors duration-300 hover:text-teal'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`py-2 text-lg ${isActive('/about') ?  'text-[#9b87f5] font-medium transition-colors duration-300 hover:text-teal  ' : 'text-navy transition-colors duration-300 hover:text-teal'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/skills" 
            className={`py-2 text-lg ${isActive('/skills') ?  'text-[#9b87f5] font-medium transition-colors duration-300 hover:text-teal  ' : 'text-navy transition-colors duration-300 hover:text-teal'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </Link>
          <Link 
            to="/projects" 
            className={`py-2 text-lg ${isActive('/projects') ?  'text-[#9b87f5] font-medium transition-colors duration-300 hover:text-teal  ' : 'text-navy transition-colors duration-300 hover:text-teal'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link 
            to="/articles" 
            className={`py-2 text-lg ${isActive('/articles') ?  'text-[#9b87f5] font-medium transition-colors duration-300 hover:text-teal  ' : 'text-navy transition-colors duration-300 hover:text-teal'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Articles
          </Link>
          <Link 
            to="/contact" 
            className={`py-2 text-lg ${isActive('/contact') ?  'text-[#9b87f5] font-medium transition-colors duration-300 hover:text-teal  ' : 'text-navy transition-colors duration-300 hover:text-teal'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Button className="btn-primary mt-2 bg-gradient-to-b from-teal to-[#7E69EB] text-white" asChild>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Get in Touch</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
