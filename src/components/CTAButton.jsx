export default function CTAButton({ children }) {
  return (
    <button className="text-white px-9 md:px-12 py-3 md:py-4 font-semibold tracking-wide rounded-full bg-cyan hover:bg-cyanLight duration-300 transition active:scale-[0.99] shadow-md active:shadow-sm lg:text-lg xl:text-xl z-10 relative">
      {children}
    </button>
  );
}
