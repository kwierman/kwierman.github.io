import React from 'react';
import { motion } from 'framer-motion';
import { FaLink, FaGithub} from 'react-icons/fa6'

const FeaturedProjects: React.FC = () => {
  const projects = [
    {
      title: 'Time Series Analytics and Forecasting',
      description: 'Forecasting ETL and Analytics Pipeline on Climate Data',
      image: 'https://github.com/kwierman/PowderPipeline/raw/main/public/SnowAnalytics.png',
      tags: ['Python', 'PyTorch', 'Plotly', 'Playwright'],
      links: {
        demo: 'https://github.com/kwierman/PowderPipeline/blob/main/notebooks/Ski%20Pass%20Analysis.ipynb',
        github: 'https://github.com/kwierman/PowderPipeline',
      },
    },
    {
      title: 'Probabilistic Market Analysis',
      description: 'Using pre-made models for timeseries analysis',
      image: 'https://github.com/kwierman/CryptoForecaster/raw/main/public/CryptoMCMC.png',
      tags: ['Python', 'Scikit-learn', 'DuckDB', 'Plotly'],
      links: {
        demo: 'https://github.com/kwierman/CryptoForecaster/blob/main/notebooks/demo.ipynb',
        github: 'https://github.com/kwierman/CryptoForecaster',
      },
    },
    {
      title: 'Bayesian Estimation of Outcomes',
      description: 'Bracket Predictor for March Madness',
      image: 'https://github.com/kwierman/MarchMadness/raw/main/public/Cover.png',
      tags: ['Python', 'seaborn', 'scipy'],
      links: {
        demo: 'https://github.com/kwierman/MarchMadness/blob/main/public/march_madness_2025.png',
        github: 'https://github.com/kwierman/MarchMadness',
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