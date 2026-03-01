import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Machine Learning',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost', 'Neural Networks'],
    },
    {
      title: 'Data Analysis',
      skills: ['Python', 'R', 'SQL', 'Pandas', 'NumPy', 'Matplotlib'],
    },
    {
      title: 'Backend Development',
      skills: ['Python', 'Node.js', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    },
    {
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vite'],
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Git'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['Jupyter', 'Git', 'Linux', 'Tableau', 'Power BI'],
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
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A comprehensive toolkit spanning data science, machine learning, and full-stack development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="p-8 bg-card border border-border/40 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-semibold text-lg text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-foreground/80 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;