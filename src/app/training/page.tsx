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
      description: 'Comprehensive training in statistical methods, data collection, analysis, and interpretation. Perfect for researchers, analysts, and professionals who need to understand and apply statistical concepts in their work.',
      topics: ['Descriptive Statistics', 'Inferential Statistics', 'Regression Analysis', 'Data Visualization', 'Hypothesis Testing', 'Statistical Modeling'],
      level: 'Intermediate',
      image: '/images/training-session.jpg'
    },
    {
      title: 'Survey Design and Implementation',
      duration: '3 days',
      participants: '20 max',
      description: 'Learn to design, implement, and manage statistical surveys for data collection. This course covers everything from survey methodology to data quality assurance.',
      topics: ['Survey Methodology', 'Sampling Techniques', 'Questionnaire Design', 'Data Quality', 'Response Analysis', 'Survey Management'],
      level: 'Advanced',
      image: '/images/team-meeting.jpg'
    },
    {
      title: 'Statistical Software Training',
      duration: '4 days',
      participants: '30 max',
      description: 'Hands-on training in statistical software packages including R, SPSS, and Stata. Learn to use these powerful tools for data analysis and statistical computing.',
      topics: ['R Programming', 'SPSS Analysis', 'Stata Operations', 'Data Management', 'Statistical Computing', 'Report Generation'],
      level: 'Beginner to Advanced',
      image: '/images/consultancy.jpg'
    },
    {
      title: 'R Programming for Statistical Analysis',
      duration: '3-5 days',
      participants: '25 max',
      description: 'Comprehensive training in R programming language for statistical analysis, data visualization, and reporting. From basics to advanced statistical modeling.',
      topics: ['R Fundamentals', 'Data Manipulation', 'Statistical Tests', 'Data Visualization', 'Advanced Modeling', 'Report Generation'],
      level: 'Beginner to Advanced',
      image: '/images/training-session.jpg'
    },
    {
      title: 'Python for Data Science',
      duration: '4-5 days',
      participants: '30 max',
      description: 'Hands-on training in Python programming for data analysis, machine learning, and statistical applications. Perfect for data scientists and analysts.',
      topics: ['Python Basics', 'Pandas & NumPy', 'Data Visualization', 'Machine Learning', 'Statistical Analysis', 'Data Management'],
      level: 'Beginner to Intermediate',
      image: '/images/consultancy.jpg'
    },
    {
      title: 'Monitoring and Evaluation',
      duration: '3-4 days',
      participants: '20 max',
      description: 'Comprehensive training in designing, implementing, and managing effective M&E systems for programs and projects.',
      topics: ['M&E Fundamentals', 'Results-Based M&E', 'Data Collection Methods', 'Impact Assessment', 'M&E Tools', 'Reporting Systems'],
      level: 'Beginner to Intermediate',
      image: '/images/team-meeting.jpg'
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>
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
                className="bg-easi-orange/20 border-2 border-easi-orange text-easi-orange hover:bg-easi-orange/30 hover:border-easi-orange-hover px-8 py-3 text-lg"
              >
                <Link href="/contact/">
                  Enroll Now
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Section */}
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
              Upcoming Training Events
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Explore our upcoming events and secure your spot today.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Training for Lecturers and Graduate Students',
                date: 'Friday, September 12, 9AM - 5PM',
                location: 'University of Kisubi',
                description: 'A hands-on training for lecturers and graduate students to learn about AI and its applications in their research and teaching.'
              },
              {
                title: 'Python for Data Science Bootcamp',
                date: 'To Be Determined',
                location: 'Online',
                description: 'An intensive bootcamp covering Python basics, pandas, and machine learning for aspiring data scientists.'
              },
              {
                title: 'Machine Learning with Python',
                date: 'To Be Determined',
                location: 'Online',
                description: 'An intensive training covering machine learning algorithms and their applications, with a focus on practical implementation.'
              }
            ].map((training, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-easi-orange">{training.title}</h3>
                    <div className="text-gray-700 mb-1">
                      <strong className="text-gray-900">Date:</strong> {training.date}
                    </div>
                    <div className="text-gray-700 mb-1">
                      <strong className="text-gray-900">Location:</strong> {training.location}
                    </div>
                    <p className="text-gray-600 mt-2 mb-4">{training.description}</p>
                    <Button
                      asChild
                      className="w-full bg-easi-orange/20 border-2 border-easi-orange text-easi-orange hover:bg-easi-orange/30 hover:border-easi-orange-hover"
                    >
                      <Link href="/contact/">
                        Express Interest
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
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
              Our Training Programs
            </motion.h2>
            <motion.p 
              className="text-gray-300 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Choose from our range of specialized training programs designed to meet different skill levels and professional needs.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white/10 backdrop-blur-sm border-white/20">
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
                    <p className="text-gray-300 mb-4">
                      {program.description}
                    </p>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
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
                      <h4 className="font-semibold mb-2 text-white">Key Topics:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
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
                      className="w-full bg-easi-orange/20 border-2 border-easi-orange text-easi-orange hover:bg-easi-orange/30 hover:border-easi-orange-hover"
                    >
                      <Link href="/contact/">
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
                  className="bg-easi-orange/20 border-2 border-easi-orange text-easi-orange hover:bg-easi-orange/30 hover:border-easi-orange-hover"
                >
                  <Link href="/contact/">
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

      {/* Testimonials Section */}
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
              What Our Trainees Say
            </motion.h2>
            <motion.p 
              className="text-gray-300 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Hear from professionals who have participated in our training programs
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The R programming training was excellent. The instructors were knowledgeable and the hands-on exercises helped me apply what I learned immediately in my work.",
                author: "John Mukasa",
                organization: "Uganda Bureau of Statistics"
              },
              {
                quote: "EASI's M&E training transformed how our organization approaches program evaluation. The practical tools and frameworks have been invaluable.",
                author: "Sarah Nyambura",
                organization: "Kenya National Bureau of Statistics"
              },
              {
                quote: "The Python for Data Science course was comprehensive and well-structured. I now feel confident analyzing large datasets and creating insightful visualizations.",
                author: "Emmanuel Rwema",
                organization: "Rwanda National Institute of Statistics"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-easi-orange">{testimonial.author}</p>
                      <p className="text-sm text-gray-400">{testimonial.organization}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Training Section */}
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
              Custom Training Solutions
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 max-w-3xl mx-auto text-gray-600"
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
                <AcademicCapIcon className="h-12 w-12 text-easi-orange mx-auto mb-4" />
                <h3 className={`${typography.h4} mb-2 text-gray-800`}>Tailored Content</h3>
                <p className="text-gray-600">Customized curriculum based on your organization's needs</p>
              </div>
              <div className="text-center">
                <UserGroupIcon className="h-12 w-12 text-easi-orange mx-auto mb-4" />
                <h3 className={`${typography.h4} mb-2 text-gray-800`}>On-site Delivery</h3>
                <p className="text-gray-600">Training delivered at your premises for convenience</p>
              </div>
              <div className="text-center">
                <ClockIcon className="h-12 w-12 text-easi-orange mx-auto mb-4" />
                <h3 className={`${typography.h4} mb-2 text-gray-800`}>Flexible Schedule</h3>
                <p className="text-gray-600">Training scheduled to fit your organization's timeline</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-easi-orange text-easi-orange hover:bg-easi-orange/20 hover:border-easi-orange-hover px-8 py-3 text-lg bg-easi-orange/10"
              >
                <Link href="/contact/">
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
