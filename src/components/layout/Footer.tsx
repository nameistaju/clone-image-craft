import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="flex w-[1340px] items-end gap-6 h-[215px] bg-[#090808] ml-[50px] mr-0 mt-[71px] mb-0 p-6 max-md:w-[calc(100%_-_40px)] max-md:flex-col max-md:items-start max-md:gap-10 max-md:h-auto max-md:mt-[50px] max-md:mb-0 max-md:mx-5 max-md:px-5 max-md:py-10 max-sm:px-[15px] max-sm:py-[30px]">
      <div className="flex flex-col items-start gap-[67px]">
        <div>
          <svg width="118" height="35" viewBox="0 0 118 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="footer-logo">
            <text fill="#D4D5D9" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Neue Montreal" fontSize="32" letterSpacing="-0.04em">
              <tspan x="0" y="28.936">Eclypse</tspan>
            </text>
            <path opacity="0.6" d="M111 7L117 1M117 1L111.857 1M117 1V6.14286" stroke="#D4D5D9" strokeWidth="1.25"></path>
          </svg>
        </div>
        <nav className="flex flex-col items-start gap-1">
          <div className="flex items-start gap-4 max-sm:flex-wrap">
            <Link to="/" className="text-[#D4D5D9] text-sm font-medium leading-[19.6px]">
              Home
            </Link>
            <div className="text-[#D4D5D9] text-sm font-normal leading-[19.6px] opacity-40">
              /
            </div>
            <Link to="/about" className="text-[#D4D5D9] text-sm font-medium leading-[19.6px]">
              About
            </Link>
            <div className="text-[#D4D5D9] text-sm font-normal leading-[19.6px] opacity-40">
              /
            </div>
            <Link to="/buy" className="text-[#D4D5D9] text-sm font-medium leading-[19.6px]">
              Buy
            </Link>
            <div className="text-[#D4D5D9] text-sm font-normal leading-[19.6px] opacity-40">
              /
            </div>
          </div>
          <div className="flex items-start gap-4 max-sm:flex-wrap">
            <Link to="/customers" className="text-[#D4D5D9] text-sm font-medium leading-[19.6px]">
              Our Customers
            </Link>
            <div className="text-[#D4D5D9] text-sm font-normal leading-[19.6px] opacity-40">
              /
            </div>
          </div>
          <Link to="/contacts" className="text-[#D4D5D9] text-sm font-medium leading-[19.6px] gap-4 max-sm:flex-wrap">
            Contacts
          </Link>
        </nav>
      </div>
      <div className="flex flex-col justify-end items-start gap-8 flex-[1_0_0] self-stretch">
        <div className="flex flex-col items-start gap-2">
          <div className="text-[#D4D5D9] text-[10px] font-medium leading-[13px] tracking-[1.5px] uppercase opacity-60">
            CONTACT
          </div>
          <a href="tel:+911234567890" className="text-[#D4D5D9] text-xl font-medium leading-6 tracking-[-0.4px] max-sm:text-base">
            +91 123-456-7890
          </a>
        </div>
        <div className="flex flex-col items-start gap-2">
          <div className="text-[#D4D5D9] text-[10px] font-medium leading-[13px] tracking-[1.5px] uppercase opacity-60">
            EMAIL
          </div>
          <a href="mailto:eclypse@gmail.com" className="text-[#D4D5D9] text-sm font-normal leading-[19.6px]">
            eclypse@gmail.com
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-end items-start gap-8 flex-[1_0_0] self-stretch" />
      <div className="flex flex-col justify-between items-end flex-[1_0_0] self-stretch max-md:w-full max-md:flex-row max-md:justify-between max-md:items-center max-sm:flex-col max-sm:gap-5 max-sm:items-start">
        <button onClick={scrollToTop} aria-label="Scroll to top" className="focus:outline-none">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="to-top-button">
            <circle cx="20" cy="20" r="20" fill="white"></circle>
            <path d="M20 27L20 13M20 13L14 19M20 13L26 19" stroke="black" strokeWidth="1.5"></path>
          </svg>
        </button>
        <div className="text-[#D4D5D9] text-[10px] font-medium leading-[13px] opacity-60">
          © Eclypse 2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;
