import React, { useEffect, useRef, useState } from 'react';
import { Send } from 'lucide-react';

// Replace this URL with your actual Google Apps Script Web App URL
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwPQ4FIu7Pg7LcIzd9Ijc6aJX7oDd-9kJHmmJZfK0bYIBINV9ZAjbjFXHkdXnjnEwpH/exec';

interface FormData {
  name: string;
  email: string;
  company: string;
  inquiry: string;
  message: string;
}

const initialFormData = {
  name: '',
  email: '',
  company: '',
  inquiry: 'general',
  message: ''
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.reveal') || [];
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Create FormData object to send to Google Apps Script
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('company', formData.company);
      formDataToSend.append('inquiry', formData.inquiry);
      formDataToSend.append('message', formData.message);

      // Send data to Google Apps Script
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors' // Required for Google Apps Script
      });

      // Note: With 'no-cors' mode, we can't read the response
      // but the request will still be processed by Google Apps Script
      
      setIsSubmitted(true);
      setFormData(initialFormData);
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Failed to submit form. Please check your internet connection and try again.');
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Partner with ArkRidge Industries
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you need our current HF motor technology or want to discuss future collaboration opportunities, we're here to help engineer your next breakthrough.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start reveal opacity-0">
          <div className="bg-gray-50 rounded-xl p-8 lg:p-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Start a Conversation</h3>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <div className="flex items-center">
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-green-800">Message Received</h3>
                    <p className="mt-2 text-green-700">
                      Thank you for your interest in ArkRidge Industries. Our team will be in contact with you shortly to discuss your requirements.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <p className="text-red-700">{error}</p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all duration-300"
                      style={{ focusRingColor: '#4d5d6d' }}
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all duration-300"
                      style={{ focusRingColor: '#4d5d6d' }}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all duration-300"
                      style={{ focusRingColor: '#4d5d6d' }}
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-1">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all duration-300"
                      style={{ focusRingColor: '#4d5d6d' }}
                    >
                      <option value="general">General Inquiry</option>
                      {/* <option value="spindles">Ark Spindles™ Products</option> */}
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="custom">Custom Development</option>
                      <option value="investment">Investment/Funding</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all duration-300"
                    style={{ focusRingColor: '#4d5d6d' }}
                    placeholder="Tell us about your project, requirements, or how we can help..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 ${
                    isSubmitting
                      ? 'cursor-not-allowed'
                      : 'hover:opacity-90'
                  }`}
                  style={{ 
                    background: isSubmitting ? '#9ca3af' : 'linear-gradient(135deg, #4d5d6d 0%, #000000 100%)'
                  }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
          
          <div>
            <div className="rounded-xl p-8 lg:p-12 text-white mb-8 shadow-2xl" style={{ background: 'linear-gradient(135deg, #4d5d6d 0%, #000000 100%)' }}>
              <h3 className="text-2xl font-semibold mb-6">Connect with ArkRidge</h3>
              
              <div className="space-y-4 mb-8">
                <p className="flex items-start">
                  <span className="font-medium mr-2">Address:</span>
                  <span>Plot 28, Telecom nagar, Gachibowli, Hyderabad</span>
                </p>
                <p className="flex items-start">
                  <span className="font-medium mr-2">Phone:</span>
                  <span>+91 (630) 918-5996</span>
                </p>
                <p className="flex items-start">
                  <span className="font-medium mr-2">Email:</span>
                  <span>info@arkridgeindustries.com</span>
                </p>
                <p className="flex items-start">
                  <span className="font-medium mr-2">Hours:</span>
                  <span>Monday - Saturday: 8:00 AM - 6:00 PM IST</span>
                </p>
              </div>
              
              <div className="border-t border-gray-400 pt-6">
                <h4 className="font-semibold mb-3">Quick Links</h4>
                <div className="space-y-2">
                  <a href="#brands" className="block text-gray-200 hover:text-white transition-colors">
                    {/* → ARK SPINDLES™ */}
                  </a>
                  <a href="#capabilities" className="block text-gray-200 hover:text-white transition-colors">
                    → Engineering Capabilities
                  </a>
                  <a href="#industries" className="block text-gray-200 hover:text-white transition-colors">
                    → Target Industries
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
