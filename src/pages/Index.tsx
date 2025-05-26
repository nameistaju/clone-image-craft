
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import PhilosophySection from '@/components/home/PhilosophySection';
import GallerySection from '@/components/home/GallerySection';
import ProductDetails from '@/components/product/ProductDetails';
import ProductAccordion from '@/components/product/ProductAccordion';
import TestimonialSection from '@/components/testimonials/TestimonialSection';

const Index: React.FC = () => {
  return (
    <div className="w-full relative min-h-screen bg-[#070707] dark:bg-[#070707] bg-white transition-colors duration-300 max-md:overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <PhilosophySection />
        <GallerySection />
        
        <h2 className="w-[800px] text-white dark:text-white text-black text-5xl font-normal tracking-[-0.96px] ml-[43px] mr-0 mt-[184px] mb-0 max-md:text-[32px] max-md:w-[calc(100%_-_40px)] max-md:mt-[100px] max-md:mb-0 max-md:mx-5 max-sm:text-2xl">
          Silhouette No. 1 – Vermilion
        </h2>
        
        <ProductDetails />
        <ProductAccordion />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
