
import React from 'react';
import { Users, Globe, Code, Shield } from 'lucide-react';

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

const TeamSection = () => {
  const languages = ['Japanese', 'French', 'Polish', 'Ukrainian', 'Arabic'];
  
  return (
    <section id="team" className="section-padding relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Meet Our <span className="text-zarkorb-cyan glow-text">Global Team</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our cross-cultural team delivers solutions across borders with local expertise and global perspective.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* CEO Profile */}
          <div className="cyber-card flex flex-col items-center text-center md:text-left md:flex-row md:items-start">
            <div className="mb-6 md:mb-0 md:mr-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-zarkorb-cyan">
                <img 
                  src="/placeholder.svg" 
                  alt="Reiss - CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Reiss</h3>
              <p className="text-zarkorb-cyan mb-3">Founder & CEO</p>
              <p className="text-gray-300 mb-4">
                BSc International Relations & Languages – Architecting compliance-driven tech for global markets.
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
        
        {/* Team War Room */}
        <div className="rounded-md overflow-hidden border border-zarkorb-cyan/20 neon-border">
          <img 
            src="/placeholder.svg" 
            alt="Team War Room" 
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
