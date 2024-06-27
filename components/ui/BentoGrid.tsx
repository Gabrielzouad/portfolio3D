'use client';
import { cn } from '@/lib/utils';
import { BackgroundGradientAnimation } from './BackgroundGradientAnimation';
import { GridGlobe } from './GridGlobe';
import Lottie from 'react-lottie';
import { useState } from 'react';
import animationData from '@/data/confetti.json';
import { IoCopyOutline } from 'react-icons/io5';
import MagicButton from '../buttons/MagicButton';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spare,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spare?: string;
}) => {
  const leftLists = ['ReactJS', 'NextJS', 'Typescript'];
  const rightLists = ['Sanity', 'MailChimp', 'Vercel'];
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('z20gab@gmail.com');
    setCopied(true);
  };
  return (
    <div
      className={cn(
        'row-span-1 rounded-3xl relative overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border border-white/[0.1] justify-between flex flex-col space-y-4 ',
        className
      )}
      style={{
        background: 'rgb(4,7,40)',
        backgroundColor:
          'linear-gradient(90deg, rgba(9,8,112,1) 0%, rgba(15,113,140,1) 53%, rgba(75,35,126,1) 94%)',
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full `}>
        <div className='w-full h-full absolute'>
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center')}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && 'w-full opacity-80'
          } `}
        >
          {spare && (
            <img
              src={spare}
              alt={spare}
              className={cn('object-cover object-center w-full h-full')}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className='absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl' />
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
          )}
        >
          <div className='font-sans font-extralight  text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10'>
            {description}
          </div>
          <div className='font-sans font-bold text-lg lg:text-3xl max-w-96 z-10'>
            {title}
          </div>

          {id === 2 && <GridGlobe />}
          {id === 3 && (
            <div className='flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2 '>
              <div className='flex flex-col gap-3 lg:gap-8'>
                {leftLists.map((item) => (
                  <span
                    key={item}
                    className='py-2 lg:py-4 px-3 text-xs lg:text-base opacity-50 lg:opacity-75 rounded-lg text-center bg-[#10132E] '
                  >
                    {item}
                  </span>
                ))}
                <span className='py-4 px-3 rounded-lg text-center bg-[#10132]' />
              </div>
              <div className='flex flex-col gap-3 lg:gap-8'>
                <span className='py-4 px-3 rounded-lg text-center bg-[#10132]' />
                {rightLists.map((item) => (
                  <span
                    key={item}
                    className='py-2 lg:py-4 px-3 text-xs lg:text-base opacity-50 lg:opacity-75 rounded-lg text-center bg-[#10132E] '
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className='mt-5 relative'>
              <div className={`aboslute -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice',
                    },
                  }}
                  height={100}
                  width={200}
                />
              </div>
              <MagicButton
                title={copied ? 'Email kopiert' : 'Kopier eposten vår'}
                icon={<IoCopyOutline />}
                position='left'
                otherClasses='!bg-[#161a31]'
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
