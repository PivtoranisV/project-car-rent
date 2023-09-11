import { MouseEventHandler } from 'react';

export interface ButtonProps {
  title: string;
  style?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyle?: string;
}

export interface SearchMakeProps {
  make: string;
  setMake: (make: string) => void;
}

export interface CarsProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
