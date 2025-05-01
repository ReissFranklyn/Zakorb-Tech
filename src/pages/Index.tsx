
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
      title: "$FASHI ICO Project",
      subtitle: "Presale & Stacking",
      description: "The FASHI ICO leverages risk modeling to reduce protocol downtime by 40% while implementing advanced Tokenomics 4.0, featuring a strategic token distribution (45% presale, 20% locked liquidity, 15% community rewards, 10% team/advisors, and 10% ecosystem fund), dynamic staking rewards with up to 28% APY (auto-compounded for long-term holders), deflationary mechanics (2% transaction tax for buybacks and burns, reducing supply by 15% over 5 years), and decentralized governance allowing $FASHI holders to vote on treasury allocations and upgrades—all backed by real-time risk simulations, transparent audits, and on-chain analytics to ensure investor confidence and sustainable growth.",
      imageSrc: "case/defi1.png",
      skills: ["Solidity", "React", "AWS", "Tailwindcss", "Tokenomics"]
    },
    {
      title: "DeFi Exchange Platform",
      subtitle: "Monkey Swap",
      description: "This Platform is a cutting-edge decentralized exchange (DEX) built on an Automated Market Maker (AMM) model, enabling seamless token swaps with near-zero slippage and ultra-low fees. Powered by React for a responsive frontend, Solidity for secure smart contracts, and Django for robust backend services, the platform offers advanced DeFi features like yield farming, liquidity mining, and cross-chain compatibility. With a strong focus on user experience and security, Monkey Swap provides deep liquidity pools, impermanent loss protection, and real-time analytics—empowering traders and liquidity providers to maximize returns in a trustless, decentralized ecosystem.",
      imageSrc: "case/defi2.png",
      skills: ["React", "Solidity", "Django", "AMM Model", "DeFi"]
    },
    {
      title: "LUXE Woocommerce Website",
      subtitle: "Wordpress-Based Ecommerce",
      description: "LUXE Woocommerce is a high-end eCommerce platform built on WordPress, leveraging PHP and Laravel for robust backend functionality, Azure for scalable cloud hosting, and expert UX Design for a seamless shopping experience. The site features fast-loading product pages, secure checkout, personalized recommendations, and mobile-responsive design—combining luxury aesthetics with powerful performance to drive conversions and customer satisfaction.",
      imageSrc: "case/ecm1.png",
      skills: ["PHP", "Laravel", "Azure", "UX Design", "Wordpress"]
    },
    {
      title: "Shopify Online Store",
      subtitle: "Online store for food sale",
      description: "This Shopify-powered online store specializes in food sales, delivering a seamless shopping experience with secure Stripe payment integration, PHP and Laravel for custom backend functionality, and AAS (Azure App Service) for scalable cloud hosting. Enhanced by intuitive UX Design, the store features fast-loading product pages, subscription options, and mobile responsiveness—ensuring a smooth, high-converting experience for customers.",
      imageSrc: "case/ecm2.png",
      skills: ["PHP", "Shopify", "Stripe", "UX Design", "Laravel", "AWS"]
    },
    {
      title: "n8n Automation Project",
      subtitle: "Recuriment Agency",
      description: "This project leverages n8n workflow automation to streamline recruitment processes, integrating Python and Django for backend logic, AMS (Amazon Managed Workflows for Apache Airflow) for scalable task orchestration, and Email Automation for efficient candidate communication. The system automates job posting distribution, resume screening, and interview scheduling—reducing manual effort while improving speed and accuracy in talent acquisition.",
      imageSrc: "case/aut1.png",
      skills: ["Python", "Django", "AWS", "n8n", "Email Automation"]
    },
    {
      title: "Make.com Automation Project",
      subtitle: "North American Dating App",
      description: "This project harnesses Make.com to automate and optimize operations for a North American dating app, integrating Python for custom scripting, Azure for cloud scalability, and Airtable for dynamic data management. The automation suite connects WordPress for user engagement and leverages the YouTube API to enhance content marketing—streamlining user onboarding, profile matching, and promotional workflows. The result is a seamless, data-driven experience that boosts efficiency and user retention.",
      imageSrc: "case/aut2.png",
      skills: ["Make.com", "Python", "Azure", "Airtable", "Wordpress", "YouTube Api"]
    },
    {
      title: "AI-Based Image Recognition Project",
      subtitle: "IRIS Recognition",
      description: "This cutting-edge IRIS recognition system utilizes Python and NumPy for core computational tasks, combined with advanced Image Processing and Deep Learning techniques powered by TensorFlow. The solution delivers high-accuracy biometric identification, capable of real-time iris pattern analysis for security and authentication applications. Its scalable architecture ensures fast processing while maintaining precision in diverse lighting conditions, making it ideal for access control, identity verification, and secure login systems.",
      imageSrc: "case/ai1.png",
      skills: ["Python", "numpy", "Image Processing", "Deep Learning", "Tensorflow"]
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
            <div className="md:w-1/2 mb-8 md:mb-0">
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
            <div className="w-full md:w-1/2 h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[550px] animate-fade-in" style={{ animationDelay: '0.8s' }}>
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
                skills={study.skills}
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
