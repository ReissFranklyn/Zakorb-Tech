
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

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

        <div className="grid md:grid-cols-2 gap-8">
          <div className="cyber-card">
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-zarkorb-cyan mt-1 mr-4" size={20} />
                <div>
                  <p className="font-medium text-white">Global Offices</p>
                  <p className="text-gray-300">London • Kyiv • Dubai</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-zarkorb-cyan mt-1 mr-4" size={20} />
                <div>
                  <p className="font-medium text-white">Email Us</p>
                  <p className="text-gray-300">contact@zarkorb.tech</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-zarkorb-cyan mt-1 mr-4" size={20} />
                <div>
                  <p className="font-medium text-white">Call Us</p>
                  <p className="text-gray-300">+44 20 1234 5678</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="cyber-card">
            <h3 className="text-xl font-bold text-white mb-6">Send Us a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-zarkorb-grid border border-zarkorb-cyan/30 text-white rounded p-2 focus:border-zarkorb-cyan focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-zarkorb-grid border border-zarkorb-cyan/30 text-white rounded p-2 focus:border-zarkorb-cyan focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-zarkorb-grid border border-zarkorb-cyan/30 text-white rounded p-2 focus:border-zarkorb-cyan focus:outline-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-zarkorb-cyan text-black font-bold py-2 rounded hover:bg-zarkorb-cyan/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
