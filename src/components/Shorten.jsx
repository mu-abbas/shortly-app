import { useState } from 'react';
import bgMobile from '../assets/images/bg-shorten-mobile.svg';
import bgDesktop from '../assets/images/bg-shorten-desktop.svg';

export default function Shorten({ setShorts }) {
  const [url, setUrl] = useState('');

  function handleFormSubmit(e) {
    e.preventDefault();
    const data = new URLSearchParams();
    data.append('url', url);
    async function fetching() {
      try {
        const res = await fetch('https://spoo.me/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
          },
          body: data,
        });
        if (!res.ok) throw new Error('Failed to connect to the server');
        const { short_url } = await res.json();
        if (!short_url) throw new Error('Error shortening your url, please try again!');
        setShorts(shorts => [...shorts, { url, short_url }]);
        console.log(short_url);
      } catch (error) {
        console.log(error.message);
      } finally {
        setUrl('');
      }
    }
    fetching();
  }

  return (
    <section className="relative bg-darkViolet p-6 md:p-8 rounded-md -translate-y-[50%] overflow-hidden max-w-lg md:max-w-4xl mx-auto">
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 md:gap-8 md:flex-row">
        <input
          type="url"
          value={url}
          name="url"
          onChange={e => setUrl(e.target.value)}
          className="z-10 py-2 md:py-3 px-4 md:px-6 rounded-md flex-1 focus:outline-none text-darkViolet md:text-lg md:placeholder:text-lg"
          placeholder="Shorten a link here..."
        />
        <button className="z-10 bg-cyan py-2 md:py-4 px-3 md:px-6 rounded-md text-white font-semibold tracking-wide hover:bg-cyanLight transition duration-300 shadow-md active:shadow-sm active:scale-[0.99]">
          Shorten It!
        </button>
      </form>
      <img src={bgMobile} alt="background" className="absolute bottom-[25%] right-0 md:hidden" />
      <img src={bgDesktop} alt="background" className="absolute top-0 left-0 hidden md:block min-h-full" />
    </section>
  );
}
