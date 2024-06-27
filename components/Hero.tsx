import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { FlipWords } from './ui/FlipWords';
import MagicButton from './buttons/MagicButton';
import { HiOutlineMail } from 'react-icons/hi';

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight
          className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
          fill='white'
        />
        <Spotlight
          className='top-10 left-full h-[80vh] w-[50vw]'
          fill='purple'
        />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
      </div>
      <div className='h-screen w-full bg-black-100 bg-grid-white/[0.1] flex items-center justify-center absolute top-0 left-0'>
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center !bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
      </div>
      <div className='flex justify-center relative z-10 my-20'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-md text-center text-blue-200 max-w-80'>
            La oss skape noe unikt
          </h2>
          <h1 className='tracking-tighter font-bold text-5xl lg:text-7xl text-center text-blue-100 leading-tight '>
            Jeg hjelper med å bygge dine digitale produkter med
            <FlipWords
              words={['Utvikling', 'Design', 'CRM', 'innovasjon']}
              className='!text-purple text-center tabular-nums mb-4'
            />
          </h1>
          <MagicButton
            title='Ta kontakt'
            icon={<HiOutlineMail />}
            position={'right'}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
