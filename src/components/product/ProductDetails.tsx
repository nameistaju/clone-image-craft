import React, { useState } from 'react';
import SizeSelector from '../ui/SizeSelector';

type Size = 'XS' | 'S' | 'M' | 'L' | 'XL';

const ProductDetails: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleSizeChange = (size: Size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      setIsAddedToCart(true);
      setTimeout(() => setIsAddedToCart(false), 2000);
      // Here you would typically dispatch to a cart state manager
    } else {
      alert('Please select a size first');
    }
  };

  return (
    <section className="w-full h-[912px] relative bg-[#F7F7F7] mt-[242px] max-md:h-auto max-md:mt-[150px] max-md:px-5 max-md:py-10">
      <div className="absolute w-[704px] h-[913px] left-0 -top-px max-md:relative max-md:w-full max-md:h-[300px] max-md:mb-10" />
      <div className="absolute w-[654px] left-[736px] top-[54px] max-md:relative max-md:w-full max-md:left-0 max-md:top-0">
        <p className="w-[539px] text-black text-[15px] font-medium tracking-[-0.3px] mb-[99px]">
          A tailored composition in motion. Cut from structured wool with a
          sculpted shoulder and softened hem, this piece captures presence
          without force. Worn here in the stillness of a city in motion.
        </p>
        <div className="flex gap-[15px] mb-[50px] max-md:flex-wrap max-md:gap-2.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4cdbf8bdebec5334f2ba02d67ceda2a3dae858d?placeholderIfAbsent=true"
            alt="Product thumbnail 1"
            className="w-52 h-[199px] max-md:w-[calc(33%_-_7px)] max-md:h-[120px] max-sm:w-[calc(50%_-_5px)] max-sm:h-[100px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a0d5d214a2dcd8a34fe3cf4832385e877f78574?placeholderIfAbsent=true"
            alt="Product thumbnail 2"
            className="w-52 h-[199px] max-md:w-[calc(33%_-_7px)] max-md:h-[120px] max-sm:w-[calc(50%_-_5px)] max-sm:h-[100px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a1c4bb47b419308726822a91ad76260a462c468?placeholderIfAbsent=true"
            alt="Product thumbnail 3"
            className="w-52 h-[199px] max-md:w-[calc(33%_-_7px)] max-md:h-[120px] max-sm:w-[calc(50%_-_5px)] max-sm:h-[100px]"
          />
        </div>
        <div className="w-[654px] h-0 bg-[#D9D9D9] mb-[54px]" />
        <div className="mb-[82px]">
          <div className="text-[#111] text-4xl font-medium tracking-[-0.72px] mb-[18px]">
            ₹ 7,999
          </div>
          <div className="text-[#767676] text-[15px] font-normal tracking-[-0.3px]">
            MRP incl. of all taxes
          </div>
        </div>
        
        <SizeSelector onSizeChange={handleSizeChange} />
        
        <div className="w-[654px] h-0 bg-[#D9D9D9] mb-[85px]" />
        <div className="flex gap-8 max-md:flex-col max-md:gap-5">
          <button 
            onClick={handleAddToCart}
            className={`w-[196px] h-[66px] text-[#0D0D0D] text-[19px] font-medium tracking-[-0.387px] px-[30px] py-[14.51px] rounded-[8.706px] border-2 border-solid border-[#C3C3C3] max-md:w-full transition-colors ${isAddedToCart ? 'bg-green-100 border-green-500' : ''}`}
          >
            {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
          <button className="w-[428px] h-[66px] text-white text-[19px] font-medium tracking-[-0.387px] bg-black px-[137px] py-[14.51px] rounded-[8.706px] max-md:w-full">
            Buy
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
