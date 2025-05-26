
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/components/cart/CartProvider';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { getTotalItems } = useCart();
  const cartItemCount = getTotalItems();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full h-[75px] backdrop-blur-[18.5px] z-[1000] bg-black/60 dark:bg-black/60 light:bg-white/90 border-b border-white/10 dark:border-white/10 light:border-gray-200">
      <div className="flex items-center justify-between h-full pt-[12.902px] pb-[16.634px] px-4 sm:px-[60px]">
        <Link to="/">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/25e0ca0a9e499283c36d10e0ef0c3522ea7a87e3?placeholderIfAbsent=true"
            alt="Eclypse Logo"
            className="w-[39px] h-[35px] sm:w-[49px] sm:h-[45px] rounded-[5px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-[50px] lg:gap-[70px]">
          <Link to="/about" className="text-white dark:text-white light:text-black text-[17px] lg:text-[19px] font-normal tracking-[-0.387px] hover:text-gray-300 dark:hover:text-gray-300 light:hover:text-gray-600 transition-colors">
            About Us
          </Link>
          <Link to="/waitlist" className="text-white dark:text-white light:text-black text-[17px] lg:text-[19px] font-normal tracking-[-0.387px] hover:text-gray-300 dark:hover:text-gray-300 light:hover:text-gray-600 transition-colors">
            Waitlist
          </Link>
          <Link to="/cart" className="text-white dark:text-white light:text-black text-[17px] lg:text-[19px] font-normal tracking-[-0.387px] hover:text-gray-300 dark:hover:text-gray-300 light:hover:text-gray-600 transition-colors relative">
            Cart
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeToggle />
          
          {/* Desktop Buy Button */}
          <Link to="/checkout" className="hidden sm:block text-black dark:text-black light:text-white text-[17px] lg:text-[19px] font-medium tracking-[-0.387px] bg-white dark:bg-white light:bg-black px-6 lg:px-[38.692px] py-2 lg:py-[14.51px] rounded-[8.706px] hover:bg-gray-100 dark:hover:bg-gray-100 light:hover:bg-gray-800 transition-colors">
            Buy
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white dark:text-white light:text-black p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 dark:bg-black/95 light:bg-white/95 backdrop-blur-lg border-t border-white/10 dark:border-white/10 light:border-gray-200">
          <nav className="flex flex-col p-4 space-y-4">
            <Link 
              to="/about" 
              className="text-white dark:text-white light:text-black text-lg font-normal hover:text-gray-300 dark:hover:text-gray-300 light:hover:text-gray-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/waitlist" 
              className="text-white dark:text-white light:text-black text-lg font-normal hover:text-gray-300 dark:hover:text-gray-300 light:hover:text-gray-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Waitlist
            </Link>
            <Link 
              to="/cart" 
              className="text-white dark:text-white light:text-black text-lg font-normal hover:text-gray-300 dark:hover:text-gray-300 light:hover:text-gray-600 transition-colors relative flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cart
              {cartItemCount > 0 && (
                <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <Link 
              to="/checkout" 
              className="text-black dark:text-black light:text-white bg-white dark:bg-white light:bg-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-100 light:hover:bg-gray-800 transition-colors text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Buy
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
