import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-pink/10 via-white to-purple-100">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading-1 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-pink to-purple-600 font-extrabold">Our Story</h1>
            <p className="text-xl text-gray-700 font-light">
              A family-owned business with a passion for creating unforgettable moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-gradient-to-br from-white via-primary-pink/5 to-purple-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all"
            >
              <h2 className="heading-2 mb-6 text-primary-pink font-bold">From Family Moments to Business</h2>
              <p className="text-gray-700 mb-4 font-medium">
                In The Moment Social Booth Services began with a unique duo: a 26-year-old entrepreneur and an 80-year-old photographer known as "Rent a Senior Citizen." 
                Brought together by a shared love for creativity and joy, they launched with one selfie booth and quickly grew through word of mouth.
              </p>
              <p className="text-gray-700 font-medium">
                Today, we offer full-service event rentals including selfie booths, throne chairs, balloon art, and event planning. What sets us apart is our commitment
                to personalization and unforgettable experiences, powered by a blend of fresh ideas and timeless expertise.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="/images/about-story.png"
                alt="Family photo booth moment"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-gradient-to-br from-primary-pink/10 via-white to-purple-100">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="heading-2 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-pink to-purple-600 font-extrabold">Our Mission</h2>
            <p className="text-xl text-gray-700 font-light">
              To create an environment where every guest feels comfortable, celebrated, and excited to
              capture their special moments with friends and family.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.07, rotate: 2 }}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex flex-col items-center"
            >
              <h3 className="heading-3 mb-4 text-primary-pink font-bold">Custom Experience</h3>
              <p className="text-gray-700 font-medium">
                We tailor each photo booth experience to match your event's theme and atmosphere,
                ensuring a seamless integration with your celebration.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.07, rotate: -2 }}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex flex-col items-center"
            >
              <h3 className="heading-3 mb-4 text-primary-pink font-bold">360° Innovation</h3>
              <p className="text-gray-700 font-medium">
                Our state-of-the-art 360° video booth captures every angle of the moment,
                creating immersive memories that go beyond traditional photography.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.07, rotate: 2 }}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex flex-col items-center"
            >
              <h3 className="heading-3 mb-4 text-primary-pink font-bold">Instant Sharing</h3>
              <p className="text-gray-700 font-medium">
                With our digital sharing platform, guests can instantly share their photos
                on social media, creating a buzz around your event in real-time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 