import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Globe, Truck, Shield, Award, TrendingUp, Sparkles } from 'lucide-react';

import Hero from '../components/sections/Hero';
import LeadMagnetForm from '../components/features/LeadMagnetForm';
import WhatsAppButton from '../components/features/WhatsAppButton';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mx-auto">Why Choose Triloki Global</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We combine traditional agricultural expertise with modern technology to deliver 
              premium quality products that meet international standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card p-6 hover:border-l-4 hover:border-l-primary-500 transition-all">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-neutral-600">
                Stringent quality control measures ensure our products meet international standards and 
                certifications, including FSSAI, APEDA, and organic certifications.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="card p-6 hover:border-l-4 hover:border-l-primary-500 transition-all">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-neutral-600">
                With exports to over 40 countries, we understand international market requirements
                and offer customized solutions for different regions.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="card p-6 hover:border-l-4 hover:border-l-primary-500 transition-all">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Truck className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliable Shipping</h3>
              <p className="text-neutral-600">
                Efficient logistics network ensures timely delivery with complete documentation
                and real-time tracking for peace of mind.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="card p-6 hover:border-l-4 hover:border-l-primary-500 transition-all">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Products</h3>
              <p className="text-neutral-600">
                All our products come with necessary certifications and quality assurance documents,
                ensuring compliance with international standards.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="card p-6 hover:border-l-4 hover:border-l-primary-500 transition-all">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
              <p className="text-neutral-600">
                Direct sourcing from farmers and efficient operations allow us to offer premium quality 
                at competitive prices with transparent pricing models.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="card p-6 hover:border-l-4 hover:border-l-primary-500 transition-all">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Support</h3>
              <p className="text-neutral-600">
                Our AI-powered chatbot and recommendation systems provide 24/7 assistance and personalized 
                product suggestions based on your requirements.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/why-choose-us" className="btn-primary inline-flex items-center">
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-neutral-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mx-auto">Featured Products</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Explore our premium selection of seeds, grains, and spices that have made us a trusted name
              in agricultural exports worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="product-item card overflow-hidden group">
              <div className="relative overflow-hidden h-64">
                <img 
                  src="https://5.imimg.com/data5/SELLER/Default/2024/7/431745160/VH/IT/HH/40841925/nizamabad-double-polish-turmeric-finger.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Turmeric Finger" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end product-overlay">
                  <div className="p-4 w-full">
                    <Link to="/products/spices/turmeric" className="btn-primary w-full">View Details</Link>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">Turmeric Finger</h3>
                  <span className="bg-secondary-100 text-secondary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Spices</span>
                </div>
                <p className="text-neutral-600 mb-4">Premium quality Nizamabad turmeric fingers with high curcumin content.</p>
                <div className="flex items-center text-sm text-neutral-500">
                  <span>Available Grades: </span>
                  <span className="ml-2 font-medium text-neutral-700">Nizamabad, Salem, Erode</span>
                </div>
              </div>
            </div>
            
            {/* Product 2 */}
            <div className="product-item card overflow-hidden group">
              <div className="relative overflow-hidden h-64">
                <img 
                  src="https://shorturl.at/eTYvl?auto=compress&cs=tinysrgb&w=800" 
                  alt="Basmati Rice" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end product-overlay">
                  <div className="p-4 w-full">
                    <Link to="/products/grains/rice" className="btn-primary w-full">View Details</Link>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">Basmati Rice</h3>
                  <span className="bg-secondary-100 text-secondary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Grains</span>
                </div>
                <p className="text-neutral-600 mb-4">Long-grain aromatic rice known for its distinctive fragrance and flavor.</p>
                <div className="flex items-center text-sm text-neutral-500">
                  <span>Available Grades: </span>
                  <span className="ml-2 font-medium text-neutral-700">1121, Pusa, Traditional</span>
                </div>
              </div>
            </div>
            
            {/* Product 3 */}
            <div className="product-item card overflow-hidden group">
              <div className="relative overflow-hidden h-64">
                <img 
                  src="https://5.imimg.com/data5/ANDROID/Default/2023/2/YT/RC/TF/29832167/product-jpeg-1000x1000.jpg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Fresh Onion" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end product-overlay">
                  <div className="p-4 w-full">
                    <Link to="/products/others/onion" className="btn-primary w-full">View Details</Link>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">Sesame Seeds</h3>
                  <span className="bg-secondary-100 text-secondary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Seeds</span>
                </div>
                <p className="text-neutral-600 mb-4">Natural, hulled, and toasted varieties available for diverse culinary applications.</p>
                <div className="flex items-center text-sm text-neutral-500">
                  <span>Available Types: </span>
                  <span className="ml-2 font-medium text-neutral-700">Natural, Hulled, Toasted</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary inline-flex items-center">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Export Process Section */}
      {/* Export Process Section */}
