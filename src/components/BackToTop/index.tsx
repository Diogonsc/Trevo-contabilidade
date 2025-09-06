import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FaArrowUp } from "react-icons/fa";

interface BackToTopProps {
  className?: string;
  threshold?: number;
}

export const BackToTop: React.FC<BackToTopProps> = ({ 
  className,
  threshold = 300 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className={cn(
        "fixed bottom-32 right-6 z-50 rounded-md shadow-lg transition-all duration-300 hover:scale-110",
        "bg-primary text-muted-foreground hover:bg-primary/90 cursor-pointer",
        className
      )}
      aria-label="Voltar ao topo"
    >
      <FaArrowUp size={20} className="text-muted" />
    </Button>
  );
};
