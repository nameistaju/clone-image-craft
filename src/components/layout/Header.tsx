import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="fixed w-full h-[75px] backdrop-blur-[18.5px] z-[1000] bg-[rgba(0,0,0,0.59)] left-0 top-0">
      <div className="flex items-center justify-between h-full pt-[12.902px] pb-[16.634px] px-[60px] max-md:px-5 max-md:py-3">
        <Link to="/">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/25e0ca0a9e499283c36d10e0ef0c3522ea7a87e3?placeholderIfAbsent=true"
            alt="Eclypse Logo"
            className="w-[49px] h-[45px] rounded-[5px]"
          />
        </Link>
        <nav className="flex items-center gap-[70px] max-md:hidden">
          <Link to="/about" className="text-white text-[19px] font-normal tracking-[-0.387px]">
            About Us
          </Link>
          <Link to="/waitlist" className="text-white text-[19px] font-normal tracking-[-0.387px]">
            Waitlist
          </Link>
          <Link to="/cart" className="text-white text-[19px] font-normal tracking-[-0.387px]">
            Cart
          </Link>
        </nav>
        <Link to="/buy" className="text-black text-[19px] font-medium tracking-[-0.387px] bg-white px-[38.692px] py-[14.51px] rounded-[8.706px]">
          Buy
        </Link>
      </div>
    </header>
  );
};

export default Header;