<section className="py-20 bg-white">
  <div className="container-custom">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-extrabold text-neutral-900 relative inline-block">
        Our Export Process
        <div className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-20 h-1 bg-green-500 rounded-full"></div>
      </h2>
      <p className="text-lg text-neutral-600 mt-4 max-w-2xl mx-auto">
        We've streamlined our export process to ensure efficient, reliable, and transparent
        transactions for our global clients.
      </p>
    </div>

    {/* Steps with Line Connector */}
    <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6">
      {/* Horizontal connector line for large screens */}
      <div className="hidden lg:block absolute top-14 left-0 right-0 h-1 bg-green-100 z-0"></div>

      {[{
        number: "1",
        title: "Inquiry & Consultation",
        desc: "Send us your requirements, and our team will provide personalized recommendations and quotes."
      }, {
        number: "2",
        title: "Sampling & Quality Approval",
        desc: "We send product samples for your evaluation to ensure they meet your specific requirements."
      }, {
        number: "3",
        title: "Order Confirmation",
        desc: "Once specifications are finalized, we secure your order with detailed terms and conditions."
      }, {
        number: "4",
        title: "Shipping & Delivery",
        desc: "We handle all documentation, logistics, and provide real-time tracking until delivery."
      }].map((step, index) => (
        <div key={index} className="relative z-10 flex flex-col items-center text-center group">
          <div className="w-20 h-20 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-3xl font-bold shadow-md group-hover:scale-110 transition-transform duration-300">
            {step.number}
          </div>
          <h3 className="text-xl font-semibold mt-4 mb-2">{step.title}</h3>
          <p className="text-neutral-600 max-w-xs">{step.desc}</p>
        </div>
      ))}
    </div>

    {/* CTA Button */}
    <div className="text-center mt-16">
      <Link 
        to="/export-process" 
        className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white text-lg rounded-full shadow-lg transition-transform hover:-translate-y-1"
      >
        Explore Complete Process
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </div>
  </div>
