import Logo from './Logo';
import NavList from './NavList';
import CrossButton from './CrossButton';

export default function Nav() {
  return (
    <nav className="mx-auto p-8 md:p-10 flex justify-between gap-16 items-center lg:text-lg xl:text-xl">
      <Logo />
      <NavList />
      <CrossButton />
    </nav>
  );
}
