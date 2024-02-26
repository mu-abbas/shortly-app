import { useState } from 'react';

export default function Short({ short, setShorts }) {
  const [isCopied, setIsCopied] = useState(false);

  function handleCopy() {
    if (isCopied) return;
    navigator.clipboard.writeText(short.short_url);
    setIsCopied(true);
    setTimeout(function () {
      setIsCopied(false);
    }, 5000);
  }

  function handleRemoving() {
    setShorts(shorts => shorts.filter(savedshort => savedshort.short_url !== short.short_url));
  }

  return (
    <li className="flex flex-col md:flex-row items-center gap-2 bg-white py-4 px-8 text-lg rounded-md md:gap-4 ">
      <div className="flex items-center gap-2">
        <button onClick={handleRemoving} className="text-xs cursor-pointer">
          ❌
        </button>
        <a href={short.url} className="text-darkViolet  overflow-hidden">
          {short.url.slice(0, 25)}...
        </a>
      </div>

      <div className="flex flex-col gap-2 md:gap-4 md:flex-row md:ml-auto items-center">
        <a href={short.short_url} className="text-cyan">
          {short.short_url}
        </a>
        <button
          onClick={handleCopy}
          className={` py-2 px-4 min-w-28 font-semibold rounded-md text-white transition duration-300  ${
            isCopied ? 'bg-veryDarkViolet' : 'bg-cyan hover:bg-cyanLight active:scale-[0.98]'
          }`}
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </li>
  );
}
