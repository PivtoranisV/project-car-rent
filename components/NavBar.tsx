import Link from 'next/link';
import { IoCarSportSharp } from 'react-icons/io5';
import Button from './Button';

const NavBar = () => {
  return (
    <header className="w-full  absolute z-10">
      <nav className="flex justify-between items-center mx-auto py-4 px-6 sm:px-16 bg-transparent text-2xl">
        <Link href="/" className="flex items-center gap-1">
          <IoCarSportSharp className="text-primary-blue text-5xl" />
          <p className="text-secondary-yellow font-extrabold">JavCars</p>
        </Link>
        <Button
          title="Sign In"
          style="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default NavBar;
