import CTAButton from './CTAButton';
import bgMobile from '../assets/images/bg-boost-mobile.svg';
import bgDesktop from '../assets/images/bg-boost-desktop.svg';

export default function CTA() {
  return (
    <section className="bg-darkViolet p-16 relative overflow-hidden">
      <div className="text-center space-y-6 md:space-y-8 lg:space-y-12">
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold z-10 relative">
          Boost your links today
        </h2>
        <CTAButton>Get Started</CTAButton>
      </div>
      <img src={bgMobile} alt="background" className="absolute top-0 right-0 md:hidden min-h-full" />
      <img src={bgDesktop} alt="background" className="absolute top-0 left-0 hidden md:block min-h-full min-w-full" />
    </section>
  );
}
