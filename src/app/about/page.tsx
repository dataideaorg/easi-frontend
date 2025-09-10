'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { typography } from '@/lib/styles';
import { motion } from 'framer-motion';

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

export default function About() {
  const teamMembers = [
    {
      name: 'Abraham Muwanguzi',
      role: 'Director',
      image: '/images/abraham.jpg',
      bio: 'Leading statistical research and training initiatives across East Africa'
    },
    {
      name: 'Fabian Nabugoomu',
      role: 'Senior Statistician',
      image: '/images/fabian.jpg',
      bio: 'Expert in statistical methodology and data analysis techniques'
    },
    {
      name: 'Ronald Kizito',
      role: 'Training Coordinator',
      image: '/images/ronald.jpg',
      bio: 'Specialized in capacity building and professional development'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-easi-orange to-easi-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1 
              className={`${typography.h1} mb-8`}
              variants={fadeInUp}
            >
              About EASI
            </motion.h1>
            <motion.p 
              className="text-xl mb-10 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              The East African Statistics Institute is dedicated to advancing statistical excellence 
              and research capabilities across the East African region through comprehensive training 
              and innovative research methodologies.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-24 bg-white">
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
                alt="EASI team meeting"
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
              <motion.div variants={fadeInUp} className="mb-12">
                <h2 className={`${typography.h2} mb-6 text-easi-orange`}>Our Mission</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To provide comprehensive research in statistical methodology and deliver 
                  high-quality training programs that enhance the quality of national statistics 
                  and build statistical capacity across East Africa.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <h2 className={`${typography.h2} mb-6 text-easi-orange`}>Our Vision</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be the leading center of excellence for statistical research and training 
                  in East Africa, fostering data-driven decision making and contributing to 
                  sustainable development in the region.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-gray-50">
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
              What We Do
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              EASI is committed to advancing statistical excellence through research, training, and consultancy services
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Research Excellence',
                description: 'Conducting cutting-edge research in statistical methodology and computational techniques to support evidence-based policy making.',
                image: '/images/appreciation.jpg'
              },
              {
                title: 'Capacity Building',
                description: 'Delivering comprehensive training programs to build statistical capacity among professionals and institutions.',
                image: '/images/training-session.jpg'
              },
              {
                title: 'Consultancy Services',
                description: 'Providing expert consultancy services in statistical analysis, survey design, and data management.',
                image: '/images/consultancy.jpg'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-80 relative overflow-hidden rounded-lg hover:shadow-lg transition-shadow duration-300">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                    <h3 className={`${typography.h4} mb-4 text-white`}>
                      {service.title}
                    </h3>
                    <p className="text-white/90">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Our Leadership Team
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Meet the experienced professionals leading EASI's mission to advance statistical excellence in East Africa
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-80 relative overflow-hidden rounded-lg hover:shadow-lg transition-all duration-300">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white text-center">
                    <h3 className={`${typography.h4} mb-2 text-white`}>{member.name}</h3>
                    <p className="text-easi-orange font-medium mb-4">{member.role}</p>
                    <p className="text-white/90 text-sm">{member.bio}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Partner With Us
            </motion.h2>
            <motion.p 
              className="text-xl mb-10 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Join us in advancing statistical excellence and building capacity across East Africa. 
              Let&apos;s work together to create a data-driven future for the region.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="bg-easi-orange/20 text-easi-orange border-easi-orange hover:bg-easi-orange/30 px-8 py-3 text-lg"
              >
                <a href="/contact">
                  Get in Touch
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
