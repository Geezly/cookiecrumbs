'use client';

import Image from 'next/image';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ];

  const quickLinks = [
    { name: 'Order', href: '#order' },
    { name: 'Event', href: '#event' },
    { name: 'Merch', href: '/Merch' },
    { name: 'About Us', href: '#about' },
  ];

  const contactInfo = [
    { icon: Phone, text: '+62 812-3456-7890', href: 'tel:+6281234567890' },
    { icon: Mail, text: 'hello@rosecrumbs.com', href: 'mailto:hello@rosecrumbs.com' },
    { icon: MapPin, text: 'Jakarta, Indonesia', href: '#' },
  ];

  return (
    <footer className="bg-[#D4C0A3] relative overflow-hidden font-fraunces">
      {/* Decorative border top */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#8B5E3C] via-opacity-30 to-transparent"></div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="relative w-24 h-24 transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/logo-text.png"
                alt="Rose Crumbs Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-[#5C3D2E] text-center md:text-left text-sm leading-relaxed">
              Delicious artisan baked goods made with love and the finest ingredients.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="bg-[#8B5E3C] text-white p-2.5 rounded-full hover:bg-[#A87C55] transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[#5C3D2E] font-bold text-lg mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#8B5E3C]"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#5C3D2E] hover:text-[#A87C55] transition-colors duration-300 relative group inline-block"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#8B5E3C] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[#5C3D2E] font-bold text-lg mb-4 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#8B5E3C]"></span>
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <li key={index}>
                    <a
                      href={contact.href}
                      className="flex items-center gap-3 text-[#5C3D2E] hover:text-[#A87C55] transition-colors duration-300 group"
                    >
                      <Icon size={18} className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm">{contact.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[#5C3D2E] font-bold text-lg mb-4 relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#8B5E3C]"></span>
            </h3>
            <p className="text-[#5C3D2E] text-sm mb-4 text-center md:text-left">
              Subscribe for special offers and updates
            </p>
            <form className="w-full max-w-sm">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 rounded-full border-2 border-[#8B5E3C] border-opacity-40 focus:border-[#8B5E3C] focus:outline-none transition-colors duration-300 text-[#5C3D2E] placeholder-[#5C3D2E] placeholder-opacity-50 font-fraunces"
                />
                <button
                  type="submit"
                  className="bg-[#8B5E3C] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#A87C55] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#8B5E3C] border-opacity-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#5C3D2E] text-sm text-center md:text-left">
              © {currentYear} Rose Crumbs. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#privacy"
                className="text-[#5C3D2E] text-sm hover:text-[#A87C55] transition-colors duration-300 relative group"
              >
                Privacy Policy
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#8B5E3C] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#terms"
                className="text-[#5C3D2E] text-sm hover:text-[#A87C55] transition-colors duration-300 relative group"
              >
                Terms of Service
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#8B5E3C] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#8B5E3C] opacity-10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-0 left-0 w-48 h-48 bg-[#8B5E3C] opacity-10 rounded-full blur-3xl -z-10"></div>
    </footer>
  );
}