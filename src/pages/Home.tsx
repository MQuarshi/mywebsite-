import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  SparklesIcon, 
  ArrowRightIcon,
  TruckIcon,
  GiftIcon,
  BoltIcon
} from '@heroicons/react/24/outline';
import { galleryItems } from '../data/galleryItems';
import { useRef, useEffect } from 'react';

const features = [
  {
    title: 'Stylish & Affordable',
    description: 'You shouldn\'t have to sacrifice style for your budget. We offer luxe experiences at prices that make sense.',
    icon: SparklesIcon,
  },
  {
    title: 'All-Inclusive Service',
    description: 'Delivery, setup, breakdown — we handle it all, so your only job is to enjoy the moment.',
    icon: TruckIcon,
  },
  {
    title: 'More Than Just Booths',
    description: 'We\'re your one-stop shop for event magic — think throne chairs, balloon installs, marquee letters, and more.',
    icon: GiftIcon,
  },
  {
    title: 'Easy from Start to Finish',
    description: 'Booking is quick, communication is clear, and we\'re always just a message away. Planning your event should feel exciting — not stressful.',
    icon: BoltIcon,
  },
];

const services = [
  {
    title: '360° Video Booth',
    description: 'Create viral content',
    image: '/images/services/360-booth.png',
    href: '/services#360-booth',
  },
  {
    title: 'Selfie Photo Booth',
    description: 'Classic meets modern',
    image: '/images/services/selfie-booth.png',
    href: '/services#selfie-booth',
  },
  {
    title: 'Deluxe Selfie Booth',
    description: 'Premium experience with props',
    image: '/images/services/deluxe selfie booth.png',
    href: '/services#deluxe-selfie',
  },
  {
    title: 'Event Rentals',
    description: 'Balloon art, throne chairs, marquee letters & more',
    image: '/images/services/event-rentals.png',
    href: '/services#event-rentals',
  },
];

const testimonials = [
  {
    quote: "The 360° booth was the highlight of our wedding! Everyone was obsessed with the videos.",
    author: "Sarah & Mike",
    event: "Wedding",
  },
  {
    quote: "Professional, fun, and made our corporate event unforgettable. The instant sharing feature was a hit!",
    author: "TechCorp Inc.",
    event: "Corporate Event",
  },
  {
    quote: "The red carpet setup made our guests feel like celebrities. Absolutely worth every penny!",
    author: "Jessica",
    event: "Birthday Party",
  },
];

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    let scrollAmount = 0;
    const scrollStep = 320; // px to scroll each time (matches card width + gap)
    const interval = setInterval(() => {
      if (!carousel) return;
      if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
        // If at end, scroll back to start
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
        scrollAmount = 0;
      } else {
        scrollAmount += scrollStep;
        carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="relative py-28 md:py-40 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/banner.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Animated Gradient Overlay (shimmer) */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-r from-primary-pink/20 via-purple-400/20 to-primary-pink/20 animate-gradient-x opacity-40" style={{ animationDuration: '18s' }} />
        </div>
        <div className="container relative z-30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="heading-2 text-white font-display mb-4 text-center drop-shadow-[0_2px_24px_rgba(0,0,0,0.7)]"
              style={{ textShadow: '0 0 32px #FF69B4, 0 0 16px #fff' }}
            >
              Turning Moments <br />
              Into Memories
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl md:text-3xl font-light text-white mb-8 text-center drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
              style={{ textShadow: '0 0 16px #fff, 0 0 8px #FF69B4' }}
            >
              Atlanta's Most Loved Photo Booth Rentals
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link to="/services" className="btn-primary">
                View Services
              </Link>
              <Link to="/book-now" className="btn-secondary">
                Book Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Moments Section (original carousel) */}
      <section className="section bg-gray-50 overflow-hidden">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="heading-2 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-pink to-purple-600 font-extrabold">Featured Moments</h2>
            <p className="text-xl text-gray-600">
              Take a peek at some of our favorite captures
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              ref={carouselRef}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-none w-[300px] snap-center"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft group">
                    {item.type === 'video' ? (
                      <video
                        src={item.image}
                        controls
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-cover"
                        poster="/images/gallery/video-poster.jpg"
                      />
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                        <p className="text-sm opacity-90">{item.category}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="text-center mt-8">
            <Link to="/gallery" className="btn-secondary inline-flex items-center">
              View Full Gallery
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-gradient-to-br from-primary-pink/10 via-white to-purple-100 py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="heading-2 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-pink to-purple-600 font-extrabold">
              Why Choose In The Moment?
            </h2>
            <p className="text-xl text-gray-700 font-light">
              We don't just show up — we show out. Here's why our clients love working with us:
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.07, rotate: -2 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all flex flex-col items-center"
              >
                <div className="mb-6 flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-primary-pink to-purple-500 shadow-lg">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="heading-3 mb-3 text-primary-pink font-bold">{feature.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed font-medium">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="section bg-gradient-to-br from-white via-primary-pink/5 to-purple-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="heading-2 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-pink to-purple-600 font-extrabold">
              Featured Services
            </h2>
            <p className="text-xl text-gray-700 font-light">
              Discover our range of premium Atlanta photo booth experiences, including the Atlanta 360 booth and Atlanta selfie booth.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.07, rotate: 2 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
              >
                <Link to={service.href} className="block">
                  <div className="relative rounded-2xl overflow-hidden">
                    <div className="aspect-w-16 aspect-h-9 h-80">
                      <img
                        src={service.image}
                        alt={service.title + ' Atlanta photobooth rental'}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold drop-shadow-lg">{service.title}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gradient-to-br from-primary-pink/10 via-white to-purple-100">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="heading-2 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-pink to-purple-600 font-extrabold">
              What People Are Saying
            </h2>
            <p className="text-xl text-gray-700 font-light">
              Join hundreds of satisfied clients who chose In The Moment
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all"
              >
                <p className="text-gray-700 mb-4 text-lg font-medium">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-primary-pink">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary-pink to-purple-600 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="heading-2 mb-6 font-extrabold text-white drop-shadow-lg">Ready to Create Unforgettable Memories?</h2>
            <p className="text-xl text-white/90 mb-8 font-light">
              Let's make your Atlanta event truly special with our premium photo booth experiences, including Atlanta 360 booth and Atlanta selfie booth rentals.
            </p>
            <Link to="/book-now" className="btn-primary bg-white text-primary-pink font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-primary-pink hover:text-white transition-all duration-200 inline-flex items-center animate-bounce">
              Book Now
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 