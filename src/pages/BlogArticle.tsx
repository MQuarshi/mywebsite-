import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const articles = [
  {
    slug: "360-booth-atlanta-trend",
    title: "Why the 360 Booth is Atlanta's Hottest Event Trend",
    image: "/images/blog/DSC03232.jpg",
    content: (
      <>
        <p className="mb-6">The 360 video booth is taking Atlanta events by storm! Unlike traditional photo booths, the 360 booth captures a dynamic, slow-motion video of guests from every angle, creating share-worthy content that goes viral on social media. Whether it's a wedding, corporate gala, or birthday bash, the 360 booth adds a wow factor that guests love.</p>
        <h3 className="heading-3 mb-2 text-primary-pink font-bold">How Does It Work?</h3>
        <p className="mb-4">Guests stand on a platform while a camera arm rotates around them, capturing a 360-degree video. The result? Cinematic, slow-motion clips with custom overlays, music, and instant sharing options.</p>
        <h3 className="heading-3 mb-2 text-primary-pink font-bold">Why Choose a 360 Booth?</h3>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Creates unforgettable, interactive experiences</li>
          <li>Perfect for branding and event marketing</li>
          <li>Instant digital sharing for guests</li>
          <li>Memorable keepsakes for any occasion</li>
        </ul>
        <p>Ready to make your Atlanta event stand out? The 360 booth is the ultimate crowd-pleaser!</p>
      </>
    ),
  },
  {
    slug: "things-to-know-photo-booth-rental",
    title: "5 Things to Know Before Renting a Photo Booth",
    image: "/images/blog/20190213_GJP_503-edited-e1612882937558-1048x532.jpg",
    content: (
      <>
        <ol className="list-decimal pl-6 mb-6 text-gray-700">
          <li className="mb-2"><b>Space Requirements:</b> Make sure your venue has enough space for the booth, backdrop, and guest flow. Ask your vendor for exact dimensions.</li>
          <li className="mb-2"><b>Power Access:</b> Most booths need a standard outlet nearby. Confirm with your venue and your rental company.</li>
          <li className="mb-2"><b>Props & Backdrops:</b> Ask what's included! Fun props and custom backdrops make the experience more memorable.</li>
          <li className="mb-2"><b>Digital Sharing:</b> Modern booths offer instant sharing via text, email, or QR code. Check if this is included.</li>
          <li className="mb-2"><b>Attendant or DIY:</b> Some booths come with a friendly attendant, while others are self-serve. Decide what fits your event best.</li>
        </ol>
        <p>Knowing these essentials ensures a smooth, fun photo booth experience for you and your guests!</p>
      </>
    ),
  },
  {
    slug: "get-the-most-out-of-your-photo-booth",
    title: "Get the Most Out of Your Photo Booth Rental",
    image: "/images/blog/couple_in_photo_booth_black_and_white.webp",
    content: (
      <>
        <h3 className="heading-3 mb-2 text-primary-pink font-bold">Maximize the Fun</h3>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Encourage guests to use the booth early and often—make announcements or add signage.</li>
          <li>Customize your overlays and props to match your event theme.</li>
          <li>Set up the booth in a high-traffic area for maximum visibility.</li>
        </ul>
        <h3 className="heading-3 mb-2 text-primary-pink font-bold">Share the Memories</h3>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Opt for digital galleries or instant sharing so everyone can relive the fun.</li>
          <li>Encourage guests to tag your event or business on social media.</li>
        </ul>
        <p>With a little planning, your photo booth rental will be a highlight of your celebration!</p>
      </>
    ),
  },
  {
    slug: "in-the-moment-difference",
    title: "How In The Moment Makes Your Event Unforgettable",
    image: "/images/blog/0c2430_58f9839b7b92431b924d37ca6e8dae89~mv2.avif",
    content: (
      <>
        <p className="mb-6">At In The Moment Photo Booth, we go beyond the basics. Our team is dedicated to making your Atlanta event seamless, stylish, and truly memorable.</p>
        <h3 className="heading-3 mb-2 text-primary-pink font-bold">What Sets Us Apart?</h3>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Luxury props and custom backdrops</li>
          <li>Professional, friendly attendants</li>
          <li>Cutting-edge technology (360 booth, instant sharing, and more)</li>
          <li>Personalized service from booking to breakdown</li>
        </ul>
        <p>We believe every event deserves a touch of magic. Let us help you create moments your guests will never forget!</p>
      </>
    ),
  },
];

export default function BlogArticle() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="pt-24 text-center text-2xl text-primary-pink font-bold">
        Article not found.<br />
        <Link to="/blog" className="underline text-primary-pink">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-primary-pink/10 via-white to-purple-100">
      <section className="container py-16 max-w-3xl mx-auto">
        <Link to="/blog" className="text-primary-pink font-semibold mb-8 inline-block hover:underline">← Back to Blog</Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={article.image} alt={article.title} className="w-full h-64 object-cover rounded-2xl mb-8 shadow-xl" />
          <h1 className="heading-1 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-pink to-purple-600 font-extrabold">{article.title}</h1>
          <div className="prose prose-lg max-w-none text-gray-800">
            {article.content}
          </div>
        </motion.div>
      </section>
    </div>
  );
} 