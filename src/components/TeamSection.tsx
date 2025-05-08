import React from 'react';
import { Users, Globe, Code, Shield } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const FlagIcon = ({ country }: { country: string }) => {
  const flagEmoji = {
    'Japanese': '🇯🇵',
    'French': '🇫🇷',
    'Polish': '🇵🇱',
    'Ukrainian': '🇺🇦',
    'Arabic': '🇦🇪',
  }[country] || '🌐';

  return (
    <span className="text-xl mr-1">{flagEmoji}</span>
  );
};

interface TechStackProps {
  name: string;
  icon: string;
  url: string;
}

const TechStack = ({ name, icon, url }: TechStackProps) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer"
    className="block h-full"
  >
    <div className="cyber-card p-4 h-full flex flex-col items-center justify-center hover:scale-105 transition-transform">
      <div className="mb-3 text-zarkorb-cyan">
        <img src={icon} alt={name} className="w-12 h-12" />
      </div>
      <h3 className="text-white text-lg font-medium">{name}</h3>
    </div>
  </a>
);

const TeamSection = () => {
  const isMobile = useIsMobile();
  const languages = ['Japanese', 'French', 'Polish', 'Ukrainian', 'Arabic'];
  
  const techStacks = [
    { 
      name: 'Docker', 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg", 
      url: "https://www.docker.com/"
    },
    { 
      name: 'GraphQL', 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg", 
      url: "https://graphql.org/"
    },
    { 
      name: 'AWS', 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", 
      url: "https://aws.amazon.com/"
    },
    { 
      name: 'React', 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg", 
      url: "https://reactjs.org/"
    },
    { 
      name: 'TypeScript', 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", 
      url: "https://www.typescriptlang.org/"
    },
    { 
      name: 'Vue', 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg", 
      url: "https://vuejs.org/"
    },
    { 
      name: 'PHP', 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", 
      url: "https://www.php.net/"
    },
    { 
      name: 'WordPress', 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg", 
      url: "https://wordpress.org/"
    },
    { 
      name: 'Shopify', 
      icon: "https://cdn.worldvectorlogo.com/logos/shopify.svg", 
      url: "https://www.shopify.com/"
    },
    { 
      name: 'Ethereum', 
      icon: "ethereum-svgrepo-com.svg", 
      url: "https://ethereum.org/"
    },
    { 
      name: 'Solana', 
      icon: "solana.png", 
      url: "https://solana.com/"
    },
    { 
      name: 'DeFi', 
      icon: "https://img.icons8.com/fluency/48/blockchain-technology.png", 
      url: "https://ethereum.org/en/defi/"
    },
    { 
      name: 'Zapier', 
      icon: "https://cdn.worldvectorlogo.com/logos/zapier.svg", 
      url: "https://zapier.com/"
    },
    { 
      name: 'n8n', 
      icon: "n8n-color.png", 
      url: "https://n8n.io/"
    },
    { 
      name: 'Make.com', 
      icon: "make-color.png", 
      url: "https://www.make.com/"
    },
    { 
      name: 'AI', 
      icon: "https://img.icons8.com/color/48/artificial-intelligence.png", 
      url: "https://openai.com/"
    },
    { 
      name: 'Python', 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg", 
      url: "https://www.python.org/"
    },
    { 
      name: 'Azure', 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", 
      url: "https://azure.microsoft.com/"
    },
    { 
      name: 'Google Cloud', 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", 
      url: "https://cloud.google.com/"
    },
  ];
  
  return (
    <section id="team" className="section-padding relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Meet Our <span className="text-zarkorb-cyan glow-text">International Team</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our cross-cultural team delivers solutions across borders with local expertise and international perspective.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* CEO Profile */}
          <div className="cyber-card flex flex-col items-center text-center md:text-left md:flex-row md:items-start">
            <div className="mb-6 md:mb-0 md:mr-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-zarkorb-cyan">
                <img 
                  src="reiss.jpg" 
                  alt="Reiss - CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Reiss</h3>
              <p className="text-zarkorb-cyan mb-3">Founder & CEO</p>
              <p className="text-gray-300 mb-4">
                BSc International Relations & Languages – Architecting compliance-driven tech for international markets.
              </p>
              <p className="text-gray-300">
                Leads cross-cultural teams deploying solutions in Japanese, French, Polish, and Ukrainian.
              </p>
            </div>
          </div>
          
          {/* Team Strengths */}
          <div className="cyber-card flex flex-col">
            <h3 className="text-xl font-bold text-white mb-4">Team Strengths</h3>
            
            <div className="mb-6">
              <h4 className="flex items-center text-zarkorb-cyan mb-2">
                <Globe className="mr-2" size={18} />
                Multilingual Capabilities
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {languages.map((language) => (
                  <span key={language} className="bg-zarkorb-grid px-3 py-1 rounded-full flex items-center text-sm">
                    <FlagIcon country={language} />
                    {language}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="flex items-center text-zarkorb-cyan mb-2">
                <Code className="mr-2" size={18} />
                Technical Expertise
              </h4>
              <p className="text-gray-300">
                From Python-driven risk modeling to Arabic/French UX development. Our team brings diverse technical skills to every project.
              </p>
            </div>
            
            <div>
              <h4 className="flex items-center text-zarkorb-cyan mb-2">
                <Shield className="mr-2" size={18} />
                Compliance Focus
              </h4>
              <p className="text-gray-300">
                GDPR, local regulations, and cultural compliance are built into every solution we deliver.
              </p>
            </div>
          </div>
        </div>
        
        {/* Tech Stack Carousel */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center text-white mb-6">
            Our <span className="text-zarkorb-cyan glow-text">Tech Stack</span>
          </h3>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {techStacks.map((tech, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <TechStack name={tech.name} icon={tech.icon} url={tech.url} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="static translate-y-0 mr-2" />
              <CarouselNext className="static translate-y-0 ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
