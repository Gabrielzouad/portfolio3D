import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa';

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    des: string;
    link: string;
    img: string;
    iconLists: string[];
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10',
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className='relative group block p-2 h-full w-full'
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className='absolute inset-0 h-full w-full bg-purple/[0.2] block rounded-3xl'
                layoutId='hoverBackground'
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.des}</CardDescription>
            <CardImage src={item.img} alt={item.title} />
            <CardIcons icons={item.iconLists} />
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20',
        className
      )}
    >
      <div className='relative z-50'>
        <div className='p-4'>{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn('text-zinc-100 font-bold tracking-wide mt-4', className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        'mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm',
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardImage = ({
  className,
  src,
  alt,
}: {
  className?: string;
  src: string;
  alt: string;
}) => {
  return (
    <img
      className={cn('w-full h-auto rounded-2xl', className)}
      src={src}
      alt={alt}
    />
  );
};

export const CardIcons = ({ icons }: { icons: string[] }) => {
  return (
    <div className='flex items-center mt-7 mb-3 '>
      {icons.map((icon, index) => (
        <div
          key={index}
          className='border border-white/[0.2] rounded-full bg-black w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center'
          style={{ transform: `translateX(-${5 * index * 2}px)` }}
        >
          <img className='p-2' src={icon} />
        </div>
      ))}
    </div>
  );
};
