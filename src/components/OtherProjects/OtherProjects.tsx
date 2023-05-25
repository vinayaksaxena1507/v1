import AnimatedLettersFast from '@components/AnimatedLettersFast/AnimatedLettersFast';
import React, { useState, useEffect } from 'react';
import './otherProjects.scss';

const OtherProjects = () => {
  const [letterClass, setLetterClass] = useState('text-animate-fast');
  const nameArray = [...'Other Projects '];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-fast-hover');
    }, 4000);
  });

  return (
    <div className='other'>
      <span className='sectiontag'>&lt;section&gt;</span>
      <div className='other__container'>
        <h1 className='other__headingPrimary'>
          <AnimatedLettersFast
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
      </div>

      <ul className='other__list'>
        <li className='other__items'>
          <div className='other__card'>
            <div className='other__cardTop'>
              <svg className='other__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='other__cardLink'>
                <a
                  href='https://github.com/vinayaksaxena1507/2048-Game'
                  target='_blank'
                  rel='noreferrer'
                  style={{ marginRight: '1.6rem' }}
                >
                  <svg className='other__icon'>
                    <use href='/icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a
                  href='https://2048-game-react.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg className='other__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='other__cardBody'>
              <div className='other__cardBodyHeading'>2048 Game APP</div>
              <p className='other__cardBodyDescription'>
                The Famous 2048 game made in react, with a personal touch and
                animations | Next.js. Design restaurant app using React Next.js
                and CSS. Next.js MongoDB restaurant (order food) project using
                React Redux. Full-stack Next.js APP.{' '}
              </p>
            </div>
            <div className='other__cardFooter'>
              <div className='other__tags'>
                {' '}
                SASS &nbsp; Reactjs &nbsp; VSCode &nbsp;
              </div>
            </div>
          </div>
        </li>
        <li className='other__items'>
          <div className='other__card'>
            <div className='other__cardTop'>
              <svg className='other__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='other__cardLink'>
                <a
                  href='https://github.com/vinayaksaxena1507/iPhone-Landing-Page'
                  target='_blank'
                  rel='noreferrer'
                  style={{ marginRight: '1.6rem' }}
                >
                  <svg className='other__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a
                  href='https://iphone14-landing-page.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg className='other__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='other__cardBody'>
              <div className='other__cardBodyHeading'>
                iPhone 14 Landing Page
              </div>
              <p className='other__cardBodyDescription'>
                Created awesome landing page for Apple iPhone 14 using Three JS
                and React JS. This website uses threeJS to render 3D model of
                iPhone and GSAP for scrolling animations.
              </p>
            </div>
            <div className='other__cardFooter'>
              <div className='other__tags'>
                {' '}
                Reactjs &nbsp; Threejs &nbsp; GSAP &nbsp; ScrollTrigger &nbsp;
                3D Model
              </div>
            </div>
          </div>
        </li>
        <li className='other__items'>
          <div className='other__card'>
            <div className='other__cardTop'>
              <svg className='other__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='other__cardLink'>
                <a
                  href='https://github.com/vinayaksaxena1507/'
                  target='_blank'
                  rel='noreferrer'
                  style={{ marginRight: '1.6rem' }}
                >
                  <svg className='other__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a
                  href='https://codepen.io/vinayaksaxena1507/pen/XWxxVap'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg className='other__icon'>
                    <use href='icons/symbol-defs.svg#icon-codepen' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='other__cardBody'>
              <div className='other__cardBodyHeading'>
                Ping Pong Score Tracker
              </div>
              <p className='other__cardBodyDescription'>
                Ping Pong Score Keeper website built on vanilla javascript and
                bulma frontend framework
              </p>
            </div>
            <div className='other__cardFooter'>
              <div className='other__tags'>
                {' '}
                Bulma &nbsp; javascript &nbsp; vanilla js
              </div>
            </div>
          </div>
        </li>
      </ul>
      <span className='sectiontag'>&lt;/section&gt;</span>
    </div>
  );
};

export default OtherProjects;
