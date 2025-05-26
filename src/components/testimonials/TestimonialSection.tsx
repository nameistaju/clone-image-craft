import React from 'react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="ml-[50px] mr-0 mt-[153px] mb-0 max-md:mt-20 max-md:mb-0 max-md:mx-5">
      <div className="relative">
        <div className="mb-4">
          <h2 className="text-white text-opacity-80 text-base font-medium tracking-[0.32em] uppercase">
            OUR CUSTOMERS
          </h2>
        </div>

        <div className="relative mt-16">
          <span className="text-[#F7F7F7] text-[118.836px] font-normal leading-none absolute left-4 top-0">"</span>
          <blockquote className="pl-24 pt-8">
            <p className="text-[#D2D2D2] text-5xl font-normal leading-[52px] max-w-[900px] max-md:text-3xl max-md:leading-10 max-sm:text-2xl max-sm:leading-8">
              Understated, but unforgettable. It feels like it was made for me
            </p>
            <footer className="mt-20">
              <div className="text-[#C4C4C4] text-2xl font-normal">Random Woman</div>
              <div className="text-[#535353] text-base font-normal mt-2">NY, USA</div>
            </footer>
          </blockquote>

          <div className="absolute right-0 top-32">
            <div className="w-[63px] h-[63px] rounded-full overflow-hidden">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/25e0ca0a9e499283c36d10e0ef0c3522ea7a87e3?placeholderIfAbsent=true" alt="Customer profile" className="w-full h-full object-cover" />
            </div>
            <div className="mt-8 flex flex-col gap-4">
              <div className="w-[34.5px] h-[34.5px] rounded-full overflow-hidden opacity-26">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/25e0ca0a9e499283c36d10e0ef0c3522ea7a87e3?placeholderIfAbsent=true" alt="Customer thumbnail 1" className="w-full h-full object-cover opacity-30" />
              </div>
              <div className="w-[34.5px] h-[34.5px] rounded-full overflow-hidden opacity-26">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/25e0ca0a9e499283c36d10e0ef0c3522ea7a87e3?placeholderIfAbsent=true" alt="Customer thumbnail 2" className="w-full h-full object-cover opacity-30" />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.97 11.943L0 0.971L11.97 -11" fill="#D2D2D2"></path>
                <path d="M11.97 11.943L0 0.971L11.97 -11V11.943Z" stroke="#D2D2D2" strokeWidth="3.99048" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1342px] h-0 bg-[#3D3D3D] mt-[71px] max-md:w-full" />
    </section>
  );
};

export default TestimonialSection;
