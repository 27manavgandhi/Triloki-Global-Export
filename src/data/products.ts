import { Product, ProductCategory } from '../types/products';

export const productCategories: ProductCategory[] = [
  {
    id: 'spices',
    name: 'Spices',
    description: 'Premium quality spices sourced directly from specialized growing regions.',
    image: 'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=800',
    subcategories: [
      {
        id: 'green-cardamom',
        name: 'Green Cardamom',
        description: 'Premium quality green cardamom with intense aroma and flavor.',
        image: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'black-cardamom',
        name: 'Black Cardamom',
        description: 'Smoky and robust black cardamom pods.',
        image: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      // ... existing spice subcategories ...
      {
        id: 'dried-garlic',
        name: 'Dried Garlic',
        description: 'Premium quality dried garlic flakes and powder.',
        image: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  },
  {
    id: 'rice',
    name: 'Rice',
    description: 'Premium quality rice varieties from India and international origins.',
    image: 'https://images.pexels.com/photos/1537169/pexels-photo-1537169.jpeg?auto=compress&cs=tinysrgb&w=800',
    subcategories: [
      {
        id: 'indian-basmati',
        name: 'Indian Basmati Rice',
        description: 'Premium Indian basmati rice varieties including traditional, 1509, 1121, and more.',
        varieties: [
          'Traditional Basmati Rice',
          '1509 Steam Rice',
          '1509 Creamy Sella Basmati',
          '1509 Golden Sella Basmati',
          '1401 Pusa Sella Parboiled Basmati Rice',
          '1401 Pusa White Milled Basmati Rice',
          'Brown Basmati Rice',
          '1718 White Sella',
          '1121 Steam Basmati Rice',
          '1121 Creamy Sella Basmati Rice',
          '1718 Steam Rice',
          '1718 Golden Rice'
        ],
        image: 'https://images.pexels.com/photos/1537169/pexels-photo-1537169.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'other-indian-rice',
        name: 'Other Indian Rice',
        description: 'Various premium Indian rice varieties including Sugandha, IR-64, Sharbati, and more.',
        varieties: [
          'Sugandha Rice',
          'IR-64 Parboiled Rice',
          'Sharbati Rice',
          'Sona Masoori Rice',
          '100% Broken Rice',
          'Swarna Rice',
          'PR-11 Parboiled Rice',
          'PR-11 Steam Rice'
        ],
        image: 'https://images.pexels.com/photos/1537169/pexels-photo-1537169.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'pakistani-rice',
        name: 'Pakistani Rice',
        description: 'Premium Pakistani rice varieties including Super Basmati, 1509, 1121, and more.',
        varieties: [
          'Super Basmati White Rice',
          'Super Brown Rice',
          '1509 Sella Rice Pakistan',
          '1121 Steamed Rice Pakistan',
          '1121 Sella Rice Pakistan',
          '1509 Steamed Rice Pakistan',
          'Pakistan 386 Rice',
          'Pakistan IRR16 Rice',
          'Pakistan Supri Sella Rice',
          'Pakistan IRR19 Rice',
          'Super Fine Rice'
        ],
        image: 'https://images.pexels.com/photos/1537169/pexels-photo-1537169.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'international-rice',
        name: 'International Rice',
        description: 'Premium rice varieties from around the world including Spanish, Brazilian, Thai, and more.',
        varieties: [
          'Spanish Bomba Rice',
          'Brazilian White Rice',
          'Brazilian Parboiled Rice',
          'Myanmar Rice Medium Grain (Kaima)',
          'Thai Hom Mali',
          'Vietnamese White Rice',
          'Portuguese Medium Grain',
          'US Calrose Rice',
          'Cammeo Camalino Italian Rice'
        ],
        image: 'https://images.pexels.com/photos/1537169/pexels-photo-1537169.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  },
  {
    id: 'pulses',
    name: 'Pulses',
    description: 'High-quality pulses and legumes sourced from premium growing regions.',
    image: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=800',
    subcategories: [
      {
        id: 'kidney-beans',
        name: 'Kidney Beans',
        varieties: ['Light Speckled Kidney Bean', 'Red Kidney Beans', 'White Kidney Beans'],
        description: 'Premium quality kidney beans in various varieties.',
        image: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      // ... Add all pulse subcategories ...
    ]
  },
  {
    id: 'tea',
    name: 'Tea',
    description: 'Premium quality tea varieties from renowned tea gardens.',
    image: 'https://images.pexels.com/photos/1537169/pexels-photo-1537169.jpeg?auto=compress&cs=tinysrgb&w=800',
    subcategories: [
      {
        id: 'black-tea',
        name: 'Black Tea',
        description: 'Premium black tea varieties including whole leaf, broken leaf, fannings, and dust.',
        varieties: ['Whole Leaf', 'Broken Leaf', 'Fannings', 'Tea Dust'],
        image: 'https://images.pexels.com/photos/1537169/pexels-photo-1537169.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'green-tea',
        name: 'Green Tea',
        description: 'Premium green tea varieties from selected gardens.',
        varieties: ['Premium Green Tea'],
        image: 'https://images.pexels.com/photos/1537169/pexels-photo-1537169.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  },
  {
    id: 'other-products',
    name: 'Other Products',
    description: 'Premium quality oils, seeds, nuts, and other commodities.',
    image: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=800',
    subcategories: [
      {
        id: 'oils',
        name: 'Oils',
        description: 'Premium quality cooking oils.',
        varieties: ['Sunflower Oil', 'Palm Oil', 'Olive Oil', 'Sesame Oil'],
        image: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'seeds-nuts',
        name: 'Seeds & Nuts',
        description: 'Premium quality seeds and nuts.',
        varieties: ['Chia Seeds', 'Sunflower Seeds', 'Cashew Nuts', 'Pistachio'],
        image: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'other-commodities',
        name: 'Other Commodities',
        description: 'Various premium quality commodities.',
        varieties: [
          'Soybean Meal',
          'Raw Sugar',
          'Crystal White',
          'Saffron',
          'Dried Onion',
          'Canned Tuna',
          'Canned Sardines'
        ],
        image: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  }
];