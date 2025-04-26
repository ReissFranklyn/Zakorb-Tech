
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-black/80 backdrop-blur-md py-3' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-zarkorb-cyan font-orbitron text-2xl font-bold">
            ZARKORB
            <span className="text-white text-xs ml-1 tracking-wider align-top">TECH</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#case-studies">Case Studies</NavLink>
          <NavLink href="#team">Our Team</NavLink>
          <NavLink href="#contact" isButton>Contact Us</NavLink>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white hover:text-zarkorb-cyan transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zarkorb-grid border-t border-zarkorb-cyan/20">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink href="#services" onClick={() => setMobileMenuOpen(false)}>Services</MobileNavLink>
            <MobileNavLink href="#case-studies" onClick={() => setMobileMenuOpen(false)}>Case Studies</MobileNavLink>
            <MobileNavLink href="#team" onClick={() => setMobileMenuOpen(false)}>Our Team</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children, isButton = false }: { href: string, children: React.ReactNode, isButton?: boolean }) => {
  return (
    <a
      href={href}
      className={cn(
        'font-medium transition-all duration-300 text-sm tracking-wide glitch-hover',
        isButton 
          ? 'py-2 px-4 border border-zarkorb-cyan text-zarkorb-cyan hover:bg-zarkorb-cyan/10 rounded' 
          : 'text-white hover:text-zarkorb-cyan'
      )}
    >
      {children}
    </a>
  );
};

const MobileNavLink = ({ href, children, onClick }: { href: string, children: React.ReactNode, onClick: () => void }) => {
  return (
    <a
      href={href}
      className="block py-2 text-white hover:text-zarkorb-cyan font-medium text-lg transition-colors"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Navbar;
