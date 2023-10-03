/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import AnimatedLettersFast from '../AnimatedLettersFast/AnimatedLettersFast';

import './work.scss';

interface Experience {
  name: string;
  role: string;
  url: string;
  start: string;
  end: string;
  shortDescription: string[];
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
const Experience: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const [letterClass, setLetterClass] = useState('text-animate-fast');
  const nameArray = [..."02. Where I've Worked"];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-fast-hover');
    }, 4000);
  });
  const experiences: Experience[] = [
    // {
    //   name: 'Juspay',
    //   role: 'Full Stack Developer',
    //   url: 'https://juspay.in/',
    //   start: 'January 2022',
    //   end: 'September 2022',
    //   shortDescription: [
    //     "Throughout my work, I've utilized various technologies, including PureScript, Haskell, Java, and Android Development, among others.",
    //     'Resolved major bugs,resulting in an increase in performance accuracy of 14.2%.',
    //     "I've also managed a small team that includes Frontend Developers and Backend Developers. And, Implements features like floating Widget, customer support, Add Address Flow, etc.",
    //     "Additionally, I've gained an understanding of the agile methodology for software development and automated testing.",
    //   ],
    // },
    {
      name: 'Spootnikz Media',
      role: 'Full Stack Developer',
      url: '',
      start: 'September 2022',
      end: 'Present',
      shortDescription: [
        'Developed custom WordPress themes and plugins, utilizing PHP and MySQL, resulting in enhanced website functionality and user experience for diverse clients.',
        'Leveraged React and Next.js to build interactive web applications, delivering visually appealing user interfaces and seamless experiences across platforms.',
        'Implemented MongoDB to develop scalable and performant databases, enabling efficient data management and real-time data processing for data-intensive projects.',
        'Collaborated closely with clients to understand project objectives, provide technical expertise, and deliver high-quality solutions within agreed-upon timelines, earning positive feedback and repeat business.',
      ],
    },
    {
      name: 'Geeks For Geeks',
      role: 'Content Creator',
      url: 'https://www.geeksforgeeks.org/',
      start: 'February 2021',
      end: 'July 2021',
      shortDescription: [
        'Worked with the Practice team and was in the position of leading the complete Practice portal along with a variety of courses offered underthe direction of GeeksforGeeks.',
        'worked on the creation of the courses page and its design adaptability.',
        'Learned about integrating payment APIs.',
      ],
    },
    {
      name: 'Flakky.com',
      role: 'Full Stack Developer ( Freelance )',
      url: 'https://www.linkedin.com/company/flakky-merchandise/',
      start: 'January 2019',
      end: 'June 2020',
      shortDescription: [
        'Interaction and visual experience design were developed for enhanced user experience.',
        'Mastered the skills of time management, communication skill, and collaborative teamwork.',
        'Overall, it was a rewarding experience that allowed me to develop my leadership skills while contributing positively to the growth of the organization.',
      ],
    },
  ];

  return (
    <div className='experience' id='experience'>
      <div className='title'>
        <span className='sectiontag'>&lt;section&gt;</span>
        <h1 className='about__headingPrimary'>
          <AnimatedLettersFast
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
      </div>
      <div className='container'>
        <ul className='exp-slider'>
          <div
            className='underline'
            style={{ top: `${selected * 4.18}rem` }}
          />
          {experiences.map((experience, index) => (
            <button
              id='btn'
              type='button'
              className={`exp-slider-item ${
                index === selected ? 'exp-slider-item-selected' : ''
              }`}
              onClick={() => setSelected(index)}
              key={experience.name}
            >
              <span>{experience.name}</span>
            </button>
          ))}
        </ul>
        <div className='exp-details'>
          <div className='exp-details-position'>
            <h3>
              <span>{experiences[selected].role}</span>
              <span className='exp-details-position-company'>
                  &nbsp;@&nbsp;
                <a
                  href={experiences[selected].url}
                  className='link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {experiences[selected].name}
                </a>
              </span>
            </h3>
            <p className='exp-details-range'>
              {experiences[selected].start} - {experiences[selected].end}
            </p>
            <ul className='exp-details-list'>
              {experiences[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className='exp-details-list-item'>
                    {description}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
      <span className='sectiontag'>&lt;/section&gt;</span>
    </div>
  );
};

export default Experience;
