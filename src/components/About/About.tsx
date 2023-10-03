import React, { useEffect, useState } from 'react';
import AnimatedLettersFast from '../AnimatedLettersFast/AnimatedLettersFast';
import './about.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate-fast');
  const nameArray = [...'01. About Me'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-fast-hover');
    }, 4000);
  });
  return (
    <div className='about' id='about'>
      <div className='about__left'>
        <span className='sectiontag'>&lt;section&gt;</span>
        <h1 className='about__headingPrimary'>
          <AnimatedLettersFast
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
        <div className='about__description'>
          Hello! My name is
          {' '}
          <span className='about__link'>Vinayak&nbsp;Saxena</span>
          {' '}
          and I’m a
          Software Developer located in India. I was a science major in high
          school and was first exposed to programming in my 9th grade year.
          However, I first became interested in coding in 2018 while a
          first-year B.tech student at
          {' '}
          <span className='about__link'>Lovely Professional University</span>
          {' '}
          .
          Since then, I&apos;ve been developing my problem-solving abilities,
          learning programming languages, and tackling issues with data
          structures and algorithms.
          <br />
          {' '}
          <br />
          {' '}
          I recently earned a Bachelor of Science in Computer
          Science and Engineering (2018-2022) with a stellar
          {' '}
          <span className='about__link'>8.64 GPA aggregate</span>
          .
          <br />
          <br />
          {' '}
          In addition, I&apos;m knowledgeable with web development and
          have worked on a few projects there using HTML, CSS, Javascript,
          React.js, Node.js, MongoDB, and a few more cool libraries and
          frameworks. Leading is only one of the student organisations in which
          I participate.
          <br />
          <br />
          {' '}
          A person with excellent organisation skills, who is also
          creative and detail-oriented. Esports gaming, nature, TV shows, and
          Japanese anime are some of my favourite things.
          <br />
          <br />
          Here are the few technologies that I&apos;have been working recently:
          {' '}
          <br />
          <ul className='about__skillsList'>
            <li className='about__skillsItems'>C || C++</li>
            <li className='about__skillsItems'>Data Structures</li>
            <li className='about__skillsItems'>Algorithms</li>
            <li className='about__skillsItems'>HTML || CSS</li>
            <li className='about__skillsItems'>Tailwind CSS || Material UI</li>
            <li className='about__skillsItems'>Javascript(ES6+)</li>
            <li className='about__skillsItems'>TypeScript</li>
            <li className='about__skillsItems'>Next.js</li>
            <li className='about__skillsItems'>React.js & Redux</li>
            <li className='about__skillsItems'>Node.js</li>
            <li className='about__skillsItems'>MongoBD</li>
            <li className='about__skillsItems'>GraphQL</li>
          </ul>
        </div>
        <span className='sectiontag'>&lt;/section&gt;</span>
      </div>
      <div className='about__right'>
        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-python' />
              </svg>
            </div>
            <div className='face2'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-css3' />
              </svg>
            </div>
            <div className='face3'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-javascript' />
              </svg>
            </div>
            <div className='face4'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-mongodb' />
              </svg>
            </div>
            <div className='face5'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-node-dot-js' />
              </svg>
            </div>
            <div className='face6'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-react' />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
