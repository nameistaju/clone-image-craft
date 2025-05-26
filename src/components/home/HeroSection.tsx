import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative mt-[75px] pt-[122px]">
      <div className="relative w-[383px] h-[129px] ml-11 mb-[68px] max-md:w-full max-md:max-w-[350px] max-md:ml-5">
        <h1 className="text-white text-[107px] font-normal tracking-[-1.071px] absolute w-[356px] h-[129px] left-0 top-0 max-md:text-[80px] max-md:w-[280px] max-sm:text-6xl max-sm:w-[220px]">
          Eclypse
        </h1>
        <svg 
          width="27" 
          height="27" 
          viewBox="0 0 27 27" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="r-circle" 
          style={{ position: "absolute", left: "356px", top: "28px", width: "27px", height: "26px" }}
        >
          <g clipPath="url(#clip0_8_30)">
            <path d="M13.381 26.4307C20.6351 26.4307 26.5233 20.5424 26.5233 13.2884C26.5233 6.03438 20.6351 0.146133 13.381 0.146133C6.12702 0.146133 0.23877 6.03438 0.23877 13.2884C0.23877 20.5424 6.12702 26.4307 13.381 26.4307ZM13.381 24.2402C7.32528 24.2402 2.42915 19.3442 2.42915 13.2884C2.42915 7.23264 7.32528 2.33651 13.381 2.33651C19.4368 2.33651 24.3329 7.23264 24.3329 13.2884C24.3329 19.3442 19.4368 24.2402 13.381 24.2402Z" fill="white" fillOpacity="0.85"></path>
            <path d="M10.0696 19.1895C10.7396 19.1895 11.1133 18.7515 11.1133 18.0429V14.8345H13.5098L15.7388 18.5066C16.048 19.0092 16.3186 19.1895 16.7696 19.1895C17.3236 19.1895 17.7102 18.8288 17.7102 18.3133C17.7102 18.0299 17.6329 17.8237 17.4653 17.566L15.5327 14.5382C17.053 14.0356 18.0323 12.6828 18.0323 11.0851C18.0323 8.76591 16.3702 7.29707 13.7546 7.29707H10.0568C9.39964 7.29707 9.05176 7.76091 9.05176 8.45669V18.0429C9.05176 18.7256 9.41252 19.1895 10.0696 19.1895ZM11.1133 13.327V8.869H13.5098C14.9915 8.869 15.9966 9.69361 15.9966 11.1367C15.9966 12.5411 15.0173 13.327 13.4582 13.327H11.1133Z" fill="white" fillOpacity="0.85"></path>
          </g>
          <defs>
            <clipPath id="clip0_8_30">
              <rect width="26.7612" height="26.2973" fill="white" transform="translate(0.23877 0.146133)"></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="relative w-[1339px] h-[530px] overflow-hidden ml-11 rounded-[5px] max-md:w-[calc(100%_-_40px)] max-md:h-[400px] max-md:ml-5 max-sm:h-[300px]">
        <div className="absolute top-[-209px] left-[-21px] w-[1371px] h-[771px]" />
        <h2 className="absolute w-[474px] h-[41px] text-white text-[35px] font-normal tracking-[-0.692px] left-[791px] top-[469px] max-md:text-2xl max-md:w-[300px] max-md:left-5 max-md:top-[350px] max-sm:text-lg max-sm:w-[250px] max-sm:top-[250px]">
          A silhouette worth remembering
        </h2>
        <div className="absolute flex items-center gap-2 right-0 top-[127px]">
          <svg 
            width="12" 
            height="12" 
            viewBox="0 0 12 12" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="c-circle" 
            style={{ width: "11px", height: "11px" }}
          >
            <g clipPath="url(#clip0_8_42)">
              <path d="M5.46162 11.0804C8.47623 11.0804 10.9233 8.63336 10.9233 5.61876C10.9233 2.60415 8.47623 0.157135 5.46162 0.157135C2.44702 0.157135 0 2.60415 0 5.61876C0 8.63336 2.44702 11.0804 5.46162 11.0804ZM5.46162 10.1701C2.94499 10.1701 0.910272 8.13539 0.910272 5.61876C0.910272 3.10212 2.94499 1.06741 5.46162 1.06741C7.97826 1.06741 10.013 3.10212 10.013 5.61876C10.013 8.13539 7.97826 10.1701 5.46162 10.1701Z" fill="white" fillOpacity="0.85"></path>
              <path d="M5.46171 8.13001C6.40949 8.13001 7.16444 7.68024 7.42149 6.95736C7.45894 6.86102 7.46963 6.79139 7.46963 6.71106C7.46963 6.4862 7.3251 6.34698 7.10018 6.34698C6.93953 6.34698 6.83245 6.42726 6.7468 6.60935C6.52726 7.13408 6.07749 7.42325 5.47242 7.42325C4.62104 7.42325 4.04811 6.67893 4.04811 5.57056C4.04811 4.46217 4.62104 3.71254 5.47242 3.71254C6.07749 3.71254 6.52726 4.00168 6.7468 4.53178C6.83245 4.71383 6.93953 4.7888 7.10018 4.7888C7.3251 4.7888 7.46963 4.64958 7.46963 4.42469C7.46963 4.33901 7.45894 4.27476 7.42149 4.17838C7.15907 3.46087 6.40949 3.00574 5.46171 3.00574C4.07488 3.00574 3.18604 4.00703 3.18604 5.57056C3.18604 7.13407 4.06953 8.13001 5.46171 8.13001Z" fill="white" fillOpacity="0.85"></path>
            </g>
            <defs>
              <clipPath id="clip0_8_42">
                <rect width="11.1214" height="10.9286" fill="white" transform="translate(0 0.157135)"></rect>
              </clipPath>
            </defs>
          </svg>
          <span className="text-white text-[15px] font-medium tracking-[-0.291px]">
            2025
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
