'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ChartBarIcon, AcademicCapIcon, BeakerIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { typography } from '@/lib/styles';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Statistical Research",
      description: "Research in appropriate statistical and computational methodology to facilitate quality national statistics",
      icon: <ChartBarIcon className="h-12 w-12 text-easi-orange" />,
      link: "/about"
    },
    {
      title: "Training Programs",
      description: "Practical, high-quality training programs delivered by experienced professionals in statistics and data analysis",
      icon: <AcademicCapIcon className="h-12 w-12 text-easi-orange" />,
      link: "/training"
    },
    {
      title: "Consultancy & Research",
      description: "Premier management development and excellence in statistical methodologies, systems and software applications",
      icon: <BeakerIcon className="h-12 w-12 text-easi-orange" />,
      link: "/consultancy"
    },
    {
      title: "Tailored Training",
      description: "Customized training solutions delivered at your premises, focusing on your organization's specific requirements",
      icon: <UserGroupIcon className="h-12 w-12 text-easi-orange" />,
      link: "/training"
    }
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
          <h2 className={`${typography.h2} mb-4`}>Our Services</h2>
          <p className="text-center text-gray-600 mb-0 max-w-2xl mx-auto">
            Empowering East Africa through statistical excellence and innovative research solutions
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-6">
                    <motion.div
                      whileHover={{ 
                        rotate: [0, 5, -5, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      {service.icon}
                    </motion.div>
                  </div>
                  <h3 className={`${typography.h4} mb-3 text-center`}>{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                  <div className="text-center">
                    <Link href={service.link}>
                      <motion.div 
                        className="text-easi-orange hover:text-easi-orange-hover font-medium inline-block"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        Learn More →
                      </motion.div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
