import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function BookNow() {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.innerHTML = '';
    }
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://form.jotform.com/jsform/250005454188150';
    script.async = true;
    if (formRef.current) {
      formRef.current.appendChild(script);
    }
    return () => {
      if (formRef.current) {
        formRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-pink/10 to-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading-1 mb-6">Book Now</h1>
            <p className="text-xl text-gray-600">
              Fill out the form below to get a quote or reserve your Atlanta photo booth experience. We'll get back to you within 24 hours!
            </p>
          </motion.div>
        </div>
      </section>
      {/* Form Section */}
      <section className="section">
        <div className="container">
          <div className="flex justify-center">
            <div ref={formRef} style={{ width: '100%', maxWidth: 700, minHeight: 900 }} />
          </div>
        </div>
      </section>
    </div>
  );
} 