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
    src: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Turmeric Processing',
    category: 'Processing'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Quality Testing Lab',
    category: 'Quality Control'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/8107967/pexels-photo-8107967.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Packaging Unit',
    category: 'Packaging'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    src: 'https://images.pexels.com/photos/2104151/pexels-photo-2104151.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Warehouse Storage',
    category: 'Storage'
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Rice Processing',
    category: 'Processing'
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/144248/healthy-breakfast-organic-seeds-144248.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Seed Selection',
    category: 'Quality Control'
  },
  {
    id: 9,
    src: 'https://images.pexels.com/photos/6157089/pexels-photo-6157089.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Export Packaging',
    category: 'Packaging'
  },
  {
    id: 10,
    src: 'https://images.pexels.com/photos/4198714/pexels-photo-4198714.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Spice Processing',
    category: 'Processing'
  },
  {
    id: 11,
    src: 'https://images.pexels.com/photos/5310055/pexels-photo-5310055.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Quality Testing',
    category: 'Quality Control'
  },
  {
    id: 12,
    src: 'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=800',
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