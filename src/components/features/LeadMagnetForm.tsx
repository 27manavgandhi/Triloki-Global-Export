import React, { useState } from 'react';
import { Download, Calendar } from 'lucide-react';

const LeadMagnetForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [option, setOption] = useState('download');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - this would connect to an API in production
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setEmail('');
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      {isSuccess ? (
        <div className="text-center">
          <div className="bg-primary-100 text-primary-700 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          {option === 'download' ? (
            <>
              <p className="text-neutral-600 mb-4">Your product brochure is ready for download.</p>
              <a 
                href="#" 
                className="btn-primary inline-flex items-center"
                onClick={(e) => e.preventDefault()}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </a>
            </>
          ) : (
            <>
              <p className="text-neutral-600 mb-4">We'll be in touch soon to schedule your consultation.</p>
              <button className="btn-primary inline-flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Add to Calendar
              </button>
            </>
          )}
        </div>
      ) : (
        <>
          <h3 className="text-2xl font-bold mb-2">Ready to Export Premium Quality</h3>
          <p className="text-neutral-600 mb-6">Get our detailed product catalog and export guide to kickstart your international business.</p>
          
          <div className="flex mb-6">
            <button
              type="button"
              className={`flex-1 text-center py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
                option === 'download' 
                  ? 'border-primary-600 text-primary-600' 
                  : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
              }`}
              onClick={() => setOption('download')}
            >
              <Download className="w-5 h-5 mx-auto mb-1" />
              Download Brochure
            </button>
            <button
              type="button"
              className={`flex-1 text-center py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
                option === 'call' 
                  ? 'border-primary-600 text-primary-600' 
                  : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
              }`}
              onClick={() => setOption('call')}
            >
              <Calendar className="w-5 h-5 mx-auto mb-1" />
              Schedule a Call
            </button>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">Email Address *</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-input"
                placeholder="you@company.com"
              />
            </div>
            
            {option === 'call' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    required={option === 'call'}
                    className="form-input"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    required={option === 'call'}
                    className="form-input"
                    placeholder="+1 (234) 567-8901"
                  />
                </div>
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
                option === 'download' ? 'Get Free Brochure' : 'Schedule Consultation'
              )}
            </button>
            
            <p className="text-xs text-neutral-500 mt-2 text-center">
              Your information is secure and will not be shared with third parties.
            </p>
          </form>
        </>
      )}
    </div>
  );
};

export default LeadMagnetForm;