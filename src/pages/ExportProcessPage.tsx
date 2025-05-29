import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, FileText, Truck, Package, Globe, Shield } from 'lucide-react';
import WhatsAppButton from '../components/features/WhatsAppButton';

const ExportProcessPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative h-64 mb-16">
          <img 
            src="https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Export Process" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
            <div className="container-custom">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Export Process</h1>
                <p className="text-xl text-neutral-200">
                  A streamlined approach to international trade, ensuring quality and reliability at every step.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom">
          {/* Process Timeline */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Our Export Process</h2>
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
              
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex items-center md:justify-between">
                  <div className="hidden md:block w-5/12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold z-10">
                    1
                  </div>
                  <div className="md:w-5/12 bg-white p-6 rounded-lg shadow-md ml-16 md:ml-0">
                    <h3 className="text-xl font-semibold mb-2">Initial Inquiry</h3>
                    <p className="text-neutral-600 mb-4">
                      Submit your product requirements through our inquiry form or contact our sales team directly. 
                      We'll respond within 24 hours with product details and initial pricing.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-neutral-600">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                        Product specifications review
                      </li>
                      <li className="flex items-center text-sm text-neutral-600">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                        Quantity requirements
                      </li>
                      <li className="flex items-center text-sm text-neutral-600">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                        Initial price quotation
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex items-center md:justify-between">
                  <div className="md:w-5/12 bg-white p-6 rounded-lg shadow-md mr-16 md:mr-0">
                    <h3 className="text-xl font-semibold mb-2">Sample and Quality Approval</h3>
                    <p className="text-neutral-600 mb-4">
                      We'll send product samples for your evaluation. Once approved, we proceed with formal quotation 
                      and terms discussion.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-neutral-600">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                        Sample dispatch and testing
                      </li>
                      <li className="flex items-center text-sm text-neutral-600">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                        Quality parameters confirmation
                      </li>
                      <li className="flex items-center text-sm text-neutral-600">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                        Detailed quotation preparation
                      </li>
                    </ul>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold z-10">
                    2
                  </div>
                  <div className="hidden md:block w-5/12"></div>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-center md:justify-between">
                  <div className="hidden md:block w-5/12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold z-10">
                    3
                  </div>
                  <div className="md:w-5/12 bg-white p-6 rounded-lg shadow-md ml-16 md:ml-0">
                    <h3 className="text-xl font-semibold mb-2">Order Confirmation</h3>
                    <p className="text-neutral-600 mb-4">
                      Upon agreement of terms, we proceed with order confirmation and payment arrangements according 
                      to agreed terms.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-neutral-600">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                        Contract finalization
                      </li>
                      <li className="flex items-center text-sm text-neutral-600">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                        Payment terms confirmation
                      </li>
                      <li className="flex items-center text-sm text-neutral-600">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                        Production scheduling
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative flex items-center md:justify-between">
                  <div className="md:w-5/12 bg-white p-6 rounded-lg shadow-md mr-16 md:mr-0">
                    <h3 className="text-xl font-semibold mb-2">Production and Quality Control</h3>
                    <p className="text-neutral-600 mb-4">
                      We begin production with strict quality control measures at every stage, ensuring compliance 
                      with international standards.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-neutral-600">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                        Raw material selection
                      </li>
                      <li className="flex items-center text-sm text-neutral-600">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                        Processing and testing
                      </li>
                      <li className="flex items-center text-sm text-neutral-600">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                        Quality certification
                      </li>
                    </ul>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold z-10">
                    4
                  </div>
                  <div className="hidden md:block w-5/12"></div>
                </div>

                {/* Step 5 */}
                <div className="relative flex items-center md:justify-between">
                  <div className="hidden md:block w-5/12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold z-10">
                    5
                  </div>
                  <div className="md:w-5/12 bg-white p-6 rounded-lg shadow-md ml-16 md:ml-0">
                    <h3 className="text-xl font-semibold mb-2">Documentation and Shipping</h3>
                    <p className="text-neutral-600 mb-4">
                      We handle all export documentation and coordinate with shipping lines for timely delivery 
                      to your destination.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-neutral-600">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                        Export documentation
                      </li>
                      <li className="flex items-center text-sm text-neutral-600">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                        Shipping coordination
                      </li>
                      <li className="flex items-center text-sm text-neutral-600">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                        Tracking and updates
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Documentation Requirements */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Required Documentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Commercial Documents</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-neutral-600">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Commercial Invoice
                  </li>
                  <li className="flex items-center text-neutral-600">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Packing List
                  </li>
                  <li className="flex items-center text-neutral-600">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Certificate of Origin
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Certificates</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-neutral-600">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Quality Analysis Report
                  </li>
                  <li className="flex items-center text-neutral-600">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Phytosanitary Certificate
                  </li>
                  <li className="flex items-center text-neutral-600">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Health Certificate
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Shipping Documents</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-neutral-600">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Bill of Lading
                  </li>
                  <li className="flex items-center text-neutral-600">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Shipping Bill
                  </li>
                  <li className="flex items-center text-neutral-600">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Insurance Certificate
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Shipping Information</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <h3 className="text-xl font-semibold mb-4">Shipping Terms</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Package className="h-5 w-5 text-primary-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-medium mb-1">FOB (Free On Board)</h4>
                        <p className="text-neutral-600 text-sm">
                          We handle export clearance and loading onto the vessel at the port of origin.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Globe className="h-5 w-5 text-primary-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-medium mb-1">CIF (Cost, Insurance & Freight)</h4>
                        <p className="text-neutral-600 text-sm">
                          We arrange shipping and insurance up to the destination port.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Truck className="h-5 w-5 text-primary-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-medium mb-1">Door-to-Door Delivery</h4>
                        <p className="text-neutral-600 text-sm">
                          Complete logistics solution including inland transportation (selected markets).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Container Types</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-1">20' Standard Container</h4>
                      <p className="text-neutral-600 text-sm">
                        Suitable for dense cargo like grains and seeds
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">40' High Cube Container</h4>
                      <p className="text-neutral-600 text-sm">
                        Ideal for voluminous cargo and larger shipments
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Reefer Container</h4>
                      <p className="text-neutral-600 text-sm">
                        Temperature-controlled shipping for sensitive products
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Major Export Destinations</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">North America</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                        USA
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                        Canada
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Europe</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                        UK
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                        Germany
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                        France
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                        Netherlands
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Middle East</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                        UAE
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                        Saudi Arabia
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Asia Pacific</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                        Japan
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                        South Korea
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                        Australia
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                        Singapore
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-primary-600 text-white rounded-lg p-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Exporting?</h2>
              <p className="text-primary-100 mb-8">
                Contact our export team to discuss your requirements and begin the process.
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

export default ExportProcessPage;