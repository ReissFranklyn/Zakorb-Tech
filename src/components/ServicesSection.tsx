
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
      description: "Accelerate your Web, E-Commerce, and Blockchain/DeFi ventures into new markets with culturally adapted, compliant solutions. From regulatory hurdles to localised user experiences, we ensure seamless cross-border growth."
    },
    {
      icon: <Code size={36} />,
      title: "Localised Development",
      description: "Build custom software, multilingual e-commerce platforms, and region-specific AI tools tailored to your audience. Our development integrates local preferences while scaling globally."
    },
    {
      icon: <Shield size={36} />,
      title: "GDPR & Compliance",
      description: "Navigate GDPR, financial regulations (for DeFi), and regional tech laws with confidence. We ensure your web apps, blockchain protocols, and automation tools meet EU, MEMA, and Asian standards."
    },
    {
      icon: <Database size={36} />,
      title: "Risk Modeling",
      description: "Leverage Python-powered analytics and AI to assess risks in international operations. Optimise your expansion strategy for e-commerce, DeFi, or automated workflows with data-backed insights."
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
