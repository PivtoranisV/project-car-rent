import { MouseEventHandler } from 'react';

export interface ButtonProps {
  title: string;
  style?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchMakeProps {
  make: string;
  setMake: (make: string) => void;
}
