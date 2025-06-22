import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Globe, Award, Users, Target } from 'lucide-react';
import WhatsAppButton from '../components/features/WhatsAppButton';

const AboutPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative h-80 mb-16">
          <img 
            src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="About Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
            <div className="container-custom">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Triloki Global</h1>
                <p className="text-xl text-neutral-200">
                  Bridging Indian agriculture with global markets through technology and tradition.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom">
          {/* Company Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  Founded in 2020, Triloki Global emerged from a vision to revolutionize agricultural exports 
                  by combining traditional farming wisdom with cutting-edge technology. Our journey began with 
                  a simple mission: to make premium Indian agricultural products accessible to global markets 
                  while ensuring fair returns for farmers.
                </p>
                <p>
                  Today, we stand as a leading agricultural export company, known for our commitment to quality, 
                  sustainability, and innovation. Our AI-powered quality control systems, transparent supply chain, 
                  and customer-centric approach have earned us the trust of clients across 40+ countries.
                </p>
                <p>
                  What sets us apart is our holistic approach to agricultural exports. We don't just trade 
                  commodities; we create value through careful sourcing, processing, and delivery, ensuring 
                  every product meets international standards while maintaining its authentic characteristics.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">40+</div>
                  <div className="text-neutral-600">Countries Served</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">5000+</div>
                  <div className="text-neutral-600">Metric Tons Exported</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
                  <div className="text-neutral-600">Partner Farmers</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                  <div className="text-neutral-600">Quality Assured</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Farming" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
              <img 
                src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/11/agriculturalwarehouse3.jpg?auto=compress&cs=tinysrgb&w=800" 
                alt="Processing" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
              <img 
                src="https://images.prismic.io/completefarmer/ef1ebd32-19d0-4c8c-a4ff-7118a64709f5_CF-mesh-packaging-for-export.png?auto=compress&cs=tinysrgb&w=800" 
                alt="Quality Control" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
              <img 
                src="https://cpimg.tistatic.com/1850746/b/5/fresh-baby-corn.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Shipping" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Vision and Mission */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Vision & Mission</h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                We're driven by a clear vision and mission to transform agricultural exports through 
                technology and sustainable practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-neutral-600">
                  To become the most trusted name in agricultural exports by combining traditional knowledge 
                  with cutting-edge technology, ensuring premium quality products reach global markets while 
                  supporting sustainable farming practices.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-neutral-600">
                  To bridge the gap between Indian farmers and international markets, creating sustainable 
                  value chains that benefit all stakeholders while maintaining the highest quality standards 
                  and embracing technological innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                These principles guide every aspect of our operations and relationships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Excellence</h3>
                <p className="text-neutral-600">
                  Unwavering commitment to maintaining the highest quality standards in every product and process.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Farmer Partnership</h3>
                <p className="text-neutral-600">
                  Building strong, sustainable relationships with our farming communities through fair practices.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Standards</h3>
                <p className="text-neutral-600">
                  Adhering to international quality standards and certifications across our operations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation Focus</h3>
                <p className="text-neutral-600">
                  Continuously improving through technology adoption and process innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Leadership Team */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Leadership</h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Meet the visionaries leading Triloki Global's mission to transform agricultural exports.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400" 
                    alt="Manav Gandhi" 
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Manav Gandhi</h3>
                    <p className="text-primary-600 font-medium mb-4">Co-Founder & CEO</p>
                    <p className="text-neutral-600 mb-4">
                      With over 15 years of experience in international trade, Manav has transformed traditional 
                      export processes through technology integration. His vision is to make Indian agricultural 
                      products the gold standard in global markets.
                    </p>
                    <div className="flex space-x-4">
                      <a href="#" className="text-neutral-400 hover:text-primary-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                          <rect width="4" height="12" x="2" y="9"/>
                          <circle cx="4" cy="4" r="2"/>
                        </svg>
                      </a>
                      <a href="#" className="text-neutral-400 hover:text-primary-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <img 
                    src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400" 
                    alt="Mriganchal Singh" 
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Mriganchal Singh</h3>
                    <p className="text-primary-600 font-medium mb-4">Co-Founder & COO</p>
                    <p className="text-neutral-600 mb-4">
                      Mriganchal brings deep agricultural expertise to Triloki Global, focusing on sustainable 
                      sourcing and quality control. His network of farmers and processors ensures we deliver 
                      only the finest products to our global clients.
                    </p>
                    <div className="flex space-x-4">
                      <a href="#" className="text-neutral-400 hover:text-primary-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                          <rect width="4" height="12" x="2" y="9"/>
                          <circle cx="4" cy="4" r="2"/>
                        </svg>
                      </a>
                      <a href="#" className="text-neutral-400 hover:text-primary-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Global Presence */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Global Presence</h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                From sourcing to delivery, we maintain quality across our global operations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Processing Units</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />
                    <span>Gujarat - Spice Processing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />
                    <span>Rajasthan - Seed Processing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />
                    <span>Madhya Pradesh - Grain Processing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />
                    <span>Maharashtra - Packaging Unit</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Export Markets</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />
                    <span>North America - USA, Canada</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />
                    <span>Europe - UK, Germany, France</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />
                    <span>Middle East - UAE, Saudi Arabia</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />
                    <span>Asia Pacific - Japan, Australia</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Quality Certifications</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />
                    <span>FSSAI Certified</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />
                    <span>APEDA Registered</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />
                    <span>ISO 22000:2018</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />
                    <span>Organic Certification</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-primary-600 text-white rounded-lg p-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Partner with Triloki Global</h2>
              <p className="text-primary-100 mb-8">
                Join us in our mission to deliver premium Indian agricultural products to global markets.
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

export default AboutPage;