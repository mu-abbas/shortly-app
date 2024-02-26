import Logo from './Logo';
import facebook from '../assets/images/icon-facebook.svg';
import twitter from '../assets/images/icon-twitter.svg';
import pinterest from '../assets/images/icon-pinterest.svg';
import instagram from '../assets/images/icon-instagram.svg';

export default function Footer() {
  return (
    <footer className="bg-veryDarkViolet text-center p-12 lg:p-16">
      <div className="container space-y-12 md:flex md:flex-row md:justify-between md:space-y-0 md:gap-8 lg:gap-16 xl:gap-24 mx-auto">
        <div className="invert sepia-[0.03] saturate-0 hue-rotate-[168deg] brightness-[1.03] contrast-[2] flex justify-center md:mr-auto w-30">
          <Logo />
        </div>

        <div className="space-y-5 md:text-left">
          <h4 className="text-white text-lg">Features</h4>
          <ul className="space-y-3">
            <li className="text-grayishViolet hover:text-white hover:scale-[1.01] transition duration-300 text-sm active:scale-[0.98]">
              <a href="#">Link Shortening</a>
            </li>
            <li className="text-grayishViolet hover:text-white hover:scale-[1.01] transition duration-300 text-sm active:scale-[0.98]">
              <a href="#">Branded Links</a>
            </li>
            <li className="text-grayishViolet hover:text-white hover:scale-[1.01] transition duration-300 text-sm active:scale-[0.98]">
              <a href="#">Analytics</a>
            </li>
          </ul>
        </div>

        <div className="space-y-5 md:text-left">
          <h4 className="text-white text-lg">Resources</h4>
          <ul className="space-y-3">
            <li className="text-grayishViolet hover:text-white hover:scale-[1.01] transition duration-300 text-sm active:scale-[0.98]">
              <a href="#">Blog</a>
            </li>
            <li className="text-grayishViolet hover:text-white hover:scale-[1.01] transition duration-300 text-sm active:scale-[0.98]">
              <a href="#">Developers</a>
            </li>
            <li className="text-grayishViolet hover:text-white hover:scale-[1.01] transition duration-300 text-sm active:scale-[0.98]">
              <a href="#">Support</a>
            </li>
          </ul>
        </div>

        <div className="space-y-5 md:text-left">
          <h4 className="text-white text-lg">Company</h4>
          <ul className="space-y-3">
            <li className="text-grayishViolet hover:text-white hover:scale-[1.01] transition duration-300 text-sm active:scale-[0.98]">
              <a href="#">About</a>
            </li>
            <li className="text-grayishViolet hover:text-white hover:scale-[1.01] transition duration-300 text-sm active:scale-[0.98]">
              <a href="#">Our Team</a>
            </li>
            <li className="text-grayishViolet hover:text-white hover:scale-[1.01] transition duration-300 text-sm active:scale-[0.98]">
              <a href="#">Careers</a>
            </li>
            <li className="text-grayishViolet hover:text-white hover:scale-[1.01] transition duration-300 text-sm active:scale-[0.98]">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="mx-auto max-w-max md:mx-0">
          <ul className="flex gap-5">
            <li className="size-6 hover:scale-[1.05] transition duration-300 active:scale-[0.98]">
              <a href="#">
                <img src={facebook} alt="facebook icon" />
              </a>
            </li>
            <li className="size-6 hover:scale-[1.05] transition duration-300 active:scale-[0.98]">
              <a href="#">
                <img src={twitter} alt="twitter icon" />
              </a>
            </li>
            <li className="size-6 hover:scale-[1.05] transition duration-300 active:scale-[0.98]">
              <a href="#">
                <img src={pinterest} alt="pinterest icon" />
              </a>
            </li>
            <li className="size-6 hover:scale-[1.05] transition duration-300 active:scale-[0.98]">
              <a href="#">
                <img src={instagram} alt="instagram icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
