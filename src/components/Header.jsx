import Hero from './Hero';
import Nav from './Nav';

export default function Header() {
  return (
    <header className="relative">
      <Nav />
      <Hero />
    </header>
  );
}
