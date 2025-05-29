import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" 
          alt="Agricultural background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container-custom relative z-10 pt-32 md:pt-40 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white animate-fade-in">
            <div className="mb-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-8">
                <span className="text-secondary-400 text-lg font-medium">Welcome to Triloki Global</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-neutral-300">
                  Premium Indian
                </span>
                <div className="relative mt-4">
                  <span className="text-secondary-400">Agricultural Exports</span>
                  <div className="absolute -bottom-4 left-0 h-1 w-32 bg-gradient-to-r from-secondary-400 to-secondary-400/50"></div>
                </div>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-neutral-200 mb-8 max-w-xl leading-relaxed">
              Connecting global markets with India's finest seeds, grains & spices through innovation and excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/products" 
                className="btn-primary text-lg px-8 py-4 group transition-all duration-300 hover:translate-y-[-2px]"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/contact" 
                className="btn-outline bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20 text-lg px-8 py-4"
              >
                Request a Quote
              </Link>
            </div>
            
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <div className="flex items-center">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                  <img 
                    src="https://5.imimg.com/data5/SELLER/Default/2024/12/475699502/RM/KS/KK/44636240/apeda-certification.jpg" 
                    alt="APEDA Certified" 
                    className="h-12 w-12 object-contain" 
                  />
                </div>
                <span className="ml-3 text-lg text-neutral-200">APEDA Certified</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                  <img 
                    src="https://vectorconversion.net/wp-content/uploads/2019/11/fssai-01.jpg" 
                    alt="FSSAI Approved" 
                    className="h-12 w-12 object-contain" 
                  />
                </div>
                <span className="ml-3 text-lg text-neutral-200">FSSAI Approved</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                  <img 
                    src="https://w7.pngwing.com/pngs/237/227/png-transparent-organic-food-medical-cannabis-organic-certification-organic-farming-cannabis-food-label-logo-thumbnail.png" 
                    alt="Organic Certified" 
                    className="h-12 w-12 object-contain" 
                  />
                </div>
                <span className="ml-3 text-lg text-neutral-200">Organic Certified</span>
              </div>
            </div>
          </div>
          
          {/* Lead Form */}
          <div className="lg:ml-auto hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-xl max-w-md border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get Our Product Catalog</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-md bg-white/10 text-white placeholder-neutral-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-secondary-400 transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-md bg-white/10 text-white placeholder-neutral-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-secondary-400 transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary-500 hover:bg-secondary-600 text-white py-3 rounded-md font-medium transition-all duration-300 hover:translate-y-[-2px]"
                >
                  Download Brochure
                </button>
                <p className="text-xs text-neutral-300 text-center">
                  By submitting, you agree to our privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;