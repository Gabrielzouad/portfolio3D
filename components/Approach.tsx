'use client';
import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { CanvasRevealEffect } from './ui/CanvasRevealCard';

const Approach = () => {
  return (
    <section className='w-full py-20'>
      <h1 className='heading'>Hvordan jobber jeg?</h1>
      <div className='my-20 flex flex-col lg:flex-row items-center justify-center gap-4'>
        <Card
          title='Kundekonsultasjon og analyse'
          description='Vi begynner alltid med en grundig konsultasjon hvor vi møter kunden for å forstå deres spesifikke behov, ønsker og mål. Gjennom detaljerte samtaler og analyser samler vi inn nødvendig informasjon for å sikre at vi kan levere skreddersydde løsninger som oppfyller forventningene.'
          icon={<AceternityIcon order='Steg 1' />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName='bg-emerald-900'
          />
        </Card>
        <Card
          title='Planlegging og strategi'
          icon={<AceternityIcon order='Steg 2' />}
          description='Etter behovsanalysen utvikler vi en omfattende plan og strategi. Dette inkluderer å definere klare prosjektmål, tidslinjer, ressursallokering og risikovurderinger. Vi sørger for at kunden er involvert i hele planleggingsprosessen for å sikre at alle aspekter av prosjektet er forstått og godkjent.'
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName='bg-purple'
          />
        </Card>
        <Card
          title='Implementering og oppfølging'
          icon={<AceternityIcon order='Steg 3' />}
          description='Når planen er godkjent, setter vi i gang med implementeringen av løsningen. Vi bruker agile metoder for å sikre fleksibilitet og tilpasning underveis. Etter prosjektets gjennomføring evaluerer vi resultatene nøye og følger opp med kunden for å sikre at alle mål er nådd og at kunden er fornøyd med sluttresultatet.'
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName='bg-sky-600'
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className='border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative'
    >
      <Icon className='absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black' />
      <Icon className='absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black' />
      <Icon className='absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black' />
      <Icon className='absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black' />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='h-full w-full absolute inset-0'
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className='relative z-20 p-10'>
        <div className='text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center'>
          {icon}
        </div>
        <h2 className='dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200'>
          {title}
        </h2>
        <h2 className='text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200'>
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <button className='p-[3px] relative'>
      <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple rounded-md' />
      <div className='px-8 py-2 bg-black rounded-[6px relative group transition duration-200 text-white hover:bg-transparent'>
        {order}
      </div>
    </button>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className={className}
      {...rest}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m6-6H6' />
    </svg>
  );
};
export default Approach;
