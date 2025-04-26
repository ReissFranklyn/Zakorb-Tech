
import React from 'react';
import { Globe, Database, Shield, Code } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="cyber-card group">
      <div className="mb-6 text-zarkorb-cyan group-hover:animate-glow">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zarkorb-cyan transition-colors">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe size={36} />,
      title: "International Expansion",
      description: "We help tech companies expand globally with culturally tailored, compliant solutions across borders."
    },
    {
      icon: <Code size={36} />,
      title: "Localized Development",
      description: "Custom software development with multilingual interfaces and region-specific features."
    },
    {
      icon: <Shield size={36} />,
      title: "GDPR & Compliance",
      description: "Ensure your tech meets regulatory requirements across EU, MENA, and Asian markets."
    },
    {
      icon: <Database size={36} />,
      title: "Risk Modeling",
      description: "Python-driven risk assessment and mitigation strategies for international operations."
    }
  ];

  return (
    <section id="services" className="section-padding relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our <span className="text-zarkorb-cyan glow-text">Services</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We deliver technology solutions that bridge international boundaries while respecting local requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
