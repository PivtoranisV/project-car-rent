import { MouseEventHandler } from 'react';

export interface ButtonProps {
  title: string;
  style?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
