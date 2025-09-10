'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { typography } from '@/lib/styles';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    organization: '',
    inquiryType: ''
  });
  
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });
  
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    show: boolean;
    message: string;
    type: 'success' | 'error';
  }>({ show: false, message: '', type: 'success' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (name in errors) {
      setErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {
      name: formData.name.trim() === '',
      email: !/^\S+@\S+\.\S+$/.test(formData.email),
      message: formData.message.trim() === ''
    };
    
    setErrors(newErrors);
    
    // If no errors, submit form
    if (!Object.values(newErrors).some(error => error)) {
      setLoading(true);
      
      try {
        // Simulate form submission (replace with actual API call)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setSubmitStatus({
          show: true,
          message: 'Your message has been sent successfully! We will get back to you soon.',
          type: 'success'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          organization: '',
          inquiryType: ''
        });
      } catch (error) {
        setSubmitStatus({
          show: true,
          message: 'There was an error sending your message. Please try again later.',
          type: 'error'
        });
      } finally {
        setLoading(false);
      }
    } else {
      setSubmitStatus({
        show: true,
        message: 'Please fill in all required fields correctly.',
        type: 'error'
      });
    }
  };

  const contactInfo = [
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      title: "Our Location",
      details: [
        "Plot 15 Baskerville Avenue, Kololo",
        "P.O. Box 11140",
        "Kampala, Uganda"
      ]
    },
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      title: "Phone Numbers",
      details: [
        "+256 774 128 257",
        "+256 700 123 456",
        "+256 772 987 654",
      ]
    },
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      title: "Email Addresses",
      details: [
        "info@easi.ac.ug",
        "wesonga@wesonga.com",
        "fullerbbosa@gmail.com"
      ]
    },
    {
      icon: <ClockIcon className="h-6 w-6" />,
      title: "Working Hours",
      details: [
        "Mon - Fri: 8:00 AM - 5:00 PM",
        "Sat: 9:00 AM - 1:00 PM",
        "Sun: Closed"
      ]
    }
  ];

  const faqs = [
    {
      question: "How can I register for a training program?",
      answer: "You can register for our training programs by filling out the contact form on this page, specifying the program you're interested in, or by emailing us directly at info@easi.ac.ug."
    },
    {
      question: "Do you offer customized training for organizations?",
      answer: "Yes, we offer customized training programs tailored to the specific needs of your organization. Contact us to discuss your requirements and we'll design a program that meets your objectives."
    },
    {
      question: "What areas do your consultancy services cover?",
      answer: "Our consultancy services cover a wide range of statistical areas including research design, data analysis, survey methodology, monitoring and evaluation, and statistical capacity building."
    },
    {
      question: "How can I partner with EASI?",
      answer: "We welcome partnerships with organizations that share our commitment to advancing statistical excellence in East Africa. Please contact us at info@easi.ac.ug to discuss potential collaboration opportunities."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/contact-hero.jpg"
            alt="Contact us" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center text-white"
          >
            <motion.h1 
              className={`${typography.h1} mb-8`}
              variants={fadeInUp}
            >
              Contact <span className="text-white">Us</span>
            </motion.h1>
            <motion.p 
              className="text-xl mb-10 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Have questions or want to learn more about our services? 
              We're here to help. Reach out to us using the contact information below or fill out the form.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4 text-easi-orange">
                      {info.icon}
                    </div>
                    <h3 className={`${typography.h4} mb-3 text-center`}>{info.title}</h3>
                    <div className="text-center">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 mb-1">{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h2 className={`${typography.h3} mb-6`}>Send Us a Message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-easi-orange focus:border-transparent ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                          }`}
                          required
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-easi-orange focus:border-transparent ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                          required
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">Valid email is required</p>}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-easi-orange focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                          Organization
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-easi-orange focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                        Inquiry Type
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-easi-orange focus:border-transparent"
                      >
                        <option value="">Select inquiry type</option>
                        <option value="general">General Inquiry</option>
                        <option value="training">Training Programs</option>
                        <option value="consultancy">Consultancy Services</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-easi-orange focus:border-transparent"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-easi-orange focus:border-transparent ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                        required
                      ></textarea>
                      {errors.message && <p className="text-red-500 text-sm mt-1">Message is required</p>}
                    </div>
                    
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-easi-orange/80 hover:bg-easi-orange/90"
                      disabled={loading}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg h-full">
                <CardContent className="p-0 h-full">
                  <div className="h-full min-h-[400px] w-full">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7512501188808!2d32.59823291070469!3d0.33222059966312184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbbbe17c0c8ef%3A0x569e2dd06779b13e!2s15a%20Baskerville%20Ave%2C%20Kampala!5e0!3m2!1sen!2sug!4v1753125417714!5m2!1sen!2sug"
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy"
                      title="EASI Location"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`${typography.h2} mb-4`}>Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and programs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className={`${typography.h4} mb-3`}>{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success/Error Message */}
      {submitStatus.show && (
        <div className="fixed bottom-4 right-4 z-50">
          <Card className={`p-4 ${
            submitStatus.type === 'success' 
              ? 'bg-green-50 border-green-200' 
              : 'bg-red-50 border-red-200'
          }`}>
            <CardContent className="p-0">
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${
                  submitStatus.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                }`}></div>
                <p className={`text-sm ${
                  submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'
                }`}>
                  {submitStatus.message}
                </p>
                <button
                  onClick={() => setSubmitStatus(prev => ({ ...prev, show: false }))}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}