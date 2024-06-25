'use client';
import { projects } from '@/data';
import React from 'react';
import { HoverEffect } from './ui/CardHoverEffect';

const Projects = () => {
  return (
    <div className='py-20'>
      <h1 className='heading'>
        Innsikt i noen av våre{' '}
        <span className='text-purple'>nyeste prosjekter</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};

export default Projects;
