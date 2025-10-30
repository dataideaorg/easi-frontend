'use client';

import { useState } from 'react';
import Image from 'next/image';
import { typography } from '@/lib/styles';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

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

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    caption: string;
    categoryIndex: number;
    imageIndex: number;
  } | null>(null);

  // Gallery data organized by folders
  const galleryCategories = [
    {
      title: 'AI Training at UniK (University of Kisubi)',
      description: 'A hands-on training for lecturers and graduate students to learn about AI and its applications in their research and teaching.',
      images: [
        {
          src: '/images/gallery/ai-training-at-unik/WhatsApp Image 2025-09-12 at 22.04.32.jpeg',
          alt: 'AI Training at University of Kisubi - Session 1',
          caption: 'Interactive AI training session with participants'
        },
        {
          src: '/images/gallery/ai-training-at-unik/WhatsApp Image 2025-09-12 at 22.04.34.jpeg',
          alt: 'AI Training at University of Kisubi - Session 2',
          caption: 'Hands-on practical exercises during the training'
        },
        {
          src: '/images/gallery/ai-training-at-unik/WhatsApp Image 2025-09-12 at 22.04.36.jpeg',
          alt: 'AI Training at University of Kisubi - Session 3',
          caption: 'Group discussions and collaborative learning'
        },
        
      ]
    },
    {
      title: 'Data Management Training at MUK',
      description: 'Comprehensive data management training covering data collection, analysis, and visualization techniques.',
      images: [
        {
          src: '/images/gallery/data-management-training-at-muk/20250905_110401.jpg',
          alt: 'Data Management Training at MUK - Session 1',
          caption: 'Data management workshop in progress'
        },
        {
          src: '/images/gallery/data-management-training-at-muk/20250905_110409.jpg',
          alt: 'Data Management Training at MUK - Session 2',
          caption: 'Participants working with data analysis tools'
        }
      ]
    }
  ];

  // Get all images in a flat array for navigation
  const allImages = galleryCategories.flatMap((category, categoryIndex) =>
    category.images.map((image, imageIndex) => ({
      ...image,
      categoryIndex,
      imageIndex
    }))
  );

  const openModal = (categoryIndex: number, imageIndex: number) => {
    const image = galleryCategories[categoryIndex].images[imageIndex];
    setSelectedImage({
      ...image,
      categoryIndex,
      imageIndex
    });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = allImages.findIndex(
      img => img.categoryIndex === selectedImage.categoryIndex && 
             img.imageIndex === selectedImage.imageIndex
    );
    
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : allImages.length - 1;
    } else {
      newIndex = currentIndex < allImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    const newImage = allImages[newIndex];
    setSelectedImage(newImage);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/training-session.jpg"
            alt="Training gallery" 
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
              Gallery
            </motion.h1>
            <motion.p 
              className="text-xl mb-10 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Explore moments from our training programs and see the impact of statistical education 
              across East Africa through our comprehensive training initiatives.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Categories */}
      {galleryCategories.map((category, categoryIndex) => (
        <section 
          key={categoryIndex} 
          className={`py-24 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
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
                {category.title}
              </motion.h2>
              <motion.p 
                className="text-gray-600 max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                {category.description}
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {category.images.map((image, imageIndex) => (
                <motion.div
                  key={imageIndex}
                  variants={fadeInUp}
                  transition={{ delay: imageIndex * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => openModal(categoryIndex, imageIndex)}
                >
                  <div className="aspect-square relative overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110 rounded-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm font-medium drop-shadow-lg">{image.caption}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

      {/* Call to Action Section */}
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
              className={`${typography.h2} mb-6 text-white`}
              variants={fadeInUp}
            >
              Join Our Next Training
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 max-w-3xl mx-auto text-gray-300"
              variants={fadeInUp}
            >
              Be part of our growing community of statisticians, researchers, and data professionals. 
              Enhance your skills with our expert-led training programs.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="/training"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-md bg-easi-orange/20 border-2 border-easi-orange text-easi-orange hover:bg-easi-orange/30 hover:border-easi-orange-hover transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Training Programs
              </motion.a>
              <motion.a
                href="/contact/"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-md border-2 border-white text-white hover:bg-white/10 hover:border-gray-200 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modal for larger image view */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeModal}
          >
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>

              {/* Image container */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative max-w-5xl max-h-full w-full h-full flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative flex-1 flex items-center justify-center">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
                
                {/* Image caption */}
                <div className="bg-black/70 text-white p-4 text-center">
                  <p className="text-lg font-medium">{selectedImage.caption}</p>
                </div>
              </motion.div>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                {allImages.findIndex(img => 
                  img.categoryIndex === selectedImage.categoryIndex && 
                  img.imageIndex === selectedImage.imageIndex
                ) + 1} / {allImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
