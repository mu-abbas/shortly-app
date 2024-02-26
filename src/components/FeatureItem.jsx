export default function FeatureItem({ src, heading, className, children }) {
  return (
    <li
      className={`relative flex flex-col gap-4 bg-white rounded-lg p-6 pt-14 justify-center z-10 max-w-sm ${className}`}
    >
      <div className="absolute top-0 left-[50%] -translate-y-[50%] -translate-x-[50%] bg-darkViolet p-4 rounded-full lg:left-[25%]">
        <img className="size-10" src={src} alt="icon" />
      </div>

      <h3 className="text-darkViolet text-xl font-bold text-center lg:text-left">{heading}</h3>
      <p className="text-md text-grayishViolet max-w-sm mx-auto md:max-w-lg text-center lg:text-left">{children}</p>
    </li>
  );
}
