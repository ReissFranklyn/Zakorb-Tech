
import React, { useEffect } from 'react';
import { ChevronDown, Globe, Database, Shield, Code } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import GlobeVisualization from '@/components/GlobeVisualization';
import ServicesSection from '@/components/ServicesSection';
import CaseStudyCard from '@/components/CaseStudyCard';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Adjusted for navbar height
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  const caseStudies = [
    {
      title: "Procure Bridge",
      subtitle: "Fortune 500 Asset Management",
      description: "40% downtime reduction via Python-driven risk modeling. Our team implemented advanced predictive analytics to mitigate supply chain disruptions for a global financial institution.",
      imageSrc: "/placeholder.svg"
    },
    {
      title: "Crisis Chatbot",
      subtitle: "Ukrainian Refugee Support",
      description: "5k+ users served via Ukrainian/Polish/Arabic multilingual platform. Built a robust communication system connecting displaced persons with critical resources and support services.",
      imageSrc: "/placeholder.svg"
    },
    {
      title: "MENA SaaS Localization",
      subtitle: "Regional Expansion Solution",
      description: "Arabic/French UX + Halal payment gateways for GCC markets. Adapted global SaaS product for Middle Eastern compliance while preserving core functionality.",
      imageSrc: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-black grid-bg overflow-hidden">
      <ParticleBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative pt-20">
        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                International Tech Solutions, 
                <span className="text-zarkorb-cyan glow-text"> Locally Empowered</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Code Meets Culture: Secured by Strategy
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <a href="#case-studies" className="px-6 py-3 bg-zarkorb-cyan text-black font-bold rounded hover:bg-zarkorb-cyan/90 transition-colors">
                  Explore Our Work
                </a>
                <a href="#contact" className="px-6 py-3 border border-zarkorb-cyan text-zarkorb-cyan rounded hover:bg-zarkorb-cyan/10 transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="md:w-1/2 h-[400px] md:h-[500px] animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <GlobeVisualization />
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#services" className="text-zarkorb-cyan">
              <ChevronDown size={36} />
            </a>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Case Studies Section */}
      <section id="case-studies" className="section-padding relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our <span className="text-zarkorb-cyan glow-text">Case Studies</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Real-world examples of how we've helped businesses overcome international tech challenges.
            </p>
          </div>
          
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                title={study.title}
                subtitle={study.subtitle}
                description={study.description}
                imageSrc={study.imageSrc}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
