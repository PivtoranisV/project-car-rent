'use client';
import { useState, Fragment } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { PiCaretCircleUpDownDuotone } from 'react-icons/pi';

import { cars } from '@/constants';
import { SearchMakeProps } from '@/types';

const SearchMake = ({ make, setMake }: SearchMakeProps) => {
  const [query, setQuery] = useState('');

  const filteredCars =
    query === ''
      ? cars
      : cars.filter((car) => car.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="flex-1 max-sm:w-full flex justify-start items-center">
      <Combobox value={make} onChange={setMake}>
        <div className="relative w-full">
          <Combobox.Button className="absolute inset-y-0 left-0 flex items-center pl-3">
            <PiCaretCircleUpDownDuotone className="text-2xl" />
          </Combobox.Button>
          <Combobox.Input
            className="w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm"
            placeholder="Choose Brand"
            displayValue={(make: string) => make}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options
              className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              static
            >
              {filteredCars.length === 0 && query !== '' ? (
                <Combobox.Option
                  className="cursor-default select-none py-2 pl-10 pr-4"
                  value={query}
                >
                  Nothing Found
                </Combobox.Option>
              ) : (
                filteredCars.map((car) => (
                  <Combobox.Option
                    key={car}
                    value={car}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? 'bg-primary-blue text-white' : 'text-gray-900'
                      }`
                    }
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {car}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchMake;
