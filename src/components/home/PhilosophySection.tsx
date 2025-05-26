import React from 'react';
import { Link } from 'react-router-dom';

const PhilosophySection: React.FC = () => {
  return (
    <section className="pt-[146px] pb-0 px-[50px] max-md:pt-20 max-md:pb-0 max-md:px-5">
      <p className="w-[800px] text-white text-5xl font-normal tracking-[-0.96px] mb-[253px] max-md:text-[32px] max-md:w-full max-md:mb-[150px] max-sm:text-2xl max-sm:mb-[100px]">
        Rooted in a philosophy of quiet luxury, our garments are designed to
        speak softly in cut, in movement, in presence.
      </p>
      <div className="relative w-[312px] h-[41px]">
        <Link to="/about" className="group">
          <span className="text-[#E3E3E3] text-2xl font-normal tracking-[-0.48px] absolute w-[271px] h-[29px] left-0 top-0.5">
            Learn more about Eclypse
          </span>
          <div className="absolute w-[301px] h-0 bg-[#E3E3E3] left-0 top-[41px]" />
          <svg 
            width="39" 
            height="39" 
            viewBox="0 0 39 39" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="arrow-right transition-transform group-hover:translate-x-1" 
            style={{ position: "absolute", right: "0", top: "0", width: "28px", height: "28px", transform: "rotate(-45deg)" }}
          >
            <path d="M13.802 25.1686L25.1684 13.8021" stroke="#E3E3E3" strokeWidth="2.29637" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M13.802 13.8021H25.1684V25.1686" stroke="#E3E3E3" strokeWidth="2.29637" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default PhilosophySection;
