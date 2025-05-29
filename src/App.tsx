import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductCategoryPage from './pages/ProductCategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import ExportProcessPage from './pages/ExportProcessPage';
import TurmericFingerPage from './pages/products/spices/TurmericFingerPage';
import AIChat from './components/features/AIChat';
import { MessageCircle } from 'lucide-react';

function App() {
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:category" element={<ProductCategoryPage />} />
          <Route path="/products/:category/:subcategory" element={<ProductDetailPage />} />
          <Route path="/products/spices/turmeric/finger" element={<TurmericFingerPage />} />
          <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/export-process" element={<ExportProcessPage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />

      {/* AI Chat Button */}
      <button
        onClick={() => setIsAIChatOpen(true)}
        className="fixed right-6 bottom-6 z-50 bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-primary-700 transition-colors"
      >
        <MessageCircle className="w-8 h-8" />
      </button>

      {/* AI Chat Modal */}
      {isAIChatOpen && <AIChat onClose={() => setIsAIChatOpen(false)} />}
    </>
  );
}

export default App;