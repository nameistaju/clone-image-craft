
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#070707]">
      <Header />
      <main className="pt-[75px]">
        <section className="px-[50px] py-20 max-md:px-5">
          <h1 className="text-white text-6xl font-normal tracking-[-1.2px] mb-12 max-md:text-4xl">
            About Eclypse
          </h1>
          
          <div className="max-w-4xl">
            <p className="text-white text-2xl font-normal leading-relaxed mb-8 max-md:text-lg">
              Rooted in a philosophy of quiet luxury, our garments are designed to
              speak softly in cut, in movement, in presence.
            </p>
            
            <p className="text-[#D2D2D2] text-lg leading-relaxed mb-8">
              Eclypse represents the intersection of timeless design and contemporary craftsmanship. 
              Each piece is meticulously crafted to embody understated elegance, creating garments 
              that transcend fleeting trends.
            </p>
            
            <p className="text-[#D2D2D2] text-lg leading-relaxed mb-8">
              Our commitment to quality begins with the selection of the finest materials, 
              sourced from ethical suppliers who share our values of sustainability and 
              responsible production.
            </p>
            
            <p className="text-[#D2D2D2] text-lg leading-relaxed">
              Founded with the belief that true luxury lies in simplicity, Eclypse continues 
              to redefine modern fashion through thoughtful design and exceptional attention to detail.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
