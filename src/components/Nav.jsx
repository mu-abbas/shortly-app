import Logo from './Logo';
import NavList from './NavList';
import CrossButton from './CrossButton';
import { useState } from 'react';
import MobileNavList from './MobileNavList';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="mx-auto p-8 md:p-10 flex justify-between gap-16 items-center lg:text-lg xl:text-xl">
      <Logo />
      <NavList />
      <MobileNavList isOpen={isOpen} />
      <CrossButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}
