import brandIcon from '../assets/images/icon-brand-recognition.svg';
import detailedIcon from '../assets/images/icon-detailed-records.svg';
import fullyIcon from '../assets/images/icon-fully-customizable.svg';
import FeatureItem from './FeatureItem';

export default function Features() {
  return (
    <section className="relative">
      <ul className=" flex flex-col justify-center gap-20 max-w-sm mx-auto py-16 lg:flex-row lg:max-w-full lg:gap-12 pb-48">
        <FeatureItem src={brandIcon} heading="Brand Recognition" class="">
          Boost your brand recognition with each click. Generic links don&apos;t mean a thing. Branded links help instil
          confidence in your content.
        </FeatureItem>
        <FeatureItem src={detailedIcon} heading="Detailed Records" className="translate-y-[17.5%]">
          Gain insights into who is clicking your links. Knowing when and where people engage with your content helps
          informm better decisions.
        </FeatureItem>
        <FeatureItem src={fullyIcon} heading="Fully Customizable" className="translate-y-[35%]">
          Improve brand awareness and content dicoverability through customizable links. Supercharging audience
          engagement.
        </FeatureItem>
      </ul>
      <span className="absolute w-2 bg-cyan h-[75%] top-[10%] left-[50%] -translate-x-[50%] lg:h-2 lg:w-[75%] lg:top-[50%] lg:left-[10%] lg:-translate-y-[50%] lg:-translate-x-0"></span>
    </section>
  );
}
