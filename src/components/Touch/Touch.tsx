import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLettersFast from '../AnimatedLettersFast/AnimatedLettersFast';
import './touch.scss';

const Touch = () => {
  const [letterClass, setLetterClass] = useState('text-animate-fast');
  const nameArray = [...'Get In Touch'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-fast-hover');
    }, 4000);
  });
  return (
    <section className='sec'>
      <span className='sectiontag'>&lt;section&gt;</span>
      <div className='touch'>
        <label htmlFor='touchLabel' className='touch__label'>
          04. Whats Next?
        </label>
        <h1 className='touch__headingPrimary'>
          <AnimatedLettersFast
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
        <p className='touch__description'>
          My inbox is constantly open and I&apos;m eager for any fresh
          opportunities. I&apos;ll get back to you whether you&apos;re asking a
          question or just want to say hello!
        </p>
        <Link to='/contact' className='intro__button'>
          Contact Me
        </Link>
      </div>
      <span className='sectiontag'>&lt;/section&gt;</span>
    </section>
  );
};

export default Touch;
