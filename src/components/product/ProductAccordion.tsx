import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  index: number;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  children?: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ 
  title, 
  index, 
  activeIndex, 
  setActiveIndex,
  children 
}) => {
  const isActive = activeIndex === index;

  const toggleAccordion = () => {
    setActiveIndex(isActive ? null : index);
  };

  return (
    <div className="mb-[153px]">
      <button 
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center"
        aria-expanded={isActive}
      >
        <h3 className="w-[800px] text-white text-[32px] font-normal tracking-[-0.64px] mb-10 max-md:text-2xl max-md:w-full max-sm:text-xl text-left">
          {title}
        </h3>
      </button>
      {isActive && (
        <div className="text-white text-lg mb-10 max-w-[800px]">
          {children || (
            <p>
              More information about {title.toLowerCase()} will be available soon.
            </p>
          )}
        </div>
      )}
      <div className="w-[1342px] h-0 bg-[#3D3D3D] max-md:w-full" />
    </div>
  );
};

const ProductAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative ml-[50px] mr-0 mt-[134px] mb-0 max-md:mt-20 max-md:mb-0 max-md:mx-5">
      <div className="accordion">
        <AccordionItem 
          title="Size & Fit" 
          index={0} 
          activeIndex={activeIndex} 
          setActiveIndex={setActiveIndex}
        >
          <p>
            This garment features a tailored fit with a sculpted shoulder. We recommend selecting your usual size.
            For a more relaxed fit, consider sizing up. The model is 6'1" and wears a size M.
          </p>
          <ul className="list-disc pl-5 mt-4">
            <li>Chest: Measure around the fullest part of your chest</li>
            <li>Waist: Measure around your natural waistline</li>
            <li>Hips: Measure around the fullest part of your hips</li>
          </ul>
        </AccordionItem>
        
        <AccordionItem 
          title="Delivery & Returns" 
          index={1} 
          activeIndex={activeIndex} 
          setActiveIndex={setActiveIndex}
        >
          <p>
            Free standard delivery on all orders over ₹5,000. Delivery typically takes 3-5 business days.
            Express delivery is available for an additional fee.
          </p>
          <p className="mt-4">
            Returns are accepted within 30 days of delivery. Items must be unworn, unwashed, and with all original tags attached.
          </p>
        </AccordionItem>
        
        <AccordionItem 
          title="How This Was Made" 
          index={2} 
          activeIndex={activeIndex} 
          setActiveIndex={setActiveIndex}
        >
          <p>
            This piece is crafted from premium wool sourced from ethical farms. The fabric is woven in Italy
            and the garment is constructed by skilled artisans in our atelier in India.
          </p>
          <p className="mt-4">
            We prioritize sustainable production methods and fair labor practices throughout our supply chain.
          </p>
        </AccordionItem>
      </div>
      
      <svg 
        width="35" 
        height="341" 
        viewBox="0 0 35 341" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="accordion-arrows" 
        style={{ position: "absolute", right: "50px", top: "0", width: "31px", height: "337px" }}
      >
        <path 
          d="M16.909 1.79541V32.0227M16.909 32.0227L32.0227 16.909M16.909 32.0227L1.79541 16.909M17.909 156.795V187.023M17.909 187.023L33.0227 171.909M17.909 187.023L2.79541 171.909M17.909 308.796V339.023M17.909 339.023L33.0227 323.909M17.909 339.023L2.79541 323.909" 
          stroke="#F7F7F7" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        ></path>
      </svg>
    </section>
  );
};

export default ProductAccordion;
