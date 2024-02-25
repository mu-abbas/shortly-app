import { useState } from 'react';

export default function Short({ short, setShorts }) {
  const [isCopied, setIsCopied] = useState(false);

  function handleCopy() {
    if (isCopied) return;
    navigator.clipboard.writeText(short.short_url);
    setIsCopied(true);
    setTimeout(function () {
      setIsCopied(false);
    }, 500);
  }

  function handleRemoving() {
    setShorts(shorts => shorts.filter(savedshort => savedshort.short_url !== short.short_url));
  }

  return (
    <li className="flex md:items-center gap-4 bg-white py-4 px-8 text-lg rounded-md ">
      <button onClick={handleRemoving} className="text-xs cursor-pointer">
        ❌
      </button>
      <p className="text-darkViolet">{short.url}</p>
      <p className="ml-auto text-cyan">{short.short_url}</p>
      <button
        onClick={handleCopy}
        className={` py-2 px-4 min-w-28 font-semibold rounded-md text-white transition duration-300  ${
          isCopied ? 'bg-veryDarkViolet' : 'bg-cyan hover:bg-cyanLight active:scale-[0.98]'
        }`}
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
    </li>
  );
}
