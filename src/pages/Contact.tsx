import React, { useState } from 'react';
import axios from 'axios';
import { 
  TextField, 
  Button, 
  Card, 
  CardContent, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Select, 
  Snackbar, 
  Alert,
  CircularProgress 
} from '@mui/material';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline';
import contactImage from '../assets/images/contact-hero.jpg';
import styles from '../utils/styles';
import { motion } from 'framer-motion';
import { ENDPOINTS } from '../api/endpoints';

const Contact = () => {
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
  
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
  
  const handleSelectChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
        // Send data to Django backend
        const response = await axios.post(`${ENDPOINTS.CONTACT}`, {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || '',
          subject: formData.subject || 'Contact Form Submission',
          message: formData.message,
          organization: formData.organization || '',
          inquiry_type: formData.inquiryType || 'general'
        });

        console.log('Form submission response:', response.data);
        
        // Show success message
        setSnackbar({
          open: true,
          message: 'Your message has been sent successfully! We will get back to you soon.',
          severity: 'success'
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
        console.error('Error submitting form:', error);
        
        // Show error message
        setSnackbar({
          open: true,
          message: 'There was an error sending your message. Please try again later.',
          severity: 'error'
        });
      } finally {
        setLoading(false);
      }
    } else {
      // Show error message
      setSnackbar({
        open: true,
        message: 'Please fill in all required fields correctly.',
        severity: 'error'
      });
    }
  };
  
  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({
      ...prev,
      open: false
    }));
  };

  const contactInfo = [
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      title: "Our Location",
      details: [
        "East African Statistics Institute",
        "Plot 123, Kampala Road",
        "Kampala, Uganda"
      ]
    },
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      title: "Phone Numbers",
      details: [
        "+256 700 123 456",
        "+256 772 987 654",
        "+256 774 128 257"
      ]
    },
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      title: "Email Addresses",
      details: [
        "easiwebsite21@gmail.com",
        "wesonga@wesonga.com",
        "fullerbbosa@gmail.com"
      ]
    },
    {
      icon: <ClockIcon className="h-6 w-6" />,
      title: "Working Hours",
      details: [
        "Monday - Friday: 8:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={contactImage} 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#333333]/90 to-[#dd8604]/80"></div>
        </div>
        
        {/* Animated shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/10 blur-3xl"
            animate={{ 
              x: [0, 30, 0],
              y: [0, 40, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 15,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#dd8604]/20 blur-3xl"
            animate={{ 
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 18,
              ease: "easeInOut" 
            }}
          />
        </div>
        
        <div className={`${styles.sections.container} relative z-10`}>
          <motion.div 
            className="max-w-3xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className={`${styles.typography.h1} mb-6`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Contact <span className="text-white">Us</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Have questions or want to learn more about our services? 
              We're here to help. Reach out to us using the contact information below or fill out the form.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className={styles.sections.padding}>
        <div className={styles.sections.container}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={styles.cards.base}>
                  <CardContent className={styles.cards.content}>
                    <div className={`flex justify-center mb-4 text-[${styles.colors.primary}]`}>
                      {info.icon}
                    </div>
                    <h3 className={`${styles.typography.h4} mb-3 text-center`}>{info.title}</h3>
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
      <section className={`${styles.sections.padding} ${styles.sections.gray}`}>
        <div className={styles.sections.container}>
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
                  <h2 className={`${styles.typography.h3} mb-6`}>Send Us a Message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <TextField
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        fullWidth
                        required
                        error={errors.name}
                        helperText={errors.name ? "Name is required" : ""}
                      />
                      <TextField
                        label="Your Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        required
                        error={errors.email}
                        helperText={errors.email ? "Valid email is required" : ""}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <TextField
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        fullWidth
                      />
                      <TextField
                        label="Organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        fullWidth
                      />
                    </div>
                    
                    <div className="mb-4">
                      <FormControl fullWidth>
                        <InputLabel>Inquiry Type</InputLabel>
                        <Select
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleSelectChange}
                          label="Inquiry Type"
                        >
                          <MenuItem value="general">General Inquiry</MenuItem>
                          <MenuItem value="training">Training Programs</MenuItem>
                          <MenuItem value="consultancy">Consultancy Services</MenuItem>
                          <MenuItem value="partnership">Partnership Opportunities</MenuItem>
                          <MenuItem value="other">Other</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    
                    <div className="mb-4">
                      <TextField
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        fullWidth
                      />
                    </div>
                    
                    <div className="mb-6">
                      <TextField
                        label="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        fullWidth
                        required
                        error={errors.message}
                        helperText={errors.message ? "Message is required" : ""}
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      disabled={loading}
                      sx={{ 
                        py: 1.5,
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          boxShadow: '0 10px 25px rgba(221, 134, 4, 0.4)'
                        },
                        transition: 'all 0.3s'
                      }}
                    >
                      {loading ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        'Send Message'
                      )}
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7573969501847!2d32.57729491475397!3d0.3152119997709283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb8080541c63%3A0x518b37f5b348207!2sKampala%20Rd%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1625764215662!5m2!1sen!2sus" 
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
      <section className={styles.sections.padding}>
        <div className={styles.sections.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`${styles.typography.h2} mb-4`}>Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and programs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How can I register for a training program?",
                answer: "You can register for our training programs by filling out the contact form on this page, specifying the program you're interested in, or by emailing us directly at training@easi.org."
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
                answer: "We welcome partnerships with organizations that share our commitment to advancing statistical excellence in East Africa. Please contact us at info@easi.org to discuss potential collaboration opportunities."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={styles.cards.base}>
                  <CardContent className={styles.cards.content}>
                    <h3 className={`${styles.typography.h4} mb-3`}>{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Snackbar for form submission feedback */}
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact; 