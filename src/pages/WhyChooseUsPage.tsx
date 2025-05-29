import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Globe, Award, Shield, Truck, Users, Target } from 'lucide-react';
import WhatsAppButton from '../components/features/WhatsAppButton';

const WhyChooseUsPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative h-64 mb-16">
          <img 
            src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Why Choose Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
            <div className="container-custom">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Us</h1>
                <p className="text-xl text-neutral-200">
                  Discover what makes Triloki Global the preferred choice for agricultural exports.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom">
          {/* Key Features */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Unique Advantages</h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                We combine traditional agricultural expertise with modern technology to deliver 
                premium quality products and exceptional service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-neutral-600 mb-4">
                  Our products undergo rigorous quality control at every stage, from sourcing to delivery.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Sourced from specialized growing regions
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Multiple quality checks during processing
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    International quality certifications
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                <p className="text-neutral-600 mb-4">
                  Serving clients across 40+ countries with customized solutions for different markets.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Established export infrastructure
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Market-specific packaging
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    International compliance expertise
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-neutral-600 mb-4">
                  Comprehensive quality management system ensuring product excellence.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    State-of-the-art testing facilities
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Documented quality procedures
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Regular third-party audits
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Reliable Shipping</h3>
                <p className="text-neutral-600 mb-4">
                  Efficient logistics network ensuring timely delivery worldwide.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Multiple shipping options
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Real-time shipment tracking
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Complete documentation support
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
                <p className="text-neutral-600 mb-4">
                  Dedicated team providing personalized assistance at every step.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    24/7 AI-powered support
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Multilingual assistance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Quick response time
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
                <p className="text-neutral-600 mb-4">
                  Direct sourcing and efficient operations enable competitive pricing.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Transparent pricing model
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Volume-based discounts
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Flexible payment terms
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technology Integration */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Technology Integration</h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                We leverage cutting-edge technology to enhance every aspect of our operations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">AI-Powered Solutions</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-2 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                        <path d="M12 8V4H8"/>
                        <rect width="16" height="12" x="4" y="8" rx="2"/>
                        <path d="M2 14h2"/>
                        <path d="M20 14h2"/>
                        <path d="M15 13v2"/>
                        <path d="M9 13v2"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">24/7 AI Chatbot Support</h4>
                      <p className="text-neutral-600 text-sm">
                        Instant responses to queries and product recommendations based on requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-100 p-2 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                        <path d="M3 3v18h18"/>
                        <path d="m19 9-5 5-4-4-3 3"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Quality Analysis</h4>
                      <p className="text-neutral-600 text-sm">
                        Advanced image processing for quality grading and consistency checks.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-100 p-2 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                        <path d="M3 3v5h5"/>
                        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/>
                        <path d="M16 16h5v5"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Automated Processing</h4>
                      <p className="text-neutral-600 text-sm">
                        Smart processing systems for consistent product quality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Digital Infrastructure</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-2 rounded-full mr-3 mt-1">
                
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                        <rect width="18" height="18" x="3" y="3" rx="2"/>
                        <path d="M7 7h10"/>
                        <path d="M7 12h10"/>
                        <path d="M7 17h10"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Order Management</h4>
                      <p className="text-neutral-600 text-sm">
                        Digital tracking and management of orders from inquiry to delivery.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-100 p-2 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Quality Tracking</h4>
                      <p className="text-neutral-600 text-sm">
                        Digital quality management system with real-time monitoring.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-100 p-2 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Performance Analytics</h4>
                      <p className="text-neutral-600 text-sm">
                        Data-driven insights for continuous improvement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Don't just take our word for it - hear from our satisfied clients worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-neutral-600">JT</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">James Thompson</h4>
                    <p className="text-sm text-neutral-600">Spice Imports LLC, USA</p>
                  </div>
                </div>
                <p className="text-neutral-600 mb-4">
                  "We've been importing turmeric from Triloki Global for three years now. Their consistent 
                  quality and on-time deliveries have made them our preferred supplier."
                </p>
                <div className="flex text-secondary-400">★★★★★</div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-neutral-600">ML</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Maria Lopes</h4>
                    <p className="text-sm text-neutral-600">Gourmet Foods, Spain</p>
                  </div>
                </div>
                <p className="text-neutral-600 mb-4">
                  "The quality of sesame seeds we receive from Triloki Global is consistently excellent. 
                  Their documentation and export process is smooth and hassle-free."
                </p>
                <div className="flex text-secondary-400">★★★★★</div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-neutral-600">AK</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Ahmad Khalid</h4>
                    <p className="text-sm text-neutral-600">Premium Foods, UAE</p>
                  </div>
                </div>
                <p className="text-neutral-600 mb-4">
                  "What sets Triloki Global apart is their attention to detail. From packaging to handling 
                  customs documentation, everything is managed professionally."
                </p>
                <div className="flex text-secondary-400">★★★★★</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-primary-600 text-white rounded-lg p-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
              <p className="text-primary-100 mb-8">
                Join our growing network of satisfied clients and experience premium quality agricultural exports.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact" className="btn-secondary">
                  Contact Us Now
                </Link>
                <Link to="/products" className="btn bg-white text-primary-600 hover:bg-neutral-100">
                  View Our Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppButton />
    </>
  );
};

export default WhyChooseUsPage;