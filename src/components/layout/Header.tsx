
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/components/cart/CartProvider';
import ThemeToggle from '@/components/ui/ThemeToggle';

const Header: React.FC = () => {
  const { getTotalItems } = useCart();
  const cartItemCount = getTotalItems();

  return (
    <header className="fixed w-full h-[75px] backdrop-blur-[18.5px] z-[1000] bg-[rgba(0,0,0,0.59)] dark:bg-[rgba(0,0,0,0.59)] bg-white/90 dark:bg-black/90 left-0 top-0">
      <div className="flex items-center justify-between h-full pt-[12.902px] pb-[16.634px] px-[60px] max-md:px-5 max-md:py-3">
        <Link to="/">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/25e0ca0a9e499283c36d10e0ef0c3522ea7a87e3?placeholderIfAbsent=true"
            alt="Eclypse Logo"
            className="w-[49px] h-[45px] rounded-[5px]"
          />
        </Link>
        <nav className="flex items-center gap-[70px] max-md:hidden">
          <Link to="/about" className="text-white dark:text-white text-black text-[19px] font-normal tracking-[-0.387px] hover:text-gray-300 dark:hover:text-gray-300 hover:text-gray-600 transition-colors">
            About Us
          </Link>
          <Link to="/waitlist" className="text-white dark:text-white text-black text-[19px] font-normal tracking-[-0.387px] hover:text-gray-300 dark:hover:text-gray-300 hover:text-gray-600 transition-colors">
            Waitlist
          </Link>
          <Link to="/cart" className="text-white dark:text-white text-black text-[19px] font-normal tracking-[-0.387px] hover:text-gray-300 dark:hover:text-gray-300 hover:text-gray-600 transition-colors relative">
            Cart
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link to="/checkout" className="text-black dark:text-black text-white text-[19px] font-medium tracking-[-0.387px] bg-white dark:bg-white bg-black px-[38.692px] py-[14.51px] rounded-[8.706px] hover:bg-gray-100 dark:hover:bg-gray-100 hover:bg-gray-800 transition-colors">
            Buy
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
