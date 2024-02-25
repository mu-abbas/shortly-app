import backGround from '../assets/images/illustration-working.svg';
import CTAButton from './CTAButton';

export default function Hero() {
  return (
    <section className="container mx-auto flex flex-col gap-12 p-6 md:flex-row md:items-center md:justify-center md:p-12 mb-24">
      <img
        src={backGround}
        alt="working person"
        className="w-10/12 md:w-1/2 md:order-2 scale-110 translate-x-[10%] md:scale-150 lg:scale-100 lg:translate-x-0"
      />
      <div className="space-y-6 md:space-y-12 text-center mx-auto md:text-left">
        <h1 className="text-5xl xl:text-6xl 2xl:text-8xl text-darkViolet tracking-tight font-bold">
          More than just shorter links
        </h1>
        <p className="text-md md:text-lg lg:text-xl xl:text-2xl text-grayishViolet max-w-sm mx-auto md:mx-0 md:max-w-lg">
          Build your brand&apos;s recognition and get detailed insights on how your links are performing
        </p>
        <CTAButton>Get Started</CTAButton>
      </div>
    </section>
  );
}
