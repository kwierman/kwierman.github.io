import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import FeaturedProjects from '../components/FeaturedProjects';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SkillsSection />
        <FeaturedProjects />
      </main>
      <Footer />
    </div>
  );
}