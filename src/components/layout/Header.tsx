import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Set initial scroll state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const isHomePage = window.location.pathname === '/';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-lg font-medium ${isScrolled || !isHomePage ? 'text-neutral-800 hover:text-primary-600' : 'text-white hover:text-secondary-300'} transition-colors ${isActive ? 'text-primary-600' : ''}`
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `text-lg font-medium ${isScrolled || !isHomePage ? 'text-neutral-800 hover:text-primary-600' : 'text-white hover:text-secondary-300'} transition-colors ${isActive ? 'text-primary-600' : ''}`
            }
            onClick={closeMenu}
          >
            About Us
          </NavLink>
          
          {/* Products Dropdown */}
          <div className="relative" onMouseEnter={() => setActiveDropdown('products')} onMouseLeave={() => setActiveDropdown(null)}>
            <NavLink 
              to="/products" 
              className={({ isActive }) => 
                `text-lg font-medium ${isScrolled || !isHomePage ? 'text-neutral-800 hover:text-primary-600' : 'text-white hover:text-secondary-300'} transition-colors flex items-center ${isActive ? 'text-primary-600' : ''}`
              }
            >
              <span>Products</span>
              <ChevronDown className="ml-1 w-4 h-4" />
            </NavLink>
            
            {activeDropdown === 'products' && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-20">
                <Link to="/products/spices" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600">
                  Spices
                </Link>
                <Link to="/products/grains" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600">
                  Grains
                </Link>
                <Link to="/products/pulses" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600">
                  Pulses
                </Link>
                <Link to="/products/tea" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600">
                  Tea
                </Link>
                <Link to="/products/others" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600">
                  Others
                </Link>
              </div>
            )}
          </div>
          
          <NavLink 
            to="/why-choose-us" 
            className={({ isActive }) => 
              `text-lg font-medium ${isScrolled || !isHomePage ? 'text-neutral-800 hover:text-primary-600' : 'text-white hover:text-secondary-300'} transition-colors ${isActive ? 'text-primary-600' : ''}`
            }
            onClick={closeMenu}
          >
            Why Choose Us
          </NavLink>
          
          <NavLink 
            to="/export-process" 
            className={({ isActive }) => 
              `text-lg font-medium ${isScrolled || !isHomePage ? 'text-neutral-800 hover:text-primary-600' : 'text-white hover:text-secondary-300'} transition-colors ${isActive ? 'text-primary-600' : ''}`
            }
            onClick={closeMenu}
          >
            Export Process
          </NavLink>
          
          <NavLink 
            to="/gallery" 
            className={({ isActive }) => 
              `text-lg font-medium ${isScrolled || !isHomePage ? 'text-neutral-800 hover:text-primary-600' : 'text-white hover:text-secondary-300'} transition-colors ${isActive ? 'text-primary-600' : ''}`
            }
            onClick={closeMenu}
          >
            Gallery
          </NavLink>
          
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `text-lg font-medium ${isScrolled || !isHomePage ? 'text-neutral-800 hover:text-primary-600' : 'text-white hover:text-secondary-300'} transition-colors ${isActive ? 'text-primary-600' : ''}`
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </nav>

        {/* Call to Action Button */}
        <Link to="/contact" className="hidden md:block btn-primary">
          Get a Quote
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className={`lg:hidden ${isScrolled || !isHomePage ? 'text-neutral-800' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 right-0 shadow-md">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-lg font-medium px-4 py-2 rounded-md transition-colors ${isActive ? 'bg-primary-50 text-primary-600' : 'text-neutral-800'}`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
            
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-lg font-medium px-4 py-2 rounded-md transition-colors ${isActive ? 'bg-primary-50 text-primary-600' : 'text-neutral-800'}`
              }
              onClick={closeMenu}
            >
              About Us
            </NavLink>
            
            {/* Products Dropdown (Mobile) */}
            <div>
              <button
                className="w-full text-left flex justify-between items-center text-lg font-medium px-4 py-2 rounded-md transition-colors"
                onClick={() => toggleDropdown('products')}
              >
                <span>Products</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'products' && (
                <div className="mt-2 pl-8 space-y-2">
                  <NavLink 
                    to="/products/seeds" 
                    className={({ isActive }) => 
                      `block px-4 py-2 rounded-md transition-colors ${isActive ? 'bg-primary-50 text-primary-600' : 'text-neutral-700'}`
                    }
                    onClick={closeMenu}
                  >
                    Seeds
                  </NavLink>
                  <NavLink 
                    to="/products/grains" 
                    className={({ isActive }) => 
                      `block px-4 py-2 rounded-md transition-colors ${isActive ? 'bg-primary-50 text-primary-600' : 'text-neutral-700'}`
                    }
                    onClick={closeMenu}
                  >
                    Grains
                  </NavLink>
                  <NavLink 
                    to="/products/spices" 
                    className={({ isActive }) => 
                      `block px-4 py-2 rounded-md transition-colors ${isActive ? 'bg-primary-50 text-primary-600' : 'text-neutral-700'}`
                    }
                    onClick={closeMenu}
                  >
                    Spices
                  </NavLink>
                </div>
              )}
            </div>
            
            <NavLink 
              to="/why-choose-us" 
              className={({ isActive }) => 
                `text-lg font-medium px-4 py-2 rounded-md transition-colors ${isActive ? 'bg-primary-50 text-primary-600' : 'text-neutral-800'}`
              }
              onClick={closeMenu}
            >
              Why Choose Us
            </NavLink>
            
            <NavLink 
              to="/export-process" 
              className={({ isActive }) => 
                `text-lg font-medium px-4 py-2 rounded-md transition-colors ${isActive ? 'bg-primary-50 text-primary-600' : 'text-neutral-800'}`
              }
              onClick={closeMenu}
            >
              Export Process
            </NavLink>
            
            <NavLink 
              to="/gallery" 
              className={({ isActive }) => 
                `text-lg font-medium px-4 py-2 rounded-md transition-colors ${isActive ? 'bg-primary-50 text-primary-600' : 'text-neutral-800'}`
              }
              onClick={closeMenu}
            >
              Gallery
            </NavLink>
            
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `text-lg font-medium px-4 py-2 rounded-md transition-colors ${isActive ? 'bg-primary-50 text-primary-600' : 'text-neutral-800'}`
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
            
            <Link to="/contact" className="btn-primary text-center" onClick={closeMenu}>
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;