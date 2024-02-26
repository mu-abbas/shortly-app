import backGround from '../assets/images/illustration-working.svg';
import CTAButton from './CTAButton';

export default function Hero() {
  return (
    <section className="container mx-auto flex flex-col gap-12 p-6 md:gap-16 lg:gap-12 lg:flex-row lg:items-center lg:justify-center lg:p-16 mb-36">
      <img
        src={backGround}
        alt="working person"
        className="w-10/12 lg:w-1/2 lg:order-2 scale-110 translate-x-[10%] lg:scale-100 lg:translate-x-0"
      />
      <div className="space-y-6 lg:space-y-12 text-center mx-auto lg:text-left">
        <h1 className="text-5xl xl:text-6xl 2xl:text-8xl text-darkViolet tracking-tight font-bold max-w-lg mx-auto">
          More than just shorter links
        </h1>
        <p className="text-md md:text-lg lg:text-xl xl:text-2xl text-grayishViolet max-w-sm mx-auto lg:mx-0 md:max-w-lg">
          Build your brand&apos;s recognition and get detailed insights on how your links are performing
        </p>
        <CTAButton>Get Started</CTAButton>
      </div>
    </section>
  );
}
