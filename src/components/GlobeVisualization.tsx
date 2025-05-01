
import React, { useEffect, useRef } from 'react';
import { useResponsiveGlobe } from '@/hooks/useResponsiveGlobe';

const GlobeVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isMobile } = useResponsiveGlobe();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Locations for data streams - Removed Warsaw as requested
    const locations = [
      { name: 'London', x: 0.45, y: 0.35 },
      { name: 'Kyiv', x: 0.58, y: 0.38 },
      { name: 'Dubai', x: 0.6, y: 0.45 },
      { name: 'New York', x: 0.3, y: 0.4 },
      { name: 'Tokyo', x: 0.8, y: 0.4 },
      { name: 'Paris', x: 0.47, y: 0.36 }  // Updated Paris position to match its actual geographic location
    ];
    
    // Even brighter colors palette for better visibility, especially on mobile
    const colors = {
      primary: '#00FFE0',    // Original cyan color
      accent1: '#9b87f5',    // Bright purple
      accent2: '#F97316',    // Bright orange
      accent3: '#0EA5E9',    // Ocean blue
      accent4: '#33C3F0',    // Sky blue
      grid: 'rgba(100, 100, 100, 0.8)' // Brighter grid lines
    };
    
    // Create connections between locations with varied colors
    const connections: { 
      from: number; 
      to: number; 
      progress: number; 
      speed: number; 
      color: string;
    }[] = [];
    
    // Keep original density for desktop, adjust only for mobile
    const connectionDensity = isMobile ? 0.3 : 0.4;
    
    for (let i = 0; i < locations.length; i++) {
      for (let j = i + 1; j < locations.length; j++) {
        if (Math.random() > connectionDensity) {
          const colorKeys = Object.keys(colors).filter(key => key !== 'grid');
          const randomColor = colors[colorKeys[Math.floor(Math.random() * colorKeys.length)] as keyof typeof colors];
          
          connections.push({
            from: i,
            to: j,
            progress: Math.random(),
            speed: 0.002 + Math.random() * 0.006, // Keep original speed regardless of device
            color: randomColor
          });
        }
      }
    }
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid lines with brighter color
      const gridCount = isMobile ? 8 : 14; // Slightly more grid lines on mobile for better visibility
      
      // Calculate appropriate scale based on canvas dimensions
      const scaleFactor = Math.min(canvas.width / 800, 1); 
      const baseRadius = Math.min(canvas.width, canvas.height) * 0.42 * scaleFactor;
      
      // Draw horizontal grid lines (latitudes)
      for (let i = 1; i < gridCount; i++) {
        ctx.beginPath();
        const y = i / gridCount;
        const radius = Math.sin(Math.PI * y) * baseRadius;
        ctx.ellipse(
          canvas.width / 2,
          canvas.height / 2,
          radius,
          radius * 0.35,
          0,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = colors.grid;
        ctx.lineWidth = 1.5; // Consistent line width
        ctx.stroke();
      }
      
      // Draw vertical grid lines (longitudes)
      for (let i = 0; i < gridCount; i++) {
        ctx.beginPath();
        ctx.ellipse(
          canvas.width / 2,
          canvas.height / 2,
          baseRadius,
          baseRadius * 0.35,
          0,
          (i / gridCount) * Math.PI * 2,
          ((i + 0.5) / gridCount) * Math.PI * 2
        );
        ctx.strokeStyle = colors.grid;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
      
      // Draw connections first (behind locations)
      connections.forEach(connection => {
        const fromLocation = locations[connection.from];
        const toLocation = locations[connection.to];
        
        const fromX = canvas.width * fromLocation.x;
        const fromY = canvas.height * fromLocation.y;
        const toX = canvas.width * toLocation.x;
        const toY = canvas.height * toLocation.y;
        
        // Draw connection line
        ctx.beginPath();
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(toX, toY);
        ctx.strokeStyle = connection.color.replace(')', ', 0.4)').replace('rgb', 'rgba');
        ctx.lineWidth = 1.5;
        ctx.stroke();
        
        // Update connection progress
        connection.progress += connection.speed;
        if (connection.progress > 1) {
          connection.progress = 0;
        }
        
        // Draw data packet
        const packetX = fromX + (toX - fromX) * connection.progress;
        const packetY = fromY + (toY - fromY) * connection.progress;
        
        ctx.beginPath();
        ctx.arc(packetX, packetY, isMobile ? 3.5 : 3.5, 0, Math.PI * 2);
        ctx.fillStyle = connection.color;
        ctx.fill();
      });
      
      // Show ALL locations on both mobile and desktop
      // Draw locations
      locations.forEach((location, idx) => {
        const x = canvas.width * location.x;
        const y = canvas.height * location.y;
        
        // Draw location ripples (reduced for mobile)
        const rippleCount = isMobile ? 2 : 3;
        for (let i = rippleCount; i >= 1; i--) {
          const pulseSize = 6 + Math.sin(Date.now() * 0.003 + idx) * (isMobile ? 3 : 4);
          ctx.beginPath();
          ctx.arc(x, y, pulseSize * i, 0, Math.PI * 2);
          
          // Gradient for ripples
          const gradient = ctx.createRadialGradient(
            x, y, 0,
            x, y, pulseSize * i
          );
          gradient.addColorStop(0, `rgba(0, 255, 224, ${0.8 / i})`);
          gradient.addColorStop(1, 'rgba(0, 255, 224, 0)');
          
          ctx.fillStyle = gradient;
          ctx.fill();
        }
        
        // Draw location point
        ctx.beginPath();
        ctx.arc(x, y, isMobile ? 5 : 6, 0, Math.PI * 2);
        
        // Gradient for location points
        const pointGradient = ctx.createRadialGradient(
          x, y, 0,
          x, y, isMobile ? 5 : 6
        );
        pointGradient.addColorStop(0, '#FFFFFF');
        pointGradient.addColorStop(0.7, colors.primary);
        pointGradient.addColorStop(1, colors.accent1);
        
        ctx.fillStyle = pointGradient;
        ctx.fill();
        
        // Add glow effect
        ctx.beginPath();
        ctx.arc(x, y, isMobile ? 5 : 6, 0, Math.PI * 2);
        ctx.shadowColor = colors.primary;
        ctx.shadowBlur = isMobile ? 12 : 15;
        ctx.fillStyle = 'rgba(0, 255, 224, 0.8)';
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow
        
        // Improve text rendering for all city names
        const fontSize = isMobile ? 11 : 12;
        ctx.font = `bold ${fontSize}px Inter`;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
        ctx.shadowBlur = 5;
        
        // Improved city label positioning - placing all labels much closer to their points
        let textOffsetX = 0;
        let textOffsetY = 0; // Default position right at the point
        
        // City-specific label positioning to make all labels closer to their points
        if (location.name === 'London') {
          textOffsetX = -15; // Much closer to actual point
          textOffsetY = -10;
        } else if (location.name === 'New York') {
          textOffsetX = -25; // Closer to actual point
          textOffsetY = -10;
        } else if (location.name === 'Tokyo') {
          textOffsetX = 10;
          textOffsetY = -10;
        } else if (location.name === 'Dubai') {
          textOffsetX = 10;
          textOffsetY = -10;
        } else if (location.name === 'Paris') {
          textOffsetX = 10; // Moved to the right of the point as indicated by red arrow
          textOffsetY = 15; // Below the point, following the arrow direction
        } else if (location.name === 'Kyiv') {
          textOffsetX = 10;
          textOffsetY = -10;
        }
        
        ctx.fillText(location.name, x + textOffsetX, y + textOffsetY);
        ctx.shadowBlur = 0; // Reset shadow
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, [isMobile]);
  
  return (
    <div className="w-full h-full relative">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full absolute top-0 left-0"
      />
    </div>
  );
};

export default GlobeVisualization;
