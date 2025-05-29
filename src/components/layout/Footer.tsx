import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="col-span-1">
            <Logo className="h-12 w-auto mb-4" />
            <p className="mb-6 text-neutral-300">
              Premier exporter of premium quality seeds, grains, and spices, connecting global buyers with India's finest agricultural produce.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center transition-colors hover:bg-primary-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center transition-colors hover:bg-primary-600">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center transition-colors hover:bg-primary-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center transition-colors hover:bg-primary-600">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/export-process" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Export Process
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Product Categories */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-6 text-white">Product Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/seeds" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Seeds
                </Link>
              </li>
              <li>
                <Link to="/products/grains" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Grains
                </Link>
              </li>
              <li>
                <Link to="/products/spices" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Spices
                </Link>
              </li>
              <li>
                <Link to="/products/spices/turmeric" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Turmeric
                </Link>
              </li>
              <li>
                <Link to="/products/spices/black-pepper" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Black Pepper
                </Link>
              </li>
              <li>
                <Link to="/products/grains/rice" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Rice
                </Link>
              </li>
              <li>
                <Link to="/products/seeds/sesame" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Sesame Seeds
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-primary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-neutral-300">
                  123 Export Plaza, Business District, <br />
                  New Delhi - 110001, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                <a href="mailto:info@trilokiglobal.com" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  info@trilokiglobal.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Certifications and Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-neutral-400 text-sm">
              © {currentYear} Triloki Global. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-neutral-400 text-sm">Certifications:</span>
              <img 
                src="https://raw.githubusercontent.com/yourusername/triloki-global/main/src/assets/apeda-logo.png" 
                alt="APEDA" 
                className="h-8" 
              />
              <img 
                src="https://raw.githubusercontent.com/yourusername/triloki-global/main/src/assets/fssai-logo.png" 
                alt="FSSAI" 
                className="h-8" 
              />
              <img 
                src="https://raw.githubusercontent.com/yourusername/triloki-global/main/src/assets/organic-logo.png" 
                alt="Organic Certified" 
                className="h-8" 
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;