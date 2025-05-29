import React, { useState } from 'react';

interface ProductInquiryFormProps {
  productName: string;
  onSubmitSuccess?: () => void;
}

const ProductInquiryForm: React.FC<ProductInquiryFormProps> = ({ 
  productName,
  onSubmitSuccess 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phoneNumber: '',
    quantity: '',
    message: `I'm interested in ${productName}. Please provide more information.`
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate form submission
    setTimeout(() => {
      // In a real app, this would be an API call
      setIsSubmitting(false);
      setIsSuccess(true);
      if (onSubmitSuccess) onSubmitSuccess();
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          country: '',
          phoneNumber: '',
          quantity: '',
          message: `I'm interested in ${productName}. Please provide more information.`
        });
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Request a Quote</h3>
      
      {isSuccess ? (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
          <p className="font-medium">Thank you for your inquiry!</p>
          <p className="text-sm mt-1">Our team will get back to you within 24 hours with pricing and availability information for {productName}.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="form-label">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="form-label">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="you@company.com"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="form-label">Company Name *</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Your Company"
              />
            </div>
            
            <div>
              <label htmlFor="country" className="form-label">Country *</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="">Select Country</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Australia">Australia</option>
                <option value="Japan">Japan</option>
                <option value="China">China</option>
                <option value="UAE">UAE</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="phoneNumber" className="form-label">Phone Number *</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="+1 (234) 567-8901"
              />
            </div>
            
            <div>
              <label htmlFor="quantity" className="form-label">Quantity Required</label>
              <input
                type="text"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="form-input"
                placeholder="e.g., 500 kg, 2 tons"
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="form-label">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="form-input resize-none"
              placeholder="Please include any specific requirements or questions..."
            ></textarea>
          </div>
          
          <div className="flex items-center mb-4">
            <input 
              type="checkbox" 
              id="consent" 
              required 
              className="h-4 w-4 text-primary-600 rounded border-neutral-300 focus:ring-primary-500"
            />
            <label htmlFor="consent" className="ml-2 text-sm text-neutral-700">
              I agree to receive product information and commercial communications from Triloki Global.
            </label>
          </div>
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-4">
              {error}
            </div>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Request Quotation'
            )}
          </button>
          
          <p className="text-xs text-neutral-500 mt-2 text-center">
            We'll get back to you within 24 hours with pricing and availability.
          </p>
        </form>
      )}
    </div>
  );
};

export default ProductInquiryForm;