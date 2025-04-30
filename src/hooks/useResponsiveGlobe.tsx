
import { useState, useEffect } from 'react';
import { useIsMobile } from './use-mobile';

export function useResponsiveGlobe() {
  const isMobile = useIsMobile();
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  });
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = isMobile ? 300 : 600; // Smaller height on mobile, larger on desktop
      
      setDimensions({
        width,
        height
      });
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return { ...dimensions, isMobile };
}
