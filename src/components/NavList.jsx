import CTAButton from './CTAButton';

export default function NavList() {
  return (
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
        <CTAButton>Sign Up</CTAButton>
      </li>
    </ul>
  );
}
