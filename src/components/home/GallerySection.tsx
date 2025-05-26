import React from 'react';

const GallerySection: React.FC = () => {
  return (
    <section className="grid grid-cols-[424px_424px_424px] grid-rows-[489px_397px] gap-[35px] w-[1338px] ml-[50px] mr-0 mt-[189px] mb-0 max-md:grid max-md:grid-cols-[1fr_1fr] max-md:grid-rows-[auto_auto_auto] max-md:gap-5 max-md:w-[calc(100%_-_40px)] max-md:mt-[100px] max-md:mb-0 max-md:mx-5 max-sm:grid-cols-[1fr] max-sm:grid-rows-[auto_auto_auto_auto]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1cc1a6887abacbe2280f0a5886a74a996162318?placeholderIfAbsent=true"
        alt="Fashion gallery image 1"
        className="w-[424px] h-[397px] col-[1] row-[2] rounded-[5px] max-md:w-full max-md:h-[250px] max-md:object-cover max-sm:h-[200px]"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b995b6725eb36f5fb90660829d4286f9290d604?placeholderIfAbsent=true"
        alt="Fashion gallery image 2"
        className="w-[424px] h-[397px] col-[2] row-[2] rounded-[5px] max-md:w-full max-md:h-[250px] max-md:object-cover max-sm:h-[200px]"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/024394e1e93a1d97d294b7ab23c396c24fb4dcab?placeholderIfAbsent=true"
        alt="Fashion gallery image 3"
        className="w-[424px] h-[489px] col-[3] row-[1] rounded-[5px] max-md:w-full max-md:h-[250px] max-md:object-cover max-sm:h-[200px]"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/abf81636714d5be4c371c7b4f0bcaa87101b38b9?placeholderIfAbsent=true"
        alt="Fashion gallery image 4"
        className="w-[424px] h-[397px] col-[3] row-[2] rounded-[5px] max-md:w-full max-md:h-[250px] max-md:object-cover max-sm:h-[200px]"
      />
    </section>
  );
};

export default GallerySection;
