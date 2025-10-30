import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';

const ContactUs = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data in the required JSON format
      const submissionData = {
        Name: formData.name,
        Email: formData.email,
        Phoneno: formData.phone,
        Message: formData.message
      };

      // Get backend URL from environment variables
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      
      console.log('Backend URL:', backendUrl);
      console.log('Submission data:', submissionData);
      
      if (!backendUrl) {
        throw new Error('Backend URL not configured. Please set REACT_APP_BACKEND_URL in your .env file');
      }

      // Send data to backend with no-cors mode
      const response = await fetch(backendUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      // With no-cors mode, we can't read the response
      // But we assume it was successful if no error was thrown
      console.log('Form submitted with no-cors mode');

      toast({
        title: 'Message Sent Successfully!',
        description: 'Thank you for contacting us. We will get back to you soon.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Show detailed error message
      const errorMessage = error.message || 'Unknown error occurred';
      
      toast({
        title: 'Error',
        description: `Failed to send message: ${errorMessage}. Please try again or contact us directly.`,
        variant: 'destructive'
      });
      
      // Log the error for debugging
      console.error('Full error details:', {
        error: error,
        message: error.message,
        stack: error.stack,
        backendUrl: process.env.REACT_APP_BACKEND_URL
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact <span className="text-orange-600">Us</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get in touch with us for appointments, inquiries, or any dental concerns
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get In <span className="text-orange-600">Touch</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-md border border-orange-100">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Flat no-503, 5th floor, MVS Heights,<br />
                      Vinayaka Nagar, Khanamet, Madhapur,<br />
                      Hyderabad-500081, Telangana
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-md border border-orange-100">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                    <div className="space-y-1">
                      <a href="tel:9866937777" className="block text-orange-600 hover:underline">9866937777</a>
                      <a href="tel:9032018887" className="block text-orange-600 hover:underline">9032018887</a>
                      <a href="tel:9347294612" className="block text-orange-600 hover:underline">9347294612</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-md border border-orange-100">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                    <a href="mailto:aurobindodental@gmail.com" className="text-orange-600 hover:underline">
                      aurobindodental@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-md border border-orange-100">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Working Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Sunday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send Us a <span className="text-orange-600">Message</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your dental concerns or questions"
                    required
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Visit Our <span className="text-orange-600">Clinic</span>
          </h2>
          
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2145859847977!2d78.39050931487626!3d17.446866488049713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sMadhapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aurobindo Dental Hospital Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;