import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kwierman@gmail.com',
      href: 'mailto:kwierman@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/kwierman',
      href: 'https://linkedin.com/in/kwierman',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/kwierman',
      href: 'https://github.com/kwierman',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: '@kwierman',
      href: 'https://twitter.com/kwierman',
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
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
                Get in Touch
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    className="p-8 bg-card border border-border/40 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-200">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {method.label}
                        </h3>
                        <p className="text-foreground/60 text-sm">{method.value}</p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 p-8 bg-card border border-border/40 rounded-lg text-center"
            >
              <p className="text-foreground/70">
                Whether you have a question or just want to say hello, feel free to contact me. I'll try my best to get back to you!
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}