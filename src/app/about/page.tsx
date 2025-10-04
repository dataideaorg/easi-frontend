'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { typography } from '@/lib/styles';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  UserIcon, 
  BuildingLibraryIcon, 
  ChartBarIcon 
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

export default function About() {
  const teamMembers = [
    {
      name: "Dr. Fabian Nabugoomu",
      title: "Chairman, Board of Directors",
      image: "/images/team/fabian.jpg",
      shortBio: "Associate Professor of Statistics and Applied Computing. Currently the Deputy Vice-Chancellor of Kyambogo University responsible for Finance and Administration.",
      education: "PhD in Statistics (1994) from the University of Edinburgh, Scotland",
      icon: <AcademicCapIcon className="h-6 w-6 text-easi-orange" />
    },
    {
      name: "Prof. Ronald Wesonga",
      title: "Founding Director",
      image: "/images/team/ronald.jpg",
      shortBio: "Statistician based at the Department of Statistics, Sultan Qaboos University. Formerly a visiting Professor at the Institute of Social Research, Makerere University.",
      education: "Studied at the Institute of Statistics and Applied Economics, Makerere University",
      icon: <UserIcon className="h-6 w-6 text-easi-orange" />
    },
    {
      name: "Dr. Abraham Owino Yeyo",
      title: "Director",
      image: "/images/team/abraham.jpg",
      shortBio: "Statistician involved in capacity building in Research, Monitoring and Evaluation and Community Development, currently lecturing at Makerere University.",
      education: "Lecturer at Makerere University School of Statistics and Planning",
      icon: <BuildingLibraryIcon className="h-6 w-6 text-easi-orange" />
    },
    {
      name: "Francis Fuller Bbosa",
      title: "Program Coordinator & Instructor",
      image: "https://via.placeholder.com/400x300/dd8604/ffffff?text=Francis+Fuller+Bbosa",
      shortBio: "Experienced program coordinator and instructor with expertise in statistical training programs and capacity building initiatives across East Africa.",
      education: "Specialized in Program Coordination and Statistical Training",
      icon: <ChartBarIcon className="h-6 w-6 text-easi-orange" />
    },
    {
      name: "Juma Shafara",
      title: "Systems Administrator",
      image: "https://via.placeholder.com/400x300/dd8604/ffffff?text=Juma+Shafara",
      shortBio: "Dedicated systems administrator with extensive experience in managing IT infrastructure and supporting statistical computing environments.",
      education: "Expertise in Systems Administration and IT Support",
      icon: <UserIcon className="h-6 w-6 text-easi-orange" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/team-meeting.jpg"
            alt="EASI team meeting" 
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
              About <span className="text-white">EASI</span>
            </motion.h1>
            <motion.p 
              className="text-xl mb-10 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              The East African Statistics Institute (EASI) was established to provide primarily a complementary role of research in appropriate statistical and computational methodology that facilitate production and sustenance of quality national statistics.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-easi-orange h-full">
                <h2 className={`${typography.h3} mb-4 text-easi-dark`}>Our Mission</h2>
                <p className="text-gray-600">
                  To provide high-quality research in statistical methodology and computational techniques that enhance the production and sustainability of quality national statistics across East Africa.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-easi-orange h-full">
                <h2 className={`${typography.h3} mb-4 text-easi-dark`}>Our Vision</h2>
                <p className="text-gray-600">
                  To be the leading center of excellence in statistical research, methodology development, and capacity building in East Africa and beyond.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`${typography.h2} mb-4`}>Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team consists of experienced statisticians and researchers dedicated to advancing statistical excellence across East Africa.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="relative -mt-6 -mx-6">
                      {member.name === "Francis Fuller Bbosa" || member.name === "Juma Shafara" ? (
                        <div className="w-full h-48 bg-easi-orange flex items-center justify-center">
                          <span className="text-white font-semibold text-lg text-center px-4">
                            {member.name}
                          </span>
                        </div>
                      ) : (
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover"
                        />
                      )}
                      <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                        {member.icon}
                      </div>
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className={`${typography.h4} mb-1`}>{member.name}</h3>
                      <p className="text-easi-orange font-medium mb-4">{member.title}</p>
                      <p className="text-gray-600 mb-4">{member.shortBio}</p>
                      <div className="flex items-center mb-4">
                        <AcademicCapIcon className="h-5 w-5 text-gray-500 mr-2" />
                        <p className="text-sm text-gray-500">{member.education}</p>
                      </div>
                      <Button 
                        variant="outline"
                        className="mt-2 bg-easi-orange/20 text-easi-orange border-easi-orange hover:bg-easi-orange/30"
                      >
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`${typography.h2} mb-4`}>Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide our work and relationships with partners and clients.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Excellence",
                description: "We are committed to the highest standards of statistical methodology and research.",
                icon: <AcademicCapIcon className="h-12 w-12 text-easi-orange" />
              },
              {
                title: "Innovation",
                description: "We continuously seek new approaches to solve complex statistical challenges.",
                icon: <ChartBarIcon className="h-12 w-12 text-easi-orange" />
              },
              {
                title: "Integrity",
                description: "We uphold ethical standards and transparency in all our work and relationships.",
                icon: <UserIcon className="h-12 w-12 text-easi-orange" />
              },
              {
                title: "Collaboration",
                description: "We believe in the power of partnerships to achieve greater impact across the region.",
                icon: <BuildingLibraryIcon className="h-12 w-12 text-easi-orange" />
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className={`${typography.h4} mb-2 text-center`}>{value.title}</h3>
                    <p className="text-gray-600 text-center">{value.description}</p>
                  </CardContent>
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
              Join Us in Our Mission
            </motion.h2>
            <motion.p 
              className="text-xl mb-10 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Partner with EASI to advance statistical excellence and contribute to evidence-based decision making across East Africa.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="bg-easi-orange/20 text-easi-orange border-easi-orange hover:bg-easi-orange/30 px-8 py-3 text-lg"
              >
                <a href="/contact">
                  Contact Us Today
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}