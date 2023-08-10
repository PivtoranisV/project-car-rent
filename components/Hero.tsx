import React from 'react';

const Hero = () => {
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="sm:px-16 px-6 flex-1 pt-36">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
          JavCars - quickly and easily find and rent a car!
        </h1>
        <p className="text-[27px] text-black-100 font-light mt-5">
          Drive premium, pay economy. Get affordable access to a wide selection
          of premium car rentals.
        </p>
      </div>
    </div>
  );
};

export default Hero;
