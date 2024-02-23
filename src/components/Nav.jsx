import { useState } from 'react';
import logo from '../assets/images/logo.svg';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="mx-auto px-12 py-14 lg:py-16 lg:px-16 xl:px-24 flex justify-between gap-16 items-center">
      <img src={logo} alt="logo" className="w-30" />
      <ul className="hidden origin-top-right lg:flex justify-between flex-1 gap-16 items-center">
        <li className="font-semibold text-grayishViolet hover:text-darkViolet transition duration-300 hover:scale-105">
          <a href="#">Features</a>
        </li>
        <li className="font-semibold text-grayishViolet hover:text-darkViolet transition duration-300 hover:scale-105">
          <a href="#">Pricing</a>
        </li>
        <li className="font-semibold text-grayishViolet hover:text-darkViolet transition duration-300 hover:scale-105">
          <a href="#">Resources</a>
        </li>
        <li className="font-semibold text-grayishViolet hover:text-darkViolet transition duration-300 hover:scale-105 ml-auto">
          <a href="#">Login</a>
        </li>
        <li>
          <button className="text-white px-9 py-3 font-semibold tracking-wide rounded-full bg-cyan">Sign Up</button>
        </li>
      </ul>
      <button className="lg:hidden size-8 relative" onClick={() => setIsOpen(isOpen => !isOpen)}>
        <span
          className={`w-8 h-1 absolute left-0 transition duration-500 bg-grayishViolet origin-center -translate-y-2 ${
            isOpen ? '-rotate-45 translate-y-0' : ''
          }`}
        ></span>
        <span
          className={`w-8 h-1 absolute left-0 transition duration-500 ${
            !isOpen ? 'bg-grayishViolet ' : 'bg-transparent'
          }`}
        ></span>
        <span
          className={`w-8 h-1 absolute left-0 bg-grayishViolet  transition duration-500 origin-center translate-y-2 ${
            isOpen ? 'rotate-45 translate-y-0' : ''
          }`}
        ></span>
      </button>
    </nav>
  );
}
