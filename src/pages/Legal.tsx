
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, FileText, Gavel, ShieldCheck, Cookie, FileCode, Handshake } from 'lucide-react';

const LegalPage = () => {
  return (
    <div className="min-h-screen bg-black grid-bg">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Legal & <span className="text-zarkorb-cyan glow-text">Compliance</span>
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto">
              ZarkOrb adheres to all UK laws and industry standards. Here's how we protect your data and operations:
            </p>
          </div>
          
          <div className="space-y-16">
            <ComplianceSection 
              icon={<Shield size={36} />}
              title="Data Protection & Privacy"
              items={[
                "UK GDPR Compliance: We follow the UK General Data Protection Regulation (GDPR) and the Data Protection Act 2018.",
                "Transparent Data Use: We only collect data necessary for service delivery. Review our Privacy Policy for details.",
                "Cookie Consent: We use cookies only with explicit user consent, per the Privacy and Electronic Communications Regulations (PECR)."
              ]}
            />
            
            <ComplianceSection 
              icon={<Gavel size={36} />}
              title="Financial Compliance"
              items={[
                "FCA Alignment: Our blockchain/DeFi solutions comply with the Financial Conduct Authority (FCA) Crypto Asset Framework, including AML/KYC protocols.",
                "Payment Security: We use PCI DSS-compliant payment gateways (e.g., Stripe) for transactions."
              ]}
            />
            
            <ComplianceSection 
              icon={<ShieldCheck size={36} />}
              title="Cybersecurity Standards"
              items={[
                "NCSC Guidelines: We follow the National Cyber Security Centre (NCSC) Cyber Essentials framework.",
                "Penetration Testing: All systems undergo regular ethical hacking audits."
              ]}
            />
            
            <ComplianceSection 
              icon={<FileCode size={36} />}
              title="AI & Automation Ethics"
              items={[
                "Bias Mitigation: AI models are audited for fairness, aligning with the UK AI Safety Institute Guidelines.",
                "Transparency: Clients receive full documentation on AI decision-making processes."
              ]}
            />
            
            <ComplianceSection 
              icon={<FileText size={36} />}
              title="Intellectual Property"
              items={[
                "IP Ownership: Clients retain full rights to code, designs, and data generated through our services (outlined in contracts).",
                "Open-Source Licensing: We clearly disclose any third-party open-source tools used (e.g., MIT, GPL licenses)."
              ]}
            />
            
            <ComplianceSection 
              icon={<Handshake size={36} />}
              title="Industry-Specific Compliance"
              items={[
                "Healthcare (NHS): Solutions comply with NHS Digital Standards for data security.",
                "E-Commerce: Adherence to the Consumer Rights Act 2015 and Digital Services Act (DSA)."
              ]}
            />
          </div>
          
          <div className="mt-20 border-t border-zarkorb-cyan/20 pt-12">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Key Policies</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <PolicyLink icon={<FileText size={20} />} title="Privacy Policy" />
              <PolicyLink icon={<Cookie size={20} />} title="Cookie Policy" />
              <PolicyLink icon={<Gavel size={20} />} title="Terms of Service" />
              <PolicyLink icon={<Handshake size={20} />} title="Modern Slavery Statement" />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

interface ComplianceSectionProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const ComplianceSection = ({ icon, title, items }: ComplianceSectionProps) => {
  return (
    <div className="cyber-card">
      <div className="flex items-start gap-6">
        <div className="text-zarkorb-cyan mt-1">{icon}</div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">{title}</h2>
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li key={index} className="text-gray-300 flex items-start gap-2">
                <span className="text-zarkorb-cyan mt-1.5 shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

interface PolicyLinkProps {
  icon: React.ReactNode;
  title: string;
}

const PolicyLink = ({ icon, title }: PolicyLinkProps) => {
  return (
    <a href="#" className="flex items-center gap-2 px-6 py-3 border border-zarkorb-cyan rounded-md text-zarkorb-cyan hover:bg-zarkorb-cyan/10 transition-colors">
      {icon}
      <span>{title}</span>
    </a>
  );
};

export default LegalPage;
