import Approach from '@/components/Approach';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main
      className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden
    mx-auto sm:px-10 px-5'
    >
      <div className='max-w-7xl w-full'>
        <Hero />
        <Grid />
        <Projects />
        <Clients />
        <Approach />
        <Contact />
      </div>
    </main>
  );
}
