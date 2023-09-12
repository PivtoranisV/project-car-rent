'use client';
import Image from 'next/image';
import Button from './Button';

const Hero = () => {
  const clickHandler = () => {};
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
        <Button
          title="Explore Cars"
          style="bg-primary-blue text-white rounded-full mt-10"
          handleClick={clickHandler}
        />
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[350px] z-0 drop-shadow-[0_25px_5px_rgba(0,0,0,0.25)]">
          <Image
            src={'/hero.png'}
            alt="yellow car"
            fill
            className="object-contain"
          />
          <div className="xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[350px] overflow-hidden" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
