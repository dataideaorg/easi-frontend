'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { typography } from '@/lib/styles';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  ClockIcon, 
  UserGroupIcon,
  CheckCircleIcon
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

export default function Training() {
  const trainingPrograms = [
    {
      title: 'Statistical Methods and Data Analysis',
      duration: '5 days',
      participants: '25 max',
      description: 'Comprehensive training in statistical methods, data collection, analysis, and interpretation.',
      topics: ['Descriptive Statistics', 'Inferential Statistics', 'Regression Analysis', 'Data Visualization'],
      level: 'Intermediate',
      image: '/images/training-session.jpg'
    },
    {
      title: 'Survey Design and Implementation',
      duration: '3 days',
      participants: '20 max',
      description: 'Learn to design, implement, and manage statistical surveys for data collection.',
      topics: ['Survey Methodology', 'Sampling Techniques', 'Questionnaire Design', 'Data Quality'],
      level: 'Advanced',
      image: '/images/team-meeting.jpg'
    },
    {
      title: 'Statistical Software Training',
      duration: '4 days',
      participants: '30 max',
      description: 'Hands-on training in statistical software packages including R, SPSS, and Stata.',
      topics: ['R Programming', 'SPSS Analysis', 'Stata Operations', 'Data Management'],
      level: 'Beginner to Advanced',
      image: '/images/consultancy.jpg'
    }
  ];

  const benefits = [
    'Expert instruction from experienced statisticians',
    'Hands-on practical exercises and case studies',
    'Certificate of completion',
    'Networking opportunities with peers',
    'Access to training materials and resources',
    'Follow-up support and consultation'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/training-session.jpg"
            alt="Training session" 
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
              Training Programs
            </motion.h1>
            <motion.p 
              className="text-xl mb-10 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Build your statistical expertise with our comprehensive training programs designed 
              for professionals, researchers, and organizations across East Africa.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button
                size="lg"
                asChild
                className="bg-easi-orange hover:bg-easi-orange-hover px-8 py-3 text-lg"
              >
                <Link href="/contact">
                  Enroll Now
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Training Programs */}
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
              className={`${typography.h2} mb-6`}
              variants={fadeInUp}
            >
              Our Training Programs
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Choose from our range of specialized training programs designed to meet different skill levels and professional needs.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 relative">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 right-4 bg-easi-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                      {program.level}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className={`${typography.h4} mb-4 text-easi-orange`}>
                      {program.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {program.description}
                    </p>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <ClockIcon className="h-4 w-4" />
                        {program.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <UserGroupIcon className="h-4 w-4" />
                        {program.participants}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Key Topics:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {program.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center gap-2">
                            <CheckCircleIcon className="h-4 w-4 text-easi-orange flex-shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button
                      asChild
                      className="w-full bg-easi-orange hover:bg-easi-orange-hover"
                    >
                      <Link href="/contact">
                        Learn More
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                className={`${typography.h2} mb-8 text-easi-orange`}
                variants={fadeInUp}
              >
                Why Choose Our Training?
              </motion.h2>
              <motion.div variants={fadeInUp} className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-easi-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={fadeInUp} className="mt-8">
                <Button
                  size="lg"
                  asChild
                  className="bg-easi-orange hover:bg-easi-orange-hover"
                >
                  <Link href="/contact">
                    Register Today
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Image
                src="/images/appreciation.jpg"
                alt="Training certificate presentation"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom Training Section */}
      <section className="py-24 bg-easi-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 
              className={`${typography.h2} mb-6`}
              variants={fadeInUp}
            >
              Custom Training Solutions
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 max-w-3xl mx-auto text-gray-300"
              variants={fadeInUp}
            >
              Need specialized training for your organization? We offer customized training programs 
              tailored to your specific needs and delivered at your location.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            >
              <div className="text-center">
                <AcademicCapIcon className="h-12 w-12 text-easi-orange-light mx-auto mb-4" />
                <h3 className={`${typography.h4} mb-2`}>Tailored Content</h3>
                <p className="text-gray-300">Customized curriculum based on your organization's needs</p>
              </div>
              <div className="text-center">
                <UserGroupIcon className="h-12 w-12 text-easi-orange-light mx-auto mb-4" />
                <h3 className={`${typography.h4} mb-2`}>On-site Delivery</h3>
                <p className="text-gray-300">Training delivered at your premises for convenience</p>
              </div>
              <div className="text-center">
                <ClockIcon className="h-12 w-12 text-easi-orange-light mx-auto mb-4" />
                <h3 className={`${typography.h4} mb-2`}>Flexible Schedule</h3>
                <p className="text-gray-300">Training scheduled to fit your organization's timeline</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white hover:text-easi-dark px-8 py-3 text-lg"
              >
                <Link href="/contact">
                  Request Custom Training
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
