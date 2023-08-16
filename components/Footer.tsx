import Link from 'next/link';
import { IoCarSportSharp } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="text-black-100  mt-5 border-t border-gray-100">
      <div className="flex justify-between px-6 sm:px-16 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="flex gap-1 items-center">
            <IoCarSportSharp className="text-primary-blue text-3xl" />
            <p className="text-secondary-yellow font-extrabold">JavCars</p>
          </div>
          <p className="text-gray-400 text-base">
            JavCars {new Date().getFullYear()} <br />
            All Rights Reserved &copy;
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <h3 className="font-bold">Socials</h3>
          <div className="text-gray-400 text-base flex flex-col gap-2 sm:flex-row">
            <Link href="/">Instagram</Link>
            <Link href="/">Facebook</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
