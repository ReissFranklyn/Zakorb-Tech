
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface CaseStudyProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  index: number;
  skills?: string[];
}

const CaseStudyCard = ({ title, subtitle, description, imageSrc, index, skills = [] }: CaseStudyProps) => {
  return (
    <div 
      className={cn(
        "cyber-card flex flex-col md:flex-row gap-6 overflow-hidden",
        index % 2 === 1 ? "md:flex-row-reverse" : ""
      )}
    >
      <div className="md:w-1/2 flex flex-col justify-center">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-zarkorb-cyan font-medium mb-4">{subtitle}</p>
        <p className="text-gray-300 mb-6">{description}</p>
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <Badge 
                key={idx} 
                variant="outline"
                className="border-zarkorb-cyan text-zarkorb-cyan"
              >
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </div>
      <div className="md:w-1/2 overflow-hidden rounded-md">
        <img 
          src={imageSrc || '/placeholder.svg'} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
};

export default CaseStudyCard;
