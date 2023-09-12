'use client';
import Image from 'next/image';
import { Fragment, useState, useEffect } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { CarsProps, CarImageType } from '@/types';

import { AiOutlineClose } from 'react-icons/ai';
import { getCarImage } from '@/utils';

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarsProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  const [carImages, setCarImages] = useState<CarImageType[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await getCarImage(car, 2, 4);
        setCarImages(data.results);
      } catch (error) {
        console.error('Error fetching car image:', error);
      }
    };
    fetchImages();
  }, [car]);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] p-6 overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                  >
                    <AiOutlineClose />
                  </button>
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 rounded-lg">
                      {carImages && (
                        <Image
                          src={carImages[0]?.urls?.regular}
                          alt={car.make}
                          fill
                          priority
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="flex gap-3">
                      <div className="relative h-24 flex-1 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={carImages[3]?.urls?.regular}
                          alt={car.make}
                          fill
                          priority
                          className="object-cover"
                        />
                      </div>
                      <div className="relative h-24 flex-1 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={carImages[1]?.urls?.regular}
                          alt={car.make}
                          fill
                          priority
                          className="object-cover"
                        />
                      </div>
                      <div className="relative h-24 flex-1 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={carImages[2]?.urls?.regular}
                          alt={car.make}
                          fill
                          priority
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="capitalize font-semibold text-xl">
                      {car.make} {car.model}
                    </h2>
                    <div className="flex flex-wrap justify-between gap-4 mt-3">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between gap-5 w-full text-right"
                        >
                          <h4 className="text-grey capitalize">
                            {key.split('_').join(' ')}
                          </h4>
                          <p className="text-black-100 font-semibold capitalize">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
