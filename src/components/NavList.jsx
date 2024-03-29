import CTAButton from './CTAButton';

export default function NavList() {
  return (
    <ul className="hidden lg:flex justify-between flex-1 gap-14 items-center flex-row lg:bg-transparent bg-darkViolet">
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
