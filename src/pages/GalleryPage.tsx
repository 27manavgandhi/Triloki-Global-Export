import React, { useState } from 'react';
import WhatsAppButton from '../components/features/WhatsAppButton';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://5.imimg.com/data5/SELLER/Default/2024/7/431745160/VH/IT/HH/40841925/nizamabad-double-polish-turmeric-finger.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Turmeric Processing',
    category: 'Processing'
  },
  {
    id: 2,
    src: 'https://mpeda.gov.in/wp-content/uploads/2018/10/f_2648f6a5eddba44dadeeeda53835856b-1024x641.jpg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Quality Testing Lab',
    category: 'Quality Control'
  },
  {
    id: 3,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq4OaCEkn-4K8IYVsHeS-prQfVr3Bm_w5D3w&s?auto=compress&cs=tinysrgb&w=800',
    alt: 'Packaging Unit',
    category: 'Packaging'
  },
  {
    id: 4,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR17fjN6jqYBR5CpQSiaYmZ_V5699E1E8baSQ&s?auto=compress&cs=tinysrgb&w=800',
    alt: 'Laboratory Testing',
    category: 'Quality Control'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Farming Practices',
    category: 'Farming'
  },
  {
    id: 6,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMe69sO0XPeDsK-5IketDRz-cW_q3Uv4yJmQ&s?auto=compress&cs=tinysrgb&w=800',
    alt: 'Warehouse Storage',
    category: 'Storage'
  },
  {
    id: 7,
    src: 'https://agronfoodprocessing.com/wp-content/uploads/2023/11/Export-rice.jpg?auto=compress&cs=tinysrgb&w=800?auto=compress&cs=tinysrgb&w=800',
    alt: 'Rice Processing',
    category: 'Processing'
  },
  {
    id: 8,
    src: 'https://nsai.co.in/storage/app/media/uploaded-files/AATMANIRBHAR_SEEDS11-13-20.jpg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Seed Selection',
    category: 'Quality Control'
  },
  {
    id: 9,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhLxbmdePNRZQym9mEi53MzG74aBsvWgCmeQ&s?auto=compress&cs=tinysrgb&w=800',
    alt: 'Export Packaging',
    category: 'Packaging'
  },
  {
    id: 10,
    src: 'https://jochamp.com/wp-content/uploads/2024/09/Roasting-for-spice-manufacturing.png?auto=compress&cs=tinysrgb&w=800',
    alt: 'Spice Processing',
    category: 'Processing'
  },
  {
    id: 11,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUzpTpeWYhn8f5OOqUFF8JqJFeYyat2mYmHOabhjDZGUYNJxj_yBoO5-_ETFcdWsfQs8I&usqp=CAU?auto=compress&cs=tinysrgb&w=800',
    alt: 'Quality Testing',
    category: 'Quality Control'
  },
  {
    id: 12,
    src: 'https://www.financialexpress.com/wp-content/uploads/2024/02/rice-stock.jpg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Storage Facility',
    category: 'Storage'
  }
];

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories = ['all', ...new Set(galleryImages.map(img => img.category))];

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <>
      <div className="min-h-screen pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative h-64 mb-16">
          <img 
            src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Gallery" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
            <div className="container-custom">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Gallery</h1>
                <p className="text-xl text-neutral-200">
                  Take a visual tour of our facilities, processes, and quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white font-medium">{image.alt}</h3>
                    <p className="text-neutral-200 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-4xl w-full">
                <button
                  className="absolute -top-12 right-0 text-white hover:text-neutral-300"
                  onClick={() => setSelectedImage(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                  </svg>
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 rounded-b-lg">
                  <h3 className="text-lg font-medium">{selectedImage.alt}</h3>
                  <p className="text-sm text-neutral-300">{selectedImage.category}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Certifications Section */}
        <div className="bg-white py-16 mt-16">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-8">Our Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-neutral-50 p-6 rounded-lg">
                <img src="https://placehold.co/120x60/404040/FFFFFF/png?text=APEDA" alt="APEDA" className="h-12 mb-4" />
                <h3 className="text-lg font-semibold mb-2">APEDA Certified</h3>
                <p className="text-neutral-600">
                  Agricultural and Processed Food Products Export Development Authority certification 
                  for export quality standards.
                </p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg">
                <img src="https://placehold.co/120x60/404040/FFFFFF/png?text=FSSAI" alt="FSSAI" className="h-12 mb-4" />
                <h3 className="text-lg font-semibold mb-2">FSSAI Approved</h3>
                <p className="text-neutral-600">
                  Food Safety and Standards Authority of India certification for food safety 
                  and quality standards.
                </p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg">
                <img src="https://placehold.co/120x60/404040/FFFFFF/png?text=Organic" alt="Organic" className="h-12 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Organic Certified</h3>
                <p className="text-neutral-600">
                  International organic certification for products grown without synthetic 
                  pesticides or fertilizers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppButton />
    </>
  );
};

export default GalleryPage;