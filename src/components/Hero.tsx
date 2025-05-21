import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary-pink/10 via-white to-purple-100 overflow-hidden">
      {/* Dynamic Background: Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-pink/20 via-purple-400/20 to-primary-pink/20 animate-gradient-x"></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="heading-1 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-pink to-purple-600 font-extrabold filter drop-shadow-[0_0_8px_rgba(255,105,180,0.5)]"
          >
            In The Moment Photo Booth Rental
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-700 font-light mb-8"
          >
            Capture the magic of your special moments with our premium photo booth services.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="px-6 py-3 bg-primary-pink text-white rounded-full font-bold shadow-lg hover:animate-pulse"
          >
            Book Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 