import CTAButton from './CTAButton';

export default function MobileNavList({ isOpen }) {
  return (
    <ul
      className={`origin-top-right flex items-center absolute bg-darkViolet left-[50%] -translate-x-[50%] top-[15%] z-10 p-12 rounded-xl text-center flex-col text-white gap-8 w-[90%] transition duration-300 lg:hidden ${
        isOpen ? 'scale-100' : 'scale-0'
      }`}
    >
      <li className="font-semibold lg:text-grayishViolet lg:hover:text-darkViolet transition duration-300 hover:scale-105">
        <a href="#">Features</a>
      </li>
      <li className="font-semibold lg:text-grayishViolet lg:hover:text-darkViolet transition duration-300 hover:scale-105">
        <a href="#">Pricing</a>
      </li>
      <li className="font-semibold lg:text-grayishViolet lg:hover:text-darkViolet transition duration-300 hover:scale-105">
        <a href="#">Resources</a>
      </li>
      <li className="font-semibold lg:text-grayishViolet lg:hover:text-darkViolet transition duration-300 hover:scale-105 lg:ml-auto">
        <a href="#">Login</a>
      </li>
      <li>
        <CTAButton>Sign Up</CTAButton>
      </li>
    </ul>
  );
}
