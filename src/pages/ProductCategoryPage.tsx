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
        image: 'https://shorturl.at/Sg1cn?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'fennel-seeds',
        name: 'Fennel Seeds',
        description: 'Sweet, aromatic fennel seeds used in cooking, teas, and digestion-boosting remedies.',
        image: 'https://shorturl.at/lB1TA?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'nigella-seeds',
        name: 'Nigella Seeds',
        description: 'Tiny black seeds with a bitter, peppery flavor, used in breads, pickles, and traditional remedies.',
        image: 'https://heeraagri.com/wp-content/uploads/2024/05/kalonji-image.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'coriander-seeds',
        name: 'Coriander Seeds',
        description: 'Citrusy, mildly sweet coriander seeds widely used in cooking, pickling, and spice blends.',
        image: 'https://nuffoodsspectrum.in/wp-content/uploads/articles/coriander_export-7731.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'fenugreek-seeds',
        name: 'Fenugreek seeds',
        description: 'Bitter-sweet fenugreek seeds with a distinct aroma, used in cooking, pickling, and traditional medicine.',
        image: 'https://mginternationalexport.com/wp-content/uploads/2023/05/fenugreek-on-a-spoon.webp?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'asaliya-seeds',
        name: 'Asaliya Seeds',
        description: 'Nutrient-rich, slightly peppery Asaliya seeds used in traditional health tonics, ayurveda, and spiced recipes.',
        image: 'https://ashapuraexporters.com/wp-content/uploads/2024/07/Asaliya-Seeds.webp?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'dill-seeds',
        name: 'Dill Seeds',
        description: 'Aromatic dill seeds with a warm, slightly bitter flavor, used in pickling, cooking, and herbal remedies.',
        image: 'https://www.koteshwaragriexports.com/images/product/DillSeed-4242024113145PM.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'yellow-mustard',
        name: 'Yellow Mustard',
        description: 'Mild, nutty-flavored yellow mustard seeds used in pickles, sauces, and spice blends.',
        image: 'https://seasonsinternational.in/wp-content/uploads/2024/05/Mustard-Seeds.webp?auto=compress&cs=tinysrgb&w=800'
      },  
      {
        id: 'dry-ginger',
        name: 'Dry Ginger',
        description: 'Pungent, aromatic dry ginger root used in spice blends, teas, and traditional medicine.',
        image: 'https://seasonsinternational.in/wp-content/uploads/2021/05/dry_ginger_2.jpg?auto=compress&cs=tinysrgb&w=800'
      }

    ]
  },
  'grains': {
    id: 'grains',
    name: 'Grains',
    description: 'Our grain selection includes premium rice varieties, wheat, millets, and other staples, all sourced directly from specialized growing regions.',
    image: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-611609590-6627de2d8c0bb.jpg?auto=compress&cs=tinysrgb&w=1200',
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
        image: 'https://shivaruthraexports.com/wp-content/uploads/2021/10/millets9.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'barley',
        name: 'Barley',
        description: 'Versatile grain used in beverages, soups, stews, and bread products.',
        image: 'https://m.media-amazon.com/images/I/51pxG6EMPrL.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'corn',
        name: 'Yellow Corn',
        description: 'Versatile grain used for food, feed, and industrial purposes, prized for its sweetness and nutritional value.',
        image: 'https://img.etimg.com/thumb/msid-83390480,width-300,height-225,imgsize-176599,resizemode-75/istock-1061097354.jpg?auto=compress&cs=tinysrgb&w=800'
      }

    ]
  },
  'pulses': {
  id: 'pulses',
  name: 'Pulses',
  description: 'A rich collection of protein-packed pulses including lentils, chickpeas, beans, and peas—sourced from trusted farms to ensure top-tier quality and nutrition.',
  image: 'https://ik.imagekit.io/lvn5j5ljp/wp-content/uploads/2023/08/Untitled-design-38.png?auto=compress&cs=tinysrgb&w=1200',
  subcategories: [
    {
      id: 'light-speckled-kidney-bean',
      name: 'Light Speckled Kidney Bean',
      description: 'Distinctive beans known for their speckled appearance and use in hearty dishes.',
      image: 'https://www.b2bagriculture.com/file/2020/01/Light-speckled-kidney-bean-Pinto-bean-Sugar-2.jpg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'green-lentils',
      name: 'Green Lentils',
      description: 'Firm-textured lentils that hold their shape well, perfect for salads and stews.',
      image: 'https://2.wlimg.com/product_images/bc-full/2023/9/8571437/green-lentils-1617966109-5784881.jpg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'white-kidney-beans',
      name: 'White Kidney Beans',
      description: 'Creamy-textured beans ideal for soups, stews, and Mediterranean dishes.',
      image: 'https://5.imimg.com/data5/ANDROID/Default/2025/2/486786826/IK/XK/SC/187802390/product-jpeg-1000x1000.jpg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'dry-peas',
      name: 'Dry Peas',
      description: 'Split or whole peas used in traditional soups and high-fiber recipes.',
      image: 'https://eshaaexim.com/assets/images/product/Dry_Peas.jpg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'chickpeas',
      name: 'Chickpeas',
      description: 'Versatile legumes used in hummus, curries, and snacks with great nutritional value.',
      image: 'https://srexports.co.in/wp-content/uploads/2019/05/kabuli-chickpeas.jpg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'black-eyed-bean',
      name: 'Black Eyed Bean',
      description: 'Easily recognizable beans with a black spot, known for their earthy flavor.',
      image: 'https://2.wlimg.com/product_images/bc-full/2022/8/10363981/black-eyed-beans-1660820078-6496342.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'red-kidney-beans',
      name: 'Red Kidney Beans',
      description: 'Classic rajma beans with bold flavor and firm texture, ideal for Indian and Latin cuisine.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/4/299700746/FN/BX/GB/69968307/red-kidney-bean-beans-1000x1000.jpg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'pigeon-peas',
      name: 'Pigeon Peas',
      description: 'A staple in tropical diets, used in dals and rice dishes for their nutty taste.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/7/434741022/AY/KN/YH/50984650/pigeon-peas-whole-1000x1000.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'lupins',
      name: 'Lupins',
      description: 'Nutrient-rich legumes often used in Mediterranean cuisines and as flour substitutes.',
      image: 'https://walupins.com.au/wp-content/uploads/2020/08/LUPINS-in-hand-1.jpg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'vetches',
      name: 'Vetches',
      description: 'Small legumes traditionally used in feed and gaining popularity for human consumption.',
      image: 'https://images.pexels.com/photos/1537169/pexels-photo-1537169.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'desi-chickpeas',
      name: 'Desi Chickpeas',
      description: 'Smaller, darker, and richer in fiber compared to Kabuli chickpeas—widely used in Indian cuisine.',
      image: 'https://images.pexels.com/photos/1537169/pexels-photo-1537169.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ]
  },
  'tea': {
  id: 'tea',
  name: 'Tea',
  description: 'A curated selection of high-quality teas including black, green, whole leaf, and more—carefully sourced to deliver freshness, flavor, and aroma in every cup.',
  image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=1200',
  subcategories: [
    {
      id: 'black-tea',
      name: 'Black Tea',
      description: 'Robust and fully oxidized tea known for its bold flavor and deep color.',
      image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'whole-leaf',
      name: 'Whole Leaf',
      description: 'Premium grade tea with intact leaves offering richer taste and aroma.',
      image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'broken-leaf',
      name: 'Broken Leaf',
      description: 'Partially broken leaves that infuse quickly while retaining full flavor.',
      image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'green-tea',
      name: 'Green Tea',
      description: 'Lightly processed tea celebrated for its delicate flavor and health benefits.',
      image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'fannings',
      name: 'Fannings',
      description: 'Small tea particles often used in tea bags for quick infusion and strong brew.',
      image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'tea-dust',
      name: 'Tea Dust',
      description: 'Finely ground tea particles providing an intense flavor, commonly used in commercial blends.',
      image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ]
  },
  'others': {
  id: 'others',
  name: 'Others',
  description: 'A diverse category of essential oils, seeds, nuts, sweeteners, and specialty items, handpicked for quality and versatility across culinary and nutritional applications.',
  image: 'https://images.pexels.com/photos/5945900/pexels-photo-5945900.jpeg?auto=compress&cs=tinysrgb&w=1200',
  subcategories: [
    {
      id: 'sunflower-oil',
      name: 'Sunflower Oil',
      description: 'Light and healthy cooking oil extracted from sunflower seeds, known for its high smoke point.',
      image: 'https://images.pexels.com/photos/5945900/pexels-photo-5945900.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'palm-oil',
      name: 'Palm Oil',
      description: 'Versatile and widely used oil with a reddish tint, suitable for both cooking and industrial use.',
      image: 'https://images.pexels.com/photos/5945900/pexels-photo-5945900.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'olive-oil',
      name: 'Olive Oil',
      description: 'Heart-healthy oil prized for its flavor and antioxidant content, commonly used in Mediterranean diets.',
      image: 'https://images.pexels.com/photos/5945900/pexels-photo-5945900.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'sesame-oil',
      name: 'Sesame Oil',
      description: 'Aromatic oil with a nutty flavor, popular in Asian cuisines and rich in healthy fats.',
      image: 'https://images.pexels.com/photos/5945900/pexels-photo-5945900.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'soyabean-meal',
      name: 'Soyabean Meal',
      description: 'High-protein feed ingredient used in livestock and poultry nutrition.',
      image: 'https://images.pexels.com/photos/5945900/pexels-photo-5945900.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'raw-sugar',
      name: 'Raw Sugar',
      description: 'Partially refined sugar with a golden hue and subtle molasses flavor.',
      image: 'https://images.pexels.com/photos/5945900/pexels-photo-5945900.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'crystal-white',
      name: 'Crystal White',
      description: 'Highly refined white sugar crystals, perfect for baking and beverages.',
      image: 'https://images.pexels.com/photos/5945900/pexels-photo-5945900.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'chia-seeds',
      name: 'Chia Seeds',
      description: 'Tiny superfood seeds packed with omega-3, fiber, and essential nutrients.',
      image: 'https://images.pexels.com/photos/5945900/pexels-photo-5945900.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'sunflower-seeds',
      name: 'Sunflower Seeds',
      description: 'Crunchy, nutritious seeds great for snacking or adding to salads and baking.',
      image: 'https://images.pexels.com/photos/5945900/pexels-photo-5945900.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'cashew-nuts',
      name: 'Cashew Nuts',
      description: 'Creamy, crescent-shaped nuts used in cooking, snacks, and desserts.',
      image: 'https://images.pexels.com/photos/5945900/pexels-photo-5945900.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'pistachio',
      name: 'Pistachio',
      description: 'Flavorful green nuts loved for their rich taste and healthy fats.',
      image: 'https://images.pexels.com/photos/5945900/pexels-photo-5945900.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'saffron',
      name: 'Saffron',
      description: 'A premium spice known for its vivid color and fragrance, used in fine dishes worldwide.',
      image: 'https://images.pexels.com/photos/5945900/pexels-photo-5945900.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'dried-onion',
      name: 'Dried Onion',
      description: 'Dehydrated onion flakes perfect for seasoning, soups, and instant recipes.',
      image: 'https://images.pexels.com/photos/5945900/pexels-photo-5945900.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'sea-foods',
      name: 'Sea Foods',
      description: 'Shelf-stable seafood options packed with flavor and nutrition.',
      image: 'https://images.pexels.com/photos/5945900/pexels-photo-5945900.jpeg?auto=compress&cs=tinysrgb&w=800',
    
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