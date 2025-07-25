
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-pattern">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold mb-4 text-navy">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! This page doesn't seem to exist.</p>
        <Button asChild className="btn-primary">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
