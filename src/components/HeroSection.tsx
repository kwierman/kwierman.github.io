import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Kevin Wierman, Data Scientist & Software Engineer
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto"
        >
          I transform complex data into actionable insights and build scalable solutions. Specializing in machine learning, statistical analysis, and data platform development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-transform duration-200 gap-2"
          >
            View My Work
            <FaArrowRight size={20} />
          </Link>
          <a
            href="mailto:kwierman@gmail.com"
            className="inline-flex items-center justify-center px-8 py-3 border border-primary/30 text-foreground rounded-lg font-semibold hover:bg-primary/5 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/40"
        >
          <div>
            <p className="text-3xl font-bold text-primary">50+</p>
            <p className="text-sm text-foreground/60 mt-2">Projects Completed</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">12+</p>
            <p className="text-sm text-foreground/60 mt-2">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">30+</p>
            <p className="text-sm text-foreground/60 mt-2">Happy Clients</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;