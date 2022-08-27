import { Assets } from 'assets';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen gap-6 bg-black">
      <div className="relative flex items-center justify-center w-full h-12">
        <Image src={Assets.Logo} alt="Logo AlphaDev" layout="fill" />
      </div>
      <span className="text-3xl font-bold text-brand-500">
        Starter Template AlphaDev
      </span>
    </section>
  );
};

export default Hero;
