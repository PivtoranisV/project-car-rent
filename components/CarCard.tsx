'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { CarsProps } from '@/types';
import Button from './Button';
import CarDetails from './CarDetails';
import { PiSteeringWheelDuotone } from 'react-icons/pi';
import { GiCarWheel } from 'react-icons/gi';
import { BsFillFuelPumpFill } from 'react-icons/bs';
import { getCarImage } from '@/utils';

interface CarCardsProps {
  car: CarsProps;
}

const CarCard = ({ car }: CarCardsProps) => {
  const { make, model, combination_mpg, transmission, drive } = car;

  const [isOpen, setIsOpen] = useState(false);
  const [carImage, setCarImage] = useState(null);

  useEffect(() => {
    const fetchCarImage = async () => {
      try {
        const data = await getCarImage(car, 1, 1);
        const image = data.results[0]?.urls?.regular;
        if (image) {
          setCarImage(image);
        }
      } catch (error) {
        console.error('Error fetching car image:', error);
      }
    };
    fetchCarImage();
  }, [car]);

  return (
    <div className="group flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl">
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="text-[22px] leading-[26px] font-bold capitalize">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
        <span className="self-start text-[14px] leading-[17px] font-semibold">
          AED
        </span>
        400
        <span className="self-end text-[14px] leading-[17px] font-medium">
          /week
        </span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        {carImage && (
          <Image
            src={carImage}
            alt={make}
            fill
            priority
            className="object-contain"
          />
        )}
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <PiSteeringWheelDuotone className="text-primary-blue text-3xl" />
            <p className="text-[14px] leading-[17px]">
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <GiCarWheel className="text-secondary-yellow text-3xl" />
            <p className="text-[14px] leading-[17px]t">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <BsFillFuelPumpFill className="text-green-500 text-3xl" />
            <p className="text-[14px] leading-[17px]">{combination_mpg} MPG</p>
          </div>
        </div>
        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
          <Button
            title="View more"
            style="w-full py-[16px] rounded-full bg-primary-blue"
            textStyle="text-white text-[14px] leading-[17px] font-bold"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
