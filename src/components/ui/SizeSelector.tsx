import React, { useState } from 'react';

type Size = 'XS' | 'S' | 'M' | 'L' | 'XL';

interface SizeSelectorProps {
  onSizeChange?: (size: Size) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ onSizeChange }) => {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const sizes: Size[] = ['XS', 'S', 'M', 'L', 'XL'];

  const handleSizeSelect = (size: Size) => {
    setSelectedSize(size);
    if (onSizeChange) {
      onSizeChange(size);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-[23px] mb-[21px]">
        <div className="text-[#767676] text-xl font-medium tracking-[-0.4px]">
          Please select a size
        </div>
        <button className="text-[#767676] text-[15px] font-medium tracking-[-0.3px] underline">
          Size chart
        </button>
      </div>
      <div className="flex gap-8 mb-[87px] max-md:flex-wrap max-md:gap-[15px] max-sm:gap-2.5">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => handleSizeSelect(size)}
            className={`w-[82px] h-[49px] rounded text-[15px] font-medium tracking-[-0.3px] px-[31px] py-[15px] max-sm:w-[calc(20%_-_8px)] max-sm:min-w-[60px] max-sm:px-[15px] max-sm:py-2.5 ${
              selectedSize === size
                ? 'bg-black text-white'
                : 'bg-[#D9D9D9] text-[#767676]'
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
