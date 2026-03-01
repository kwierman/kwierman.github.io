import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center pt-20">
        <section className="py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-7xl md:text-8xl font-bold text-primary mb-4">
              404
            </h1>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-foreground/60 mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist. Let's get you back on track.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}