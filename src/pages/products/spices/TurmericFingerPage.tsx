import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Award, Truck } from 'lucide-react';
import ProductInquiryForm from '../../../components/features/ProductInquiryForm';
import WhatsAppButton from '../../../components/features/WhatsAppButton';

const TurmericFingerPage: React.FC = () => {
  const specifications = {
    nizamabad: {
      curcumin: '3.5-5.0%',
      moisture: '≤ 8%',
      totalAsh: '≤ 7%',
      acidInsoluble: '≤ 1%',
      volatileOil: '≥ 4%',
      meshSize: '9mm+',
      color: 'Deep Orange-Yellow'
    },
    salem: {
      curcumin: '2.8-3.5%',
      moisture: '≤ 8%',
      totalAsh: '≤ 7%',
      acidInsoluble: '≤ 1%',
      volatileOil: '≥ 3.5%',
      meshSize: '8mm+',
      color: 'Bright Yellow'
    },
    erode: {
      curcumin: '2.5-3.0%',
      moisture: '≤ 8%',
      totalAsh: '≤ 7%',
      acidInsoluble: '≤ 1%',
      volatileOil: '≥ 3%',
      meshSize: '7mm+',
      color: 'Yellow-Orange'
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="container-custom mb-8">
        <div className="flex items-center text-sm">
          <Link to="/products" className="text-neutral-500 hover:text-primary-600">Products</Link>
          <span className="mx-2 text-neutral-400">/</span>
          <Link to="/products/spices" className="text-neutral-500 hover:text-primary-600">Spices</Link>
          <span className="mx-2 text-neutral-400">/</span>
          <Link to="/products/spices/turmeric" className="text-neutral-500 hover:text-primary-600">Turmeric</Link>
          <span className="mx-2 text-neutral-400">/</span>
          <span className="text-primary-600">Turmeric Finger</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 mb-16">
        <img 
          src="https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Turmeric Fingers" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
          <div className="container-custom">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Premium Turmeric Fingers</h1>
              <p className="text-xl text-neutral-200">
                High-quality turmeric fingers with exceptional curcumin content, sourced from India's finest growing regions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom">
        {/* Product Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Product Overview</h2>
            <div className="prose max-w-none">
              <p className="text-neutral-600 mb-4">
                Our premium turmeric fingers are carefully selected and processed to maintain their natural properties 
                and high curcumin content. Available in different grades from renowned growing regions, each variety 
                offers distinct characteristics suitable for various applications.
              </p>
              <p className="text-neutral-600 mb-6">
                The polishing process involves multiple stages of cleaning, sorting, and polishing to achieve the 
                desired finish while preserving the essential qualities of the turmeric fingers.
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Processing Steps</h3>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 w-6 h-6 rounded-full flex items-center justify-center font-semibold mr-3 mt-0.5">1</span>
                  <div>
                    <h4 className="font-medium">Cleaning & Sorting</h4>
                    <p className="text-neutral-600 text-sm">Initial cleaning to remove foreign matter and sorting by size</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 w-6 h-6 rounded-full flex items-center justify-center font-semibold mr-3 mt-0.5">2</span>
                  <div>
                    <h4 className="font-medium">Primary Polishing</h4>
                    <p className="text-neutral-600 text-sm">Mechanical polishing to remove outer rough layer</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 w-6 h-6 rounded-full flex items-center justify-center font-semibold mr-3 mt-0.5">3</span>
                  <div>
                    <h4 className="font-medium">Quality Check</h4>
                    <p className="text-neutral-600 text-sm">Inspection for color, size uniformity, and defects</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 w-6 h-6 rounded-full flex items-center justify-center font-semibold mr-3 mt-0.5">4</span>
                  <div>
                    <h4 className="font-medium">Final Polishing</h4>
                    <p className="text-neutral-600 text-sm">Secondary polishing for premium finish and appearance</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 w-6 h-6 rounded-full flex items-center justify-center font-semibold mr-3 mt-0.5">5</span>
                  <div>
                    <h4 className="font-medium">Grading & Packaging</h4>
                    <p className="text-neutral-600 text-sm">Final grading and packing in export-quality containers</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">2-5%</div>
                <div className="text-neutral-600">Curcumin Content</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">7-9mm</div>
                <div className="text-neutral-600">Average Length</div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold mb-4">Available Varieties</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Nizamabad Double Polished</h4>
                    <span className="bg-primary-100 text-primary-600 text-sm px-3 py-1 rounded-full">Premium</span>
                  </div>
                  <p className="text-neutral-600 text-sm mb-3">
                    Known for high curcumin content and superior polish, ideal for premium markets.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                      <span>High Curcumin (3.5-5.0%)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                      <span>Double Polished</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Salem Quality</h4>
                    <span className="bg-secondary-100 text-secondary-800 text-sm px-3 py-1 rounded-full">Standard</span>
                  </div>
                  <p className="text-neutral-600 text-sm mb-3">
                    Balanced quality with good color and moderate curcumin content.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                      <span>Medium Curcumin (2.8-3.5%)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                      <span>Single Polished</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Erode Quality</h4>
                    <span className="bg-secondary-100 text-secondary-800 text-sm px-3 py-1 rounded-full">Standard</span>
                  </div>
                  <p className="text-neutral-600 text-sm mb-3">
                    Traditional variety with natural appearance and good color.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                      <span>Standard Curcumin (2.5-3.0%)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                      <span>Natural Finish</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Quality Certifications</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <img 
                  src="https://spices.apeda.gov.in/images/apeda-logo.png" 
                  alt="APEDA Certified" 
                  className="h-16 object-contain"
                />
                <img 
                  src="https://www.fssai.gov.in/images/fssai-logo.png" 
                  alt="FSSAI Approved" 
                  className="h-16 object-contain"
                />
                <img 
                  src="https://www.organic-bio.com/images/organic-certified-logo.png" 
                  alt="Organic Certified" 
                  className="h-16 object-contain"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-sm">100% Quality Assured</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-sm">International Standards Compliant</span>
                </div>
                <div className="flex items-center">
                  <Truck className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-sm">Secure Packaging & Shipping</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications Table */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Product Specifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="border p-3 text-left">Parameter</th>
                  <th className="border p-3 text-left">Nizamabad Quality</th>
                  <th className="border p-3 text-left">Salem Quality</th>
                  <th className="border p-3 text-left">Erode Quality</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-medium">Curcumin Content</td>
                  <td className="border p-3">{specifications.nizamabad.curcumin}</td>
                  <td className="border p-3">{specifications.salem.curcumin}</td>
                  <td className="border p-3">{specifications.erode.curcumin}</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="border p-3 font-medium">Moisture Content</td>
                  <td className="border p-3">{specifications.nizamabad.moisture}</td>
                  <td className="border p-3">{specifications.salem.moisture}</td>
                  <td className="border p-3">{specifications.erode.moisture}</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Total Ash</td>
                  <td className="border p-3">{specifications.nizamabad.totalAsh}</td>
                  <td className="border p-3">{specifications.salem.totalAsh}</td>
                  <td className="border p-3">{specifications.erode.totalAsh}</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="border p-3 font-medium">Acid Insoluble Ash</td>
                  <td className="border p-3">{specifications.nizamabad.acidInsoluble}</td>
                  <td className="border p-3">{specifications.salem.acidInsoluble}</td>
                  <td className="border p-3">{specifications.erode.acidInsoluble}</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Volatile Oil</td>
                  <td className="border p-3">{specifications.nizamabad.volatileOil}</td>
                  <td className="border p-3">{specifications.salem.volatileOil}</td>
                  <td className="border p-3">{specifications.erode.volatileOil}</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="border p-3 font-medium">Mesh Size</td>
                  <td className="border p-3">{specifications.nizamabad.meshSize}</td>
                  <td className="border p-3">{specifications.salem.meshSize}</td>
                  <td className="border p-3">{specifications.erode.meshSize}</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Color</td>
                  <td className="border p-3">{specifications.nizamabad.color}</td>
                  <td className="border p-3">{specifications.salem.color}</td>
                  <td className="border p-3">{specifications.erode.color}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Request a Quote</h2>
            <p className="text-neutral-600 mb-6">
              Get detailed pricing information and availability for our premium turmeric fingers. 
              Our export team will respond within 24 hours.
            </p>
            
            <div className="bg-neutral-100 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Available Packaging Options</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />
                  <span>25kg PP/HDPE Bags</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />
                  <span>50kg PP/Jute Bags</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />
                  <span>Custom Packaging Available</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <ProductInquiryForm productName="Turmeric Fingers" />
          </div>
        </div>
      </div>

      <WhatsAppButton />
    </div>
  );
};

export default TurmericFingerPage;