</section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-neutral-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mx-auto text-white">What Our Clients Say</h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              We take pride in building long-term relationships with our clients based on trust, quality, and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-neutral-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-neutral-700 flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-white">JT</span>
                </div>
                <div>
                  <h4 className="font-semibold">James Thompson</h4>
                  <p className="text-sm text-neutral-400">Spice Imports LLC, USA</p>
                </div>
              </div>
              <p className="text-neutral-300 mb-4">
                "We've been importing turmeric from Triloki Global for three years now. Their consistent quality 
                and on-time deliveries have made them our preferred supplier. The AI recommendations actually 
                helped us discover new products we hadn't considered before."
              </p>
              <div className="flex text-secondary-400">
                ★★★★★
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-neutral-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-neutral-700 flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-white">ML</span>
                </div>
                <div>
                  <h4 className="font-semibold">Maria Lopes</h4>
                  <p className="text-sm text-neutral-400">Gourmet Foods, Spain</p>
                </div>
              </div>
              <p className="text-neutral-300 mb-4">
                "The quality of sesame seeds we receive from Triloki Global is consistently excellent. Their 
                documentation and export process is smooth and hassle-free, making international transactions 
                much easier than with previous suppliers."
              </p>
              <div className="flex text-secondary-400">
                ★★★★★
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-neutral-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-neutral-700 flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-white">AK</span>
                </div>
                <div>
                  <h4 className="font-semibold">Ahmad Khalid</h4>
                  <p className="text-sm text-neutral-400">Premium Foods, UAE</p>
                </div>
              </div>
              <p className="text-neutral-300 mb-4">
                "What sets Triloki Global apart is their attention to detail. From packaging to handling customs 
                documentation, everything is managed professionally. Their basmati rice has become a best-seller 
                in our stores across the Middle East."
              </p>
              <div className="flex text-secondary-400">
                ★★★★★
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <circle id="pattern-circle" cx="10" cy="10" r="5" fill="white"></circle>
            </pattern>
            <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
          </svg>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Ready to Import Premium Indian Agricultural Products?
              </h2>
              <p className="text-lg text-primary-100 mb-8">
                Join our global network of satisfied clients and experience the perfect blend of tradition and technology
                in agricultural exports.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary-400 mr-2 flex-shrink-0" />
                  <span>Premium quality products with international certifications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary-400 mr-2 flex-shrink-0" />
                  <span>Competitive pricing with transparent terms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary-400 mr-2 flex-shrink-0" />
                  <span>End-to-end export assistance and documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary-400 mr-2 flex-shrink-0" />
                  <span>AI-powered support and recommendations</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact" className="btn-secondary">
                  Contact Us Now
                </Link>
                <Link to="/products" className="btn bg-white text-primary-600 hover:bg-neutral-100">
                  View Products
                </Link>
              </div>
            </div>
            
            <div className="lg:ml-auto">
              <LeadMagnetForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Founder Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mx-auto">Our Leadership</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Meet the visionaries behind Triloki Global, blending traditional knowledge with modern technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Founder 1 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400"
                  alt="Manav Gandhi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Manav Gandhi</h3>
                <p className="text-primary-600 font-medium mb-4">Co-Founder & CEO</p>
                <p className="text-neutral-600 mb-4">
                  With over 15 years of experience in international trade, Manav has transformed traditional export 
                  processes through technology integration. His vision is to make Indian agricultural products the 
                  gold standard in global markets.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-neutral-500 hover:text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect width="4" height="12" x="2" y="9"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>
                  <a href="#" className="text-neutral-500 hover:text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Founder 2 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                <img 
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400"
                  alt="Mriganchal Singh" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Mriganchal Singh</h3>
                <p className="text-primary-600 font-medium mb-4">Co-Founder & COO</p>
                <p className="text-neutral-600 mb-4">
                  Mriganchal brings deep agricultural expertise to Triloki Global, focusing on sustainable sourcing and 
                  quality control. His network of farmers and processors ensures we deliver only the finest products to 
                  our global clients.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-neutral-500 hover:text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect width="4" height="12" x="2" y="9"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>
                  <a href="#" className="text-neutral-500 hover:text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/about" className="btn-primary inline-flex items-center">
              Learn More About Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Vision and Commitment */}
      <section className="py-16 md:py-24 bg-neutral-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Vision & Commitment</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-primary-600">Our Vision</h3>
                  <p className="text-neutral-600">
                    To become the most trusted name in agricultural exports by combining traditional knowledge 
                    with cutting-edge technology, ensuring premium quality products reach global markets.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-primary-600">Our Mission</h3>
                  <p className="text-neutral-600">
                    To bridge the gap between Indian farmers and international markets, creating sustainable 
                    value chains that benefit all stakeholders while maintaining the highest quality standards.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-primary-600">Our Commitment</h3>
                  <p className="text-neutral-600">
                    We are committed to ethical sourcing, sustainable farming practices, fair pricing, and 
                    transparent business operations that respect both people and the planet.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Agricultural field" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Shield className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Quality Guaranteed</h3>
                </div>
                <p className="text-neutral-600">
                  Every product ships with quality assurance certification and full traceability to source.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <WhatsAppButton />
    </>
  );
};

export default HomePage;