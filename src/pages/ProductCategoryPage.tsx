import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import WhatsAppButton from '../components/features/WhatsAppButton';

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  subcategories: Subcategory[];
}

interface Subcategory {
  id: string;
  name: string;
  description: string;
  image: string;
}

const categories: Record<string, Category> = {
  'spices': {
    id: 'spices',
    name: 'Spices',
    description: 'Our premium spices are sourced directly from the finest growing regions in India, ensuring authentic flavor, aroma, and quality.',
    image: 'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=1200',
    subcategories: [
      {
        id: 'turmeric',
        name: 'Turmeric',
        description: 'High-curcumin turmeric available in powder, finger, and bulb form from premium growing regions.',
        image: 'https://5.imimg.com/data5/SELLER/Default/2024/7/431745160/VH/IT/HH/40841925/nizamabad-double-polish-turmeric-finger.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'black-pepper',
        name: 'Black Pepper',
        description: 'Pungent, aromatic black pepper known as the "King of Spices", available in different grades.',
        image: 'https://shorturl.at/T4roQ?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'red-chilli',
        name: 'Red Chilli',
        description: 'Fiery, vibrant red chilli known for its bold heat and rich color, available in multiple varieties and grades.',
        image: 'https://shorturl.at/krfhA?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'cardamom',
        name: 'Cardamom',
        description: 'Often called the "Queen of Spices", our cardamom offers a sweet, floral aroma.',
        image: 'https://shorturl.at/LiLQu?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'cinnamon',
        name: 'Cinnamon',
        description: 'Warm, aromatic cinnamon available as sticks or powder with rich, sweet flavor.',
        image: 'https://shorturl.at/Eyzo7?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'cloves',
        name: 'Cloves',
        description: 'Intensely aromatic spice with strong, pungent flavor perfect for both sweet and savory dishes.',
        image: 'https://shorturl.at/gFnTi?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'cumin-seeds',
        name: 'Cumin Seeds',
        description: 'Earthy, nutty cumin seeds and powder that add depth to various cuisines.',
        image: 'https://short-link.me/ZGtD?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'fennel-seeds',
        name: 'Fennel Seeds',
        description: 'Sweet, aromatic fennel seeds used in cooking, teas, and digestion-boosting remedies.',
        image: 'https://short-link.me/ZGye?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'nigella-seeds',
        name: 'Nigella Seeds',
        description: 'Tiny black seeds with a bitter, peppery flavor, used in breads, pickles, and traditional remedies.',
        image: 'https://short-link.me/12HV5?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'coriander-seeds',
        name: 'Coriander Seeds',
        description: 'Citrusy, mildly sweet coriander seeds widely used in cooking, pickling, and spice blends.',
        image: 'https://short-link.me/12HWH?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'fenugreek-seeds',
        name: 'Fenugreek seeds',
        description: 'Bitter-sweet fenugreek seeds with a distinct aroma, used in cooking, pickling, and traditional medicine.',
        image: 'https://short-link.me/12HZP?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'asaliya-seeds',
        name: 'Asaliya Seeds',
        description: 'Nutrient-rich, slightly peppery Asaliya seeds used in traditional health tonics, ayurveda, and spiced recipes.',
        image: 'https://short-link.me/12I1d?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'dill-seeds',
        name: 'Dill Seeds',
        description: 'Aromatic dill seeds with a warm, slightly bitter flavor, used in pickling, cooking, and herbal remedies.',
        image: 'https://short-link.me/12I2t?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'yellow-mustard',
        name: 'Yellow Mustard',
        description: 'Mild, nutty-flavored yellow mustard seeds used in pickles, sauces, and spice blends.',
        image: 'https://short-link.me/12I3H?auto=compress&cs=tinysrgb&w=800'
      },  
      {
        id: 'dry-ginger',
        name: 'Dry Ginger',
        description: 'Pungent, aromatic dry ginger root used in spice blends, teas, and traditional medicine.',
        image: 'https://short-link.me/12I5k?auto=compress&cs=tinysrgb&w=800'
      }

    ]
  },
  'grains': {
    id: 'grains',
    name: 'Grains',
    description: 'Our grain selection includes premium rice varieties, wheat, millets, and other staples, all sourced directly from specialized growing regions.',
    image: 'https://images.pexels.com/photos/1537169/pexels-photo-1537169.jpeg?auto=compress&cs=tinysrgb&w=1200',
    subcategories: [
      {
        id: 'rice',
        name: 'Rice',
        description: 'Premium basmati and non-basmati rice varieties with distinctive aroma and taste.',
        image: 'https://shorturl.at/eTYvl?auto=compress&cs=tinysrgb&w=800',
      },
      {
        id: 'wheat',
        name: 'Wheat',
        description: 'High-protein wheat varieties ideal for bread, pastries, and other baked goods.',
        image: 'https://shorturl.at/fsWp1?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'millets',
        name: 'Millets',
        description: 'Nutritious ancient grains including pearl millet, finger millet, and foxtail millet.',
        image: 'https://images.pexels.com/photos/206828/pexels-photo-206828.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'barley',
        name: 'Barley',
        description: 'Versatile grain used in beverages, soups, stews, and bread products.',
        image: 'https://images.pexels.com/photos/533346/pexels-photo-533346.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'corn',
        name: 'Yellow Corn',
        description: 'Versatile grain used for food, feed, and industrial purposes, prized for its sweetness and nutritional value.',
        image: 'https://images.pexels.com/photos/33073/corn-maize-plant-yellow.jpg?auto=compress&cs=tinysrgb&w=800'
}

    ]
  },
  'seeds': {
    id: 'seeds',
    name: 'Seeds',
    description: 'Our carefully selected seeds offer exceptional quality for food products, oil extraction, and agricultural purposes.',
    image: 'https://images.pexels.com/photos/144248/healthy-breakfast-organic-seeds-144248.jpeg?auto=compress&cs=tinysrgb&w=1200',
    subcategories: [
      {
        id: 'sesame',
        name: 'Sesame Seeds',
        description: 'Natural, hulled, and toasted sesame seeds with rich, nutty flavor for various culinary uses.',
        image: 'https://images.pexels.com/photos/144248/healthy-breakfast-organic-seeds-144248.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'flax',
        name: 'Flax Seeds',
        description: 'Nutrient-dense flax seeds with high omega-3 content, available in brown and golden varieties.',
        image: 'https://images.pexels.com/photos/7469189/pexels-photo-7469189.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'mustard',
        name: 'Mustard Seeds',
        description: 'Yellow, brown, and black mustard seeds used in pickling, spice blends, and condiments.',
        image: 'https://images.pexels.com/photos/6157050/pexels-photo-6157050.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'pumpkin',
        name: 'Pumpkin Seeds',
        description: 'Nutritious, versatile seeds used in snacks, baking, and cooking.',
        image: 'https://images.pexels.com/photos/5765830/pexels-photo-5765830.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'sunflower',
        name: 'Sunflower Seeds',
        description: 'Oil-rich seeds used for direct consumption, oil extraction, and as ingredients.',
        image: 'https://images.pexels.com/photos/433491/pexels-photo-433491.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  }
};

const ProductCategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const categoryData = category ? categories[category] : null;
  
  if (!categoryData) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Category Not Found</h2>
            <p className="mb-8">Sorry, the category you're looking for doesn't exist.</p>
            <Link to="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <div className="min-h-screen pt-24 pb-16">
        {/* Hero Banner */}
        <div className="relative h-80 mb-16">
          <img 
            src={categoryData.image} 
            alt={categoryData.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
            <div className="container-custom">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{categoryData.name}</h1>
                <p className="text-xl text-neutral-200">{categoryData.description}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Subcategories */}
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mx-auto">Our Premium {categoryData.name}</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Explore our carefully selected {categoryData.name.toLowerCase()} sourced directly from the finest growing regions in India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryData.subcategories.map((subcategory) => (
              <div key={subcategory.id} className="product-item card overflow-hidden group">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={subcategory.image} 
                    alt={subcategory.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end product-overlay">
                    <div className="p-4 w-full">
                      <Link to={`/products/${categoryData.id}/${subcategory.id}`} className="btn-primary w-full">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{subcategory.name}</h3>
                    <span className="bg-secondary-100 text-secondary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {categoryData.name}
                    </span>
                  </div>
                  <p className="text-neutral-600 mb-4">{subcategory.description}</p>
                  <Link 
                    to={`/products/${categoryData.id}/${subcategory.id}`} 
                    className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                  >
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Quality Assurance */}
        <div className="bg-neutral-100 py-16 mt-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Quality Assurance</h2>
                <p className="text-lg text-neutral-600 mb-8">
                  All our {categoryData.name.toLowerCase()} undergo rigorous quality control to ensure they meet international standards.
                  We provide complete documentation and certifications for export compliance.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-2 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Premium Selection</h3>
                      <p className="text-neutral-600">
                        Carefully selected from the best growing regions to ensure premium quality.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-2 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                        <path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a1.93 1.93 0 0 0-.97 1.68v4.8a2 2 0 0 0 1 1.73l7.3 4.05c.75.41 1.66.41 2.41 0l7.3-4.05a2 2 0 0 0 1-1.73V9.81a1.93 1.93 0 0 0-1.19-1.69"/>
                        <path d="M3.09 8.84v12.58a1.79 1.79 0 0 0 1.52 1.77c.62.1 1.43.04 2.22-.51l.01-.01c.46-.32.85-.72 1.16-1.18"/>
                        <path d="M20.91 8.84v12.58a1.79 1.79 0 0 1-1.52 1.77c-.62.1-1.43.04-2.22-.51l-.01-.01c-.46-.32-.85-.72-1.16-1.18"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Processing Standards</h3>
                      <p className="text-neutral-600">
                        Processed and packed in state-of-the-art facilities that adhere to international standards.
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
                      <h3 className="text-lg font-semibold">Health & Safety Testing</h3>
                      <p className="text-neutral-600">
                        Each batch undergoes rigorous testing for contaminants, microbes, and quality parameters.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-2 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                        <path d="M3 9h18"/>
                        <path d="M3 15h18"/>
                        <path d="M9 3v18"/>
                        <path d="M15 3v18"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Packaging Options</h3>
                      <p className="text-neutral-600">
                        Available in various packaging options suitable for different market requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/8107967/pexels-photo-8107967.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Quality control" 
                  className="rounded-lg shadow-md w-full h-64 object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Laboratory testing" 
                  className="rounded-lg shadow-md w-full h-64 object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Farming practices" 
                  className="rounded-lg shadow-md w-full h-64 object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/2104151/pexels-photo-2104151.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Packaging" 
                  className="rounded-lg shadow-md w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-primary-600 text-white py-16">
          <div className="container-custom">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Our {categoryData.name}?</h2>
              <p className="text-lg text-primary-100 mb-8 max-w-3xl mx-auto">
                Get in touch with our export team to discuss your specific requirements, pricing, and shipping details.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact" className="btn-secondary">
                  Contact Us Now
                </Link>
                <Link to="/products" className="btn bg-white text-primary-600 hover:bg-neutral-100">
                  View Other Products
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

export default ProductCategoryPage;