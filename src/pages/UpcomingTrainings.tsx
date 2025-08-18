import React from 'react';
import { Card, CardContent, Button } from '@mui/material';
import styles from '../utils/styles';
import { motion } from 'framer-motion';
import heroImage from '../assets/images/statistics-hero.jpg';

const upcomingTrainings = [
  {
    title: 'Introduction to AI',
    date: 'Friday, July 18, 2025',
    location: 'Kampala, Uganda',
    description: 'A hands-on introduction to Artificial Intelligence for professionals and students interested in the field.'
  },
  {
    title: 'Data Management with Python',
    date: 'Tuesday, August 29, to Wednesday, August 30, 2025',
    location: 'Online ',
    description: 'Master the art of data management using Python. Ideal for analysts and researchers.'
  },
  {
    title: 'Python for Data Science Bootcamp',
    date: 'To Be Determined',
    location: 'Online',
    description: 'An intensive bootcamp covering Python basics, pandas, and machine learning for aspiring data scientists.'
  },
 
];

const UpcomingTrainings: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Upcoming Trainings" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#dd8604]/90 to-[#333333]/90"></div>
        </div>
        {/* Animated shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/10 blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, 40, 0] }}
            transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#dd8604]/20 blur-3xl"
            animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
            transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          />
        </div>
        <div className={`${styles.sections.container} relative z-10`}>
          <div className="text-center text-white max-w-2xl mx-auto">
            <motion.h1 
              className={`${styles.typography.h1} mb-6`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Upcoming <span className="text-white">Trainings</span>
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Stay ahead with our latest training programs designed to empower professionals and organizations across East Africa.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Trainings Grid */}
      <section className={`${styles.sections.padding} ${styles.sections.gray}`}>
        <div className={styles.sections.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`${styles.typography.h2} mb-4`}>Upcoming Training Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our upcoming events and secure your spot today.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingTrainings.map((training, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={styles.cards.base}>
                  <CardContent className={styles.cards.content}>
                    <h3 className="text-xl font-semibold mb-2 text-[#dd8604]">{training.title}</h3>
                    <div className="text-gray-700 mb-1"><strong>Date:</strong> {training.date}</div>
                    <div className="text-gray-700 mb-1"><strong>Location:</strong> {training.location}</div>
                    <p className="text-gray-600 mt-2 mb-4">{training.description}</p>
                    <Button
                      variant="contained"
                      className={`${styles.buttons.primary} ${styles.buttons.medium}`}
                      href="/#/contact"
                    >
                      Express Interest
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Register */}
      <section className={styles.sections.padding}>
        <div className={styles.sections.container}>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-yellow-50 border-l-4 border-[#dd8604] shadow-md mb-12">
              <CardContent>
                <h2 className="text-2xl font-bold mb-4 text-[#dd8604]">How to Pay</h2>
                <p className="mb-2 text-gray-700">
                  To secure your spot in our training, please deposit the required fee via Mobile Money to:
                </p>
                <div className="flex items-center mb-4">
                  <span className="font-semibold text-lg text-[#dd8604] mr-2">Mobile Number:</span>
                  <span className="font-mono text-lg text-gray-900">+256 749747472</span>
                  <span className="font-semibold text-lg text-[#dd8604] mx-2">Name:</span>
                  <span className="font-mono text-lg text-gray-900">Ronald Wesonga</span>
                </div>
                <div className="flex items-center mb-4">
                  <span className="font-semibold text-lg text-[#dd8604] mr-2">Mobile Number:</span>
                  <span className="font-mono text-lg text-gray-900">+256 791429565</span>
                  <span className="font-semibold text-lg text-[#dd8604] mx-2">Name:</span>
                  <span className="font-mono text-lg text-gray-900">Ronald Wesonga</span>
                </div>
                <p className="mb-2 text-gray-700">
                  After payment, capture the transaction ID fill it in this form <a href='https://forms.gle/7yHWruQ7RFBXANTc9' className="text-[#dd8604] underline">EASI Training Registration Form</a>.
                </p>
                <p className="text-gray-600 text-sm">
                  For any questions, <a href="/#/contact" className="text-[#dd8604] underline">contact us here</a>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpcomingTrainings; 