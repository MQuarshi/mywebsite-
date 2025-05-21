import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const articles = [
  {
    title: "Why the 360 Booth is Atlanta's Hottest Event Trend",
    slug: "360-booth-atlanta-trend",
    image: "/images/blog/DSC03232.jpg",
  },
  {
    title: "5 Things to Know Before Renting a Photo Booth",
    slug: "things-to-know-photo-booth-rental",
    image: "/images/blog/20190213_GJP_503-edited-e1612882937558-1048x532.jpg",
  },
  {
    title: "Get the Most Out of Your Photo Booth Rental",
    slug: "get-the-most-out-of-your-photo-booth",
    image: "/images/blog/couple_in_photo_booth_black_and_white.webp",
  },
  {
    title: "How In The Moment Makes Your Event Unforgettable",
    slug: "in-the-moment-difference",
    image: "/images/blog/0c2430_58f9839b7b92431b924d37ca6e8dae89~mv2.avif",
  },
];

export default function Blog() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-primary-pink/10 via-white to-purple-100">
      <section className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="heading-1 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-pink to-purple-600 font-extrabold">
            In The Moment Blog
          </h1>
          <p className="text-xl text-gray-700 font-light">
            Tips, trends, and inspiration for your next Atlanta event.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden flex flex-col"
            >
              <img
                src={article.image}
                alt={article.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h2 className="heading-3 mb-3 text-primary-pink font-bold">{article.title}</h2>
                <p className="text-gray-700 font-medium mb-4 flex-1">Read the full article for tips, trends, and more!</p>
                <Link
                  to={`/blog/${article.slug}`}
                  className="btn-secondary mt-auto inline-block text-center"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
} 