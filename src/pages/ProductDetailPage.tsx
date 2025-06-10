import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Globe, Award, Truck, Download } from 'lucide-react';
import ProductInquiryForm from '../components/features/ProductInquiryForm';
import WhatsAppButton from '../components/features/WhatsAppButton';

// Rest of the file content remains exactly the same
const productData = {
  'spices': {
    'turmeric': {
      name: 'Turmeric',
      description: 'Our premium turmeric is sourced from the finest growing regions in India, ensuring high curcumin content and authentic color and flavor.',
      category: 'Spices',
      longDescription: `
        Turmeric (Curcuma longa) is a rhizomatous herbaceous perennial plant of the ginger family. Native to the Indian subcontinent and Southeast Asia, it has been used for thousands of years as a spice, medicinal herb, and natural dye.
        
        Our premium turmeric is sourced directly from specialized growing regions in India, particularly from Nizamabad, Salem, and Erode, which are known for producing the highest quality turmeric with optimal curcumin content.
        
        Available in various forms including raw finger, polished finger, and powder, our turmeric undergoes stringent quality control to ensure it meets international standards for food safety and quality.
      `,
      images: [
        'https://5.imimg.com/data5/SELLER/Default/2024/7/431745160/VH/IT/HH/40841925/nizamabad-double-polish-turmeric-finger.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://rb.gy/kc3l3q?auto=compress&cs=tinysrgb&w=800',
        'https://shorturl.at/rDvOW?auto=compress&cs=tinysrgb&w=800',
        'https://shorturl.at/KXsJ5?auto=compress&cs=tinysrgb&w=800'
      ],
      varieties: [
        {
          name: 'Nizamabad Double Polished',
          description: 'Premium finger turmeric with bright orange-yellow color, high curcumin content (3.5-5%), and intense aroma.',
          origin: 'Nizamabad, Telangana, India'
        },
        {
          name: 'Salem Finger',
          description: 'Known for its rich color and medium curcumin content (2.5-3.5%), ideal for culinary uses.',
          origin: 'Salem, Tamil Nadu, India'
        },
        {
          name: 'Erode Powder',
          description: 'Finely ground powder with excellent color retention and medium-high curcumin content (3-4%).',
          origin: 'Erode, Tamil Nadu, India'
        },
        {
          name: 'Organic Certified',
          description: 'Cultivated without synthetic pesticides or fertilizers, certified organic by international standards.',
          origin: 'Various regions in India'
        }
      ],
      specifications: [
        { name: 'Curcumin Content', value: '2.5-5.0% (variety dependent)' },
        { name: 'Moisture Content', value: '≤ 10%' },
        { name: 'Total Ash', value: '≤ 7%' },
        { name: 'Acid-Insoluble Ash', value: '≤ 1.5%' },
        { name: 'Lead', value: '≤ 10 ppm' },
        { name: 'Arsenic', value: '≤ 5 ppm' },
        { name: 'Foreign Matter', value: '≤ 2%' }
      ],
      packaging: [
        { type: 'Jute Bags', sizes: ['25kg', '50kg'] },
        { type: 'HDPE Bags', sizes: ['10kg', '25kg'] },
        { type: 'Vacuum Packed', sizes: ['1kg', '5kg', '10kg'] },
        { type: 'Custom Packaging', sizes: ['As per requirement'] }
      ],
      certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'Organic (for organic variants)'],
      applications: [
        'Culinary applications in various cuisines',
        'Food coloring and flavoring agent',
        'Functional food ingredients',
        'Dietary supplements',
        'Natural food preservative'
      ]
    },
    'black-pepper': {
      name: 'Black Pepper',
      description: 'Known as the "King of Spices", our black pepper is harvested at optimal ripeness to ensure maximum flavor and pungency.',
      category: 'Spices',
      longDescription: `
        Black pepper (Piper nigrum) is the world's most traded spice, known for its distinctive pungency and flavor profile. It's harvested from the pepper plant, a flowering vine cultivated for its fruit, known as a peppercorn.
        
        Our premium black pepper is sourced from the finest growing regions in Kerala and Karnataka, India. The berries are carefully harvested at optimal ripeness to ensure maximum flavor development and essential oil content.
        
        Available as whole peppercorns, crushed pepper, and fine ground powder, our black pepper undergoes meticulous processing and quality control to preserve its natural oils and flavor compounds.
      `,
      images: [
        'https://shorturl.at/T4roQ?auto=compress&cs=tinysrgb&w=800',
        'https://shorturl.at/uEVq6?auto=compress&cs=tinysrgb&w=800',
        'https://shorturl.at/akWnQ?auto=compress&cs=tinysrgb&w=800',
        'https://shorturl.at/bNwLO?auto=compress&cs=tinysrgb&w=800'
      ],
      varieties: [
        {
          name: 'Malabar Garbled',
          description: 'Premium grade with uniform size, dark color, and high piperine content (5-6%).',
          origin: 'Malabar Coast, Kerala, India'
        },
        {
          name: 'Tellicherry Extra Bold',
          description: 'Large, specially selected berries with complex flavor profile, considered the finest black pepper available.',
          origin: 'Tellicherry, Kerala, India'
        },
        {
          name: 'MG1 Grade',
          description: 'Standard export quality with good density and moderate piperine content (4-5%).',
          origin: 'Various regions in Kerala and Karnataka'
        },
        {
          name: 'Organic Black Pepper',
          description: 'Cultivated without synthetic pesticides or fertilizers, certified organic by international standards.',
          origin: 'Organic farms in Western Ghats, India'
        }
      ],
      specifications: [
        { name: 'Piperine Content', value: '4-6% (variety dependent)' },
        { name: 'Moisture Content', value: '≤ 12%' },
        { name: 'Total Ash', value: '≤ 7%' },
        { name: 'Acid-Insoluble Ash', value: '≤ 1.5%' },
        { name: 'Volatile Oil', value: '≥ 2%' },
        { name: 'Foreign Matter', value: '≤ 1%' },
        { name: 'Light Berries', value: '≤ 2%' }
      ],
      packaging: [
        { type: 'Jute Bags', sizes: ['25kg', '50kg'] },
        { type: 'HDPE Bags', sizes: ['10kg', '25kg'] },
        { type: 'Vacuum Packed', sizes: ['1kg', '5kg', '10kg'] },
        { type: 'Custom Packaging', sizes: ['As per requirement'] }
      ],
      certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'Organic (for organic variants)'],
      applications: [
        'Universal seasoning in cuisines worldwide',
        'Food processing and flavor enhancement',
        'Meat curing and preservation',
        'Essential oil extraction',
        'Functional food ingredients'
      ]
    },
    'red-chilli': {
  name: 'Red Chilli',
  description: 'Our premium red chilli is sun-dried, handpicked, and sourced from India most renowned chilli-growing regions to ensure bold heat, vibrant color, and consistent quality.',
  category: 'Spices',
  longDescription: `
    Red chilli (Capsicum annuum) is one of the most widely used spices globally, prized for its sharp heat, rich color, and flavor-enhancing properties. It belongs to the nightshade family and is a staple in Indian, Mexican, Thai, and numerous other cuisines.

    Our red chillies are sourced from top-tier farming zones in India, including Guntur, Byadgi, and Khammam, where optimal soil and climate conditions yield premium chillies with varying heat levels and rich pigmentation.

    We offer a range of varieties such as whole dry chillies, crushed chilli flakes, and fine chilli powder. Each batch is carefully processed using sun-drying and hygienic grinding techniques to maintain maximum pungency and color value.
  `,
  images: [
    'https://shorturl.at/krfhA?auto=compress&cs=tinysrgb&w=800',
    'https://shorturl.at/d8lf4?auto=compress&cs=tinysrgb&w=800',
    'https://shorturl.at/Hi8ze?auto=compress&cs=tinysrgb&w=800',
    'https://shorturl.at/V808K?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
   {
     name: 'Guntur Sannam',
     description: 'Famous for its intense heat and deep red color. Scoville Heat Units (SHU): 35,000–40,000.',
     origin: 'Guntur, Andhra Pradesh, India'
   },
   {
     name: 'Byadgi',
     description: 'Known for its rich red color and mild pungency. Ideal for natural food coloring. SHU: 8,000–15,000.',
     origin: 'Byadgi, Karnataka, India'
   },
   {
     name: 'Teja Chilli',
     description: 'Highly pungent variety with sharp heat and moderate color. SHU: 90,000–120,000.',
     origin: 'Khammam, Telangana, India'
   },
   {
    name: 'Organic Red Chilli',
    description: 'Grown without synthetic pesticides or chemicals. Certified organic and sun-dried for natural preservation.',
    origin: 'Multiple organic-certified farms across India'
   }
  ],
  specifications: [
   { name: 'Color Value (ASTA)', value: '90-160 ASTA (variety dependent)' },
   { name: 'Moisture Content', value: '≤ 12%' },
   { name: 'Pungency (SHU)', value: '8,000 - 120,000 SHU' },
   { name: 'Ash Content', value: '≤ 7%' },
   { name: 'Acid-Insoluble Ash', value: '≤ 1.5%' },
   { name: 'Foreign Matter', value: '≤ 1%' },
   { name: 'Damaged Pods', value: '≤ 2%' }
  ],
  packaging: [
   { type: 'Jute Bags', sizes: ['25kg', '50kg'] },
   { type: 'HDPE Bags', sizes: ['10kg', '25kg'] },
   { type: 'Vacuum Packed', sizes: ['1kg', '5kg', '10kg'] },
   { type: 'Custom Packaging', sizes: ['As per requirement'] }
  ],
  certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'Organic (for certified organic variants)'],
  applications: [
   'Spicing agent in diverse global cuisines',
   'Coloring agent in processed foods and sauces',
   'Ingredient in spice blends and seasonings',
   'Traditional Ayurvedic and herbal formulations',
   'Natural preservative due to antimicrobial properties'
  ]
    },
    'cardamom': {
  name: 'Cardamom',
  description: 'Fragrant, sweet-spicy cardamom pods known as the "Queen of Spices", prized for their aroma and flavor.',
  category: 'Spices',
  longDescription: `
    Cardamom (Elettaria cardamomum) is a highly aromatic spice belonging to the ginger family, known for its sweet, floral flavor and warm aroma. Often called the "Queen of Spices", cardamom has been treasured in Indian, Middle Eastern, and Scandinavian cuisines for centuries.
    
    Our cardamom is sourced from the lush plantations of Idukki and Wayanad in Kerala, as well as Coorg in Karnataka, which are recognized for producing some of the world's finest green cardamom with rich volatile oil content.
    
    Available in various grades and forms including whole pods, seeds, and ground powder, our cardamom is meticulously sorted, sun-dried, and packed to preserve freshness and essential oils.
  `,
  images: [
    'https://shorturl.at/LiLQu?auto=compress&cs=tinysrgb&w=800',
    'https://shorturl.at/hMcN3?auto=compress&cs=tinysrgb&w=800',
    'https://shorturl.at/WZZsn?auto=compress&cs=tinysrgb&w=800',
    'https://shorturl.at/CWXst?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: '8mm+ Bold Green Cardamom',
      description: 'Large, bright green pods with high oil content and intense aroma. Premium export grade.',
      origin: 'Idukki, Kerala, India'
    },
    {
      name: '7-8mm Grade',
      description: 'Well-sized pods with balanced aroma and sweetness. Popular for culinary and commercial use.',
      origin: 'Wayanad, Kerala, India'
    },
    {
      name: 'Coorg Green',
      description: 'Known for its earthy aroma and medium size, perfect for both flavoring and beverages.',
      origin: 'Coorg, Karnataka, India'
    },
    {
      name: 'Organic Cardamom',
      description: 'Cultivated without synthetic inputs, certified organic, and sustainably harvested.',
      origin: 'Certified organic farms in South India'
    }
  ],
  specifications: [
    { name: 'Size', value: '6mm to 8mm+ (variety dependent)' },
    { name: 'Moisture Content', value: '≤ 12%' },
    { name: 'Volatile Oil Content', value: '≥ 3%' },
    { name: 'Foreign Matter', value: '≤ 1%' },
    { name: 'Empty/Light Pods', value: '≤ 2%' },
    { name: 'Ash Content', value: '≤ 8%' },
    { name: 'Color', value: 'Bright green to deep green' }
  ],
  packaging: [
    { type: 'Jute Bags', sizes: ['25kg', '50kg'] },
    { type: 'HDPE Bags', sizes: ['10kg', '25kg'] },
    { type: 'Vacuum Packed', sizes: ['500g', '1kg', '5kg'] },
    { type: 'Custom Packaging', sizes: ['As per requirement'] }
  ],
  certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'Organic (for organic variants)'],
  applications: [
    'Flavoring in sweet and savory dishes',
    'Ingredient in chai, coffees, and liqueurs',
    'Natural breath freshener and digestive aid',
    'Used in confectionery and baking',
    'Functional ingredient in health supplements'
  ]
    },
    'cinnamon': {
  name: 'Cinnamon',
  description: 'Warm, sweet aromatic cinnamon bark used in culinary and medicinal applications, available in quills and powder.',
  category: 'Spices',
  longDescription: `
    Cinnamon (Cinnamomum verum and Cinnamomum cassia) is a highly fragrant spice obtained from the inner bark of trees from the Lauraceae family. It has been cherished for centuries for its sweet, woody aroma and health-supporting properties.
    
    Our cinnamon is ethically sourced from certified farms in Kerala, Tamil Nadu, and North East India, with both Ceylon (True) and Cassia varieties available to meet diverse culinary and industrial requirements.
    
    Available in multiple forms including whole quills, broken pieces, and fine ground powder, our cinnamon is sun-dried and carefully processed to retain its essential oils and natural sweetness.
  `,
  images: [
    'https://shorturl.at/Eyzo7?auto=compress&cs=tinysrgb&w=800',
    'https://shorturl.at/LGtef?auto=compress&cs=tinysrgb&w=800',
    'https://shorturl.at/JaEAe?auto=compress&cs=tinysrgb&w=800',
    'https://shorturl.at/skL1z?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: 'Ceylon Cinnamon (True Cinnamon)',
      description: 'Light, delicate flavor with low coumarin content and high essential oil concentration. Considered the premium variety.',
      origin: 'Kerala and Sri Lanka'
    },
    {
      name: 'Cassia Cinnamon',
      description: 'Stronger flavor, darker color, and thicker bark. Popular in commercial baking and spice blends.',
      origin: 'Tamil Nadu and North East India'
    },
    {
      name: 'Organic Cinnamon',
      description: 'Naturally cultivated without chemicals or synthetic inputs, certified organic.',
      origin: 'Certified organic farms in South India'
    }
  ],
  specifications: [
    { name: 'Volatile Oil Content', value: '≥ 1.5% (variety dependent)' },
    { name: 'Coumarin Content', value: '≤ 0.0004% (Ceylon), ≤ 5% (Cassia)' },
    { name: 'Moisture Content', value: '≤ 12%' },
    { name: 'Ash Content', value: '≤ 8%' },
    { name: 'Acid-Insoluble Ash', value: '≤ 1.5%' },
    { name: 'Foreign Matter', value: '≤ 1%' },
    { name: 'Appearance', value: 'Whole quills, broken quills, or powder' }
  ],
  packaging: [
    { type: 'Jute Bags', sizes: ['25kg', '50kg'] },
    { type: 'HDPE Bags', sizes: ['10kg', '25kg'] },
    { type: 'Vacuum Packed', sizes: ['500g', '1kg', '5kg'] },
    { type: 'Custom Packaging', sizes: ['As per requirement'] }
  ],
  certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'Organic (for organic variants)'],
  applications: [
    'Used in baking, desserts, and beverages',
    'Flavoring for curries and sauces',
    'Health and wellness supplements',
    'Aromatic component in teas and masalas',
    'Natural preservative and antimicrobial agent'
  ]
    },
    'cloves': {
  name: 'Cloves',
  description: 'Strongly aromatic dried flower buds used in cuisines, teas, and health products, known for their intense flavor and medicinal value.',
  category: 'Spices',
  longDescription: `
    Cloves (Syzygium aromaticum) are the aromatic flower buds of a tree in the myrtle family, native to the Maluku Islands in Indonesia but widely cultivated in India. Known for their bold, pungent aroma and sweet-spicy flavor, cloves have been valued for both culinary and medicinal uses for centuries.
    
    Our cloves are sourced from high-quality plantations in Kerala, Tamil Nadu, and the Andaman & Nicobar Islands, where ideal growing conditions produce buds with high oil content and superior quality.
    
    Offered in whole, broken, and ground forms, our cloves are dried carefully to retain maximum eugenol concentration, ensuring lasting aroma and flavor.
  `,
  images: [
    'https://shorturl.at/gFnTi?auto=compress&cs=tinysrgb&w=800',
    'https://short-link.me/12HND?auto=compress&cs=tinysrgb&w=800',
    'https://short-link.me/12HNR?auto=compress&cs=tinysrgb&w=800',
    'https://short-link.me/ZGsR?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: 'Handpicked Superior Grade',
      description: 'Large, bold buds with rich color and high eugenol oil content. Premium culinary and export grade.',
      origin: 'Kollam and Idukki, Kerala, India'
    },
    {
      name: 'Fair Average Quality (FAQ)',
      description: 'Smaller sized cloves with moderate oil content, commonly used in masala mixes.',
      origin: 'Tamil Nadu, India'
    },
    {
      name: 'Organic Cloves',
      description: 'Sustainably farmed and free from synthetic chemicals. Certified organic with strong aroma.',
      origin: 'Andaman & Nicobar Islands'
    }
  ],
  specifications: [
    { name: 'Eugenol Oil Content', value: '≥ 14%' },
    { name: 'Moisture Content', value: '≤ 11%' },
    { name: 'Volatile Oil', value: '≥ 1.5%' },
    { name: 'Foreign Matter', value: '≤ 1%' },
    { name: 'Headless Cloves', value: '≤ 5%' },
    { name: 'Color', value: 'Dark brown to reddish-brown' }
  ],
  packaging: [
    { type: 'Jute Bags', sizes: ['25kg', '50kg'] },
    { type: 'HDPE Bags', sizes: ['10kg', '25kg'] },
    { type: 'Vacuum Packed', sizes: ['500g', '1kg', '5kg'] },
    { type: 'Custom Packaging', sizes: ['As per requirement'] }
  ],
  certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'Organic (for organic variants)'],
  applications: [
    'Flavoring agent in spice blends, curries, and rice dishes',
    'Essential ingredient in herbal teas and beverages',
    'Used in oral care and natural remedies',
    'Component in Ayurvedic and Unani formulations',
    'Preservative and antioxidant in food processing'
  ]
    },
    'cumin-seeds': {
  name: 'Cumin Seeds',
  description: 'Earthy, warm-flavored cumin seeds used extensively in global cuisines and traditional remedies.',
  category: 'Spices',
  longDescription: `
    Cumin (Cuminum cyminum) is a flowering plant in the parsley family, prized for its small, crescent-shaped seeds that deliver a distinct earthy, nutty flavor with warm undertones. Widely used in Indian, Middle Eastern, Latin American, and Mediterranean cuisines, cumin is both a culinary and medicinal powerhouse.
    
    Our cumin seed is primarily sourced from Gujarat and Rajasthan — India’s leading cumin-growing regions known for their climate-optimized production and rich volatile oil content. The seeds are cleaned, sun-dried, and processed in hygienic facilities to preserve purity and aroma.
    
    Available in various forms including whole seeds, ground cumin, and organic certified batches, our cumin meets global food safety and flavor standards.
  `,
  images: [
    'https://shorturl.at/Sg1cn?auto=compress&cs=tinysrgb&w=800',
    'https://shorturl.at/U0uBP?auto=compress&cs=tinysrgb&w=800',
    'https://shorturl.at/PKV4E?auto=compress&cs=tinysrgb&w=800',
    'https://shorturl.at/KuaZX?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: 'European Grade Cumin',
      description: 'Uniform seeds with bold aroma and low moisture content. Ideal for spice mixes and exports.',
      origin: 'Unjha, Gujarat, India'
    },
    {
      name: 'Singapore Quality Cumin',
      description: 'Premium light brown seeds, rich in oil and flavor, commonly used for high-end culinary blends.',
      origin: 'Rajasthan, India'
    },
    {
      name: 'Organic Cumin Seeds',
      description: 'Certified organic cumin cultivated without chemicals or pesticides. Cleaned and sun-dried naturally.',
      origin: 'Certified organic farms in Gujarat'
    }
  ],
  specifications: [
    { name: 'Volatile Oil Content', value: '≥ 2%' },
    { name: 'Moisture Content', value: '≤ 10%' },
    { name: 'Purity', value: '≥ 99%' },
    { name: 'Admixture', value: '≤ 1%' },
    { name: 'Foreign Matter', value: '≤ 0.5%' },
    { name: 'Color', value: 'Light to dark brown' }
  ],
  packaging: [
    { type: 'Jute Bags', sizes: ['25kg', '50kg'] },
    { type: 'HDPE Bags', sizes: ['10kg', '25kg'] },
    { type: 'Vacuum Packed', sizes: ['500g', '1kg', '5kg'] },
    { type: 'Custom Packaging', sizes: ['As per requirement'] }
  ],
  certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'Organic (for organic variants)'],
  applications: [
    'Base spice for curries, dals, and savory dishes',
    'Used in spice blends like garam masala and taco seasoning',
    'Flavor enhancer in breads, cheeses, and sauces',
    'Digestive aid and traditional herbal remedy',
    'Key ingredient in pickles and spice pastes'
  ]
    },
    'fennel-seeds': {
  name: 'Fennel Seeds',
  description: 'Sweet, aromatic fennel seeds used in cooking, teas, and digestion-boosting remedies.',
  category: 'Spices',
  longDescription: `
    Fennel seeds (Foeniculum vulgare) are the dried fruits of the fennel plant, known for their sweet, licorice-like flavor and highly aromatic profile. Used extensively in Indian, Middle Eastern, and Mediterranean cuisines, fennel seeds also play a major role in herbal medicine and Ayurveda.
    
    Our fennel seeds are harvested from top-quality farms in Gujarat and Rajasthan, where the climate promotes optimal seed size, oil content, and sweetness. The seeds are sun-dried and double-sorted to ensure purity and color consistency.
    
    Available in varieties such as bold (large seeds), green cleaned, and organic-certified fennel, our products meet international food safety and export quality standards.
  `,
  images: [
    'https://shorturl.at/lB1TA?auto=compress&cs=tinysrgb&w=800',
    'https://alseadawy.com/assets/images/fennelseeds.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://kinalglobalcare.com/wp-content/uploads/fennel-seeds-big-771x308.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://www.shivindianspices.com/wp-content/uploads/2014/12/FENNEL.jpg?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: 'Bold Fennel Seeds',
      description: 'Large, greenish seeds with intense sweetness and strong aroma. Ideal for mouth fresheners and culinary use.',
      origin: 'Gujarat, India'
    },
    {
      name: 'Green Cleaned Fennel',
      description: 'Bright green, machine-cleaned seeds with consistent color and size. Popular in exports and blends.',
      origin: 'Rajasthan, India'
    },
    {
      name: 'Organic Fennel Seeds',
      description: 'Cultivated without synthetic inputs and certified organic. Naturally sun-dried and hygienically processed.',
      origin: 'Certified organic farms in India'
    }
  ],
  specifications: [
    { name: 'Volatile Oil Content', value: '≥ 1.5%' },
    { name: 'Moisture Content', value: '≤ 10%' },
    { name: 'Purity', value: '≥ 99%' },
    { name: 'Admixture', value: '≤ 1%' },
    { name: 'Foreign Matter', value: '≤ 0.5%' },
    { name: 'Color', value: 'Green to light brown (variety dependent)' }
  ],
  packaging: [
    { type: 'Jute Bags', sizes: ['25kg', '50kg'] },
    { type: 'HDPE Bags', sizes: ['10kg', '25kg'] },
    { type: 'Vacuum Packed', sizes: ['500g', '1kg', '5kg'] },
    { type: 'Custom Packaging', sizes: ['As per requirement'] }
  ],
  certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'Organic (for organic variants)'],
  applications: [
    'Used in Indian cooking and spice blends',
    'Natural mouth freshener and digestive aid',
    'Infused in teas and herbal infusions',
    'Flavoring for breads, pickles, and candies',
    'Ayurvedic and homeopathic formulations'
  ]
    },
    'nigella-seeds': {
  name: 'Nigella Seeds',
  description: 'Tiny black seeds with a bitter, peppery flavor, used in breads, pickles, and traditional remedies.',
  category: 'Spices',
  longDescription: `
    Nigella seeds (Nigella sativa), also known as black cumin or kalonji, are small, jet-black seeds with a slightly bitter, pungent flavor and a peppery aroma. Widely used in Indian, Middle Eastern, and Mediterranean cooking, they are also valued in Unani and Ayurvedic medicine for their health-promoting properties.
    
    Our nigella seeds are primarily sourced from high-quality farms in Rajasthan and Madhya Pradesh, where the crop is grown under optimal soil and climate conditions. The seeds are machine-cleaned and sorted to ensure purity, uniformity, and freshness.
    
    Available in bulk or custom packaging, our nigella seeds are suitable for culinary, nutraceutical, and cosmetic applications.
  `,
  images: [
    'https://heeraagri.com/wp-content/uploads/2024/05/kalonji-image.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://spicenest.in/cdn/shop/articles/DeWatermark.ai_1732251832420.png?auto=compress&cs=tinysrgb&w=800',
    'https://cdn.shopify.com/s/files/1/0740/1878/3472/files/stock-photo-nigella-sativa-or-black-cumin-in-wooden-bowl-isolated-on-white-background-top-view-flat-lay-1765788344-transformed_9fa4d1d7-02cc-424e-b60c-d4de293cfe66_480x480.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://2.wlimg.com/product_images/bc-full/2022/11/11255672/nigella-seeds-1667562761-6610722.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: 'Standard Export Grade',
      description: 'Cleaned, uniform seeds with sharp aroma and flavor. Suitable for food-grade and herbal applications.',
      origin: 'Rajasthan, India'
    },
    {
      name: 'Premium Black Nigella',
      description: 'Bold seeds with deep black color and intense aroma. Used in baking, pickling, and spice mixes.',
      origin: 'Madhya Pradesh, India'
    },
    {
      name: 'Organic Nigella Seeds',
      description: 'Cultivated without chemical inputs, certified organic. High in thymoquinone and essential oils.',
      origin: 'Certified organic farms in India'
    }
  ],
  specifications: [
    { name: 'Volatile Oil Content', value: '≥ 1%' },
    { name: 'Moisture Content', value: '≤ 8%' },
    { name: 'Purity', value: '≥ 99%' },
    { name: 'Foreign Matter', value: '≤ 0.5%' },
    { name: 'Color', value: 'Deep black' },
    { name: 'Admixture', value: '≤ 1%' }
  ],
  packaging: [
    { type: 'Jute Bags', sizes: ['25kg', '50kg'] },
    { type: 'HDPE Bags', sizes: ['10kg', '25kg'] },
    { type: 'Vacuum Packed', sizes: ['500g', '1kg', '5kg'] },
    { type: 'Custom Packaging', sizes: ['As per requirement'] }
  ],
  certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'Organic (for organic variants)'],
  applications: [
    'Topping for breads, naan, and flatbreads',
    'Flavoring for pickles, chutneys, and spice blends',
    'Ingredient in herbal supplements and oils',
    'Traditional medicine and Ayurvedic use',
    'Cosmetic formulations and skin treatments'
  ]
    },
    'coriander-seeds': {
  name: 'Coriander Seeds',
  description: 'Citrusy, mildly sweet coriander seeds widely used in cooking, pickling, and spice blends.',
  category: 'Spices',
  longDescription: `
    Coriander seeds (Coriandrum sativum) are the dried fruits of the coriander plant and are a staple spice in Indian, Middle Eastern, African, and Latin cuisines. They offer a warm, nutty, and slightly citrusy flavor that enhances both savory and sweet dishes.
    
    Our coriander seeds are carefully sourced from Gujarat, Rajasthan, and Madhya Pradesh—India’s prime coriander-growing belts. The seeds are cleaned, sorted, and sun-dried to retain their essential oils and golden-brown color.
    
    Available in whole, split, and ground form, our coriander seeds meet international food quality standards and are ideal for culinary, commercial, and medicinal uses.
  `,
  images: [
    'https://nuffoodsspectrum.in/wp-content/uploads/articles/coriander_export-7731.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://5.imimg.com/data5/SELLER/Default/2023/5/305936280/QS/HF/YQ/187509036/coriander-seeds-1000x1000.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://5.imimg.com/data5/ANDROID/Default/2023/10/351598027/TF/YI/BS/92374395/product-jpeg-1000x1000.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://img1.exportersindia.com/product_images/bc-small/2021/4/1449033/premium-quality-coriander-seeds-1618465023-5790776.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: 'Eagle Coriander Seeds',
      description: 'Large, light-yellow seeds with high aroma and oil content. Preferred for exports and powder production.',
      origin: 'Rajasthan, India'
    },
    {
      name: 'Single Parrot Variety',
      description: 'Medium-sized seeds with balanced citrusy flavor and aroma. Ideal for domestic spice use.',
      origin: 'Gujarat, India'
    },
    {
      name: 'Organic Coriander',
      description: 'Naturally grown without pesticides. Certified organic and hand-cleaned for premium quality.',
      origin: 'Organic farms in Madhya Pradesh'
    }
  ],
  specifications: [
    { name: 'Essential Oil Content', value: '≥ 0.5%' },
    { name: 'Moisture Content', value: '≤ 10%' },
    { name: 'Purity', value: '≥ 99%' },
    { name: 'Admixture', value: '≤ 1%' },
    { name: 'Foreign Matter', value: '≤ 0.5%' },
    { name: 'Color', value: 'Golden yellow to light brown' }
  ],
  packaging: [
    { type: 'Jute Bags', sizes: ['25kg', '50kg'] },
    { type: 'HDPE Bags', sizes: ['10kg', '25kg'] },
    { type: 'Vacuum Packed', sizes: ['500g', '1kg', '5kg'] },
    { type: 'Custom Packaging', sizes: ['As per requirement'] }
  ],
  certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'Organic (for organic variants)'],
  applications: [
    'Used whole or ground in spice blends, curries, and sauces',
    'Key ingredient in pickles and chutneys',
    'Flavoring agent in beverages and liqueurs',
    'Traditional remedy for digestion and bloating',
    'Used in herbal teas and health supplements'
  ]
    },
    'fenugreek-seeds': {
  name: 'Fenugreek Seeds',
  description: 'Bitter-sweet fenugreek seeds with a distinct aroma, used in cooking, pickling, and traditional medicine.',
  category: 'Spices',
  longDescription: `
    Fenugreek seeds (Trigonella foenum-graecum) are small, golden-yellow seeds known for their strong, bitter-sweet aroma and slightly nutty, maple-like flavor. Widely used in Indian, Middle Eastern, and African cuisines, fenugreek is also a powerful traditional remedy in Ayurveda and Unani medicine.
    
    Our fenugreek seeds are sourced from top-producing regions like Rajasthan and Madhya Pradesh, where ideal growing conditions yield plump, aromatic seeds rich in fiber, protein, and key phytochemicals like diosgenin.
    
    We offer fenugreek in whole, ground, and organic-certified forms, ideal for culinary, nutraceutical, and cosmetic industries.
  `,
  images: [
    'https://mginternationalexport.com/wp-content/uploads/2023/05/fenugreek-on-a-spoon.webp?auto=compress&cs=tinysrgb&w=800',
    'https://5.imimg.com/data5/SELLER/Default/2023/7/324514603/NM/PY/QZ/11104951/indian-fenugreek-seeds-1000x1000.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://5.imimg.com/data5/GLADMIN/Default/2022/6/VI/IR/KZ/92368/methi-dana-250x250.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://a2zagrofood.com/wp-content/uploads/2017/12/Fenugreek_seeds.jpg?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: 'Bold Fenugreek Seeds',
      description: 'Large, clean seeds with strong aroma and high oil content. Ideal for spice and pharma use.',
      origin: 'Rajasthan, India'
    },
    {
      name: 'Standard Grade',
      description: 'Medium-sized seeds with moderate aroma and uniform color. Suitable for culinary and commercial applications.',
      origin: 'Madhya Pradesh, India'
    },
    {
      name: 'Organic Fenugreek',
      description: 'Cultivated without chemical inputs, certified organic. Naturally dried and cleaned.',
      origin: 'Certified organic farms in India'
    }
  ],
  specifications: [
    { name: 'Moisture Content', value: '≤ 10%' },
    { name: 'Volatile Oil', value: '≥ 0.5%' },
    { name: 'Purity', value: '≥ 99%' },
    { name: 'Admixture', value: '≤ 1%' },
    { name: 'Foreign Matter', value: '≤ 0.5%' },
    { name: 'Color', value: 'Golden yellow to light brown' }
  ],
  packaging: [
    { type: 'Jute Bags', sizes: ['25kg', '50kg'] },
    { type: 'HDPE Bags', sizes: ['10kg', '25kg'] },
    { type: 'Vacuum Packed', sizes: ['500g', '1kg', '5kg'] },
    { type: 'Custom Packaging', sizes: ['As per requirement'] }
  ],
  certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'Organic (for organic variants)'],
  applications: [
    'Used in spice blends and curry powders',
    'Flavoring for pickles and chutneys',
    'Herbal supplements and teas',
    'Ayurvedic formulations and home remedies',
    'Ingredient in hair and skincare products'
  ]
    },
    'asaliya-seeds': {
  name: 'Asaliya Seeds',
  description: 'Nutrient-rich, slightly peppery Asaliya seeds used in traditional health tonics, ayurveda, and spiced recipes.',
  category: 'Spices',
  longDescription: `
    Asaliya Seeds (Lepidium sativum), also known as Halim or Garden Cress Seeds, are tiny reddish-brown seeds packed with health-boosting nutrients. Known for their peppery flavor and therapeutic benefits, they are traditionally used in Indian home remedies, ayurvedic medicine, and special health mixes.
    
    Our Asaliya seeds are primarily grown in Rajasthan and Gujarat, where dry climates yield seeds with superior taste, color, and nutrient density. Rich in iron, protein, fiber, and antioxidants, they are a popular choice in wellness and immunity-boosting recipes.
    
    These seeds are available in raw, organic, and bulk forms. Cleaned and sorted with care, our Asaliya seeds meet high quality standards for both food-grade and nutraceutical applications.
  `,
  images: [
    'https://ashapuraexporters.com/wp-content/uploads/2024/07/Asaliya-Seeds.webp?auto=compress&cs=tinysrgb&w=800',
    'https://5.imimg.com/data5/SELLER/Default/2020/12/KP/MJ/UC/72660211/halim-seeds-garden-cress-seeds-asaliya-1000x1000.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://5.imimg.com/data5/SELLER/Default/2020/12/GP/BE/JG/72660211/halim-seeds-garden-cress-seeds-asaliya-1000x1000.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://5.imimg.com/data5/SELLER/Default/2020/12/NV/XP/JT/72660211/halim-seeds-garden-cress-seeds-asaliya-1000x1000.jpg?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: 'Standard Grade Asaliya',
      description: 'Uniform reddish-brown seeds with strong aroma and bitter-peppery flavor. Ideal for traditional and culinary use.',
      origin: 'Rajasthan, India'
    },
    {
      name: 'Bold Cleaned Seeds',
      description: 'Larger size, low impurity seeds suitable for mixing in laddoos, chutneys, and health formulations.',
      origin: 'Gujarat, India'
    },
    {
      name: 'Organic Asaliya Seeds',
      description: 'Free from synthetic pesticides and chemical treatments. Certified organic and sun-dried.',
      origin: 'Organic-certified farms in India'
    }
  ],
  specifications: [
    { name: 'Moisture Content', value: '≤ 8%' },
    { name: 'Purity', value: '≥ 99%' },
    { name: 'Protein Content', value: '≥ 20%' },
    { name: 'Iron Content', value: 'Rich Source' },
    { name: 'Color', value: 'Reddish-brown' },
    { name: 'Foreign Matter', value: '≤ 0.5%' }
  ],
  packaging: [
    { type: 'HDPE Bags', sizes: ['10kg', '25kg'] },
    { type: 'Vacuum Packed', sizes: ['500g', '1kg', '5kg'] },
    { type: 'Custom Packaging', sizes: ['As per requirement'] }
  ],
  certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'Organic (for organic variants)'],
  applications: [
    'Used in Ayurvedic and home remedies for boosting immunity and energy',
    'Key ingredient in halim drink, laddoos, and herbal mixtures',
    'Added to soups, porridges, and health snacks',
    'Used in post-natal nutrition for women',
    'Rich source of iron, ideal for anemia support'
  ]
    },
    'dill-seeds': {
  name: 'Dill Seeds',
  description: 'Aromatic dill seeds with a warm, slightly bitter flavor, used in pickling, cooking, and herbal remedies.',
  category: 'Spices',
  longDescription: `
    Dill seeds (Anethum graveolens) are the dried fruits of the dill plant, known for their warm, slightly bitter taste and strong aroma reminiscent of caraway. Used both as a spice and herbal remedy, dill seeds are common in pickles, soups, and digestive teas.
    
    Our dill seeds are harvested from premium-quality farms in Rajasthan and Gujarat, regions known for producing seeds rich in essential oils and with uniform size and color. The seeds are cleaned and naturally sun-dried to preserve their aroma and healthful compounds.
    
    Available in bulk or custom packaging, our dill seeds are ideal for food processing, herbal teas, and traditional medicinal use.
  `,
  images: [
    'https://www.koteshwaragriexports.com/images/product/DillSeed-4242024113145PM.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://5.imimg.com/data5/SELLER/Default/2023/5/310048512/KJ/IN/ON/187555324/dill-seeds-1000x1000.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://5.imimg.com/data5/SELLER/Default/2023/1/MA/FP/HD/5642594/dill-seeds-250x250.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://pruthviindustries.com/wp-content/uploads/2024/08/dill-seed.png?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: 'Bold Dill Seeds',
      description: 'Larger, high-oil-content seeds with robust aroma. Preferred for pickling and flavoring oils.',
      origin: 'Rajasthan, India'
    },
    {
      name: 'Standard Grade',
      description: 'Well-sorted, medium-sized seeds with traditional flavor. Commonly used in spice blends and home remedies.',
      origin: 'Gujarat, India'
    },
    {
      name: 'Organic Dill Seeds',
      description: 'Cultivated organically without chemicals, certified and sun-dried to preserve medicinal properties.',
      origin: 'Certified organic farms in India'
    }
  ],
  specifications: [
    { name: 'Volatile Oil Content', value: '≥ 2%' },
    { name: 'Moisture Content', value: '≤ 10%' },
    { name: 'Purity', value: '≥ 99%' },
    { name: 'Admixture', value: '≤ 1%' },
    { name: 'Color', value: 'Light to dark brown' },
    { name: 'Foreign Matter', value: '≤ 0.5%' }
  ],
  packaging: [
    { type: 'HDPE Bags', sizes: ['10kg', '25kg'] },
    { type: 'Vacuum Packed', sizes: ['500g', '1kg', '5kg'] },
    { type: 'Custom Packaging', sizes: ['As per requirement'] }
  ],
  certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'Organic (for organic variants)'],
  applications: [
    'Pickling and preserving vegetables',
    'Flavoring soups, curries, and spice blends',
    'Used in herbal teas and digestive tonics',
    'Traditional remedies for colic and indigestion',
    'Aromatic oils and wellness formulations'
  ]
    },
    'yellow-mustard': {
  name: 'Yellow Mustard Seeds',
  description: 'Mild, nutty-flavored yellow mustard seeds used in pickles, sauces, and spice blends.',
  category: 'Spices',
  longDescription: `
    Yellow Mustard Seeds (Sinapis alba), also known as white mustard, are small round seeds with a mild, slightly nutty flavor and bright yellow color. Popular in Western cuisines and condiments, they are also used in Indian spice blends, pickles, and health remedies.
    
    Our yellow mustard seeds are cultivated in Rajasthan and Madhya Pradesh—India's key mustard-producing regions. The seeds are naturally dried and machine-cleaned to ensure high purity, strong aroma, and consistent size.
    
    Available in food-grade and organic-certified varieties, our yellow mustard seeds meet international standards for flavor, oil content, and safety.
  `,
  images: [
    'https://seasonsinternational.in/wp-content/uploads/2024/05/Mustard-Seeds.webp?auto=compress&cs=tinysrgb&w=800',
    'https://5.imimg.com/data5/NV/SX/VH/SELLER-93212663/yellow-mustard-seeds-1000x1000.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://www.organicgyaan.com/cdn/shop/files/Yellow-Mustard-Seeds.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://images.jdmagicbox.com/quickquotes/images_main/yellow-mustard-seeds-372459744-rk2az.jpg?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: 'Standard Yellow Mustard',
      description: 'Mild and flavorful seeds, ideal for pickling, sauces, and spice applications.',
      origin: 'Rajasthan, India'
    },
    {
      name: 'Bold Grade',
      description: 'Larger, uniform seeds with high oil content. Preferred in food processing and commercial spice mixes.',
      origin: 'Madhya Pradesh, India'
    },
    {
      name: 'Organic Yellow Mustard',
      description: 'Certified organic mustard seeds grown without synthetic pesticides. Cleaned and dried naturally.',
      origin: 'Certified organic farms in India'
    }
  ],
  specifications: [
    { name: 'Volatile Oil Content', value: '≥ 1.5%' },
    { name: 'Moisture Content', value: '≤ 8%' },
    { name: 'Purity', value: '≥ 99%' },
    { name: 'Admixture', value: '≤ 1%' },
    { name: 'Color', value: 'Bright yellow to pale golden' },
    { name: 'Foreign Matter', value: '≤ 0.5%' }
  ],
  packaging: [
    { type: 'HDPE Bags', sizes: ['10kg', '25kg'] },
    { type: 'Jute Bags', sizes: ['25kg', '50kg'] },
    { type: 'Vacuum Packed', sizes: ['500g', '1kg', '5kg'] },
    { type: 'Custom Packaging', sizes: ['As per requirement'] }
  ],
  certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'Organic (for organic variants)'],
  applications: [
    'Used in pickles, sauces, and condiments',
    'Key ingredient in mustard pastes and spreads',
    'Used in salad dressings and spice blends',
    'Base spice for marinades and rubs',
    'Health supplements and digestive tonics'
  ]
    },
    'dry-ginger': {
  name: 'Dry Ginger',
  description: 'Pungent, aromatic dry ginger root used in spice blends, teas, and traditional medicine.',
  category: 'Spices',
  longDescription: `
    Dry Ginger (Zingiber officinale) is the dehydrated form of fresh ginger root, known for its pungent, spicy-sweet flavor and warming aroma. A staple in Indian, Asian, and Middle Eastern cooking, it’s also widely used in Ayurveda and traditional remedies for digestive and anti-inflammatory benefits.
    
    Our dry ginger is sourced from top-quality farms in Kerala, Sikkim, and North Eastern India, where the rhizomes are harvested at peak maturity and sun-dried under hygienic conditions to preserve flavor, essential oils, and color.
    
    Available in whole, sliced, and ground powder forms, our dry ginger is ideal for culinary use, health formulations, and food processing.
  `,
  images: [
    'https://seasonsinternational.in/wp-content/uploads/2021/05/dry_ginger_2.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://www.geewinexim.com/wp-content/uploads/2024/10/dried-ginger.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://www.geewinexim.com/wp-content/uploads/2024/10/dried3.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://cdn.globalso.com/ncgce/U5eedb8e653e145a4bd55752fb9d37832p.jpg?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: 'Whole Dry Ginger',
      description: 'Sun-dried mature rhizomes with sharp pungency and aromatic oils. Used in bulk spice and herbal markets.',
      origin: 'Wayanad, Kerala, India'
    },
    {
      name: 'Sliced Dry Ginger',
      description: 'Thinly sliced and uniformly dried pieces. Used in teas, extracts, and decoctions.',
      origin: 'Sikkim and North East India'
    },
    {
      name: 'Dry Ginger Powder',
      description: 'Finely ground powder with intense aroma and flavor. Commonly used in spice mixes and bakery products.',
      origin: 'Various regions in India'
    },
    {
      name: 'Organic Dry Ginger',
      description: 'Cultivated without synthetic chemicals and certified organic. Ideal for wellness formulations.',
      origin: 'Certified organic farms in India'
    }
  ],
  specifications: [
    { name: 'Volatile Oil Content', value: '≥ 1.5%' },
    { name: 'Moisture Content', value: '≤ 10%' },
    { name: 'Fiber Content', value: '≤ 6%' },
    { name: 'Pungency (Gingerol)', value: 'High' },
    { name: 'Color', value: 'Off-white to pale yellow' },
    { name: 'Foreign Matter', value: '≤ 1%' }
  ],
  packaging: [
    { type: 'HDPE Bags', sizes: ['10kg', '25kg'] },
    { type: 'Jute Bags', sizes: ['25kg', '50kg'] },
    { type: 'Vacuum Packed', sizes: ['500g', '1kg', '5kg'] },
    { type: 'Custom Packaging', sizes: ['As per requirement'] }
  ],
  certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'Organic (for organic variants)'],
  applications: [
    'Used in spice blends, curry powders, and masalas',
    'Flavoring for bakery products, soups, and teas',
    'Key ingredient in Ayurvedic and herbal medicine',
    'Anti-inflammatory and digestive support formulations',
    'Used in traditional cold and flu remedies'
  ]
    }
  },
  'grains': {
    
  'rice': {
    name: 'Rice',
    description: 'A diverse collection of rice varieties cultivated across India, each offering unique flavors, textures, and culinary applications.',
    category: 'Grains',
    longDescription: `
      India is renowned for its rich diversity in rice cultivation, producing a wide array of rice varieties that cater to different tastes and culinary traditions. From the aromatic Basmati rice of the northern plains to the robust non-Basmati varieties of the south, each type of rice holds a special place in Indian cuisine and culture.
    `,
    images: [
      'https://shorturl.at/eTYvl?auto=compress&cs=tinysrgb&w=800',
      'https://dst.news/wp-content/uploads/2023/07/1-rice-wheat.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://www.knnindia.co.in/uploads/newsfiles/BASMATI-20-7-2021.jpg?auto=compress&cs=tinysrgb&w=800',
      'https://agronfoodprocessing.com/wp-content/uploads/2023/11/Export-rice.jpg?auto=compress&cs=tinysrgb&w=800'
      
    ],
    varieties: [
      {
        name: 'Basmati Rice',
        description: 'Long-grain aromatic rice known for its distinctive fragrance and delicate flavor.',
        origin: 'Northern India'
      },
      {
        name: 'Non-Basmati Rice',
        description: 'A broad category encompassing various rice types differing in grain size, texture, and taste.',
        origin: 'Pan India'
      },
      {
        name: 'Parboiled Rice',
        description: 'Rice that has been partially boiled in the husk, enhancing its nutritional profile and shelf life.',
        origin: 'Various regions in India'
      },
      {
        name: 'IR64 Rice',
        description: 'A high-yielding variety known for its affordability and suitability for daily consumption.',
        origin: 'Andhra Pradesh, India'
      },
      {
        name: 'Sona Masoori Rice',
        description: 'Lightweight, aromatic rice ideal for daily meals and special dishes.',
        origin: 'Andhra Pradesh and Karnataka, India'
      },
      {
        name: 'Ponni Rice',
        description: 'Short-grain rice favored in South India for its soft texture, commonly used in idli and dosa preparations.',
        origin: 'Tamil Nadu, India'
      },
      {
        name: 'Sharbati Rice',
        description: 'A variety with elongated grains and a sweet taste, widely used in making pulaos.',
        origin: 'Punjab and Haryana, India'
      },
      {
        name: 'PR11 Rice',
        description: 'Non-Basmati variety appreciated for its taste and rich color.',
        origin: 'India'
      },
      {
        name: 'PR14 Rice',
        description: 'Popular variety with fully grown grains and minimal breakage.',
        origin: 'India'
      },
      {
        name: 'PR47 Rice',
        description: 'Known for its tempting taste and rich color, processed under hygienic conditions.',
        origin: 'India'
      },
      {
        name: 'PR106 Rice',
        description: 'Widely appreciated for its quality and suitability for various cuisines.',
        origin: 'India'
      },
      {
        name: 'IR36 Rice',
        description: 'A variety known for its resistance to pests and diseases, ensuring higher yields.',
        origin: 'India'
      },
      {
        name: 'Swarna Rice',
        description: 'A high-yielding variety with medium grains, commonly used in daily cooking.',
        origin: 'Eastern India'
      },
      {
        name: 'Pusa 1121 Basmati Rice',
        description: 'Modern high-yield variety with extra-long grains that nearly double in length when cooked.',
        origin: 'Uttar Pradesh and Punjab, India'
      },
      {
        name: 'Pusa 1509 Basmati Rice',
        description: 'Aromatic variety with longer grain length, developed as a successor to Pusa 1121.',
        origin: 'India'
      },
      {
        name: 'Sugandha Basmati Rice',
        description: 'Hybrid variety with subtle aroma, suitable for various culinary applications.',
        origin: 'India'
      },
      {
        name: 'Golden Sella Basmati Rice',
        description: 'Parboiled Basmati rice with a golden hue, known for its rich taste and aroma.',
        origin: 'India'
      },
      {
        name: 'White Sella Basmati Rice',
        description: 'Parboiled Basmati rice with white grains, offering a fluffy texture upon cooking.',
        origin: 'India'
      },
      {
        name: 'Broken Basmati Rice',
        description: 'Fragments of Basmati rice grains, often used in dishes like khichdi and rice porridge.',
        origin: 'India'
      },
      {
        name: 'Brown Rice',
        description: 'Whole grain rice with the bran layer intact, offering higher nutritional value.',
        origin: 'India'
      },
      {
        name: 'Red Rice',
        description: 'Rice with a red husk, rich in antioxidants and dietary fiber.',
        origin: 'Himachal Pradesh, India'
      },
      {
        name: 'Black Rice',
        description: 'Also known as forbidden rice, it has a deep black color and is rich in nutrients.',
        origin: 'Northeast India'
      },
      {
        name: 'Matta Rice',
        description: 'A reddish-brown rice variety known for its robust flavor, commonly used in Kerala cuisine.',
        origin: 'Kerala, India'
      },
      {
        name: 'Idli Rice',
        description: 'Short-grain rice specifically used for making idlis and dosas due to its soft texture.',
        origin: 'Tamil Nadu, India'
      },
      {
        name: 'Jeerakasala Rice',
        description: 'A short-grain aromatic rice variety used in traditional Kerala dishes like biryani.',
        origin: 'Kerala, India'
      },
      {
        name: 'Gobindobhog Rice',
        description: 'A short-grain, aromatic rice variety from West Bengal, used in special dishes and offerings.',
        origin: 'West Bengal, India'
      },
      {
        name: 'Ambemohar Rice',
        description: 'An aromatic rice variety from Maharashtra, known for its mango blossom aroma.',
        origin: 'Maharashtra, India'
      },
      {
        name: 'Joha Rice',
        description: 'Aromatic rice variety from Assam, known for its delicate flavor and fragrance.',
        origin: 'Assam, India'
      },
      {
        name: 'Navara Rice',
        description: 'A medicinal rice variety from Kerala, used in Ayurvedic treatments.',
        origin: 'Kerala, India'
      },
      {
        name: 'Bamboo Rice',
        description: 'Rice harvested from the seeds of flowering bamboo, known for its unique taste and texture.',
        origin: 'Kerala, India'
      },
      {
        name: 'Samba Rice',
        description: 'A short-grain rice variety known for its distinctive taste, commonly used in South Indian cuisine.',
        origin: 'Tamil Nadu, India'
      },
      {
        name: 'Kolam Rice',
        description: 'A medium-grain rice variety popular in Western India, known for its soft texture.',
        origin: 'Maharashtra, India'
      },
      {
        name: 'Miniket Rice',
        description: 'A fine, long-grain rice variety from West Bengal, known for its polished appearance.',
        origin: 'West Bengal, India'
      },
      {
        name: 'HMT Rice',
        description: 'A high-yielding rice variety known for its soft texture and pleasant aroma.',
        origin: 'India'
      }
    ],
    specifications: [
      { name: 'Average Grain Length', value: 'Varies by variety' },
      { name: 'Moisture Content', value: '≤ 14%' },
      { name: 'Broken Grains', value: '≤ 5%' },
      { name: 'Foreign Matter', value: '≤ 0.5%' },
      { name: 'Damaged Grains', value: '≤ 3%' },
      { name: 'Chalky Grains', value: '≤ 3%' }
    ],
    packaging: [
      { type: 'Jute Bags', sizes: ['25kg', '50kg'] },
      { type: 'HDPE/PP Bags', sizes: ['5kg', '10kg', '25kg'] },
      { type: 'Vacuum Packed', sizes: ['1kg', '5kg'] },
      { type: 'Custom Packaging', sizes: ['As per requirement'] }
    ],
    certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'Organic (for organic variants)'],
    applications: [
      'Daily cooking',
      'Traditional Indian dishes like biryani, pulao, and khichdi',
      'South Indian delicacies like idli and dosa',
      'Specialty cuisines and gourmet preparations',
      'Health-focused diets and Ayurvedic treatments'
    ]
  },
  'wheat': {
    name: 'Wheat',
    description: 'Premium-quality wheat grains cultivated across India, known for their excellent milling characteristics, nutritional richness, and adaptability for diverse culinary uses.',
    category: 'Grains',
  longDescription: `
    Wheat is one of the most widely cultivated cereal grains in India and forms the backbone of Indian diets. From the golden fields of Punjab to the plains of Madhya Pradesh, India produces a wide range of wheat varieties that cater to domestic and international demand.

    Our wheat is carefully sourced from certified farms, cleaned, and processed under hygienic conditions to preserve its natural taste, aroma, and nutritional integrity. Whether it's for making rotis, breads, pasta, or bakery products, our wheat delivers consistent quality.

    We offer multiple wheat varieties including hard and soft types, suitable for diverse food processing applications. Our supply chain emphasizes traceability, purity, and adherence to global food safety standards.
  `,
  images: [
    'https://shorturl.at/fsWp1?auto=compress&cs=tinysrgb&w=800',
    'https://www.livemint.com/rf/Image-621x414/LiveMint/Period1/2013/05/23/Photos/wheat--621x414.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://www.equitypandit.com/wp-content/uploads/2022/11/Wheat-Export-Doubles-to-1.48-Billion-in-April-September-Quarter-EP.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://www.siasat.com/wp-content/uploads/2020/04/2020_4img19_Apr_2020_PTI19-04-2020_000133B-scaled.jpg?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: 'Sharbati Wheat',
      description: 'Premium golden wheat with a sweet taste and high gluten content, ideal for soft, fluffy rotis.',
      origin: 'Sehore & Vidisha, Madhya Pradesh, India'
    },
    {
      name: 'Lokwan Wheat',
      description: 'Hard wheat variety known for its bold grain and high protein, used for chapatis and bakery flour.',
      origin: 'Maharashtra, India'
    },
    {
      name: 'Durum Wheat',
      description: 'High-protein wheat ideal for pasta, semolina (suji), and noodles due to its hardness and gluten strength.',
      origin: 'Madhya Pradesh and Karnataka, India'
    },
    {
      name: 'Organic Wheat',
      description: 'Cultivated without synthetic chemicals, retaining all the nutritional value with zero contamination.',
      origin: 'Certified organic farms across India'
    },
    {
      name: 'Kathia Wheat',
      description: 'Traditional soft wheat variety used in rural regions for its earthy flavor and easy digestibility.',
      origin: 'Northern India'
    }
  ],
  specifications: [
    { name: 'Protein Content', value: '10-14% (variety dependent)' },
    { name: 'Moisture Content', value: '≤ 12%' },
    { name: 'Foreign Matter', value: '≤ 1%' },
    { name: 'Damaged Kernels', value: '≤ 3%' },
    { name: 'Shriveled Kernels', value: '≤ 3%' },
    { name: 'Test Weight', value: '≥ 76 kg/hl' }
  ],
  packaging: [
    { type: 'Jute Bags', sizes: ['25kg', '50kg'] },
    { type: 'HDPE/PP Bags', sizes: ['10kg', '25kg'] },
    { type: 'Vacuum Packed', sizes: ['1kg', '5kg', '10kg'] },
    { type: 'Custom Packaging', sizes: ['As per requirement'] }
  ],
  certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'Organic (for organic variants)'],
  applications: [
    'Daily home cooking (chapatis, parathas, puris)',
    'Bakery products (bread, biscuits, cakes)',
    'Industrial milling (atta, maida, suji)',
    'Pasta, noodles, and semolina production',
    'Health food and nutrition-rich formulations'
  ]
  },
  'millets': {
  name: 'Millets',
  description: 'A resilient, nutrient-dense group of ancient grains celebrated for their health benefits, drought resistance, and culinary versatility.',
  category: 'Grains',
  longDescription: `
    Millets are a group of small-seeded grasses cultivated as cereal crops, traditionally consumed across India for centuries. Once considered a "poor man's grain," millets are now being revived as superfoods due to their exceptional nutritional profile and climate-smart nature.

    These hardy crops require minimal water and can thrive in arid soils, making them a sustainable choice for modern agriculture. India is one of the largest producers of millets, with major cultivation in Karnataka, Maharashtra, Rajasthan, Tamil Nadu, and Andhra Pradesh.

    Millets are rich in dietary fiber, proteins, essential amino acids, B-vitamins, and minerals like iron, magnesium, and phosphorus. Their low glycemic index makes them ideal for diabetic-friendly diets, weight management, and holistic wellness.

    We offer a curated range of millets that are cleaned, graded, and processed under hygienic conditions for both domestic consumption and international export.
  `,
  images: [
    'https://shivaruthraexports.com/wp-content/uploads/2021/10/millets9.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://www.amar-khamar.com/cdn/shop/products/LittleMillet1.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://www.uasbangalore.edu.in/wp-content/uploads/2021/09/Small-Millet-image.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://2.wlimg.com/product_images/bc-full/2024/4/45366/indian-green-millet-1713960211-7397159.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: 'Foxtail Millet (Kangni)',
      description: 'Rich in iron and calcium, ideal for upma, pongal, and baked snacks.',
      origin: 'Karnataka, Andhra Pradesh, India'
    },
    {
      name: 'Barnyard Millet (Sanwa)',
      description: 'Gluten-free millet high in fiber, perfect for fasting recipes and porridge.',
      origin: 'Uttarakhand, Tamil Nadu, India'
    },
    {
      name: 'Kodo Millet (Kodra)',
      description: 'Easily digestible, low glycemic, suitable for diabetics and weight watchers.',
      origin: 'Madhya Pradesh, Tamil Nadu, India'
    },
    {
      name: 'Little Millet (Kutki)',
      description: 'A versatile grain used in pulao, khichdi, and millet-based desserts.',
      origin: 'Chhattisgarh, Odisha, India'
    },
    {
      name: 'Pearl Millet (Bajra)',
      description: 'High in protein and fiber, excellent for rotis, khichdi, and gruel.',
      origin: 'Rajasthan, Gujarat, Haryana, India'
    },
    {
      name: 'Finger Millet (Ragi)',
      description: 'Calcium-rich millet used in porridge, laddoos, and gluten-free flour blends.',
      origin: 'Karnataka, Tamil Nadu, India'
    },
    {
      name: 'Sorghum (Jowar)',
      description: 'A staple grain known for heart health, used in bhakri, dosas, and flours.',
      origin: 'Maharashtra, Karnataka, India'
    },
    {
      name: 'Proso Millet (Chena)',
      description: 'Small-seeded millet known for fast cooking and nutty flavor.',
      origin: 'Andhra Pradesh, Bihar, India'
    },
    {
      name: 'Browntop Millet (Korle)',
      description: 'Rare variety with high antioxidant content and quick cooking time.',
      origin: 'Karnataka, India'
    }
  ],
  specifications: [
    { name: 'Moisture Content', value: '≤ 12%' },
    { name: 'Purity', value: '≥ 99%' },
    { name: 'Foreign Matter', value: '≤ 1%' },
    { name: 'Crude Fiber', value: '≤ 5%' },
    { name: 'Ash Content', value: '≤ 2.5%' },
    { name: 'Shelf Life', value: '6-12 months (when stored in dry, cool conditions)' }
  ],
  packaging: [
    { type: 'Eco-friendly Jute Bags', sizes: ['10kg', '25kg', '50kg'] },
    { type: 'HDPE/PP Bags', sizes: ['5kg', '10kg', '25kg'] },
    { type: 'Vacuum Packed', sizes: ['500g', '1kg', '5kg'] },
    { type: 'Custom Retail Packaging', sizes: ['As per buyer requirements'] }
  ],
  certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'Organic (for certified farms)'],
  applications: [
    'Gluten-free flours and health mixes',
    'Breakfast cereals and snack bars',
    'Traditional recipes like dosa, idli, upma',
    'Weight management and diabetic diets',
    'Baby foods, nutraceuticals, and Ayurvedic wellness formulations'
  ]
  },
  'barley': {
  name: 'Barley',
  description: 'A versatile ancient cereal grain known for its robust nutrition, high fiber content, and diverse culinary and industrial uses.',
  category: 'Grains',
  longDescription: `
    Barley is one of the world’s oldest cultivated grains, prized for thousands of years for its resilience and nutritional value. With a nutty flavor and chewy texture, barley has found its place in kitchens, breweries, and health food industries worldwide.

    Grown extensively in India, particularly in Rajasthan, Haryana, Uttar Pradesh, and Punjab, barley thrives in cooler climates and moderate rainfall. It serves multiple purposes — from staple food and animal feed to malt production for brewing and pharmaceuticals.

    Rich in dietary fiber, vitamins (especially B-complex), minerals such as selenium and magnesium, and antioxidants, barley supports heart health, digestion, and blood sugar regulation. Its beta-glucan content is especially notable for cholesterol-lowering benefits.

    We supply premium-grade barley, cleaned and processed with strict quality controls, ready for export and bulk distribution to meet diverse buyer needs.
  `,
  images: [
    'https://m.media-amazon.com/images/I/51pxG6EMPrL.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://3.imimg.com/data3/IO/LC/MY-3788746/barley-seeds-1000x1000.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://5.imimg.com/data5/MI/HS/JC/SELLER-3623669/barley-cleaned--1000x1000.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://img1.exportersindia.com/product_images/bc-small/2023/10/2438772/barley-grain-1697188416-7129239.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: 'Hulled Barley',
      description: 'Whole grain barley with outer hull intact, retaining maximum nutrients and fiber.',
      origin: 'Rajasthan, Haryana, India'
    },
    {
      name: 'Pearled Barley',
      description: 'Barley polished to remove the hull and bran layers, resulting in a softer texture and quicker cooking time.',
      origin: 'Punjab, Uttar Pradesh, India'
    },
    {
      name: 'Barley Flour',
      description: 'Finely ground barley used for baking, health mixes, and gluten-free formulations.',
      origin: 'Various Indian states'
    },
    {
      name: 'Malted Barley',
      description: 'Germinated barley grains dried for brewing beer, whisky, and malted beverages.',
      origin: 'Rajasthan, Punjab, India'
    }
  ],
  specifications: [
    { name: 'Moisture Content', value: '≤ 14%' },
    { name: 'Purity', value: '≥ 99%' },
    { name: 'Foreign Matter', value: '≤ 1%' },
    { name: 'Protein Content', value: '10-12%' },
    { name: 'Ash Content', value: '≤ 2.5%' },
    { name: 'Shelf Life', value: '6-12 months (stored in cool, dry place)' }
  ],
  packaging: [
    { type: 'Jute Bags', sizes: ['25kg', '50kg'] },
    { type: 'HDPE Bags', sizes: ['10kg', '25kg'] },
    { type: 'Vacuum-Sealed Packaging', sizes: ['1kg', '5kg'] },
    { type: 'Custom Retail Packaging', sizes: ['Based on buyer requirements'] }
  ],
  certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'Organic Certification (if applicable)'],
  applications: [
    'Soups, stews, and salads',
    'Brewing and malt production',
    'Health foods and dietary supplements',
    'Animal feed',
    'Gluten-free baking alternatives'
  ]
  },
  'corn': {
  name: 'Yellow Corn',
  description: 'Bright, high-quality yellow corn known for its versatility in food, feed, and industrial applications, sourced from prime Indian agricultural regions.',
  category: 'Grains',
  longDescription: `
    Yellow corn, one of the world’s most versatile cereals, is a staple ingredient and raw material across multiple industries — from human consumption and animal feed to biofuel and starch production.

    Cultivated extensively in India across states like Karnataka, Maharashtra, Andhra Pradesh, and Tamil Nadu, yellow corn thrives in varied climates, offering consistent yield and rich nutritional value. Known for its sweet flavor, crunchy texture, and rich carotenoid content, this corn variety is a powerhouse of energy and essential nutrients.

    Our premium yellow corn is carefully harvested, cleaned, and graded to meet stringent quality standards, ensuring it is free from contaminants and ready for diverse end uses, including flour production, popcorn, cornmeal, and industrial processing.
  `,
  images: [
    'https://img.etimg.com/thumb/msid-83390480,width-300,height-225,imgsize-176599,resizemode-75/istock-1061097354.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://www.datamarnews.com/wp-content/uploads/2019/10/corn-exports-exporta%C3%A7%C3%B5es-de-milho.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://cpimg.tistatic.com/1850746/b/5/fresh-baby-corn.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images-global.nhst.tech/image/VEEwVjFJUlo1cmNpVzRJV1NjdlFsdzROci9VN1M3TmZzTnk5SU5DaW1kND0=/nhst/binary/ea074378b8733b9dd5e90842cbc150bb?image_version=800?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: 'Field Corn',
      description: 'Primarily used for animal feed, industrial processing, and ethanol production.',
      origin: 'Karnataka, Maharashtra, India'
    },
    {
      name: 'Sweet Corn',
      description: 'Tender and sweet kernels, ideal for fresh consumption and canned products.',
      origin: 'Andhra Pradesh, Tamil Nadu, India'
    },
    {
      name: 'Popcorn',
      description: 'Specialized variety with kernels that pop upon heating, popular as a snack worldwide.',
      origin: 'Maharashtra, Karnataka, India'
    },
    {
      name: 'Flint Corn',
      description: 'Hard outer shell kernels used for cornmeal and other food products.',
      origin: 'Northern India'
    }
  ],
  specifications: [
    { name: 'Moisture Content', value: '≤ 14%' },
    { name: 'Purity', value: '≥ 99%' },
    { name: 'Foreign Matter', value: '≤ 1%' },
    { name: 'Broken Kernels', value: '≤ 2%' },
    { name: 'Protein Content', value: '7-9%' },
    { name: 'Shelf Life', value: '6-12 months (stored in cool, dry place)' }
  ],
  packaging: [
    { type: 'Jute Bags', sizes: ['25kg', '50kg'] },
    { type: 'HDPE Bags', sizes: ['10kg', '25kg'] },
    { type: 'Vacuum-Sealed Packaging', sizes: ['1kg', '5kg'] },
    { type: 'Custom Packaging', sizes: ['As per buyer specifications'] }
  ],
  certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'Organic Certification (for organic variants)'],
  applications: [
    'Animal feed formulations',
    'Human consumption in forms like cornmeal, flour, and snacks',
    'Industrial products including starch, ethanol, and biofuels',
    'Canned and frozen sweet corn products',
    'Popcorn production and other snack foods'
  ]
}


 



  },
  'pulses': {
    'light-speckled-kidney-bean': {
  name: 'Light Speckled Kidney Bean',
  description: 'High-quality light speckled kidney beans known for their distinctive appearance, rich protein content, and excellent cooking characteristics.',
  category: 'Pulses',
  longDescription: `
    Light Speckled Kidney Beans (Phaseolus vulgaris) are a popular variety of kidney beans distinguished by their light pink base color with reddish speckles. They are widely used in global cuisines, especially in soups, stews, and curries.

    These beans are grown primarily in the Himalayan regions of India, including Jammu & Kashmir and Himachal Pradesh, where the cool climate and fertile soil contribute to their superior quality. Rich in protein, dietary fiber, and essential minerals, they are an excellent choice for vegetarian and vegan diets.

    We source our light speckled kidney beans directly from farms using sustainable agricultural practices. Each batch undergoes strict quality checks to ensure purity, consistent size, and absence of foreign matter.
  `,
  images: [
    'https://5.imimg.com/data5/QF/VB/MY-3057386/light-speckled-kidney-bean-500x500.jpg',
    'https://cdn.pixabay.com/photo/2015/05/20/21/25/beans-775437_1280.jpg',
    'https://shorturl.at/zFHJ4',
    'https://shorturl.at/bmqKO'
  ],
  varieties: [
    {
      name: 'Jammu Light Speckled',
      description: 'Premium variety with uniform speckling, rich aroma, and excellent cooking consistency.',
      origin: 'Jammu & Kashmir, India'
    },
    {
      name: 'Himachal Organic',
      description: 'Organically grown, known for its creamy texture and higher fiber content.',
      origin: 'Himachal Pradesh, India'
    },
    {
      name: 'Imported Speckled',
      description: 'Globally sourced for consistency in color and size, preferred in bulk exports.',
      origin: 'Canada / Ethiopia'
    }
  ],
  specifications: [
    { name: 'Moisture Content', value: '≤ 14%' },
    { name: 'Purity', value: '≥ 99%' },
    { name: 'Admixture', value: '≤ 1%' },
    { name: 'Damaged Grains', value: '≤ 2%' },
    { name: 'Protein Content', value: '22-24%' },
    { name: 'Foreign Matter', value: '≤ 0.5%' },
    { name: 'Size', value: '6–8 mm (uniform)' }
  ],
  packaging: [
    { type: 'PP Bags', sizes: ['25kg', '50kg'] },
    { type: 'HDPE Bags', sizes: ['10kg', '25kg'] },
    { type: 'Vacuum Packed', sizes: ['500g', '1kg', '5kg'] },
    { type: 'Custom Packaging', sizes: ['As per requirement'] }
  ],
  certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'NPOP (for organic variants)'],
  applications: [
    'Cooked dishes like rajma, chili, and soups',
    'Ready-to-eat canned products',
    'Protein-rich snacks and flour blends',
    'Catering and institutional food services',
    'Export to health-conscious and vegan markets'
  ]
    },
     'green-lentils': {
  name: 'Green Lentils',
  description: 'Nutrient-rich green lentils known for their earthy flavor, firm texture, and versatility in global cuisines.',
  category: 'Pulses',
  longDescription: `
    Green Lentils (Lens culinaris) are a highly nutritious legume variety known for their pale green to mottled olive hue and a slightly peppery flavor. Unlike other lentils, green lentils hold their shape well after cooking, making them ideal for salads, side dishes, soups, and stews.

    Our green lentils are primarily sourced from Madhya Pradesh, Maharashtra, and selected farms in Canada, which are globally recognized for their lentil production quality. They are rich in protein, dietary fiber, folate, and iron, making them an essential component of plant-based and health-focused diets.

    Carefully cleaned and graded through modern processing units, our green lentils are offered in bulk and consumer-grade packaging with strict adherence to food safety and quality certifications.
  `,
  images: [
    'https://5.imimg.com/data5/VJ/NS/MY-3057386/green-lentils-500x500.jpg',
    'https://cdn.pixabay.com/photo/2016/06/27/18/29/lentils-1482043_1280.jpg',
    'https://shorturl.at/oDJ28',
    'https://shorturl.at/bcGI4'
  ],
  varieties: [
    {
      name: 'Indian Green Lentils',
      description: 'Locally grown with earthy taste and slightly smaller grain size; excellent for traditional recipes.',
      origin: 'Madhya Pradesh & Maharashtra, India'
    },
    {
      name: 'Canadian Green Lentils',
      description: 'Large, whole lentils with consistent color and size; preferred in high-end retail and export.',
      origin: 'Saskatchewan, Canada'
    },
    {
      name: 'Organic Green Lentils',
      description: 'Certified organic lentils grown without synthetic inputs, ideal for health and export markets.',
      origin: 'Various certified organic farms'
    }
  ],
  specifications: [
    { name: 'Moisture Content', value: '≤ 12%' },
    { name: 'Purity', value: '≥ 99%' },
    { name: 'Admixture', value: '≤ 0.5%' },
    { name: 'Broken Grains', value: '≤ 2%' },
    { name: 'Protein Content', value: '22-25%' },
    { name: 'Size', value: '3–5 mm' },
    { name: 'Foreign Matter', value: '≤ 0.2%' }
  ],
  packaging: [
    { type: 'PP Woven Bags', sizes: ['25kg', '50kg'] },
    { type: 'Paper Bags', sizes: ['10kg', '25kg'] },
    { type: 'Retail Pouches', sizes: ['500g', '1kg', '2kg'] },
    { type: 'Custom Packaging', sizes: ['As per client specification'] }
  ],
  certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'USDA Organic (for organic variants)', 'EU Organic'],
  applications: [
    'Healthy salads and warm grain bowls',
    'Soups, stews, and dal recipes',
    'Canned lentil products',
    'Ready-to-cook meal kits',
    'Plant-based protein flours and blends'
  ]
    },
    'white-kidney-beans': {
  name: 'White Kidney Beans',
  description: 'Premium-quality white kidney beans known for their creamy texture, mild flavor, and excellent protein content.',
  category: 'Pulses',
  longDescription: `
    White Kidney Beans (Phaseolus vulgaris), also known as cannellini beans, are large, kidney-shaped legumes prized for their smooth, creamy texture and subtle flavor. They are a staple in Mediterranean, American, and Asian cuisines, frequently used in soups, salads, casseroles, and baked dishes.

    Our white kidney beans are sourced from high-altitude farms in Uttarakhand and Himachal Pradesh, as well as from international suppliers in Canada and Argentina known for consistent quality and size. These beans are an excellent source of plant-based protein, fiber, and essential micronutrients such as iron, folate, and magnesium.

    Carefully cleaned, graded, and packed using hygienic processing lines, our white kidney beans meet international quality and food safety standards, making them suitable for retail, wholesale, and export markets.
  `,
  images: [
    'https://5.imimg.com/data5/JF/QA/MY-3057386/white-kidney-beans-500x500.jpg',
    'https://cdn.pixabay.com/photo/2017/03/06/01/26/white-beans-2129588_1280.jpg',
    'https://shorturl.at/rwCD3',
    'https://shorturl.at/dxI69'
  ],
  varieties: [
    {
      name: 'Indian White Kidney Beans',
      description: 'Locally grown in cooler climates with a softer texture, ideal for Indian-style curries and dal.',
      origin: 'Uttarakhand & Himachal Pradesh, India'
    },
    {
      name: 'Canadian Cannellini Beans',
      description: 'Larger and firmer beans with uniform color and size, highly favored in global foodservice industries.',
      origin: 'Saskatchewan, Canada'
    },
    {
      name: 'Argentinian White Kidney Beans',
      description: 'Known for their brilliant white appearance and excellent cooking properties.',
      origin: 'Tucumán & Salta, Argentina'
    },
    {
      name: 'Organic Certified Beans',
      description: 'Certified organic, grown without chemical inputs, and compliant with USDA/EU organic standards.',
      origin: 'Various certified organic farms'
    }
  ],
  specifications: [
    { name: 'Moisture Content', value: '≤ 14%' },
    { name: 'Purity', value: '≥ 99%' },
    { name: 'Admixture', value: '≤ 1%' },
    { name: 'Protein Content', value: '21–24%' },
    { name: 'Broken/Damaged Grains', value: '≤ 2%' },
    { name: 'Size', value: '8–10 mm (uniform)' },
    { name: 'Foreign Matter', value: '≤ 0.5%' }
  ],
  packaging: [
    { type: 'PP Woven Bags', sizes: ['25kg', '50kg'] },
    { type: 'HDPE Bags', sizes: ['10kg', '25kg'] },
    { type: 'Retail Packs', sizes: ['500g', '1kg', '5kg'] },
    { type: 'Custom Packaging', sizes: ['As per client requirement'] }
  ],
  certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'USDA Organic (for organic variants)', 'EU Organic'],
  applications: [
    'Mediterranean and Italian dishes like pasta e fagioli and minestrone',
    'Protein-rich salads and meal bowls',
    'Canned bean products',
    'Veg-based patties and burgers',
    'Ready-to-cook kits and meal preparations'
  ]
    },
    'dry-peas': {
  name: 'Dry Peas',
  description: 'High-quality dry peas, valued for their nutritional richness, long shelf life, and wide culinary versatility in traditional and modern recipes.',
  category: 'Pulses',
  longDescription: `
    Dry peas (Pisum sativum) are mature peas that are harvested when fully ripened and then dried. They come in two main varieties—green and yellow—and are a staple ingredient in soups, purees, dals, and snack foods across the globe.

    Our dry peas are primarily sourced from northern Indian states like Uttar Pradesh, Madhya Pradesh, and Bihar, as well as international suppliers from Canada and Russia, ensuring a consistent and high-quality supply. These legumes are naturally rich in protein, dietary fiber, and essential vitamins such as B1 and folate.

    Available in whole and split forms, our dry peas undergo stringent quality sorting, polishing, and grading processes to maintain color, texture, and uniformity. Their excellent shelf life and high nutritional value make them an ideal ingredient for bulk processors, retailers, and health-conscious consumers alike.
  `,
  images: [
    'https://5.imimg.com/data5/XM/GV/MY-3057386/dry-peas-500x500.jpg',
    'https://cdn.pixabay.com/photo/2014/12/22/12/36/pea-576138_1280.jpg',
    'https://shorturl.at/axzX1',
    'https://shorturl.at/gnzDI'
  ],
  varieties: [
    {
      name: 'Green Dry Peas (Whole)',
      description: 'Round, bright green peas with a mildly sweet flavor, ideal for soups and curries.',
      origin: 'Uttar Pradesh & Madhya Pradesh, India'
    },
    {
      name: 'Yellow Dry Peas (Whole)',
      description: 'Light yellow in color, known for their earthy taste and high protein content.',
      origin: 'Bihar, India / Saskatchewan, Canada'
    },
    {
      name: 'Split Green Peas',
      description: 'Green peas that have been peeled and split, used in soups, dals, and baby food.',
      origin: 'India / Canada'
    },
    {
      name: 'Split Yellow Peas',
      description: 'Dehulled and split yellow peas with fast cooking time, great for purees and snacks.',
      origin: 'India / Russia'
    }
  ],
  specifications: [
    { name: 'Moisture Content', value: '≤ 13%' },
    { name: 'Purity', value: '≥ 99%' },
    { name: 'Admixture', value: '≤ 0.5%' },
    { name: 'Protein Content', value: '20-24%' },
    { name: 'Size', value: '4–6 mm (whole); 2–4 mm (split)' },
    { name: 'Foreign Matter', value: '≤ 0.2%' },
    { name: 'Broken/Damaged', value: '≤ 2%' }
  ],
  packaging: [
    { type: 'PP Woven Bags', sizes: ['25kg', '50kg'] },
    { type: 'Jute Bags', sizes: ['50kg'] },
    { type: 'Consumer Packs', sizes: ['500g', '1kg', '2kg'] },
    { type: 'Bulk Containers', sizes: ['1 MT Jumbo Bags'] }
  ],
  certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'NPOP Organic (on request)', 'USDA Organic (on request)'],
  applications: [
    'Soups, purees, and dals',
    'Snack food processing',
    'Ready-to-cook mixes',
    'Flour production for gluten-free baking',
    'Baby food and protein supplements'
  ]
    },
    'chickpeas': {
  name: 'Chickpeas',
  description: 'Versatile and nutrient-rich chickpeas with a nutty flavor and firm texture, perfect for a wide range of culinary and industrial uses.',
  category: 'Pulses',
  longDescription: `
    Chickpeas (Cicer arietinum), also known as garbanzo beans, are one of the most consumed legumes globally, valued for their dense nutritional profile, creamy texture, and mild nutty flavor. They are a staple in Middle Eastern, Indian, Mediterranean, and African cuisines.

    We source our chickpeas from the finest agricultural regions in India such as Madhya Pradesh, Rajasthan, and Maharashtra, as well as from global suppliers like Australia and Mexico, depending on the client's size and specification requirements. Our chickpeas are available in both **Desi** (small, darker, and angular) and **Kabuli** (large, round, and pale) varieties.

    Rich in plant-based protein, dietary fiber, and essential minerals like iron, magnesium, and zinc, our chickpeas are ideal for bulk processing, retail, and export. All products are machine-cleaned, size-graded, and polished according to international food safety standards.
  `,
  images: [
    'https://5.imimg.com/data5/SELLER/Default/2021/6/KE/LE/RR/126492563/white-chickpeas-500x500.jpg',
    'https://cdn.pixabay.com/photo/2018/03/06/22/41/chickpeas-3201387_1280.jpg',
    'https://shorturl.at/nEX39',
    'https://shorturl.at/ayzE6'
  ],
  varieties: [
    {
      name: 'Kabuli Chickpeas (White)',
      description: 'Large-sized, pale white beans known for their smooth texture and high export demand.',
      origin: 'Madhya Pradesh & Maharashtra, India / Australia'
    },
    {
      name: 'Desi Chickpeas (Brown Kala Chana)',
      description: 'Smaller, darker beans with rough coats, used widely in Indian cooking and sprouting.',
      origin: 'Rajasthan, Uttar Pradesh, India'
    },
    {
      name: 'Processed Kabuli (Polished)',
      description: 'Machine-polished Kabuli chickpeas with enhanced appearance, ideal for premium retail packaging.',
      origin: 'India'
    },
    {
      name: 'Organic Certified Chickpeas',
      description: 'Cultivated without chemicals and certified under USDA and EU organic standards.',
      origin: 'Certified organic farms across India'
    }
  ],
  specifications: [
    { name: 'Moisture Content', value: '≤ 12%' },
    { name: 'Purity', value: '≥ 99%' },
    { name: 'Admixture', value: '≤ 1%' },
    { name: 'Size', value: '6–12 mm (Kabuli); 4–7 mm (Desi)' },
    { name: 'Protein Content', value: '20–22%' },
    { name: 'Foreign Matter', value: '≤ 0.5%' },
    { name: 'Damaged Kernels', value: '≤ 2%' }
  ],
  packaging: [
    { type: 'PP Woven Bags', sizes: ['25kg', '50kg'] },
    { type: 'HDPE & Jute Bags', sizes: ['10kg', '25kg'] },
    { type: 'Retail Packs', sizes: ['500g', '1kg', '5kg'] },
    { type: 'Custom Export Packaging', sizes: ['As per requirement'] }
  ],
  certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'USDA Organic (for organic variants)', 'EU Organic'],
  applications: [
    'Culinary use in hummus, curries, and salads',
    'Canned and frozen food manufacturing',
    'Chickpea flour (besan) production',
    'Plant-based protein products',
    'Ready-to-cook and instant meals'
  ]
    },
    'black-eyed-beans': {
  name: 'Black Eyed Beans',
  description: 'Nutritious and easy-to-digest legumes with a distinct black eye mark, widely used in Indian, African, and Southern U.S. cuisines.',
  category: 'Pulses',
  longDescription: `
    Black Eyed Beans (Vigna unguiculata), also known as cowpeas or lobia, are small, creamy-white legumes with a distinctive black spot on their hilum (the "eye"). They are a staple across South Asian, African, and Southern American diets due to their quick cooking time, earthy flavor, and excellent digestibility.

    Our black eyed beans are cultivated in key Indian states like Maharashtra, Karnataka, and Andhra Pradesh, as well as imported from quality-assured farms in Nigeria and Myanmar. These beans are high in plant-based protein, iron, folate, and fiber, making them ideal for both vegetarian diets and general health-conscious applications.

    Processed under hygienic conditions and machine-cleaned to ensure uniformity and purity, our black eyed beans meet export-grade standards and are available in bulk or retail packaging formats.
  `,
  images: [
    'https://5.imimg.com/data5/SELLER/Default/2023/10/354201835/JT/MT/NJ/166316007/black-eyed-beans-500x500.jpeg',
    'https://cdn.pixabay.com/photo/2021/01/03/21/07/black-eyed-peas-5885934_1280.jpg',
    'https://shorturl.at/iIWZ3',
    'https://shorturl.at/cwLST'
  ],
  varieties: [
    {
      name: 'Indian Desi Lobia',
      description: 'Medium-sized beans with a rich, earthy taste, commonly used in Indian home cooking and snacks.',
      origin: 'Maharashtra, Karnataka, Andhra Pradesh, India'
    },
    {
      name: 'Nigerian Cowpeas',
      description: 'Larger beans with creamy color and strong aroma, often used in traditional African stews.',
      origin: 'Kano, Nigeria'
    },
    {
      name: 'Myanmar Black Eyed Beans',
      description: 'High-quality export-grade beans with uniform appearance and high protein content.',
      origin: 'Mandalay Region, Myanmar'
    },
    {
      name: 'Organic Black Eyed Beans',
      description: 'Grown under certified organic farming practices without chemical fertilizers or pesticides.',
      origin: 'Various certified organic farms'
    }
  ],
  specifications: [
    { name: 'Moisture Content', value: '≤ 12%' },
    { name: 'Purity', value: '≥ 99%' },
    { name: 'Admixture', value: '≤ 0.5%' },
    { name: 'Protein Content', value: '22–25%' },
    { name: 'Size', value: '4–6 mm' },
    { name: 'Foreign Matter', value: '≤ 0.2%' },
    { name: 'Damaged/Broken Grains', value: '≤ 2%' }
  ],
  packaging: [
    { type: 'PP Woven Bags', sizes: ['25kg', '50kg'] },
    { type: 'HDPE Bags', sizes: ['10kg', '25kg'] },
    { type: 'Retail Packs', sizes: ['500g', '1kg', '2kg'] },
    { type: 'Vacuum Sealed Bags', sizes: ['1kg', '5kg'] }
  ],
  certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'USDA Organic (for organic variants)', 'EU Organic'],
  applications: [
    'Indian curries (lobia masala), salads, and chaats',
    'African stews, porridge, and side dishes',
    'Southern-style dishes like Hoppin’ John',
    'Canned beans and frozen meals',
    'Protein flour blends and health mixes'
  ]
    },
    'red-kidney-beans': {
  name: 'Red Kidney Beans',
  description: 'High-quality red kidney beans known for their deep red color, firm texture, and rich nutritional content—perfect for diverse global cuisines.',
  category: 'Pulses',
  longDescription: `
    Red Kidney Beans (Phaseolus vulgaris) are one of the most widely consumed legumes globally, recognized for their dark red hue, kidney shape, and meaty texture. They are a staple in Indian rajma dishes, Latin American chili recipes, Caribbean stews, and Mediterranean salads.

    Our red kidney beans are sourced from premium farms in India (notably Jammu & Kashmir, Himachal Pradesh, and Uttarakhand), as well as internationally from Mexico and Ethiopia, depending on client requirements. These beans are naturally rich in protein, dietary fiber, folate, potassium, and iron, making them ideal for health-focused consumers and food processors alike.

    Carefully machine-cleaned, size-graded, and polished, our red kidney beans meet international standards for food safety, appearance, and cooking performance. Available in various sizes and types to suit both retail and bulk buyers.
  `,
  images: [
    'https://5.imimg.com/data5/SELLER/Default/2023/10/342273166/ZD/AC/YA/31566213/red-kidney-beans-rajma-500x500.jpeg',
    'https://cdn.pixabay.com/photo/2022/10/07/17/44/kidney-beans-7504823_1280.jpg',
    'https://shorturl.at/jnC57',
    'https://shorturl.at/ozELN'
  ],
  varieties: [
    {
      name: 'Jammu Rajma',
      description: 'Small, dark red beans known for their quick cooking time and creamy texture when cooked.',
      origin: 'Jammu & Kashmir, India'
    },
    {
      name: 'Chitra Rajma',
      description: 'Light red beans with distinctive speckled skin, rich flavor, and firm bite.',
      origin: 'Uttarakhand & Himachal Pradesh, India'
    },
    {
      name: 'Mexican Red Kidney Beans',
      description: 'Large, bright red beans with a meaty flavor, popular in chili and Latin dishes.',
      origin: 'Mexico'
    },
    {
      name: 'Organic Red Kidney Beans',
      description: 'Grown without chemical fertilizers or pesticides, certified organic by global standards.',
      origin: 'Certified organic farms in India'
    }
  ],
  specifications: [
    { name: 'Moisture Content', value: '≤ 14%' },
    { name: 'Purity', value: '≥ 99%' },
    { name: 'Admixture', value: '≤ 1%' },
    { name: 'Protein Content', value: '22–24%' },
    { name: 'Size', value: '6–9 mm (variety dependent)' },
    { name: 'Foreign Matter', value: '≤ 0.2%' },
    { name: 'Damaged/Broken', value: '≤ 2%' }
  ],
  packaging: [
    { type: 'PP Woven Bags', sizes: ['25kg', '50kg'] },
    { type: 'HDPE & Jute Bags', sizes: ['10kg', '25kg'] },
    { type: 'Retail Packaging', sizes: ['500g', '1kg', '5kg'] },
    { type: 'Vacuum or Nitrogen Flushed', sizes: ['1kg', '2kg'] }
  ],
  certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'USDA Organic (for organic variants)', 'EU Organic'],
  applications: [
    'Rajma curry and North Indian gravies',
    'Latin American chili and rice dishes',
    'Caribbean stews and rice & peas',
    'Ready-to-eat canned meals',
    'Plant-based protein mixes and flours'
  ]
    },
    'pigeon-peas': {
  name: 'Pigeon Peas',
  description: 'Premium-quality pigeon peas (toor dal) known for their earthy flavor, high protein content, and wide culinary versatility.',
  category: 'Pulses',
  longDescription: `
    Pigeon Peas (Cajanus cajan), locally known as Toor Dal or Arhar Dal in India, are a staple pulse in South Asian, African, and Caribbean cuisines. They are valued for their nutty, earthy flavor, quick cooking properties, and nutritional richness.

    Our pigeon peas are primarily cultivated in India’s leading pulse-producing regions such as Maharashtra, Karnataka, and Madhya Pradesh, with additional sourcing from East Africa (Tanzania and Mozambique) and Myanmar to meet international demand. They are available in whole, split, and polished forms.

    Packed with plant-based protein, dietary fiber, B-complex vitamins, and essential minerals like iron and magnesium, pigeon peas are an essential component of balanced vegetarian diets. Our offerings are thoroughly cleaned, machine-sorted, and processed in certified facilities adhering to global food safety standards.
  `,
  images: [
    'https://5.imimg.com/data5/SELLER/Default/2023/1/YC/XA/OG/26185388/arhar-toor-dal-500x500.jpg',
    'https://cdn.pixabay.com/photo/2021/06/20/17/52/split-pigeon-peas-6351853_1280.jpg',
    'https://shorturl.at/gvwPY',
    'https://shorturl.at/hDQTZ'
  ],
  varieties: [
    {
      name: 'Whole Pigeon Peas',
      description: 'Unprocessed, mature pigeon peas with husk; ideal for traditional recipes and sprouting.',
      origin: 'Karnataka & Maharashtra, India'
    },
    {
      name: 'Split Pigeon Peas (Toor Dal)',
      description: 'Hulled and split yellow dal, widely used in Indian dals, sambhar, and khichdi.',
      origin: 'Madhya Pradesh & Telangana, India'
    },
    {
      name: 'Polished Toor Dal',
      description: 'Uniformly polished yellow lentils for enhanced visual appeal in retail packaging.',
      origin: 'India'
    },
    {
      name: 'Organic Toor Dal',
      description: 'Cultivated under certified organic practices with no chemical inputs.',
      origin: 'Certified organic farms in India'
    }
  ],
  specifications: [
    { name: 'Moisture Content', value: '≤ 12%' },
    { name: 'Purity', value: '≥ 99%' },
    { name: 'Admixture', value: '≤ 1%' },
    { name: 'Protein Content', value: '21–24%' },
    { name: 'Size', value: '3–6 mm (split); 4–7 mm (whole)' },
    { name: 'Foreign Matter', value: '≤ 0.5%' },
    { name: 'Broken or Damaged', value: '≤ 2%' }
  ],
  packaging: [
    { type: 'PP Woven Bags', sizes: ['25kg', '50kg'] },
    { type: 'HDPE Bags', sizes: ['10kg', '25kg'] },
    { type: 'Retail Packs', sizes: ['500g', '1kg', '2kg'] },
    { type: 'Vacuum Sealed / Nitrogen Flushed', sizes: ['1kg', '5kg'] }
  ],
  certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'USDA Organic (for organic variants)', 'EU Organic'],
  applications: [
    'Toor dal curry and sambhar in Indian cuisine',
    'Khichdi, dals, and lentil soups',
    'African stews and Caribbean rice dishes',
    'Instant food mixes and ready meals',
    'Protein flour blends and fortified foods'
  ]
    },
    'lupins': {
  name: 'Lupins',
  description: 'Nutrient-dense legumes known for their high protein and fiber content, ideal for gluten-free and plant-based diets.',
  category: 'Pulses',
  longDescription: `
    Lupins (Lupinus spp.) are high-protein legumes commonly cultivated in Mediterranean regions, Australia, and parts of South America. Known for their impressive nutritional profile—rich in protein, dietary fiber, and low in starch—lupins are increasingly used in health foods, meat substitutes, and gluten-free products.

    Our lupins are sourced from premium farms in Australia and the Mediterranean (particularly Spain and Italy), and are available in both sweet (low-alkaloid) and bitter (high-alkaloid, traditionally soaked) varieties. Sweet lupins, especially *Lupinus albus* and *Lupinus angustifolius*, are the preferred varieties for direct human consumption due to their mild flavor and minimal processing needs.

    Processed using stringent food-grade cleaning, dehulling, and sorting systems, our lupins meet the highest standards for nutritional integrity, allergen control, and microbiological safety.
  `,
  images: [
    'https://5.imimg.com/data5/SELLER/Default/2023/4/299156005/TD/ZD/JF/133302319/lupin-seeds-500x500.jpg',
    'https://cdn.pixabay.com/photo/2021/09/25/11/36/lupin-beans-6654767_1280.jpg',
    'https://shorturl.at/fotxR',
    'https://shorturl.at/euHPU'
  ],
  varieties: [
    {
      name: 'Sweet White Lupin (Lupinus albus)',
      description: 'Mild-flavored, low-alkaloid variety ideal for direct consumption, flours, and plant-based food products.',
      origin: 'Italy, Spain, Australia'
    },
    {
      name: 'Australian Narrow-Leaf Lupin (Lupinus angustifolius)',
      description: 'Hardy variety with excellent protein profile and low glycemic index, commonly used in flours and protein concentrates.',
      origin: 'Western Australia'
    },
    {
      name: 'Bitter Lupins',
      description: 'Traditional high-alkaloid variety requiring soaking; used in ethnic cuisines and fermentation processes.',
      origin: 'South America, North Africa'
    },
    {
      name: 'Organic Sweet Lupins',
      description: 'Certified organic lupins grown without synthetic inputs, ideal for natural food and specialty health brands.',
      origin: 'Certified organic farms in Europe and Australia'
    }
  ],
  specifications: [
    { name: 'Moisture Content', value: '≤ 12%' },
    { name: 'Protein Content', value: '36–42%' },
    { name: 'Fiber Content', value: '20–25%' },
    { name: 'Alkaloid Content', value: '≤ 0.02% (sweet variety)' },
    { name: 'Starch Content', value: '≤ 3%' },
    { name: 'Purity', value: '≥ 99%' },
    { name: 'Foreign Matter', value: '≤ 0.5%' }
  ],
  packaging: [
    { type: 'PP or Kraft Bags', sizes: ['25kg', '50kg'] },
    { type: 'Vacuum Sealed', sizes: ['1kg', '5kg'] },
    { type: 'Bulk Containers', sizes: ['1 MT Jumbo Bags'] },
    { type: 'Retail Packs', sizes: ['500g', '1kg'] }
  ],
  certifications: ['FSSAI', 'ISO 22000', 'HACCP', 'USDA Organic (for organic variants)', 'EU Organic', 'Non-GMO'],
  applications: [
    'Lupin flour for baking and gluten-free foods',
    'Meat substitutes and vegan protein products',
    'Canned and marinated lupin snacks',
    'Functional food and dietary fiber supplements',
    'Traditional pickled dishes in Mediterranean cuisines'
  ]
    },
    'vetches': {
  name: 'Vetches',
  description: 'Protein-rich forage and cover crop legumes with growing applications in food, feed, and soil enhancement systems.',
  category: 'Pulses',
  longDescription: `
    Vetches (Vicia spp.) are cool-season leguminous plants valued for their versatility in agricultural, livestock, and environmental applications. Traditionally grown as cover crops and forage, certain vetch varieties are now gaining traction in food and feed sectors due to their high protein and nitrogen-fixing benefits.

    Our vetches are primarily sourced from sustainable farms in India, Australia, Canada, and Eastern Europe. Common commercial species include *Vicia sativa* (Common Vetch), *Vicia villosa* (Hairy Vetch), and *Vicia narbonensis* (Narbon Vetch), each suited to specific climates and uses.

    Vetch seeds are used in green manuring, livestock feed, erosion control, and increasingly in specialty flours and plant-based products. Our offering includes cleaned, graded seeds available for human consumption, animal feed, or agricultural use, depending on the variety and processing method.
  `,
  images: [
    'https://5.imimg.com/data5/SELLER/Default/2021/10/NF/EL/FL/1477037/vetch-seeds-500x500.jpg',
    'https://cdn.pixabay.com/photo/2021/11/24/12/55/vetch-6820327_1280.jpg',
    'https://shorturl.at/fvySX',
    'https://shorturl.at/lwIY2'
  ],
  varieties: [
    {
      name: 'Common Vetch (Vicia sativa)',
      description: 'Widely grown variety used as green manure and forage; seeds also utilized in flour and feed production.',
      origin: 'India, Australia, Turkey'
    },
    {
      name: 'Hairy Vetch (Vicia villosa)',
      description: 'Winter-hardy cover crop with dense foliage and excellent nitrogen-fixing capacity.',
      origin: 'Eastern Europe, Canada'
    },
    {
      name: 'Narbon Vetch (Vicia narbonensis)',
      description: 'Drought-tolerant species suitable for arid environments; used for forage and soil fertility.',
      origin: 'Spain, Morocco, Middle East'
    },
    {
      name: 'Organic Vetch',
      description: 'Certified organic vetch cultivated without synthetic inputs, ideal for organic farms and feed applications.',
      origin: 'Certified farms in Europe and India'
    }
  ],
  specifications: [
    { name: 'Moisture Content', value: '≤ 13%' },
    { name: 'Protein Content', value: '24–30%' },
    { name: 'Crude Fiber', value: '≤ 7%' },
    { name: 'Purity', value: '≥ 98%' },
    { name: 'Admixture', value: '≤ 2%' },
    { name: 'Foreign Matter', value: '≤ 0.5%' },
    { name: 'Size Range', value: '3–6 mm (variety dependent)' }
  ],
  packaging: [
    { type: 'PP Bags', sizes: ['25kg', '50kg'] },
    { type: 'Jumbo Bags', sizes: ['1 MT'] },
    { type: 'Vacuum Packs', sizes: ['1kg', '5kg'] },
    { type: 'Retail Packs', sizes: ['500g', '1kg'] }
  ],
  certifications: ['FSSAI', 'ISO 22000', 'HACCP', 'EU Organic', 'Non-GMO', 'Feed Grade (where applicable)'],
  applications: [
    'Soil enrichment via green manuring',
    'Livestock feed and forage',
    'Cover cropping and erosion control',
    'Protein flours and food processing (select varieties)',
    'Regenerative and organic agriculture inputs'
  ]
    },
    'desi-chickpeas': {
  name: 'Desi Chickpeas',
  description: 'Traditional small, dark, and rough-coated chickpeas with rich flavor and high nutritional value, widely used in Indian and Middle Eastern cuisines.',
  category: 'Pulses',
  longDescription: `
    Desi Chickpeas (Cicer arietinum desi) are a distinctive variety of chickpeas characterized by their smaller size, darker color, and rough textured coat compared to the Kabuli type. They are predominantly cultivated in India, Pakistan, Ethiopia, and Mexico.

    Known for their robust flavor and excellent cooking qualities, Desi Chickpeas are a staple ingredient in many traditional dishes such as chana masala, stews, and salads. These pulses are rich in protein, dietary fiber, iron, and essential vitamins, making them a healthy addition to vegetarian and vegan diets.

    Our Desi Chickpeas are sourced from top pulse-producing regions like Madhya Pradesh, Maharashtra, and Rajasthan. They undergo thorough cleaning, sorting, and grading to ensure consistent quality, uniform size, and free from impurities.
  `,
  images: [
    'https://5.imimg.com/data5/SELLER/Default/2020/11/FC/DT/PK/6937279/desi-chickpeas-500x500.jpg',
    'https://cdn.pixabay.com/photo/2019/06/22/20/18/chickpeas-4293278_1280.jpg',
    'https://shorturl.at/fxAK4',
    'https://shorturl.at/egDJ8'
  ],
  varieties: [
    {
      name: 'Desi Kabuli Hybrid',
      description: 'Improved hybrid variety with higher yield and uniform grain size, suitable for multiple culinary uses.',
      origin: 'Madhya Pradesh, India'
    },
    {
      name: 'Traditional Desi',
      description: 'Classic local variety with authentic taste and texture, preferred for traditional recipes.',
      origin: 'Rajasthan, India'
    },
    {
      name: 'Organic Desi Chickpeas',
      description: 'Cultivated organically without synthetic pesticides or fertilizers, certified organic by international standards.',
      origin: 'Certified organic farms in India'
    },
    {
      name: 'Colored Desi Chickpeas',
      description: 'Desi chickpeas with natural color variations such as brown, black, and mottled, used for specialty culinary applications.',
      origin: 'Various regions in India'
    }
  ],
  specifications: [
    { name: 'Moisture Content', value: '≤ 12%' },
    { name: 'Purity', value: '≥ 99%' },
    { name: 'Protein Content', value: '18–22%' },
    { name: 'Admixture', value: '≤ 1%' },
    { name: 'Foreign Matter', value: '≤ 0.5%' },
    { name: 'Size', value: '5–7 mm' },
    { name: 'Broken or Damaged', value: '≤ 2%' }
  ],
  packaging: [
    { type: 'PP Woven Bags', sizes: ['25kg', '50kg'] },
    { type: 'HDPE Bags', sizes: ['10kg', '25kg'] },
    { type: 'Vacuum Packed', sizes: ['1kg', '5kg', '10kg'] },
    { type: 'Retail Packs', sizes: ['500g', '1kg', '2kg'] }
  ],
  certifications: ['FSSAI', 'APEDA', 'ISO 22000', 'HACCP', 'Organic (for organic variants)'],
  applications: [
    'Traditional Indian curries and dals',
    'Roasted and snack products',
    'Flours for baking and gluten-free products',
    'Salads and soups',
    'Plant-based protein and nutrition supplements'
  ]
    }
  },
  'tea': {
    'black-tea': {
  name: 'Black Tea',
  description: 'Our premium black tea is handpicked from high-altitude estates in Assam and Darjeeling, known for their rich aroma, bold flavor, and antioxidant properties.',
  category: 'Tea',
  longDescription: `
    Black tea is a fully oxidized tea variety made from the leaves of the *Camellia sinensis* plant. It is the most widely consumed type of tea globally and is renowned for its strong flavor, dark color, and higher caffeine content compared to other teas.

    Our black tea is sourced from prestigious estates in India, including Assam and Darjeeling, where the unique climate and soil conditions create a naturally rich and aromatic profile. Harvested at optimal maturity, the tea leaves are processed using traditional withering, rolling, oxidation, and drying techniques to ensure full-bodied flavor and freshness.

    Available in whole leaf, broken leaf, and CTC (crush-tear-curl) formats, our black tea is carefully graded and sorted to suit various customer preferences, from gourmet blends to industrial bulk supply.
  `,
  images: [
    'https://upload.wikimedia.org/wikipedia/commons/3/3b/Black_tea_leaves.jpg',
    'https://5.imimg.com/data5/SELLER/Default/2022/10/FE/YU/XO/135004824/black-tea.jpg',
    'https://shorturl.at/mwAEP',
    'https://shorturl.at/qsDS0'
  ],
  varieties: [
    {
      name: 'Assam Orthodox',
      description: 'Bold, malty flavor with a dark infusion and high strength, ideal for milk-based teas.',
      origin: 'Assam, India'
    },
    {
      name: 'Darjeeling First Flush',
      description: 'Delicate floral aroma with a light golden liquor, known as the "Champagne of Teas."',
      origin: 'Darjeeling, West Bengal, India'
    },
    {
      name: 'CTC Assam',
      description: 'Granular black tea with strong briskness and astringency, widely used in chai blends.',
      origin: 'Assam, India'
    },
    {
      name: 'Nilgiri Black',
      description: 'Smooth and fragrant tea with a fruity note and medium body, great for iced tea.',
      origin: 'Nilgiri Hills, Tamil Nadu, India'
    }
  ],
  specifications: [
    { name: 'Moisture Content', value: '≤ 6%' },
    { name: 'Total Ash', value: '≤ 8%' },
    { name: 'Caffeine Content', value: '2.5-4.5%' },
    { name: 'Theaflavins', value: '0.5-1.5%' },
    { name: 'Bulk Density', value: '300-500 g/L' },
    { name: 'Particle Size', value: 'Varies by grade (Whole, Broken, Fannings, Dust)' },
    { name: 'Foreign Matter', value: '≤ 1%' }
  ],
  packaging: [
    { type: 'Paper Sacks', sizes: ['25kg', '50kg'] },
    { type: 'PP Bags with Inner Liner', sizes: ['25kg'] },
    { type: 'Tin Cans', sizes: ['250g', '500g', '1kg'] },
    { type: 'Custom Branded Packaging', sizes: ['As per client request'] }
  ],
  certifications: ['FSSAI', 'Tea Board of India', 'ISO 22000', 'HACCP', 'Rainforest Alliance (on request)'],
  applications: [
    'Daily beverage consumption',
    'Masala chai and flavored blends',
    'Ready-to-drink bottled tea',
    'Tea bags and loose-leaf retail',
    'Functional wellness infusions'
  ]
    },
    'whole-leaf': {
  name: 'Whole Leaf ',
  description: 'Premium grade black tea made from unbroken, full-size leaves that offer superior aroma, flavor complexity, and a smooth finish.',
  category: 'Tea',
  longDescription: `
    Whole Leaf Black Tea refers to unbroken, carefully rolled leaves of the *Camellia sinensis* plant, processed through full oxidation to achieve a deep flavor and rich character. Unlike CTC or broken tea, whole leaf preserves the integrity of the leaf, allowing for a more refined and layered tea experience.

    Our whole leaf black tea is sourced from certified organic and conventional tea estates in Assam, Darjeeling, and Nilgiris. These high-altitude gardens cultivate leaves under optimal conditions, producing tea that is naturally rich in antioxidants like theaflavins and thearubigins.

    The whole leaf format is favored by connoisseurs and specialty tea brands for its visual appeal, infusion clarity, and complex taste profile. Each batch is hand-sorted and graded for uniformity and purity, ensuring premium quality with every brew.
  `,
  images: [
    'https://upload.wikimedia.org/wikipedia/commons/2/26/Loose_black_tea_leaves.jpg',
    'https://5.imimg.com/data5/ANDROID/Default/2023/2/FN/WL/RZ/154042866/product-jpeg-500x500.jpg',
    'https://shorturl.at/aekGH',
    'https://shorturl.at/dmwO6'
  ],
  varieties: [
    {
      name: 'Assam Whole Leaf',
      description: 'Bold and malty with a coppery liquor, ideal for strong breakfast-style tea.',
      origin: 'Assam, India'
    },
    {
      name: 'Darjeeling Whole Leaf (Second Flush)',
      description: 'Muscatel aroma with amber color and a sweet, fruity finish.',
      origin: 'Darjeeling, West Bengal, India'
    },
    {
      name: 'Nilgiri Highland Leaf',
      description: 'Bright and brisk with floral undertones, great for iced tea and blends.',
      origin: 'Nilgiri Hills, Tamil Nadu, India'
    },
    {
      name: 'Organic Whole Leaf',
      description: 'Grown without synthetic chemicals, certified organic, with a smooth earthy flavor.',
      origin: 'Various organic estates in India'
    }
  ],
  specifications: [
    { name: 'Leaf Size', value: 'Whole, unbroken leaves' },
    { name: 'Moisture Content', value: '≤ 6%' },
    { name: 'Caffeine Content', value: '3.0-4.5%' },
    { name: 'Theaflavins', value: '0.6-1.5%' },
    { name: 'Thearubigins', value: '3.0-6.0%' },
    { name: 'Foreign Matter', value: '≤ 1%' },
    { name: 'Shelf Life', value: '24 months (in dry, cool conditions)' }
  ],
  packaging: [
    { type: 'Kraft Paper Bags', sizes: ['250g', '500g', '1kg'] },
    { type: 'Aluminum Foil Pouches', sizes: ['100g', '500g'] },
    { type: 'Bulk Sacks (with inner liner)', sizes: ['10kg', '25kg'] },
    { type: 'Custom Label Tins', sizes: ['As per requirement'] }
  ],
  certifications: ['FSSAI', 'Tea Board of India', 'ISO 22000', 'Organic (for organic varieties)', 'Fair Trade (on request)'],
  applications: [
    'Loose-leaf luxury blends',
    'Specialty café and tea house service',
    'High-end retail packaging',
    'Gifting and private label brands',
    'Multiple-infusion teapots and tea ceremonies'
  ]
    },
    'broken-leaf': {
  name: 'Broken Leaf',
  description: 'A popular black tea grade made from partially broken tea leaves, offering a stronger infusion and quicker brew with rich flavor and color.',
  category: 'Tea',
  longDescription: `
    Broken Leaf Black Tea refers to tea leaves that have been intentionally broken during processing to enhance the strength, color, and infusion speed. It strikes a balance between whole leaf complexity and CTC briskness, making it ideal for everyday tea drinkers and commercial blending.

    Our broken leaf tea is carefully sourced from high-quality gardens in Assam, Darjeeling, and Nilgiri. These estates follow traditional plucking and orthodox processing methods, where the leaves are withered, rolled, oxidized, and broken to the desired grade.

    This format is widely used in domestic and international tea markets for its cost-effectiveness and ability to deliver a flavorful cup quickly, whether served plain or with milk.
  `,
  images: [
    'https://5.imimg.com/data5/SELLER/Default/2021/6/TI/JF/CT/72333650/black-tea-broken.jpg',
    'https://shorturl.at/aelEO',
    'https://shorturl.at/ptBJS',
    'https://shorturl.at/fqBTV'
  ],
  varieties: [
    {
      name: 'Assam BOP (Broken Orange Pekoe)',
      description: 'Robust flavor, bright red liquor, and suitable for strong milk tea.',
      origin: 'Assam, India'
    },
    {
      name: 'Darjeeling Broken Leaf',
      description: 'Lighter body with floral-fruity notes and amber liquor.',
      origin: 'Darjeeling, West Bengal, India'
    },
    {
      name: 'Nilgiri Broken Leaf',
      description: 'Brisk and aromatic with a smooth finish, perfect for iced tea and blends.',
      origin: 'Nilgiri Hills, Tamil Nadu, India'
    },
    {
      name: 'Organic Broken Leaf',
      description: 'Grown without synthetic chemicals, certified organic, medium-bodied infusion.',
      origin: 'Certified organic estates across India'
    }
  ],
  specifications: [
    { name: 'Leaf Size', value: 'Partially broken leaves (2–5 mm)' },
    { name: 'Moisture Content', value: '≤ 6%' },
    { name: 'Caffeine Content', value: '2.8–4.2%' },
    { name: 'Theaflavins', value: '0.5–1.2%' },
    { name: 'Thearubigins', value: '2.5–5.5%' },
    { name: 'Foreign Matter', value: '≤ 1%' },
    { name: 'Shelf Life', value: '24 months in cool, dry storage' }
  ],
  packaging: [
    { type: 'Laminated PP Bags', sizes: ['10kg', '25kg'] },
    { type: 'Paper Sacks with Inner Liner', sizes: ['25kg'] },
    { type: 'Stand-Up Pouches', sizes: ['100g', '500g', '1kg'] },
    { type: 'Customized Retail Packs', sizes: ['As per client requirement'] }
  ],
  certifications: ['FSSAI', 'Tea Board of India', 'ISO 22000', 'Organic (on request)', 'HACCP'],
  applications: [
    'Daily household tea consumption',
    'Milk tea and chai preparation',
    'Tea bags and blended formulations',
    'Foodservice and bulk brewing',
    'Base for flavored or spiced teas'
  ]
    },
    'green-tea': {
  name: 'Green Tea',
  description: 'Our premium green tea is minimally processed to preserve its natural antioxidants, offering a light, refreshing taste and a range of wellness benefits.',
  category: 'Tea',
  longDescription: `
    Green Tea is made from the unoxidized leaves of the *Camellia sinensis* plant and is known for its delicate flavor, pale color, and high levels of catechins, a type of antioxidant. It undergoes minimal processing, typically involving steaming or pan-firing, to retain its green color and nutritional profile.

    Our green tea is sourced from the finest tea-growing regions of India, including Darjeeling, Assam, and the Nilgiri Hills. The leaves are handpicked and carefully processed to ensure maximum freshness and efficacy.

    Revered both as a beverage and a health tonic, green tea is widely consumed for its potential to aid metabolism, support immunity, and provide a calming yet alert state of mind. We offer a range of green tea variants tailored for both everyday drinking and premium specialty markets.
  `,
  images: [
    'https://upload.wikimedia.org/wikipedia/commons/3/3c/Green_tea_leaf_001.jpg',
    'https://5.imimg.com/data5/SELLER/Default/2022/5/OB/VC/DI/1402837/green-tea-leaves.jpg',
    'https://shorturl.at/cvJ36',
    'https://shorturl.at/boCK6'
  ],
  varieties: [
    {
      name: 'Darjeeling Green Tea',
      description: 'Delicate and floral with a light body and subtle sweetness.',
      origin: 'Darjeeling, West Bengal, India'
    },
    {
      name: 'Assam Green Tea',
      description: 'Brisk and bold with a grassy aroma and strong vegetal notes.',
      origin: 'Assam, India'
    },
    {
      name: 'Nilgiri Green Tea',
      description: 'Smooth and mildly fruity with excellent clarity in infusion.',
      origin: 'Nilgiri Hills, Tamil Nadu, India'
    },
    {
      name: 'Organic Green Tea',
      description: 'Certified organic, cultivated without synthetic pesticides, with a clean and earthy profile.',
      origin: 'Certified organic gardens across India'
    }
  ],
  specifications: [
    { name: 'Moisture Content', value: '≤ 6%' },
    { name: 'Catechin Content', value: '10–20%' },
    { name: 'Caffeine Content', value: '1.5–3.5%' },
    { name: 'Polyphenols', value: '20–30%' },
    { name: 'Foreign Matter', value: '≤ 1%' },
    { name: 'Shelf Life', value: '18–24 months in airtight conditions' }
  ],
  packaging: [
    { type: 'Foil-Lined Pouches', sizes: ['100g', '250g', '1kg'] },
    { type: 'Pyramid Tea Bags', sizes: ['15s', '25s', '100s'] },
    { type: 'Bulk Paper Sacks', sizes: ['10kg', '25kg'] },
    { type: 'Custom Retail Tins', sizes: ['As per client requirement'] }
  ],
  certifications: ['FSSAI', 'Tea Board of India', 'ISO 22000', 'Organic (for certified lots)', 'HACCP'],
  applications: [
    'Health and wellness beverages',
    'Detox and slimming blends',
    'Ready-to-drink green tea products',
    'Flavored and infused green teas',
    'Premium retail and gift packaging'
  ]
    },
    'fannings': {
  name: 'Fannings',
  description: 'A fine-grade black tea made from small particles left after the processing of whole and broken leaves, perfect for quick infusion and strong brew.',
  category: 'Tea',
  longDescription: `
    Fannings Black Tea is a finely sorted grade of tea consisting of smaller broken particles of the *Camellia sinensis* leaf. Though often a byproduct of higher leaf grades, fannings are purposefully used in tea bags for their ability to infuse quickly and produce a strong, bold cup.

    Our fannings are sourced from premium orthodox and CTC tea estates across Assam, Darjeeling, and Nilgiris. The tea particles are carefully sieved, graded, and cleaned to ensure consistent size and flavor quality.

    Ideal for mass-market and quick-consumption formats, fannings provide an economical yet flavorful solution for commercial brands and institutional use. Their briskness and strength make them especially suitable for milk tea and vending applications.
  `,
  images: [
    'https://5.imimg.com/data5/SELLER/Default/2020/12/OZ/GD/AL/2524672/tea-fannings.jpg',
    'https://shorturl.at/nqFL8',
    'https://shorturl.at/fAQU2',
    'https://shorturl.at/dHKS3'
  ],
  varieties: [
    {
      name: 'Assam Fannings',
      description: 'Strong and malty with deep reddish-brown liquor; perfect for masala chai.',
      origin: 'Assam, India'
    },
    {
      name: 'Darjeeling Fannings',
      description: 'Lighter-bodied with fruity undertones; ideal for quick gourmet tea bags.',
      origin: 'Darjeeling, West Bengal, India'
    },
    {
      name: 'Nilgiri Fannings',
      description: 'Clean, brisk character with subtle floral notes; great for iced teas.',
      origin: 'Nilgiri Hills, Tamil Nadu, India'
    },
    {
      name: 'Organic Fannings',
      description: 'Processed from organically cultivated leaves without synthetic inputs.',
      origin: 'Certified organic tea estates in India'
    }
  ],
  specifications: [
    { name: 'Leaf Size', value: '0.5–1.5 mm (approx.)' },
    { name: 'Moisture Content', value: '≤ 6%' },
    { name: 'Caffeine Content', value: '3.0–4.5%' },
    { name: 'Liquor Color', value: 'Coppery to deep red (variety dependent)' },
    { name: 'Theaflavins', value: '0.6–1.2%' },
    { name: 'Foreign Matter', value: '≤ 1%' },
    { name: 'Shelf Life', value: '24 months in dry, airtight conditions' }
  ],
  packaging: [
    { type: 'Paper Sacks with Inner Poly Liner', sizes: ['25kg'] },
    { type: 'PP Woven Bags', sizes: ['10kg', '20kg'] },
    { type: 'Heat-Sealed Pouches', sizes: ['500g', '1kg', '5kg'] },
    { type: 'Private Label Tea Bags', sizes: ['Customized sachets, boxes, pouches'] }
  ],
  certifications: ['FSSAI', 'Tea Board of India', 'ISO 22000', 'Organic (for certified batches)', 'HACCP'],
  applications: [
    'Commercial tea bags and sachets',
    'Chai vending machines',
    'Institutional and hospitality services',
    'Flavored blends and premix teas',
    'Export packaging for private-label brands'
  ]
    },
    'tea-dust': {
  name: 'Tea Dust',
  description: 'Finest particle grade of black tea used for strong, quick infusions, typically in tea bags and vending machines.',
  category: 'Tea',
  longDescription: `
    Tea Dust is the smallest grade of tea obtained during the production of black tea, consisting of fine tea particles that infuse rapidly and yield a very strong, dark liquor. Though often considered a low-grade byproduct, high-quality dust tea is purposefully manufactured in CTC and orthodox processing to serve bulk and commercial markets.

    Our Tea Dust is sourced from reputable estates in Assam, West Bengal, and South India, where it is screened, filtered, and packed under hygienic conditions. It’s favored for large-scale tea bag production, vending machines, and use in low-cost tea blends where strength and color are prioritized.

    Despite its fine texture, Tea Dust offers exceptional value and performance in applications demanding bold flavor, rapid steeping, and cost-effectiveness.
  `,
  images: [
    'https://5.imimg.com/data5/SELLER/Default/2023/8/334385982/FE/HK/KE/41849863/assam-tea-dust.jpg',
    'https://shorturl.at/lzMP2',
    'https://shorturl.at/hxAX4',
    'https://shorturl.at/aEQX4'
  ],
  varieties: [
    {
      name: 'Assam Dust',
      description: 'Strong, malty, and brisk with deep reddish liquor; best for milk-based vending chai.',
      origin: 'Assam, India'
    },
    {
      name: 'CTC Dust',
      description: 'Uniform particle size, high infusion strength, widely used in premixes and hotel chains.',
      origin: 'Various CTC factories across India'
    },
    {
      name: 'South Indian Dust',
      description: 'Bright and aromatic, ideal for budget-conscious bulk blends.',
      origin: 'Kerala, Karnataka, and Tamil Nadu'
    },
    {
      name: 'Organic Dust',
      description: 'Made from organically grown tea leaves and processed without chemical residues.',
      origin: 'Certified organic estates'
    }
  ],
  specifications: [
    { name: 'Particle Size', value: '≤ 0.5 mm' },
    { name: 'Moisture Content', value: '≤ 6%' },
    { name: 'Caffeine Content', value: '3.0–4.5%' },
    { name: 'Theaflavins', value: '0.8–1.5%' },
    { name: 'Thearubigins', value: '4.0–7.0%' },
    { name: 'Liquor Strength', value: 'Very Strong' },
    { name: 'Shelf Life', value: '24 months in sealed, dry storage' }
  ],
  packaging: [
    { type: 'Multi-wall Kraft Paper Bags', sizes: ['25kg'] },
    { type: 'Laminated Pouches', sizes: ['1kg', '5kg', '10kg'] },
    { type: 'Tea Bag Sachets', sizes: ['Customized for OEM brands'] },
    { type: 'Private Label Packs', sizes: ['As per buyer specification'] }
  ],
  certifications: ['FSSAI', 'Tea Board of India', 'ISO 22000', 'HACCP', 'Organic (if applicable)'],
  applications: [
    'Single-serve tea bags',
    'Tea vending machines',
    'Instant chai and premix blends',
    'Hotel, airline, and railway catering',
    'Budget-friendly retail tea offerings'
  ]
},
},
  'others': {
    'sunflower-oil': {
  name: 'Sunflower Oil',
  description: 'Our high-quality sunflower oil is extracted from premium sunflower seeds, offering a light texture, neutral flavor, and excellent frying performance.',
  category: 'Edible Oils',
  longDescription: `
    Sunflower oil is a non-volatile oil pressed from the seeds of the sunflower (Helianthus annuus). Rich in Vitamin E and low in saturated fats, it is one of the most popular cooking oils around the world due to its health benefits and stability at high temperatures.

    We source our sunflower seeds from top sunflower-producing regions including Maharashtra, Karnataka, and Andhra Pradesh. The oil is produced using cold-press or refined extraction processes, depending on customer preference, while maintaining strict quality standards.

    Our sunflower oil is available in various forms, including refined, cold-pressed, and organic variants, making it suitable for diverse culinary and industrial applications.
  `,
  images: [
    'https://5.imimg.com/data5/SELLER/Default/2022/6/LK/KE/XD/11193467/refined-sunflower-oil.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://cdn.pixabay.com/photo/2017/05/17/10/01/sunflower-oil-2314522_1280.jpg',
    'https://shorturl.at/hAFRY?auto=compress&cs=tinysrgb&w=800',
    'https://shorturl.at/aJTZ3?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: 'Refined Sunflower Oil',
      description: 'Clear, light-yellow oil with neutral flavor, suitable for high-heat cooking and frying.',
      origin: 'Maharashtra, India'
    },
    {
      name: 'Cold-Pressed Sunflower Oil',
      description: 'Unrefined, retains more nutrients and has a light nutty flavor. Ideal for salads and low-heat cooking.',
      origin: 'Karnataka, India'
    },
    {
      name: 'Organic Sunflower Oil',
      description: 'Grown and processed without synthetic inputs, certified organic, and suitable for health-conscious consumers.',
      origin: 'Andhra Pradesh, India'
    }
  ],
  specifications: [
    { name: 'Color (Lovibond)', value: '≤ 15 Yellow, ≤ 1.5 Red' },
    { name: 'Moisture & Volatile Matter', value: '≤ 0.1%' },
    { name: 'Free Fatty Acid (as Oleic Acid)', value: '≤ 0.25%' },
    { name: 'Iodine Value', value: '118 – 141' },
    { name: 'Saponification Value', value: '188 – 194' },
    { name: 'Peroxide Value', value: '≤ 5 meq/kg' },
    { name: 'Shelf Life', value: '12 months from manufacture' }
  ],
  packaging: [
    { type: 'PET Bottles', sizes: ['500ml', '1L', '2L'] },
    { type: 'HDPE Jerry Cans', sizes: ['5L', '10L', '15L'] },
    { type: 'Tin Containers', sizes: ['15kg', '18kg'] },
    { type: 'Flexi Bags / Tankers', sizes: ['Bulk packaging'] }
  ],
  certifications: ['FSSAI', 'ISO 22000', 'HACCP', 'Non-GMO', 'Organic (for organic variants)'],
  applications: [
    'Daily cooking and frying oil',
    'Salad dressings and marinades',
    'Food processing and bakery industry',
    'Cosmetics and skincare formulations',
    'Nutritional supplements and infant food'
  ]
    },
    'palm-oil': {
  name: 'Palm Oil',
  description: 'Our premium palm oil is responsibly sourced and processed to deliver rich texture, high oxidative stability, and versatile applications across food and non-food industries.',
  category: 'Edible Oils',
  longDescription: `
    Palm oil is an edible vegetable oil derived from the mesocarp (reddish pulp) of the fruit of the oil palms, primarily the *Elaeis guineensis*. Known for its semi-solid consistency at room temperature, it is widely used in cooking, baking, processed foods, and industrial applications.

    We source crude and refined palm oil through sustainable and ethical supply chains from certified plantations, primarily in Malaysia and Indonesia, while also refining and fractionating in India under strict quality and hygiene protocols.

    Available in different grades and fractions—Crude Palm Oil (CPO), Refined Bleached Deodorized Palm Oil (RBDPO), Palm Olein, and Palm Stearin—our palm oil products meet global standards for food safety and industrial use.
  `,
  images: [
    'https://5.imimg.com/data5/SELLER/Default/2023/8/335004746/TK/JF/KF/16310352/palm-oil-500x500.jpg',
    'https://cdn.pixabay.com/photo/2017/01/31/18/20/oil-2027764_1280.jpg',
    'https://shorturl.at/wFJS1?auto=compress&cs=tinysrgb&w=800',
    'https://shorturl.at/puMVY?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: 'Crude Palm Oil (CPO)',
      description: 'Unrefined oil with a deep reddish-orange color, rich in carotenoids and used primarily for further processing.',
      origin: 'Malaysia & Indonesia'
    },
    {
      name: 'Refined Bleached Deodorized Palm Oil (RBDPO)',
      description: 'Golden-yellow refined oil suitable for food-grade applications, with a neutral taste and long shelf life.',
      origin: 'Refined in India (from imported CPO)'
    },
    {
      name: 'Palm Olein',
      description: 'The liquid fraction of palm oil, ideal for deep-frying and general-purpose cooking oil.',
      origin: 'Refined in India, sourced from Malaysia/Indonesia'
    },
    {
      name: 'Palm Stearin',
      description: 'The solid fraction of palm oil, used in bakery fats, margarines, and industrial uses like soap-making.',
      origin: 'Refined in India'
    }
  ],
  specifications: [
    { name: 'Free Fatty Acid (as Palmitic)', value: '≤ 0.1% (RBD)' },
    { name: 'Moisture & Impurities', value: '≤ 0.1%' },
    { name: 'Iodine Value', value: '50–55 (RBD)', },
    { name: 'Saponification Value', value: '195 – 205' },
    { name: 'Melting Point', value: '33°C – 39°C' },
    { name: 'Shelf Life', value: '12 – 18 months (under proper storage)' }
  ],
  packaging: [
    { type: 'Jerry Cans', sizes: ['5L', '10L', '20L'] },
    { type: 'Tin Containers', sizes: ['15kg', '18kg'] },
    { type: 'HDPE Drums', sizes: ['200kg'] },
    { type: 'Flexi Tanks / ISO Tanks', sizes: ['Bulk exports'] }
  ],
  certifications: [
    'FSSAI',
    'ISO 22000',
    'HACCP',
    'RSPO (Roundtable on Sustainable Palm Oil)',
    'Kosher',
    'Halal'
  ],
  applications: [
    'Cooking and frying oil in foodservice industry',
    'Ingredient in margarine, confectionery, and bakery products',
    'Industrial applications like soap and detergent production',
    'Biofuel and oleochemical manufacturing',
    'Cosmetics and personal care formulations'
  ]
    },
    'olive-oil': {
  name: 'Olive Oil',
  description: 'Our premium olive oil is imported from the Mediterranean region, offering exceptional purity, aroma, and health benefits for culinary and therapeutic uses.',
  category: 'Edible Oils',
  longDescription: `
    Olive oil is a liquid fat obtained from pressing whole olives (Olea europaea), a traditional tree crop of the Mediterranean Basin. Known for its heart-healthy fats, antioxidants, and anti-inflammatory properties, olive oil is widely celebrated in both cuisine and wellness.

    We offer a range of high-quality olive oils, including extra virgin, virgin, refined, and pomace, sourced from Spain, Italy, and Greece — the most reputed olive-growing regions in the world. These oils are processed under cold-press and mechanical extraction techniques to preserve natural taste and nutritional value.

    Our olive oil is suitable for gourmet cooking, salad dressings, skincare formulations, and wellness products. Each batch is tested for purity and meets international quality standards.
  `,
  images: [
    'https://5.imimg.com/data5/SELLER/Default/2021/2/ZF/WZ/RN/19631895/extra-virgin-olive-oil.jpeg',
    'https://cdn.pixabay.com/photo/2016/04/13/22/35/olive-oil-1327081_1280.jpg',
    'https://shorturl.at/DsZ12?auto=compress&cs=tinysrgb&w=800',
    'https://shorturl.at/EjLPU?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: 'Extra Virgin Olive Oil',
      description: 'Highest quality, cold-pressed oil with acidity below 0.8%, rich in antioxidants and natural flavor. Ideal for raw consumption.',
      origin: 'Spain, Italy, Greece'
    },
    {
      name: 'Virgin Olive Oil',
      description: 'Cold-pressed with slightly higher acidity (≤ 2%), suitable for medium-heat cooking and salad dressings.',
      origin: 'Spain, Italy'
    },
    {
      name: 'Refined Olive Oil',
      description: 'Processed to remove impurities, resulting in a lighter taste and higher smoke point. Best for frying and sautéing.',
      origin: 'Spain, Turkey'
    },
    {
      name: 'Olive Pomace Oil',
      description: 'Extracted from olive residue using solvents, then refined. Cost-effective option for frying and bulk culinary use.',
      origin: 'Spain, India (refined)'
    }
  ],
  specifications: [
    { name: 'Acidity (Extra Virgin)', value: '≤ 0.8%' },
    { name: 'Acidity (Virgin)', value: '≤ 2%' },
    { name: 'Peroxide Value', value: '≤ 20 meq/kg (EVOO)' },
    { name: 'Smoke Point', value: '190°C – 240°C (variety dependent)' },
    { name: 'Shelf Life', value: '18 – 24 months (in dark, cool conditions)' },
    { name: 'Color', value: 'Golden yellow to greenish, depending on variety' },
    { name: 'Odor/Taste', value: 'Fruity, fresh, slightly bitter (EVOO)' }
  ],
  packaging: [
    { type: 'Glass Bottles', sizes: ['250ml', '500ml', '1L'] },
    { type: 'PET Bottles', sizes: ['500ml', '1L', '2L'] },
    { type: 'Tin Cans', sizes: ['3L', '5L'] },
    { type: 'Bulk Drums / IBC Tanks', sizes: ['20L', '200L', '1000L'] }
  ],
  certifications: [
    'FSSAI',
    'ISO 22000',
    'HACCP',
    'EU Organic (for organic variants)',
    'PDO/PGI (Protected Designation of Origin)',
    'Kosher',
    'Halal'
  ],
  applications: [
    'Salad dressings and marinades',
    'Light sautéing and gourmet cooking',
    'Mediterranean and continental cuisine',
    'Nutraceutical and therapeutic uses',
    'Cosmetic and skincare formulations'
  ]
    },
    'sesame-oil': {
  name: 'Sesame Oil',
  description: 'Our premium sesame oil is extracted from carefully selected sesame seeds, offering a rich aroma, nutty flavor, and exceptional purity ideal for both culinary and therapeutic uses.',
  category: 'Edible Oils',
  longDescription: `
    Sesame oil, also known as gingelly oil or til oil, is an edible vegetable oil derived from sesame seeds (*Sesamum indicum*). It has a long history of use in traditional medicine, Ayurveda, and Asian cuisines due to its antioxidant and anti-inflammatory properties.

    Our sesame oil is sourced from high-quality white and black sesame seeds grown in the fertile regions of Gujarat, Tamil Nadu, and West Bengal. Available in both cold-pressed (unrefined) and refined variants, our oil retains the natural aroma, flavor, and nutrients that sesame is known for.

    The oil is produced under hygienic, food-grade conditions using traditional wood-press (kachi ghani) and modern expeller or solvent extraction methods depending on the grade. It is widely used in culinary preparations, personal care, and wellness applications.
  `,
  images: [
    'https://5.imimg.com/data5/SELLER/Default/2023/2/289003440/AC/KD/VV/104068020/pure-sesame-oil.jpeg',
    'https://cdn.pixabay.com/photo/2015/06/08/15/11/oil-801234_1280.jpg',
    'https://shorturl.at/cvAVZ?auto=compress&cs=tinysrgb&w=800',
    'https://shorturl.at/eILTW?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: 'Cold-Pressed Sesame Oil (Unrefined)',
      description: 'Extracted using traditional wood-press methods, retaining its rich golden-brown color, strong nutty aroma, and nutrients. Ideal for raw use and Ayurveda.',
      origin: 'Tamil Nadu, India'
    },
    {
      name: 'Refined Sesame Oil',
      description: 'Neutral taste and lighter color, suitable for high-heat cooking and industrial applications.',
      origin: 'Gujarat, India'
    },
    {
      name: 'Roasted Sesame Oil (Asian Style)',
      description: 'Made from toasted sesame seeds with intense nutty flavor, commonly used in East Asian cuisine.',
      origin: 'Imported from South Korea or made in India for export'
    },
    {
      name: 'Organic Sesame Oil',
      description: 'Certified organic sesame oil made from seeds grown without pesticides or synthetic fertilizers.',
      origin: 'Various certified organic farms in India'
    }
  ],
  specifications: [
    { name: 'Color', value: 'Golden yellow to dark amber (variety dependent)' },
    { name: 'Free Fatty Acid (as Oleic)', value: '≤ 0.2% (Refined)' },
    { name: 'Iodine Value', value: '103 – 112' },
    { name: 'Saponification Value', value: '188 – 195' },
    { name: 'Moisture & Volatile Matter', value: '≤ 0.1%' },
    { name: 'Peroxide Value', value: '≤ 10 meq/kg' },
    { name: 'Shelf Life', value: '12 – 18 months (cool, dark storage)' }
  ],
  packaging: [
    { type: 'Glass Bottles', sizes: ['250ml', '500ml', '1L'] },
    { type: 'PET Bottles', sizes: ['500ml', '1L', '2L'] },
    { type: 'Tin Containers', sizes: ['5L', '15kg'] },
    { type: 'Bulk Packaging', sizes: ['20L Jerry Cans', '200L Drums'] }
  ],
  certifications: [
    'FSSAI',
    'ISO 22000',
    'HACCP',
    'AGMARK',
    'Organic Certified (for organic variants)',
    'Kosher',
    'Halal'
  ],
  applications: [
    'South Indian and Asian cuisine',
    'Ayurvedic massage and therapeutic oil',
    'Hair and skincare formulations',
    'Frying and sautéing',
    'Oil pulling and holistic health practices'
  ]
    },
    'soyabean-meal': {
  name: 'Soyabean Meal',
  description: 'Our high-protein soyabean meal is derived from premium-grade non-GMO soybeans, offering excellent digestibility and nutritional value for animal feed and industrial applications.',
  category: 'Animal Feed & Agro Products',
  longDescription: `
    Soyabean meal is the solid, protein-rich byproduct obtained after extracting oil from soybeans (*Glycine max*). It is widely used as a high-protein ingredient in animal feed for poultry, cattle, swine, and aquaculture industries.

    We source soybeans from major growing belts in Madhya Pradesh, Maharashtra, and Rajasthan, and process them in state-of-the-art solvent extraction and mechanical expelling facilities. The resulting meal is rich in essential amino acids, especially lysine and methionine, making it an ideal protein supplement.

    Our soyabean meal is available in two main forms: De-oiled Soyabean Cake (DOC) and Full-Fat Soyabean Meal, depending on oil content and application. It meets stringent international standards and is exported to feed manufacturers and bulk buyers globally.
  `,
  images: [
    'https://5.imimg.com/data5/SELLER/Default/2021/9/JK/FA/GR/19452842/soybean-doc.jpeg',
    'https://cdn.pixabay.com/photo/2020/05/13/11/36/soybean-5164256_1280.jpg',
    'https://shorturl.at/boCHL?auto=compress&cs=tinysrgb&w=800',
    'https://shorturl.at/hzDHO?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: 'De-oiled Soyabean Meal (DOC)',
      description: 'Byproduct after oil extraction via solvent process. Contains 46–48% protein. Widely used in poultry and livestock feed.',
      origin: 'Madhya Pradesh, Maharashtra, Rajasthan (India)'
    },
    {
      name: 'Full-Fat Soyabean Meal',
      description: 'Processed without oil extraction, retains higher fat and energy. Used in energy-dense feed rations for dairy and poultry.',
      origin: 'India (mechanical expeller plants)'
    },
    {
      name: 'Hi-Pro Soyabean Meal',
      description: 'Premium grade with protein content ≥ 48%, low fiber, and balanced amino acid profile. Ideal for high-performance livestock diets.',
      origin: 'India (high-protein lines)'
    },
    {
      name: 'Organic Soyabean Meal',
      description: 'Derived from organically cultivated soybeans, free from GMOs, solvents, or chemical processing. Suitable for organic farming systems.',
      origin: 'Certified organic farms across India'
    }
  ],
  specifications: [
    { name: 'Protein Content', value: '46–50% (variety dependent)' },
    { name: 'Moisture', value: '≤ 12%' },
    { name: 'Crude Fiber', value: '≤ 6%' },
    { name: 'Fat Content', value: '≤ 1.5% (DOC), 18-20% (Full-Fat)' },
    { name: 'Sand/Silica', value: '≤ 1%' },
    { name: 'Urease Activity', value: '≤ 0.1 pH rise' },
    { name: 'Shelf Life', value: '6 months (dry conditions)' }
  ],
  packaging: [
    { type: 'PP Woven Bags', sizes: ['25kg', '50kg'] },
    { type: 'Bulk Loose (Truck/Container)', sizes: ['As required'] },
    { type: 'Jumbo Bags', sizes: ['500kg', '1000kg'] }
  ],
  certifications: [
    'FSSAI',
    'ISO 22000',
    'APEDA',
    'GMP+',
    'NON-GMO Certificate',
    'Organic Certified (for organic variants)'
  ],
  applications: [
    'Poultry feed formulation',
    'Cattle and dairy animal nutrition',
    'Pig and swine feed',
    'Aquaculture and fish feed',
    'Pet food base protein additive',
    'Organic fertilizer base material'
  ]
    },
    'raw-sugar': {
  name: 'Raw Sugar',
  description: 'Our high-quality raw sugar is derived from freshly harvested sugarcane, processed under hygienic conditions, and rich in natural molasses and color — ideal for refining, industrial use, and export.',
  category: 'Sweeteners & Agro Products',
  longDescription: `
    Raw sugar is a coarse, granular product obtained from the initial stages of sugarcane juice crystallization. It retains a natural golden-brown color due to residual molasses, offering a slightly caramelized flavor.

    Our raw sugar is produced in India’s leading sugarcane-growing states such as Uttar Pradesh, Maharashtra, and Karnataka. It is manufactured in large-scale mills under strict quality control to ensure consistency in color, purity, and sucrose content. The product is minimally processed and is commonly used in refining, fermentation, beverages, and bulk food manufacturing.

    Available in both ICUMSA 600–1200 and ICUMSA 800–1500 grades, our raw sugar meets international trade standards and is exported globally in bulk and bagged formats.
  `,
  images: [
    'https://5.imimg.com/data5/SELLER/Default/2022/5/MR/DU/UU/38449786/raw-sugar.jpeg',
    'https://cdn.pixabay.com/photo/2018/03/22/16/25/sugar-3246938_1280.jpg',
    'https://shorturl.at/kuyY4?auto=compress&cs=tinysrgb&w=800',
    'https://shorturl.at/ADP06?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: 'Raw Cane Sugar – ICUMSA 600–1200',
      description: 'Golden brown sugar with high sucrose purity, ideal for industrial refining and molasses retention.',
      origin: 'Uttar Pradesh, India'
    },
    {
      name: 'Raw Cane Sugar – ICUMSA 800–1500',
      description: 'Darker grade raw sugar used in alcohol fermentation, cattle feed, and jaggery production.',
      origin: 'Maharashtra & Karnataka, India'
    },
    {
      name: 'Organic Raw Sugar',
      description: 'Made from organically cultivated sugarcane without chemical processing. Retains full molasses content.',
      origin: 'Certified organic farms in India'
    },
    {
      name: 'VHP Raw Sugar (Very High Polarity)',
      description: 'Export-grade raw sugar with ≥ 99.4% polarity, used by global refineries for further processing.',
      origin: 'Maharashtra & Coastal India'
    }
  ],
  specifications: [
    { name: 'Sucrose Content', value: '≥ 96–99.4%' },
    { name: 'ICUMSA', value: '600–1500 (depending on grade)' },
    { name: 'Moisture', value: '≤ 0.10%' },
    { name: 'Color', value: 'Golden to dark brown (molasses-rich)' },
    { name: 'Ash Content', value: '≤ 0.25%' },
    { name: 'Polarity (VHP)', value: '≥ 99.4°' },
    { name: 'Solubility', value: '100% in water' }
  ],
  packaging: [
    { type: 'PP Laminated Bags', sizes: ['50kg'] },
    { type: 'Bulk Containers', sizes: ['1MT Jumbo Bags'] },
    { type: 'Loose Bulk Shipments', sizes: ['As required for port export'] }
  ],
  certifications: [
    'FSSAI',
    'ISO 9001',
    'ISO 22000',
    'HACCP',
    'GMP',
    'Organic Certified (for organic variants)',
    'APEDA (for export)'
  ],
  applications: [
    'Refining into white sugar',
    'Alcohol and ethanol production',
    'Food and beverage manufacturing',
    'Bakery and confectionery',
    'Fermentation industry',
    'Cattle feed and molasses recovery'
  ]
    },
    'crystal-white-sugar': {
  name: 'Crystal White Sugar',
  description: 'Our premium crystal white sugar is highly refined, sparkling white in color, and free-flowing, perfect for direct consumption, food processing, and pharmaceutical applications.',
  category: 'Sweeteners & Agro Products',
  longDescription: `
    Crystal white sugar is a refined form of sucrose obtained from raw sugarcane juice through a multi-stage purification and crystallization process. Known for its bright white appearance, neutral taste, and high purity, it is widely used in households, bakeries, and industrial food production.

    Sourced from India’s top sugar mills in Uttar Pradesh, Maharashtra, and Gujarat, our sugar undergoes sulfur-free or sulfur-based clarification, carbon filtration, and vacuum drying. It conforms to FSSAI and international standards for food-grade white sugar.

    Our product is available in multiple grain sizes — small, medium, and large crystals — and can be supplied in both consumer and bulk industrial packaging. Custom grain sizing and labeling are also available.
  `,
  images: [
    'https://5.imimg.com/data5/SELLER/Default/2023/2/291442918/GV/AA/WR/1622692/white-crystal-sugar.jpeg',
    'https://cdn.pixabay.com/photo/2015/05/31/12/36/sugar-791052_1280.jpg',
    'https://shorturl.at/pvBIR?auto=compress&cs=tinysrgb&w=800',
    'https://shorturl.at/imIJM?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: 'Sulphur-Free White Sugar',
      description: 'Processed without sulphur dioxide, offering cleaner taste and ideal for health-conscious and export markets.',
      origin: 'Uttar Pradesh & Gujarat, India'
    },
    {
      name: 'ICUMSA 45 Refined Sugar',
      description: 'Export-quality, sparkling white sugar with ICUMSA rating of ≤ 45. Used in premium food applications worldwide.',
      origin: 'Refineries in Maharashtra and Gujarat, India'
    },
    {
      name: 'Pharma-Grade Sugar',
      description: 'Ultra-pure white sugar used in pharmaceutical syrups and medical formulations.',
      origin: 'GMP-certified facilities in India'
    },
    {
      name: 'Large Crystal Sugar (M30/S30 Grade)',
      description: 'Popular in retail packaging and bulk sweetener use. Uniform crystal size, ideal for food processing.',
      origin: 'Pan India'
    }
  ],
  specifications: [
    { name: 'Sucrose Content', value: '≥ 99.8%' },
    { name: 'ICUMSA', value: '≤ 45' },
    { name: 'Moisture', value: '≤ 0.05%' },
    { name: 'Ash Content', value: '≤ 0.04%' },
    { name: 'Grain Size', value: 'Small, Medium, Large Crystals (M30, S30 grades)' },
    { name: 'Color', value: 'Sparkling White' },
    { name: 'Solubility', value: '100% in water' }
  ],
  packaging: [
    { type: 'PP Bags with Inner Liner', sizes: ['25kg', '50kg'] },
    { type: 'Retail Packs', sizes: ['1kg', '5kg'] },
    { type: 'Jumbo Bags', sizes: ['1000kg'] },
    { type: 'Custom Printed Packs', sizes: ['As per requirement'] }
  ],
  certifications: [
    'FSSAI',
    'ISO 22000',
    'HACCP',
    'GMP',
    'ICUMSA Certified',
    'Kosher',
    'Halal',
    'APEDA (for export)'
  ],
  applications: [
    'Household sweetener',
    'Bakery and confectionery',
    'Soft drinks and beverages',
    'Ice cream and desserts',
    'Pharmaceutical syrups',
    'Food manufacturing and canning'
  ]
    },
    'chia-seeds': {
  name: 'Chia Seeds',
  description: 'Our premium chia seeds are nutrient-dense superfoods sourced from certified farms, rich in omega-3 fatty acids, fiber, and antioxidants — ideal for health-conscious consumers and food manufacturers.',
  category: 'Superfoods & Oilseeds',
  longDescription: `
    Chia seeds (*Salvia hispanica*) are tiny black or white seeds from the flowering plant native to Central America. Known for their exceptional nutritional profile, chia seeds are a rich plant-based source of omega-3 fatty acids (ALA), dietary fiber, protein, calcium, and essential minerals.

    Our chia seeds are grown in arid and semi-arid regions of Rajasthan and Madhya Pradesh in India under strict organic and conventional farming practices. They are minimally processed to retain purity and are free from additives, ensuring maximum nutritional value.

    Highly versatile, chia seeds are used in smoothies, cereals, baked goods, beverages, and health supplements. When soaked in water, they form a gel-like texture that is excellent for natural thickening, hydration, and weight management diets.
  `,
  images: [
    'https://5.imimg.com/data5/SELLER/Default/2021/8/OF/TC/FL/1444707/pure-black-chia-seeds.jpeg',
    'https://cdn.pixabay.com/photo/2019/06/28/20/49/chia-4305381_1280.jpg',
    'https://shorturl.at/ryJKW?auto=compress&cs=tinysrgb&w=800',
    'https://shorturl.at/aoMRU?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: 'Black Chia Seeds',
      description: 'Most common type, rich in antioxidants and nutrients. Slightly more robust flavor.',
      origin: 'Rajasthan & Madhya Pradesh, India'
    },
    {
      name: 'White Chia Seeds',
      description: 'Lighter in color with similar nutritional properties. Preferred for aesthetic food applications.',
      origin: 'Selected farms in India'
    },
    {
      name: 'Organic Chia Seeds',
      description: 'Grown without pesticides or synthetic fertilizers. Certified organic and traceable.',
      origin: 'Certified organic farms across India'
    },
    {
      name: 'EU-Compliant Chia',
      description: 'Tested and certified for European import standards (low pesticide residues, aflatoxins, etc.).',
      origin: 'Export-grade farms, India'
    }
  ],
  specifications: [
    { name: 'Purity', value: '≥ 99.9%' },
    { name: 'Moisture', value: '≤ 8%' },
    { name: 'Foreign Matter', value: '≤ 0.05%' },
    { name: 'Omega-3 Content (ALA)', value: '17–22%' },
    { name: 'Fiber Content', value: '30–34%' },
    { name: 'Protein Content', value: '18–20%' },
    { name: 'Shelf Life', value: '18–24 months' }
  ],
  packaging: [
    { type: 'Vacuum Packs', sizes: ['250g', '500g', '1kg'] },
    { type: 'HDPE Bags', sizes: ['5kg', '10kg', '25kg'] },
    { type: 'Paper Pouches (Retail)', sizes: ['100g', '250g', '500g'] },
    { type: 'Bulk Packaging', sizes: ['50kg', '1000kg Jumbo Bags'] }
  ],
  certifications: [
    'FSSAI',
    'USDA Organic',
    'EU Organic',
    'ISO 22000',
    'HACCP',
    'Kosher',
    'Halal',
    'NON-GMO'
  ],
  applications: [
    'Smoothies and juices',
    'Breakfast cereals and granola',
    'Baking (breads, cookies, energy bars)',
    'Vegan egg substitute',
    'Health supplements and protein blends',
    'Weight-loss and hydration foods'
  ]
    },
    'sunflower-seeds': {
  name: 'Sunflower Seeds',
  description: 'Our high-quality sunflower seeds are packed with nutrients, rich in healthy fats, protein, and antioxidants — ideal for snacking, oil extraction, and use in health food products.',
  category: 'Oilseeds & Superfoods',
  longDescription: `
    Sunflower seeds are harvested from the sunflower plant (*Helianthus annuus*) and are valued globally as a nutrient-rich oilseed and wholesome snack. These seeds are known for their high content of vitamin E, selenium, healthy fats (including polyunsaturated fats), protein, and dietary fiber.

    Sourced from leading agricultural zones such as Karnataka, Maharashtra, and Madhya Pradesh, our sunflower seeds are available in various grades — including bakery-grade, oil-grade, and snack-grade — based on purity, size, and oil content. We offer both dehulled (hulled) and whole (in-shell) sunflower seeds.

    Sunflower seeds are widely used in the production of sunflower oil, roasted snacks, baking ingredients, bird feed, and health food preparations.
  `,
  images: [
    'https://5.imimg.com/data5/SELLER/Default/2021/5/IA/XH/CS/28242790/natural-sunflower-seeds.jpeg',
    'https://cdn.pixabay.com/photo/2017/05/29/14/39/sunflower-seeds-2354805_1280.jpg',
    'https://shorturl.at/hmzA9?auto=compress&cs=tinysrgb&w=800',
    'https://shorturl.at/foqP2?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: 'Oil-Grade Sunflower Seeds',
      description: 'High oil content (≥ 40%), used mainly for cold-pressed and refined sunflower oil extraction.',
      origin: 'Maharashtra & Karnataka, India'
    },
    {
      name: 'Bakery-Grade Sunflower Seeds',
      description: 'Medium oil content, high purity seeds for use in breads, granola, and nutritional products.',
      origin: 'Madhya Pradesh, India'
    },
    {
      name: 'In-Shell Sunflower Seeds (Snacking)',
      description: 'Whole seeds with shells, used for roasting and snacking. Crisp texture and bold flavor.',
      origin: 'India & Ukraine (on demand)'
    },
    {
      name: 'Hulled Sunflower Seeds (Kernel)',
      description: 'Dehulled seeds ideal for direct consumption, salad toppings, health bars, and breakfast mixes.',
      origin: 'India (mechanically processed)'
    }
  ],
  specifications: [
    { name: 'Purity', value: '≥ 99%' },
    { name: 'Oil Content', value: '38–45% (variety dependent)' },
    { name: 'Moisture', value: '≤ 8%' },
    { name: 'Foreign Matter', value: '≤ 1%' },
    { name: 'Protein Content', value: '20–25%' },
    { name: 'Shelf Life', value: '12–18 months' }
  ],
  packaging: [
    { type: 'PP Woven Bags', sizes: ['25kg', '50kg'] },
    { type: 'Vacuum Packs', sizes: ['500g', '1kg'] },
    { type: 'HDPE Bags', sizes: ['10kg', '25kg'] },
    { type: 'Custom Retail Packaging', sizes: ['100g', '250g', '500g'] }
  ],
  certifications: [
    'FSSAI',
    'ISO 22000',
    'HACCP',
    'NON-GMO',
    'USDA Organic (for organic variants)',
    'APEDA (for export)',
    'Kosher',
    'Halal'
  ],
  applications: [
    'Edible oil extraction',
    'Roasted snack production',
    'Bakery and cereal ingredient',
    'Nutritional health food products',
    'Bird feed and pet food',
    'Salad toppings and meal prep'
  ]
    },
    'cashew-nuts': {
  name: 'Cashew Nuts',
  description: 'Our premium cashew nuts are carefully processed and graded to meet global standards, offering rich taste, creamy texture, and versatile usage across culinary, confectionery, and snacking applications.',
  category: 'Nuts & Dry Fruits',
  longDescription: `
    Cashew nuts (*Anacardium occidentale*) are kidney-shaped seeds sourced from the cashew apple, widely known for their rich buttery flavor and nutritional benefits. They are high in healthy monounsaturated fats, plant-based protein, magnesium, copper, and antioxidants.

    Our cashews are primarily sourced from the leading cultivation zones in Goa, Kerala, Andhra Pradesh, and parts of Africa (Tanzania, Ivory Coast) based on client preference. We offer a complete range of cashew grades — including whole white kernels (W180, W210, W240, W320, W450), scorched, splits, and broken pieces — processed under hygienic and food-safe facilities.

    Cashews are consumed raw, roasted, salted, or flavored and are key ingredients in Indian sweets, vegan cheese, bakery products, and international cuisine.
  `,
  images: [
    'https://5.imimg.com/data5/SELLER/Default/2021/5/JX/KD/CG/28242790/whole-cashew-nuts.jpeg',
    'https://cdn.pixabay.com/photo/2016/03/05/19/02/cashew-1239424_1280.jpg',
    'https://shorturl.at/ckCM9?auto=compress&cs=tinysrgb&w=800',
    'https://shorturl.at/axCD2?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: 'W180 (King Size)',
      description: 'Largest and most premium cashew grade. Ideal for gourmet snacking, gift packaging, and high-end use.',
      origin: 'Goa, India / Tanzania'
    },
    {
      name: 'W240 & W320',
      description: 'Most popular commercial grades used in snacks, sweets, and culinary applications.',
      origin: 'Kerala & Andhra Pradesh, India'
    },
    {
      name: 'W450',
      description: 'Smaller whole cashew grade, value-friendly and suitable for bulk processing and export.',
      origin: 'India & Ivory Coast'
    },
    {
      name: 'Scorched and Splits',
      description: 'Economical grades used in industrial food manufacturing and confectionery.',
      origin: 'Pan India / Africa'
    }
  ],
  specifications: [
    { name: 'Grade Available', value: 'W180, W210, W240, W320, W450, Scorched, Splits, Broken' },
    { name: 'Moisture Content', value: '≤ 5%' },
    { name: 'Defective Nuts', value: '≤ 5%' },
    { name: 'Foreign Matter', value: 'Nil' },
    { name: 'Oil Content', value: '40–50%' },
    { name: 'Shelf Life', value: '12 months (cool, dry storage)' }
  ],
  packaging: [
    { type: 'Vacuum Packs', sizes: ['250g', '500g', '1kg'] },
    { type: 'Tin Packing (for Export)', sizes: ['10kg', '11.34kg (25 lbs)'] },
    { type: 'Bulk HDPE Bags', sizes: ['20kg', '50kg'] },
    { type: 'Gift / Retail Boxes', sizes: ['100g', '250g', '500g'] }
  ],
  certifications: [
    'FSSAI',
    'APEDA',
    'ISO 22000',
    'HACCP',
    'BRC (on request)',
    'Kosher',
    'Halal'
  ],
  applications: [
    'Snacking (raw, roasted, salted)',
    'Indian sweets and desserts',
    'Bakery and confectionery',
    'Dairy alternatives (cashew milk, vegan cheese)',
    'Culinary gravies and sauces',
    'Gifting and festive packs'
  ]
    },
    'pistachio-nuts': {
  name: 'Pistachio Nuts',
  description: 'Our premium pistachios are sourced from the finest orchards, offering rich flavor, natural sweetness, and a crunchy texture — perfect for snacking, baking, and culinary uses.',
  category: 'Nuts & Dry Fruits',
  longDescription: `
    Pistachios (*Pistacia vera*) are small, nutrient-dense nuts known for their distinctive green kernels and mild, slightly sweet flavor. They are rich in healthy fats, protein, fiber, vitamins, and antioxidants.

    We source our pistachios from top producing regions such as Iran, the USA (California), and India, ensuring careful harvesting and processing to maintain freshness and quality. Available in shelled and unshelled forms, our pistachios are sorted and graded for uniform size, color, and moisture content.

    Pistachios are widely consumed as snacks, used in bakery items, ice creams, confectionery, and savory dishes.
  `,
  images: [
    'https://5.imimg.com/data5/SELLER/Default/2023/2/IB/AC/GJ/12345678/premium-pistachio-nuts.jpeg',
    'https://cdn.pixabay.com/photo/2016/10/25/12/28/pistachios-1760537_1280.jpg',
    'https://shorturl.at/abcXY?auto=compress&cs=tinysrgb&w=800',
    'https://shorturl.at/xyzAB?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: 'Kerman Pistachio',
      description: 'Large, elongated nuts with a bright green kernel and slightly sweet flavor. Highly sought after for quality snacking and gift packaging.',
      origin: 'California, USA'
    },
    {
      name: 'Irani Pistachio',
      description: 'Traditional pistachio variety from Iran, known for its rich flavor and deep green kernels.',
      origin: 'Iran'
    },
    {
      name: 'Antep Pistachio',
      description: 'Small to medium-sized nuts with a balanced flavor, popular in Middle Eastern culinary uses.',
      origin: 'Turkey (imported), India (limited)'
    },
    {
      name: 'Natural Shelled Pistachio',
      description: 'Unsalted, natural shelled pistachios with clean appearance and uniform size.',
      origin: 'Multiple sources'
    }
  ],
  specifications: [
    { name: 'Moisture Content', value: '≤ 5%' },
    { name: 'Kernel Size', value: '20-30 nuts per 30 grams (varies by grade)' },
    { name: 'Foreign Matter', value: 'Nil' },
    { name: 'Shelled Percentage', value: '≥ 98%' },
    { name: 'Shelf Life', value: '12 months (cool, dry storage)' }
  ],
  packaging: [
    { type: 'Vacuum Packs', sizes: ['250g', '500g', '1kg'] },
    { type: 'HDPE Bags', sizes: ['5kg', '10kg', '25kg'] },
    { type: 'Bulk Packaging', sizes: ['50kg', '1000kg Jumbo Bags'] },
    { type: 'Gift Boxes', sizes: ['100g', '250g', '500g'] }
  ],
  certifications: [
    'FSSAI',
    'APEDA',
    'ISO 22000',
    'HACCP',
    'Kosher',
    'Halal',
    'Organic (for select batches)'
  ],
  applications: [
    'Direct snacking (raw, roasted, salted)',
    'Bakery products (cakes, cookies, bread)',
    'Confectionery (chocolates, nougats)',
    'Ice cream and desserts',
    'Savory dishes and garnishing',
    'Gift and festive packaging'
  ]
    },
    'saffron': {
  name: 'Saffron',
  description: 'Our premium saffron is hand-harvested from the finest crocus flowers, offering deep aroma, vibrant color, and unmatched purity for culinary, medicinal, and cosmetic uses.',
  category: 'Spices',
  longDescription: `
    Saffron (*Crocus sativus*) is one of the world’s most precious and valuable spices, derived from the delicate red stigmas of the saffron crocus flower. Known for its distinct aroma, vibrant golden-yellow hue, and unique flavor profile, saffron has been prized for centuries in culinary traditions, herbal medicine, and cosmetics.

    Our saffron is sourced mainly from the premium growing regions of Kashmir (India), Iran, and Spain, ensuring stringent quality control from hand-picking to drying. The saffron threads are carefully sorted by length, color intensity, and purity to meet international standards such as ISO 3632.

    Available in various grades (I, II, III) based on crocin content (color), picrocrocin (taste), and safranal (aroma), our saffron is free from artificial dyes and adulterants.
  `,
  images: [
    'https://5.imimg.com/data5/SELLER/Default/2023/9/XY/AB/CD/12345678/premium-kashmiri-saffron.jpeg',
    'https://cdn.pixabay.com/photo/2017/05/16/22/14/saffron-2313317_1280.jpg',
    'https://shorturl.at/qsQR7?auto=compress&cs=tinysrgb&w=800',
    'https://shorturl.at/tBKL3?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: 'Kashmiri Saffron',
      description: 'Renowned for its deep red stigmas, intense color (high crocin content), and strong aroma. Highly prized globally.',
      origin: 'Kashmir, India'
    },
    {
      name: 'Iranian Saffron',
      description: 'Largest global producer, offers strong aroma and good coloring properties, available in various grades.',
      origin: 'Iran'
    },
    {
      name: 'Spanish Saffron',
      description: 'Known for its balanced flavor and mild aroma, used widely in Mediterranean cuisine.',
      origin: 'Spain'
    },
    {
      name: 'Organic Certified Saffron',
      description: 'Cultivated without synthetic chemicals or pesticides, certified organic for clean and sustainable sourcing.',
      origin: 'Kashmir, India / Iran'
    }
  ],
  specifications: [
    { name: 'Crocin (Color Strength)', value: '≥ 200 (Grade I, ISO 3632)' },
    { name: 'Picrocrocin (Taste)', value: '≥ 70' },
    { name: 'Safranal (Aroma)', value: '≥ 20' },
    { name: 'Moisture Content', value: '≤ 12%' },
    { name: 'Foreign Matter', value: 'Nil' },
    { name: 'Adulterants', value: 'None' }
  ],
  packaging: [
    { type: 'Glass Jars', sizes: ['1g', '5g', '10g'] },
    { type: 'Metal Tins', sizes: ['5g', '10g', '20g'] },
    { type: 'Vacuum Sealed Pouches', sizes: ['1g', '5g'] },
    { type: 'Custom Retail Packaging', sizes: ['As per requirement'] }
  ],
  certifications: [
    'FSSAI',
    'ISO 3632',
    'HACCP',
    'Organic Certification (for organic batches)',
    'APEDA (for export)',
    'Kosher',
    'Halal'
  ],
  applications: [
    'Culinary flavoring and coloring (rice, desserts, sauces)',
    'Traditional medicine and herbal remedies',
    'Cosmetics and perfumes',
    'Food and beverage industry',
    'Luxury gift packaging'
  ]
    },
    'dried-onion': {
  name: 'Dried Onion',
  description: 'Our premium dried onions are naturally dehydrated to retain flavor and aroma, making them ideal for convenient use in various culinary applications and food processing.',
  category: 'Vegetables (Dehydrated)',
  longDescription: `
    Dried onion is produced by removing moisture from fresh onions through controlled dehydration processes, preserving the characteristic pungent flavor and aroma. This ingredient is widely used in soups, sauces, seasoning blends, ready-to-eat meals, and snacks.

    We source fresh onions from trusted farms across key growing regions in India including Nashik, Pune, and Tamil Nadu. Our dried onions are available in multiple forms such as flakes, powder, and granules, processed under hygienic conditions and quality tested to ensure consistent color, taste, and shelf life.

    Our dried onion offers ease of storage and long shelf stability without compromising on natural flavor, making it an excellent ingredient for food manufacturers and chefs alike.
  `,
  images: [
    'https://5.imimg.com/data5/SELLER/Default/2023/3/AB/CD/EF/12345678/dried-onion-flakes.jpeg',
    'https://cdn.pixabay.com/photo/2017/09/22/20/30/onion-2779690_1280.jpg',
    'https://shorturl.at/xyz12?auto=compress&cs=tinysrgb&w=800',
    'https://shorturl.at/abzR5?auto=compress&cs=tinysrgb&w=800'
  ],
  varieties: [
    {
      name: 'Dried Onion Flakes',
      description: 'Large pieces of dehydrated onion, perfect for soups, stews, and seasoning blends.',
      origin: 'Nashik, Maharashtra, India'
    },
    {
      name: 'Dried Onion Powder',
      description: 'Finely ground powder form, ideal for spice mixes, sauces, and marinades.',
      origin: 'Tamil Nadu, India'
    },
    {
      name: 'Granulated Dried Onion',
      description: 'Medium granule size, versatile for both industrial and household use.',
      origin: 'Pune, Maharashtra, India'
    },
    {
      name: 'Organic Dried Onion',
      description: 'Certified organic, cultivated without synthetic pesticides or fertilizers.',
      origin: 'Selected organic farms in India'
    }
  ],
  specifications: [
    { name: 'Moisture Content', value: '≤ 10%' },
    { name: 'Total Ash', value: '≤ 7%' },
    { name: 'Volatile Oil Content', value: '≥ 0.25%' },
    { name: 'Foreign Matter', value: 'Nil' },
    { name: 'Color', value: 'Natural off-white to light brown' },
    { name: 'Particle Size', value: 'Varies by form (flakes, granules, powder)' }
  ],
  packaging: [
    { type: 'Polyethylene Bags', sizes: ['10kg', '25kg', '50kg'] },
    { type: 'Vacuum Sealed Packs', sizes: ['500g', '1kg', '5kg'] },
    { type: 'HDPE Bags', sizes: ['25kg', '50kg'] },
    { type: 'Custom Packaging', sizes: ['As per requirement'] }
  ],
  certifications: [
    'FSSAI',
    'ISO 22000',
    'HACCP',
    'Organic Certification (for organic variants)',
    'APEDA (for export)'
  ],
  applications: [
    'Food seasoning and flavoring',
    'Soups, sauces, and gravies',
    'Ready-to-eat meals',
    'Snack seasoning',
    'Meat and poultry processing',
    'Spice blends and mixes'
  ]
    },
    'sea-foods': {
  name: 'Sea Foods',
  description: 'Our premium seafood collection includes a wide variety of fresh, frozen, and processed fish, shellfish, and other marine products, sourced sustainably from the world’s top fishing regions.',
  category: 'Seafood & Marine Products',
  longDescription: `
    Seafood encompasses a diverse range of edible marine animals including fish, crustaceans, mollusks, and other aquatic organisms. Rich in protein, omega-3 fatty acids, vitamins, and minerals, seafood is a staple in global cuisines and an essential part of a healthy diet.

    We source our seafood from sustainable fisheries and aquaculture farms across regions such as the Indian Ocean, Arabian Sea, Pacific Ocean, and Atlantic coasts. Our products undergo strict quality controls, including freshness testing, grading, and hygienic processing, to meet international food safety standards.

    Available in fresh, frozen, chilled, dried, and processed forms, our seafood is suitable for retail, food service, and industrial applications.
  `,
  images: [
    'https://cdn.pixabay.com/photo/2018/06/04/15/34/fish-3456249_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/01/20/00/30/shrimp-1993293_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/01/06/17/38/seafood-3062863_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/05/02/15/14/salmon-4171419_1280.jpg'
  ],
  varieties: [
    {
      name: 'White Fish',
      description: 'Lean fish with mild flavor and white flesh, ideal for frying, grilling, and baking.',
      examples: ['Cod', 'Haddock', 'Pollock', 'Whiting'],
      origin: 'Atlantic and Pacific Oceans, Indian Ocean'
    },
    {
      name: 'Oily Fish',
      description: 'Rich in omega-3 fatty acids, oily fish have stronger flavor and are highly nutritious.',
      examples: ['Salmon', 'Mackerel', 'Sardines', 'Tuna', 'Anchovies'],
      origin: 'Global coastal waters'
    },
    {
      name: 'Shellfish - Crustaceans',
      description: 'Includes aquatic animals with exoskeletons, prized for their delicate flavor and texture.',
      examples: ['Shrimp', 'Prawns', 'Crabs', 'Lobsters', 'Crawfish'],
      origin: 'Coastal and estuarine waters worldwide'
    },
    {
      name: 'Shellfish - Mollusks',
      description: 'Soft-bodied sea animals, often with shells, popular in diverse cuisines.',
      examples: ['Oysters', 'Clams', 'Mussels', 'Scallops', 'Squid', 'Octopus'],
      origin: 'Marine and brackish waters globally'
    },
    {
      name: 'Cephalopods',
      description: 'Highly intelligent mollusks with tentacles, used in culinary dishes worldwide.',
      examples: ['Squid', 'Octopus', 'Cuttlefish'],
      origin: 'Coastal waters worldwide'
    },
    {
      name: 'Flatfish',
      description: 'Bottom-dwelling fish with flattened bodies, known for tender flesh.',
      examples: ['Sole', 'Flounder', 'Halibut'],
      origin: 'Cold and temperate seas'
    },
    {
      name: 'Other Seafood',
      description: 'Includes less common varieties and specialty items.',
      examples: ['Eels', 'Sea Cucumbers', 'Abalone', 'Sea Urchins'],
      origin: 'Various marine habitats'
    }
  ],
  specifications: [
    { name: 'Freshness', value: 'Maintained by rapid chilling or freezing within hours of catch' },
    { name: 'Moisture Content', value: 'Varies by species and processing method' },
    { name: 'Size/Weight', value: 'Graded by species and product type' },
    { name: 'Bacterial Count', value: 'Meets international seafood safety standards' },
    { name: 'Heavy Metals', value: 'Within permissible limits as per FDA/WHO' },
    { name: 'Packaging Integrity', value: 'Vacuum-sealed or frozen packs to preserve quality' }
  ],
  packaging: [
    { type: 'Vacuum Packed', sizes: ['500g', '1kg', '5kg', '10kg'] },
    { type: 'Frozen Blocks', sizes: ['5kg', '10kg', '20kg'] },
    { type: 'Fresh Fish in Ice', sizes: ['Whole or filleted, bulk packing'] },
    { type: 'Canned Seafood', sizes: ['100g', '200g', '400g'] },
    { type: 'Custom Packaging', sizes: ['As per buyer requirement'] }
  ],
  certifications: [
    'FSSAI',
    'FDA Approved',
    'MSC (Marine Stewardship Council) Certified',
    'ISO 22000',
    'HACCP',
    'BRC',
    'EU Seafood Hygiene Regulation Compliant',
    'Sustainable Seafood Certifications'
  ],
  applications: [
    'Fresh and frozen seafood retail',
    'Foodservice (restaurants, hotels, catering)',
    'Processed seafood products (ready-to-eat, smoked, canned)',
    'Frozen meals and convenience food',
    'Nutraceuticals and omega-3 supplements',
    'Export markets worldwide'
  ]
},
  }  

};

