import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './loader.scss';

interface LoaderProps {
  isLoading: boolean;
  setIsLoading: () => void;
}

const Loader: React.FC<LoaderProps> = ({ isLoading, setIsLoading }) => {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 1900);
  }, [setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className='loader'
          exit={{ scale: 0 }}
          key='motiondivleave'
          transition={{
            duration: 0.45,
            ease: 'easeInOut',
          }}
        >
          <motion.svg
            id='logo'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 100 100'
          >
            <title>Logo</title>
            <g>
              <g id='V' transform='translate(35.000000, 35.000000)'>
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                  exit={{
                    scale: 2,
                  }}
                  fill='currentColor'
                  d='M23.474,0.159L17.08,0.775c-0.406,0.039-0.844,0.383-0.978,0.768l-4.092,11.749L7.898,1.542 C7.764,1.158,7.325,0.814,6.92,0.775L0.526,0.159C0.121,0.12-0.096,0.399,0.041,0.783L8.085,23.15 c0.138,0.383,0.581,0.695,0.988,0.695h6.223h0.039c0.073,0,0.134-0.02,0.179-0.055c0.124-0.062,0.231-0.169,0.275-0.292 l0.039-0.108l8.13-22.607C24.096,0.399,23.879,0.12,23.474,0.159z'
                />
              </g>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                }}
                exit={{
                  scale: 2,
                }}
                stroke='currentColor'
                strokeWidth='5'
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z'
              />
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Loader;
