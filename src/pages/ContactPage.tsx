import React from 'react';
import { Mail, Phone, MapPin, Globe, Clock } from 'lucide-react';
import ProductInquiryForm from '../components/features/ProductInquiryForm';
import WhatsAppButton from '../components/features/WhatsAppButton';

const ContactPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative h-64 mb-16">
          <img 
            src="https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
            <div className="container-custom">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
                <p className="text-xl text-neutral-200">
                  Get in touch with our export team for inquiries, quotes, and support.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom">
          {/* Contact Information */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Visit Us</h3>
                  <p className="text-neutral-600">Our Office</p>
                </div>
              </div>
              <p className="text-neutral-700">
                123 Export Plaza, Business District<br />
                New Delhi - 110001<br />
                India
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Call Us</h3>
                  <p className="text-neutral-600">Sales & Support</p>
                </div>
              </div>
              <p className="text-neutral-700">
                Phone: <a href="tel:+919876543210" className="text-primary-600 hover:underline">+91 98765 43210</a><br />
                WhatsApp: <a href="https://wa.me/919876543210" className="text-primary-600 hover:underline">+91 98765 43210</a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email Us</h3>
                  <p className="text-neutral-600">Quick Response</p>
                </div>
              </div>
              <p className="text-neutral-700">
                Sales: <a href="mailto:sales@trilokiglobal.com" className="text-primary-600 hover:underline">sales@trilokiglobal.com</a><br />
                Support: <a href="mailto:support@trilokiglobal.com" className="text-primary-600 hover:underline">support@trilokiglobal.com</a>
              </p>
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ProductInquiryForm productName="General Inquiry" />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-primary-600 mr-3" />
                  <h3 className="text-lg font-semibold">When We're Available</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-200">
                  <p className="text-neutral-600">
                    <Globe className="h-5 w-5 inline-block mr-2 text-primary-600" />
                    Available for international clients across all time zones
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Global Presence</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Processing Units</h4>
                    <p className="text-neutral-600">
                      Gujarat • Rajasthan • Madhya Pradesh • Maharashtra
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Export Markets</h4>
                    <p className="text-neutral-600">
                      USA • Canada • EU • UK • UAE • Australia • Japan • South Korea
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Certifications</h4>
                    <div className="flex space-x-4">
                      <img src="https://placehold.co/80x40/404040/FFFFFF/png?text=APEDA" alt="APEDA" className="h-8" />
                      <img src="https://placehold.co/80x40/404040/FFFFFF/png?text=FSSAI" alt="FSSAI" className="h-8" />
                      <img src="https://placehold.co/80x40/404040/FFFFFF/png?text=Organic" alt="Organic Certified" className="h-8" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">What are your minimum order quantities?</h3>
                <p className="text-neutral-600">
                  MOQs vary by product category. For spices, we typically start at 500kg, while for grains and seeds, 
                  the minimum is usually 1 metric ton. We can discuss specific requirements for your needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Do you provide samples?</h3>
                <p className="text-neutral-600">
                  Yes, we provide samples for quality assessment. A nominal fee applies for shipping and handling, 
                  which is credited toward your first order.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">What are your payment terms?</h3>
                <p className="text-neutral-600">
                  We accept L/C, T/T, Western Union, and PayPal. Payment terms are typically 30% advance and 70% 
                  against shipping documents.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">How long does shipping take?</h3>
                <p className="text-neutral-600">
                  Shipping time varies by destination, typically 2-4 weeks after order confirmation. We provide 
                  real-time tracking for all shipments.
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

export default ContactPage;