'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { typography } from '@/lib/styles';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  DocumentChartBarIcon, 
  CogIcon,
  LightBulbIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

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

export default function Consultancy() {
  const services = [
    {
      icon: <ChartBarIcon className="h-12 w-12 text-easi-orange" />,
      title: 'Statistical Analysis',
      description: 'Comprehensive data analysis services using advanced statistical methods and techniques.',
      features: ['Descriptive and Inferential Statistics', 'Multivariate Analysis', 'Time Series Analysis', 'Predictive Modeling']
    },
    {
      icon: <DocumentChartBarIcon className="h-12 w-12 text-easi-orange" />,
      title: 'Survey Design',
      description: 'Professional survey design and implementation services for data collection projects.',
      features: ['Questionnaire Development', 'Sampling Strategy', 'Data Collection Planning', 'Quality Assurance']
    },
    {
      icon: <CogIcon className="h-12 w-12 text-easi-orange" />,
      title: 'Data Management',
      description: 'Complete data management solutions from collection to analysis and reporting.',
      features: ['Database Design', 'Data Cleaning', 'Data Integration', 'Reporting Systems']
    },
    {
      icon: <LightBulbIcon className="h-12 w-12 text-easi-orange" />,
      title: 'Strategic Advisory',
      description: 'Strategic consulting on statistical capacity building and institutional development.',
      features: ['Capacity Assessment', 'Strategic Planning', 'Policy Development', 'Implementation Support']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Initial consultation to understand your needs and objectives'
    },
    {
      step: '02',
      title: 'Proposal',
      description: 'Detailed proposal with scope, timeline, and methodology'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Professional execution of the agreed-upon services'
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Final deliverables with comprehensive documentation'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/consultancy.jpg"
            alt="Consultancy services" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 h-full flex items-end justify-center pb-16">
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
              Consultancy Services
            </motion.h1>
            <motion.p 
              className="text-xl mb-10 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Expert statistical consulting services to help organizations make data-driven decisions 
              and build robust statistical capabilities across East Africa.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button
                size="lg"
                asChild
                className="bg-easi-orange/20 border-2 border-easi-orange text-easi-orange hover:bg-easi-orange/30 hover:border-easi-orange-hover px-8 py-3 text-lg"
              >
                <Link href="/contact">
                  Request Consultation
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              className={`${typography.h2} mb-6 text-easi-orange`}
              variants={fadeInUp}
            >
              Our Consulting Services
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              We offer comprehensive statistical consulting services tailored to meet the unique needs 
              of organizations across various sectors.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="mr-4">
                        {service.icon}
                      </div>
                      <h3 className={`${typography.h3} text-easi-orange`}>
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircleIcon className="h-4 w-4 text-easi-orange flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-easi-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              className={`${typography.h2} mb-6 text-white`}
              variants={fadeInUp}
            >
              Our Process
            </motion.h2>
            <motion.p 
              className="text-gray-300 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              We follow a structured approach to ensure successful delivery of our consulting services.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full">
                    <ArrowRightIcon className="h-6 w-6 text-easi-orange mx-auto" />
                  </div>
                )}
                <div className="w-24 h-24 bg-easi-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className={`${typography.h4} mb-4 text-white`}>{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-24 bg-easi-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Image
                src="/images/team-meeting.jpg"
                alt="Consulting team meeting"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                className={`${typography.h2} mb-8 text-white`}
                variants={fadeInUp}
              >
                Sectors We Serve
              </motion.h2>
              <motion.div variants={fadeInUp} className="space-y-4">
                {[
                  'Government Statistical Offices',
                  'International Development Organizations',
                  'Research Institutions',
                  'Private Sector Companies',
                  'Non-Governmental Organizations',
                  'Academic Institutions',
                  'Healthcare Organizations',
                  'Financial Institutions'
                ].map((sector, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-easi-orange flex-shrink-0" />
                    <span className="text-gray-300">{sector}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 
              className={`${typography.h2} mb-6 text-easi-orange`}
              variants={fadeInUp}
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p 
              className="text-xl mb-10 max-w-2xl mx-auto text-gray-600"
              variants={fadeInUp}
            >
              Let's discuss how our statistical consulting services can help your organization 
              achieve its data and research objectives.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                asChild
                className="bg-easi-orange/20 border-2 border-easi-orange text-easi-orange hover:bg-easi-orange/30 hover:border-easi-orange-hover px-8 py-3 text-lg"
              >
                <Link href="/contact">
                  Get Started
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-easi-orange text-easi-orange hover:bg-easi-orange/20 hover:border-easi-orange-hover px-8 py-3 text-lg bg-easi-orange/10"
              >
                <Link href="/about">
                  Learn More About Us
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