const ProductDetailPage: React.FC = () => {
  const { category, subcategory } = useParams<{ category: string; subcategory: string }>();
  const [activeImage, setActiveImage] = useState(0);
  
  if (!category || !subcategory || !productData[category] || !productData[category][subcategory]) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
            <p className="mb-8">Sorry, the product you're looking for doesn't exist.</p>
            <Link to="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  const product = productData[category][subcategory];
  
  return (
    <>
      <div className="min-h-screen pt-24 pb-16">
        <div className="container-custom">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center py-4 text-sm">
            <Link to="/products" className="text-neutral-500 hover:text-primary-600">
              Products
            </Link>
            <span className="mx-2 text-neutral-400">/</span>
            <Link to={`/products/${category}`} className="text-neutral-500 hover:text-primary-600">
              {product.category}
            </Link>
            <span className="mx-2 text-neutral-400">/</span>
            <span className="text-primary-600 font-medium">{product.name}</span>
          </div>
          
          {/* Product Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <div>
              <div className="relative h-96 mb-4 rounded-lg overflow-hidden">
                <img 
                  src={product.images[activeImage]} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <div 
                    key={index}
                    className={`h-24 rounded-lg overflow-hidden cursor-pointer border-2 ${
                      activeImage === index ? 'border-primary-500' : 'border-transparent'
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <span className="bg-secondary-100 text-secondary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {product.category}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
                <p className="text-lg text-neutral-600 mb-6">{product.description}</p>
                
                <div className="flex flex-col space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
                    <span>Premium quality sourced from specialized growing regions</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
                    <span>Multiple varieties available to meet different requirements</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
                    <span>Comprehensive quality testing and certifications</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
                    <span>Flexible packaging options for different market needs</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                  <a 
                    href="#inquiry-form" 
                    className="btn-primary inline-flex items-center justify-center"
                  >
                    Request a Quote
                  </a>
                  <a 
                    href="#product-details" 
                    className="btn-outline inline-flex items-center justify-center"
                  >
                    Product Specifications
                  </a>
                </div>
                
                <div className="flex items-center space-x-6">
                  <button className="inline-flex items-center text-primary-600 hover:text-primary-700">
                    <Download className="h-5 w-5 mr-2" />
                    Download Brochure
                  </button>
                  
                  <a 
                    href="https://wa.me/919876543210?text=Hello%20Triloki%20Global!%20I'm%20interested%20in%20your%20{product.name}.%20Can%20you%20provide%20more%20information?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#25D366] hover:text-[#128C7E]"
                  >
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Inquire via WhatsApp
                  </a>
                </div>
              </div>
              
              <div className="p-4 border border-neutral-200 rounded-lg bg-neutral-50">
                <h3 className="font-semibold mb-2">Export Information</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-1/2 text-neutral-600">Minimum Order Quantity:</div>
                    <div className="w-1/2 font-medium">500 kg</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1/2 text-neutral-600">Shipment Terms:</div>
                    <div className="w-1/2 font-medium">FOB, CIF, CFR</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1/2 text-neutral-600">Lead Time:</div>
                    <div className="w-1/2 font-medium">10-15 days after order confirmation</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1/2 text-neutral-600">Payment Terms:</div>
                    <div className="w-1/2 font-medium">L/C, T/T, Western Union, PayPal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Details */}
          <div id="product-details" className="mb-16">
            <div className="border-b border-neutral-200 mb-8">
              <h2 className="text-2xl font-bold pb-4">Product Details</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="prose max-w-none">
                  <p className="whitespace-pre-line">{product.longDescription}</p>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Available Varieties</h3>
                  <div className="space-y-4">
                    {product.varieties.map((variety, index) => (
                      <div key={index} className="bg-white p-4 border border-neutral-200 rounded-lg">
                        <h4 className="font-semibold mb-1">{variety.name}</h4>
                        <p className="text-neutral-600 mb-2">{variety.description}</p>
                        <div className="flex items-center text-sm">
                          <Globe className="h-4 w-4 mr-1 text-primary-600" />
                          <span>Origin: {variety.origin}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Applications</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.applications.map((application, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
                        <span>{application}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="bg-white p-6 border border-neutral-200 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                  <div className="space-y-3">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="flex items-center justify-between border-b border-neutral-100 pb-2 last:border-b-0 last:pb-0">
                        <span className="text-neutral-600">{spec.name}</span>
                        <span className="font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white p-6 border border-neutral-200 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">Packaging Options</h3>
                  <div className="space-y-3">
                    {product.packaging.map((pack, index) => (
                      <div key={index} className="flex items-center justify-between border-b border-neutral-100 pb-2 last:border-b-0 last:pb-0">
                        <span className="text-neutral-600">{pack.type}</span>
                        <span className="font-medium">{pack.sizes.join(', ')}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white p-6 border border-neutral-200 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center bg-neutral-100 px-3 py-1.5 rounded-full">
                        <Award className="h-4 w-4 text-primary-600 mr-1.5" />
                        <span className="text-sm font-medium">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Benefits */}
          <div className="mb-16">
            <div className="border-b border-neutral-200 mb-8">
              <h2 className="text-2xl font-bold pb-4">Benefits of Choosing Triloki Global</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 border border-neutral-200 rounded-lg shadow-sm">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-neutral-600">
                  Our {product.name.toLowerCase()} undergoes rigorous quality testing and sorting to ensure only the finest 
                  products reach our customers. Each batch is tested for purity and adherence to international standards.
                </p>
              </div>
              
              <div className="bg-white p-6 border border-neutral-200 rounded-lg shadow-sm">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Reliable Shipping</h3>
                <p className="text-neutral-600">
                  We handle all export documentation and logistics, ensuring smooth customs clearance and on-time delivery. 
                  Our experienced team manages the entire process, providing real-time updates on your shipment.
                </p>
              </div>
              
              <div className="bg-white p-6 border border-neutral-200 rounded-lg shadow-sm">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Expertise</h3>
                <p className="text-neutral-600">
                  With exports to over 40 countries, we understand international market requirements and regulations. 
                  Our team provides personalized support to ensure your specific needs are met with every order.
                </p>
              </div>
            </div>
          </div>
          
          {/* Inquiry Form */}
          <div id="inquiry-form" className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-4">Request a Quote</h2>
              <p className="text-neutral-600 mb-6">
                Fill out the form to receive detailed information about our {product.name}, including pricing, 
                available varieties, packaging options, and shipping details.
              </p>
              
              <div className="bg-neutral-100 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Why Choose Our {product.name}?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
                    <span>Sourced directly from specialized growing regions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
                    <span>Stringent quality control and testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
                    <span>International certifications ensuring compliance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
                    <span>Customizable packaging solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
                    <span>Complete export documentation and support</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <ProductInquiryForm productName={product.name} />
            </div>
          </div>
          
          {/* Related Products */}
          <div>
            <div className="border-b border-neutral-200 mb-8">
              <h2 className="text-2xl font-bold pb-4">Related Products</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(productData[category])
                .filter(([key]) => key !== subcategory)
                .slice(0, 2)
                .map(([key, relatedProduct]) => (
                  <div key={key} className="product-item card overflow-hidden group">
                    <div className="relative overflow-hidden h-64">
                      <img 
                        src={relatedProduct.images[0]} 
                        alt={relatedProduct.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end product-overlay">
                        <div className="p-4 w-full">
                          <Link to={`/products/${category}/${key}`} className="btn-primary w-full">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">{relatedProduct.name}</h3>
                        <span className="bg-secondary-100 text-secondary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {relatedProduct.category}
                        </span>
                      </div>
                      <p className="text-neutral-600 mb-4">{relatedProduct.description}</p>
                      <Link 
                        to={`/products/${category}/${key}`} 
                        className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                      >
                        View Details
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              
              {/* View All Products */}
              <div className="flex items-center justify-center border-2 border-dashed border-neutral-300 rounded-lg p-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3">Explore More Products</h3>
                  <p className="text-neutral-600 mb-4">
                    Discover our complete range of premium {product.category.toLowerCase()}.
                  </p>
                  <Link to={`/products/${category}`} className="btn-primary">
                    View All {product.category}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <WhatsAppButton />
    </>
  );
};

export default ProductDetailPage;