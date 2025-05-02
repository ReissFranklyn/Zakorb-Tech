
import React from 'react';
import { Mail, MapPin, Phone, Twitter, Instagram, Github } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Get In <span className="text-zarkorb-cyan glow-text">Touch</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to discuss your international tech needs? Our multilingual team is here to help your business expand globally.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="cyber-card p-6 md:p-10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-8 text-center">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start">
                <MapPin className="text-zarkorb-cyan mt-1 mr-4" size={24} />
                <div>
                  <p className="font-medium text-white">International Offices</p>
                  <p className="text-gray-300">London, United Kingdom</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-zarkorb-cyan mt-1 mr-4" size={24} />
                <div>
                  <p className="font-medium text-white">Email Us</p>
                  <p className="text-gray-300">Info@zarkorb.co.uk</p>
                </div>
              </div>
{/*               
              <div className="flex items-start">
                <Phone className="text-zarkorb-cyan mt-1 mr-4" size={24} />
                <div>
                  <p className="font-medium text-white">Call Us</p>
                  <p className="text-gray-300">+44 (0)7553 113774</p>
                </div>
              </div> */}
              
              <div className="flex items-start">
                <Twitter className="text-zarkorb-cyan mt-1 mr-4" size={24} />
                <div>
                  <p className="font-medium text-white">Twitter</p>
                  <p className="text-gray-300">
                    <a href="https://x.com/zarkorb?s=21" target="_blank" rel="noopener noreferrer" className="hover:text-zarkorb-cyan transition-colors">
                      @zarkorb
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Instagram className="text-zarkorb-cyan mt-1 mr-4" size={24} />
                <div>
                  <p className="font-medium text-white">Instagram</p>
                  <p className="text-gray-300">
                    <a href="https://www.instagram.com/zarkorb?igsh=YzVlcWVodmtzazZ6" target="_blank" rel="noopener noreferrer" className="hover:text-zarkorb-cyan transition-colors">
                      @zarkorb
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Github className="text-zarkorb-cyan mt-1 mr-4" size={24} />
                <div>
                  <p className="font-medium text-white">Github</p>
                  <p className="text-gray-300">
                    <a href="https://github.com/ReissFranklyn" target="_blank" rel="noopener noreferrer" className="hover:text-zarkorb-cyan transition-colors">
                      @ReissFranklyn
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
