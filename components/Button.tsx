'use client';

import { ButtonProps } from '@/types';

const Button = ({ title, handleClick, style, textStyle }: ButtonProps) => {
  return (
    <button
      disabled={false}
      type="button"
      onClick={handleClick}
      className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${style}`}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>
    </button>
  );
};

export default Button;
