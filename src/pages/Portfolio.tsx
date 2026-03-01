import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const allProjects = [
    {
      title: 'Predictive Analytics Platform',
      description: 'Machine learning platform for time-series forecasting',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      tags: ['Python', 'TensorFlow', 'React'],
    },
    {
      title: 'Customer Segmentation Engine',
      description: 'Unsupervised learning for customer clustering',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop',
      tags: ['Python', 'Scikit-learn', 'SQL'],
    },
    {
      title: 'Real-time Data Visualization',
      description: 'Interactive dashboard for system monitoring',
      image: 'https://placehold.co/400x300',
      tags: ['React', 'Node.js', 'WebSocket'],
    },
    {
      title: 'NLP Text Classification',
      description: 'Deep learning model for document categorization',
      image: 'https://placehold.co/400x300',
      tags: ['Python', 'PyTorch', 'NLP'],
    },
    {
      title: 'Recommendation System',
      description: 'Collaborative filtering for personalized recommendations',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
      tags: ['Python', 'Pandas', 'Scikit-learn'],
    },
    {
      title: 'Anomaly Detection Pipeline',
      description: 'Real-time outlier detection for IoT data',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      tags: ['Python', 'Isolation Forest', 'AWS'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-24 bg-gradient-to-br from-background to-secondary/20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
                Portfolio
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Explore my complete collection of data science and software development projects.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {allProjects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className="group bg-card border border-border/40 rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-foreground/60 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-secondary text-foreground/70 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}