import React from 'react';
import { InfiniteMovingCards } from './ui/InfininteMovingCards';
import { companies, testimonials } from '@/data';

const Clients = () => {
  return (
    <div className='' id='prosjekter'>
      <h1 className='heading'>
        Hva mine <span className='text-purple'>kunder</span> og{' '}
        <span className='text-purple'>kolleger</span> sier
      </h1>
      <p className='mt-4 max-w-3xl mx-auto text-center text-white/95'>
        Les hva mine kunder og tidligere kolleger har å si om sine erfaringer
        med meg. Jeg er stolt av å kunne levere kvalitetstjenester som skaper
        fornøyde kunder og gode samarbeid.
      </p>
      <div className='flex flex-col items-center mt-10'>
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
          pauseOnHover={false}
        />
        <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 mt-5'>
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
              <img src={img} alt={name} className='md:w-10 w-5 ' />
              <img src={nameImg} alt={name} className='md:w-24 w-20 ' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
