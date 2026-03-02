import React from 'react';
import { motion } from 'framer-motion';
import { FaLink, FaGithub} from 'react-icons/fa6'

const FeaturedProjects: React.FC = () => {
  const projects = [
    {
      title: 'Predictive Analytics Platform',
      description: 'Built a machine learning platform for time-series forecasting with 95% accuracy. Integrated with real-time data pipelines and interactive dashboards.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'Customer Segmentation Engine',
      description: 'Developed unsupervised learning model to segment 500K+ customers. Resulted in 40% improvement in marketing campaign ROI.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
      tags: ['Python', 'Scikit-learn', 'SQL', 'Tableau'],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'Real-time Data Visualization',
      description: 'Created interactive dashboard for monitoring 100+ metrics across distributed systems. Handles 1M+ events per minute.',
      image: 'https://placehold.co/600x400',
      tags: ['React', 'Node.js', 'WebSocket', 'D3.js'],
      links: {
        demo: '#',
        github: '#',
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Note: Full Portfolio Coming Soon...
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:grid-cols-2 md:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-foreground/80 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.links.demo}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:scale-105 transition-transform duration-200"
                  >
                    View Demo
                    <FaLink size={18} />
                  </a>
                  <a
                    href={project.links.github}
                    className="inline-flex items-center gap-2 px-6 py-2.5 border border-primary/30 text-foreground rounded-lg font-medium hover:bg-primary/5 transition-colors duration-200"
                  >
                    Code
                    <FaGithub size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;