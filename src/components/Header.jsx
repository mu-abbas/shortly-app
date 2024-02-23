import Nav from './Nav';
import backGround from '../assets/images/illustration-working.svg';

export default function Header() {
  return (
    <header>
      <Nav />
      <section className="container mx-auto flex flex-col gap-12 p-6 md:flex-row md:items-center md:justify-center md:p-12">
        <img src={backGround} alt="working person" className="md:w-1/2 md:order-2 scale-110 " />
        <div className="space-y-6 text-center mx-auto md:text-left">
          <h1 className="text-5xl xl:text-6xl 2xl:text-8xl text-darkViolet tracking-tight font-bold">
            More than just shorter links
          </h1>
          <p className="text-md md:text-lg lg:text-xl xl:text-2xl text-grayishViolet max-w-sm mx-auto md:mx-0 md:max-w-lg">
            Build your brand&apos;s recognition and get detailed insights on how your links are performing
          </p>
          <button className="text-white px-9 py-3 font-semibold tracking-wide rounded-full bg-cyan">Get Started</button>
        </div>
      </section>
    </header>
  );
}
