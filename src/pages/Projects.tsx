import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const allProjects = [
    {
      title: 'Time Series Analytics and Forecasting',
      description: 'Forecasting ETL and Analytics Pipeline on Climate Data',
      image: 'https://github.com/kwierman/PowderPipeline/raw/main/public/SnowAnalytics.png',
      tags: ['Python', 'Playwright', 'PyTorch'],
    },
    {
      title: 'Probabilistic Market Analysis',
      description: 'Using pre-made models for timeseries analysis',
      image: 'https://github.com/kwierman/CryptoForecaster/raw/main/public/CryptoMCMC.png',
      tags: ['Python', 'Scikit-learn', 'DuckDB'],
    },
    {
      title: 'Bayesian Estimation of Outcomes',
      description: 'Bracket Predictor for March Madness',
      image: 'https://github.com/kwierman/MarchMadness/raw/main/public/Cover.png',
      tags: ['Python', 'seaborn', 'scipy'],
    },
    {
      title: 'Local Multi-Agent Coding Framework with RAG',
      description: 'A framework for running small language models locally to support software development',
      image: 'https://github.com/kwierman/LocalCodingAgents/raw/main/public/Cover.png',
      tags: ['langgraph', 'langchain', 'MCP', 'RAG'],
    },
    {
      title: 'Sustainability Modelling',
      description: 'Data pipeline for modelling the sustainability of regions and businesses',
      image: 'https://github.com/kwierman/EcoTrack/raw/main/public/Cover.png',
      tags: ['Python', 'Pandas', 'Scikit-learn'],
    },
    {
      title: 'Geographic Analysis',
      description: 'Analysis of Data on National Parks, Forests, and other state-owned land',
      image: 'https://gisgeography.com/wp-content/uploads/2020/01/USA-National-Parks-Map.jpg',
      tags: ['Python', 'geopy', 'AWS'],
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
                Current Projects
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Here's a sample of public projects that I'm currently working on
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