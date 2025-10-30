'use client';

import Image from 'next/image';
import { typography } from '@/lib/styles';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Partners: React.FC = () => {
  const partners = [
    { name: 'Partner 1', logo: '/images/partners/partner1.png' },
    { name: 'Partner 2', logo: '/images/partners/partner2.png' },
    { name: 'Partner 3', logo: '/images/partners/partner3.png' },
    { name: 'Partner 4', logo: '/images/partners/partner4.png' },
    { name: 'Partner 5', logo: '/images/partners/partner5.png' },
    { name: 'Partner 6', logo: '/images/partners/partner6.png' },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className={`${typography.h2} mb-4`}>Our Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading organizations across East Africa to advance statistical excellence and research capabilities
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={80}
                  className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 object-contain"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-600 mb-8">
            Interested in partnering with us? We&apos;re always looking for new collaborations.
          </p>
          <motion.a
            href="/contact/"
            className="inline-block bg-easi-orange/20 text-easi-orange border border-easi-orange hover:bg-easi-orange/30 px-8 py-3 rounded-md font-medium transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Partner With Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
