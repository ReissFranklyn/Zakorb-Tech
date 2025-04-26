
import React, { useEffect, useRef } from 'react';

// This is a placeholder for the 3D globe visualization
// In production, we would implement this with Three.js/React Three Fiber
const GlobeVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
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
    
    // Locations for data streams
    const locations = [
      { name: 'London', x: 0.45, y: 0.35 },
      { name: 'Kyiv', x: 0.55, y: 0.35 },
      { name: 'Dubai', x: 0.6, y: 0.45 },
      { name: 'New York', x: 0.3, y: 0.4 },
      { name: 'Tokyo', x: 0.8, y: 0.4 },
      { name: 'Paris', x: 0.48, y: 0.38 },
      { name: 'Warsaw', x: 0.52, y: 0.33 }
    ];
    
    // Create connections between locations
    const connections: { from: number; to: number; progress: number; speed: number; }[] = [];
    
    for (let i = 0; i < locations.length; i++) {
      for (let j = i + 1; j < locations.length; j++) {
        if (Math.random() > 0.5) {
          connections.push({
            from: i,
            to: j,
            progress: Math.random(),
            speed: 0.001 + Math.random() * 0.005
          });
        }
      }
    }
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw globe outline
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) * 0.4, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(26, 26, 26, 0.8)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Draw grid lines
      const gridCount = 12;
      
      // Draw horizontal grid lines (latitudes)
      for (let i = 1; i < gridCount; i++) {
        ctx.beginPath();
        const y = i / gridCount;
        const radius = Math.sin(Math.PI * y) * Math.min(canvas.width, canvas.height) * 0.4;
        ctx.ellipse(
          canvas.width / 2,
          canvas.height / 2,
          radius,
          radius * 0.3,
          0,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = 'rgba(26, 26, 26, 0.5)';
        ctx.stroke();
      }
      
      // Draw vertical grid lines (longitudes)
      for (let i = 0; i < gridCount; i++) {
        ctx.beginPath();
        ctx.ellipse(
          canvas.width / 2,
          canvas.height / 2,
          Math.min(canvas.width, canvas.height) * 0.4,
          Math.min(canvas.width, canvas.height) * 0.4 * 0.3,
          0,
          (i / gridCount) * Math.PI * 2,
          ((i + 0.5) / gridCount) * Math.PI * 2
        );
        ctx.strokeStyle = 'rgba(26, 26, 26, 0.5)';
        ctx.stroke();
      }
      
      // Draw locations
      locations.forEach(location => {
        const x = canvas.width * location.x;
        const y = canvas.height * location.y;
        
        // Draw location point
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#00FFE0';
        ctx.fill();
        
        // Draw location ripples
        ctx.beginPath();
        ctx.arc(x, y, 8 + Math.sin(Date.now() * 0.005) * 3, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 255, 224, 0.5)';
        ctx.stroke();
        
        // Draw location name
        ctx.font = '10px Inter';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fillText(location.name, x + 8, y + 4);
      });
      
      // Draw data streams
      connections.forEach(connection => {
        const fromLocation = locations[connection.from];
        const toLocation = locations[connection.to];
        
        const fromX = canvas.width * fromLocation.x;
        const fromY = canvas.height * fromLocation.y;
        const toX = canvas.width * toLocation.x;
        const toY = canvas.height * toLocation.y;
        
        // Update connection progress
        connection.progress += connection.speed;
        if (connection.progress > 1) {
          connection.progress = 0;
        }
        
        // Draw data packet
        const packetX = fromX + (toX - fromX) * connection.progress;
        const packetY = fromY + (toY - fromY) * connection.progress;
        
        ctx.beginPath();
        ctx.arc(packetX, packetY, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#00FFE0';
        ctx.fill();
        
        // Draw connection line
        ctx.beginPath();
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(toX, toY);
        ctx.strokeStyle = 'rgba(0, 255, 224, 0.2)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
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
