import logo from '../assets/images/logo.svg';

export default function Logo() {
  return (
    <div>
      <img src={logo} alt="logo" className="w-30 lg:w-44 fill-white" />
    </div>
  );
}
