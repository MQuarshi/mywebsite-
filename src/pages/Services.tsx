import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const photoBooths = [
  {
    title: '360° Video Booth',
    description: 'Capture every angle with our immersive 360-degree video booth. Perfect for creating viral social media content and unique event memories.',
    image: '/images/services/360-booth.png',
  },
  {
    title: 'Selfie Photo Booth',
    description: 'Classic photo booth experience with a modern twist. High-quality prints and digital copies for all your guests.',
    image: '/images/services/selfie-booth.png',
  },
  {
    title: 'Deluxe Selfie Booth',
    description: 'Take your photo booth experience to the next level with our premium deluxe package. Includes enhanced props, custom backdrops, and professional lighting.',
    image: '/images/services/deluxe selfie booth.png',
  }
];

const includedItems = [
  {
    title: "On-Site Experience Director",
    description: "Professional guidance throughout your event"
  },
  {
    title: "Unlimited HD Videos",
    description: "Capture every moment in stunning quality"
  },
  {
    title: "Custom Logo Branding",
    description: "Personalize your experience with your brand"
  },
  {
    title: "Trendy Props",
    description: "Fun accessories to enhance the experience"
  },
  {
    title: "LED Lighting",
    description: "Professional lighting for perfect captures"
  },
  {
    title: "Hi-Res iPad Capturing",
    description: "Crystal clear images every time"
  },
  {
    title: "Online Gallery Access",
    description: "Share and download all your memories"
  },
  {
    title: "Sharing Station",
    description: "Instant social media sharing capabilities"
  },
  {
    title: "Red Carpet & Stanchions",
    description: "Add luxury to your event entrance"
  },
  {
    title: "Venue as Backdrop",
    description: "No green screen needed - use your space"
  },
  {
    title: "Delivery & Setup",
    description: "Full service from start to finish"
  }
];

export default function Services() {
  return (
    <div className="pt-16">
      {/* Photo Booths Section */}
      <section className="section bg-gradient-to-br from-white via-primary-pink/5 to-purple-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="heading-2 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-pink to-purple-600 font-extrabold">Atlanta Photo Booths</h2>
            <p className="text-xl text-gray-700 font-light">
              Choose the perfect Atlanta photobooth rental for your event. We offer Atlanta 360 booth, Atlanta selfie booth, and more!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {photoBooths.map((booth, index) => (
              <motion.div
                key={booth.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.07, rotate: 2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="relative h-80">
                  <img
                    src={booth.image}
                    alt={`Atlanta ${booth.title} photobooth rental`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="heading-3 mb-4 text-primary-pink font-bold">{booth.title}</h3>
                  <p className="text-gray-700">Atlanta {booth.title.toLowerCase()} - {booth.description.replace('photo booth', 'Atlanta selfie booth').replace('360-degree video booth', 'Atlanta 360 booth')}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Rentals Section */}
      <section className="section bg-gradient-to-br from-primary-pink/10 via-white to-purple-100">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-pink to-purple-600 font-extrabold">Atlanta Event Rentals</h2>
              <p className="text-xl text-gray-700 mb-8 font-light">
                Complete your Atlanta event setup with our premium rental items. From marquee letters to throne chairs and balloon art, we have everything to make your Atlanta event special.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="/images/services/event-rentals.png"
                alt="Atlanta event rentals showcase"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="section bg-gradient-to-br from-white via-primary-pink/5 to-purple-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="heading-2 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-pink to-purple-600 font-extrabold">What's Included in Every Atlanta Rental</h2>
            <p className="text-xl text-gray-700 font-light">
              Everything you need for an unforgettable Atlanta photobooth rental experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {includedItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.07, rotate: 2 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all"
              >
                <h3 className="heading-3 mb-4 text-primary-pink font-bold">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mt-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-4">Need More Options?</h3>
            <p className="text-lg mb-4">
              Need more time? Want a custom backdrop? Looking to brand our equipment? Just ask — we've got options.
            </p>
            <p className="text-lg">
              Live-action add-ons like money guns and bubble machines available for an extra fee.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-gradient-to-r from-primary-pink to-purple-600 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="heading-2 mb-6 font-extrabold text-white drop-shadow-lg">Let's Create Something Unforgettable in Atlanta</h2>
            <p className="text-xl text-white/90 mb-8 font-light">
              Ready to make your Atlanta event truly special? Contact us to discuss your requirements and get a custom quote for your Atlanta photobooth rental, Atlanta selfie booth, or Atlanta 360 booth.
            </p>
            <Link to="/book-now" className="btn-primary bg-white text-primary-pink font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-primary-pink hover:text-white transition-all duration-200 inline-flex items-center animate-bounce">
              Book Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 