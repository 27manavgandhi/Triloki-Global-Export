import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import WhatsAppButton from '../components/features/WhatsAppButton';

const categories = [
  {
    id: 'spices',
    name: 'Spices',
    description: 'Premium quality spices sourced directly from specialized growing regions.',
    image: 'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=800',
    subcategories: ['Turmeric', 'Black Pepper','Red Chilly', 'Cardamom', 'Cinnamon', 'Cloves', 'Cumin']
  },
  {
    id: 'grains',
    name: 'Grains',
    description: 'Superior quality grains and cereals from India\'s finest agricultural regions.',
    image: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-611609590-6627de2d8c0bb.jpg?auto=compress&cs=tinysrgb&w=800',
    subcategories: ['Rice', 'Wheat', 'Millets', 'Barley', 'corn']
  },
  {
    id: 'pulses',
    name: 'Pulses',
    description: 'Superior quality grains and cereals from India\'s finest agricultural regions.',
    image: 'https://i0.wp.com/nmrdn.com/wp-content/uploads/2020/07/AdobeStock_117825265-L.jpeg?auto=compress&cs=tinysrgb&w=800',
    subcategories: ['Green Lentils', 'White Kidney Beans', 'Dry Peas', 'Chickpeas', 'Red Kidney Beans', 'Desi Chickpeas']
  },
  {
    id: 'tea',
    name: 'Tea',
    description: 'Superior quality grains and cereals from India\'s finest agricultural regions.',
    image: 'https://budleaf.com/wp-content/uploads/2023/03/Different-Types-of-Tea-min-2048x1365.jpeg?auto=compress&cs=tinysrgb&w=800',
    subcategories: ['Black Tea', 'Wolf Leaf', 'Green Tea', 'Tea Dust', 'Fannings']
  },
  {
    id: 'others',
    name: 'Others',
    description: 'High-quality seeds for food products and oil extraction.',
    image: 'https://mgindiaexport.com/wp-content/uploads/2025/05/indian-food-export-mg-india.png?auto=compress&cs=tinysrgb&w=800',
    subcategories: ['Canned Sardines', 'Canned Tuna', 'Sea Food', 'Palm Oil', 'Saffron']
  }
];

const ProductsPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative h-64 mb-16">
          <img 
            src="https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Our Products" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
            <div className="container-custom">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
                <p className="text-xl text-neutral-200">
                  Premium quality agricultural products sourced directly from specialized growing regions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom">
          {/* Product Categories */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Product Categories</h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Explore our comprehensive range of premium agricultural products, each sourced and 
                processed to meet international quality standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <div key={category.id} className="product-item card overflow-hidden group">
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end product-overlay">
                      <div className="p-4 w-full">
                        <Link to={`/products/${category.id}`} className="btn-primary w-full">
                          View Products
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-neutral-600 mb-4">{category.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-neutral-800">Popular Products:</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.subcategories.map((subcategory) => (
                          <span 
                            key={subcategory}
                            className="bg-neutral-100 text-neutral-700 text-sm px-3 py-1 rounded-full"
                          >
                            {subcategory}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link 
                      to={`/products/${category.id}`} 
                      className="mt-6 inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      View All Products
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quality Assurance */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Quality Assurance</h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Our comprehensive quality control system ensures every product meets international standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Sourcing</h3>
                <p className="text-neutral-600">
                  Direct sourcing from specialized growing regions and certified farmers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                    <path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a1.93 1.93 0 0 0-.97 1.68v4.8a2 2 0 0 0 1 1.73l7.3 4.05c.75.41 1.66.41 2.41 0l7.3-4.05a2 2 0 0 0 1-1.73V9.81a1.93 1.93 0 0 0-1.19-1.69"/>
                    <path d="M3.09 8.84v12.58a1.79 1.79 0 0 0 1.52 1.77c.62.1 1.43.04 2.22-.51l.01-.01c.46-.32.85-.72 1.16-1.18"/>
                    <path d="M20.91 8.84v12.58a1.79 1.79 0 0 1-1.52 1.77c-.62.1-1.43.04-2.22-.51l-.01-.01c-.46-.32-.85-.72-1.16-1.18"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Processing</h3>
                <p className="text-neutral-600">
                  State-of-the-art processing facilities with strict quality controls.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Testing</h3>
                <p className="text-neutral-600">
                  Comprehensive quality testing at every stage of production.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                    <path d="M3 9h18"/>
                    <path d="M3 15h18"/>
                    <path d="M9 3v18"/>
                    <path d="M15 3v18"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Packaging</h3>
                <p className="text-neutral-600">
                  Export-grade packaging ensuring product integrity during transit.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Certifications</h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                We maintain the highest quality standards through international certifications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src="https://placehold.co/120x60/404040/FFFFFF/png?text=APEDA" alt="APEDA" className="h-12 mb-4" />
                <h3 className="text-lg font-semibold mb-2">APEDA Certified</h3>
                <p className="text-neutral-600">
                  Registered with Agricultural and Processed Food Products Export Development Authority.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src="https://placehold.co/120x60/404040/FFFFFF/png?text=FSSAI" alt="FSSAI" className="h-12 mb-4" />
                <h3 className="text-lg font-semibold mb-2">FSSAI Approved</h3>
                <p className="text-neutral-600">
                  Compliant with Food Safety and Standards Authority of India regulations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src="https://placehold.co/120x60/404040/FFFFFF/png?text=Organic" alt="Organic" className="h-12 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Organic Certified</h3>
                <p className="text-neutral-600">
                  International organic certification for selected product ranges.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-primary-600 text-white rounded-lg p-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
              <p className="text-primary-100 mb-8">
                Contact our export team to discuss your requirements and get a customized quote.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact" className="btn-secondary">
                  Request a Quote
                </Link>
                <Link to="/export-process" className="btn bg-white text-primary-600 hover:bg-neutral-100">
                  Learn About Export Process
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

export default ProductsPage;