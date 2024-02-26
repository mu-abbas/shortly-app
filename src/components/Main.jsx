import useLocalStorage from '../hooks/useLocalStorage';
import CTA from './CTA';
import Features from './Features';
import Shorten from './Shorten';
import Shorts from './Shorts';
import Stat from './Stat';

export default function Main() {
  const [shorts, setShorts] = useLocalStorage([], 'shorts');

  return (
    <main className="bg-darkViolet/10">
      <div className="container px-6 md:px-12 mx-auto">
        <Shorten setShorts={setShorts} />
        <Shorts shorts={shorts} setShorts={setShorts} />
        <Stat />
        <Features />
      </div>
      <CTA />
    </main>
  );
}
