import React from 'react';
import MagicButton from './buttons/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';

const Contact = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='kontakt'>
      <div className='w-full absolute left-0 -bottom-72 min-h-96'>
        <img
          src='/footer-grid.svg'
          alt='grid'
          className='w-full h-full opacity-50'
        />
      </div>
      <div className='flex flex-col items-center '>
        <h1 className='heading lg:max-w-[45vw]'>
          Klar for å <span className='text-purple'>oppgradere</span> dine
          digitale løsninger?
        </h1>
        <p className='text-white-200 md:mt-10 my-2 text-center'>
          Ta kontakt i dag så kan vi implementere dine ideer!
        </p>
        <a href='mailto:z20gab@gmail.com'>
          <MagicButton
            title='Ta kontakt'
            position='right'
            icon={<FaLocationArrow />}
          />
        </a>
      </div>
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>
          Copyright © 2024 Gabriel Zouad
        </p>
        <div className='flex items-center md:gap-3 gap-6'>
          {socialMedia.map((social, index) => (
            <div
              key={index}
              className='w-10 h-10 max-sm:mt-3 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 border rounded-lg border-black-300'
            >
              <img src={social.img} alt='sosiale medier' />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
