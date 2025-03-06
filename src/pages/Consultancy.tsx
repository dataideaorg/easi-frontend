import { Card, CardContent, Button } from '@mui/material';
import { 
  ChartBarIcon, 
  DocumentTextIcon, 
  PresentationChartLineIcon, 
  UserGroupIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';
import consultancyImage from '../assets/images/consultancy.jpg';
import styles from '../utils/styles';
import { motion } from 'framer-motion';

const Consultancy = () => {
  const services = [
    {
      title: "Statistical Analysis & Modeling",
      description: "Expert analysis of complex data sets using advanced statistical techniques to extract meaningful insights and support decision-making.",
      icon: <ChartBarIcon className={`h-12 w-12 text-[${styles.colors.primary}]`} />
    },
    {
      title: "Research Design & Methodology",
      description: "Development of robust research designs and methodologies tailored to your specific research questions and objectives.",
      icon: <BeakerIcon className={`h-12 w-12 text-[${styles.colors.primary}]`} />
    },
    {
      title: "Survey Design & Implementation",
      description: "End-to-end survey solutions, from questionnaire design to sampling strategies, data collection, and analysis.",
      icon: <DocumentTextIcon className={`h-12 w-12 text-[${styles.colors.primary}]`} />
    },
    {
      title: "Data Visualization & Reporting",
      description: "Creation of compelling data visualizations and comprehensive reports that effectively communicate findings to diverse audiences.",
      icon: <PresentationChartLineIcon className={`h-12 w-12 text-[${styles.colors.primary}]`} />
    },
    {
      title: "Capacity Building & Technical Support",
      description: "Customized training and ongoing technical support to enhance your team's statistical and analytical capabilities.",
      icon: <UserGroupIcon className={`h-12 w-12 text-[${styles.colors.primary}]`} />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={consultancyImage} 
            alt="Consultancy" 
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
              Consultancy <span className="text-white">Services</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              EASI provides expert statistical consultancy services to government agencies, 
              research institutions, and private organizations across East Africa.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                variant="contained"
                size="large"
                className={`${styles.buttons.white} ${styles.buttons.large}`}
              >
                Request Consultation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.sections.padding}>
        <div className={styles.sections.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`${styles.typography.h2} mb-4`}>Our Consultancy Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of statistical consultancy services to meet your organization's needs
            </p>
          </motion.div>
          
          <div className={styles.grids.responsive1to2to3}>
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={styles.cards.base}>
                  <CardContent className={styles.cards.content}>
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className={`${styles.typography.h4} mb-2 text-center`}>{service.title}</h3>
                    <p className="text-gray-600 text-center">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`${styles.sections.padding} ${styles.sections.gray}`}>
        <div className={styles.sections.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`${styles.typography.h2} mb-4`}>Our Consultancy Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a structured approach to ensure we deliver high-quality solutions that meet your specific needs
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "We begin with a thorough discussion to understand your needs, objectives, and challenges."
              },
              {
                step: "2",
                title: "Proposal Development",
                description: "Based on your requirements, we develop a detailed proposal outlining methodology, timeline, and deliverables."
              },
              {
                step: "3",
                title: "Project Execution",
                description: "Our team of experts implements the agreed methodology, keeping you informed throughout the process."
              },
              {
                step: "4",
                title: "Results Presentation",
                description: "We present our findings and recommendations in a clear, actionable format tailored to your audience."
              },
              {
                step: "5",
                title: "Follow-up Support",
                description: "We provide ongoing support to help you implement recommendations and address any questions that arise."
              }
            ].map((step, index) => (
              <motion.div 
                key={index} 
                className="flex mb-8 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-[${styles.colors.primary}] text-white flex items-center justify-center font-bold text-xl mr-6`}>
                  {step.step}
                </div>
                <div>
                  <h3 className={`${styles.typography.h4} mb-2`}>{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.sections.dark}>
        <div className={styles.sections.container}>
          <div className="text-center">
            <motion.h2 
              className={`${styles.typography.h2} mb-6 pt-12`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Work With Us?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Contact us today to discuss your statistical consultancy needs and how we can support your organization.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button
                variant="contained"
                size="large"
                className={`${styles.buttons.primary} ${styles.buttons.large}`}
              >
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultancy; 