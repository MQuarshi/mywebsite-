import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { galleryItems } from '../data/galleryItems';

export default function FeaturedMoments() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // for slide animation

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  // Animation variants for slide/fade
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, type: 'spring' },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4 },
    }),
  };

  return (
    <section className="section relative overflow-hidden">
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-pink/20 via-purple-400/20 to-primary-pink/20 animate-gradient-x pointer-events-none z-0" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="heading-2 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-pink to-purple-600 font-extrabold filter drop-shadow-[0_0_8px_rgba(255,105,180,0.5)]"
          >
            Featured Moments
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-700 font-light"
          >
            Check out some of our favorite captures from recent events.
          </motion.p>
        </motion.div>

        <div className="relative flex items-center justify-center">
          <AnimatePresence custom={direction} initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative h-[400px] w-full max-w-2xl rounded-2xl overflow-hidden shadow-xl group"
              style={{ position: 'absolute' }}
            >
              {galleryItems[currentIndex].type === 'video' ? (
                <video
                  src={galleryItems[currentIndex].image}
                  controls
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover group-hover:ring-4 group-hover:ring-primary-pink/60 group-hover:shadow-pink-200 transition-all duration-300"
                  poster="/images/gallery/video-poster.jpg"
                />
              ) : (
                <img
                  src={galleryItems[currentIndex].image}
                  alt={galleryItems[currentIndex].title}
                  className="w-full h-full object-cover group-hover:ring-4 group-hover:ring-primary-pink/60 group-hover:shadow-pink-200 transition-all duration-300"
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors z-20"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6 text-primary-pink"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors z-20"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6 text-primary-pink"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
} 