export default function CrossButton({ isOpen, setIsOpen }) {
  return (
    <button className="lg:hidden size-8 relative" onClick={() => setIsOpen(isOpen => !isOpen)}>
      <span
        className={`w-8 h-1 absolute left-0 transition duration-500 bg-grayishViolet origin-center  ${
          isOpen ? '-rotate-45 translate-y-0' : '-translate-y-2'
        }`}
      ></span>
      <span
        className={`w-8 h-1 absolute left-0 transition duration-500 ${
          !isOpen ? 'bg-grayishViolet ' : 'bg-transparent'
        }`}
      ></span>
      <span
        className={`w-8 h-1 absolute left-0 bg-grayishViolet  transition duration-500 origin-center  ${
          isOpen ? 'rotate-45 translate-y-0' : 'translate-y-2'
        }`}
      ></span>
    </button>
  );
}
