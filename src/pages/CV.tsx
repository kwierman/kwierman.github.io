import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import {FaDownload, } from 'react-icons/fa6';

export default function CV() {
  const experience = [
    {
      title: 'Founder',
      company: 'Caspian Datalabs LLC',
      period: '2025 - Present',
      description: 'Leading a data science consultancy and solutions firm, providing advanced analytics solutions to clients across various industries.',
    },
    {
      title: 'Senior Software Engineer - Machine Learning',
      company: 'Starfish Space',
      period: '2024 - 2025',
      description: 'Led ML initiatives, built predictive models, and mentored junior team members.',
    },
    {
      title: 'Senior Lead Data Scientist',
      company: 'Astra Space inc',
      period: '2022 - 2024',
      description: 'Directed data science projects, developed advanced analytics solutions, and collaborated with cross-functional teams.',
    },
    {
      title: 'Lead Data Scientist',
      company: 'Climate Corp',
      period: '2020 - 2022',
      description: 'Managed data science projects, developed machine learning models, and provided insights to drive business decisions.',
    },
    {
      title: 'Data Scientist II',
      company: 'Blue Origin',
      period: '2020 - 2022',
      description: 'Designed and implemented machine learning models for customer behavior analysis and sales forecasting.',
    },
  ];

  const education = [
    {
      degree: 'PhD in Physics',
      institution: 'University of North Carolina at Chapel Hill',
      year: '2016',
    },
    {
      degree: 'Bachelor of Science in Physics and Mathematics',
      institution: 'State University',
      year: '2012',
    },
  ];

  const certifications = [
    'TensorFlow Developer Certificate',
    'AWS Certified Machine Learning Specialty',
    'Google Cloud Professional Data Engineer',
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
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-between mb-16"
            >
              <div>
                <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-2">
                  Curriculum Vitae
                </h1>
                <p className="text-lg text-foreground/60">
                  Professional experience and qualifications
                </p>
              </div>
              <a
                href="/ResumeKevinWierman.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:scale-105 transition-transform duration-200"
              >
                <FaDownload size={20} />
                Download PDF
              </a>
            </motion.div>

            {/* Experience */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mb-16"
            >
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                Experience
              </h2>
              <div className="space-y-6">
                {experience.map((job) => (
                  <motion.div
                    key={job.title}
                    variants={itemVariants}
                    className="p-6 bg-card border border-border/40 rounded-lg"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg text-foreground">
                          {job.title}
                        </h3>
                        <p className="text-primary font-medium">{job.company}</p>
                      </div>
                      <span className="text-sm text-foreground/60">{job.period}</span>
                    </div>
                    <p className="text-foreground/70">{job.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu) => (
                  <motion.div
                    key={edu.degree}
                    variants={itemVariants}
                    className="p-6 bg-card border border-border/40 rounded-lg"
                  >
                    <h3 className="font-semibold text-lg text-foreground mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium mb-2">{edu.institution}</p>
                    <p className="text-sm text-foreground/60">{edu.year}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <motion.div
                    key={cert}
                    variants={itemVariants}
                    className="p-4 bg-card border border-border/40 rounded-lg"
                  >
                    <p className="font-medium text-foreground">{cert}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}