import React, { useState, useEffect } from 'react';
import './projects.scss';
import LazyLoad from 'react-lazyload';
import AnimatedLettersFast from '@components/AnimatedLettersFast/AnimatedLettersFast';

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate-fast');
  const nameArray = [...'03. My Projects'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-fast-hover');
    }, 4000);
  });
  return (
    <div className='project' id='projects'>
      <span className='sectiontag'>&lt;section&gt;</span>
      <h1 className='about__headingPrimary'>
        <AnimatedLettersFast
          letterClass={letterClass}
          strArray={nameArray}
          idx={15}
        />
      </h1>

      {/* ----------------------------------------- for desktops -------------------------- */}

      <LazyLoad once height={400}>
        <section className='project__section'>
          <div className='project__left'>
            <img
              className='project__img'
              src='https://res.cloudinary.com/df2jdgipx/image/upload/v1685705022/Screenshot_2023-06-02_164844_o4x57c.png'
              alt='color palette'
            />
          </div>
          <div className='project__right'>
            <h3 className='project__headingTertiary'>Featured Project</h3>
            <a
              href='https://movieflixe.netlify.app/'
              target='_blank'
              rel='noreferrer'
              className='project__headingSecondary'
            >
              <h2>Movieflix</h2>
            </a>
            <div className='project__descriptionContainer'>
              <p className='project__description'>
                Movieflix is an advanced A.I. Movie Recommendation System
                created with cutting-edge technologies such as React.js, Redux,
                Material UI, and Alan AI. This innovative platform
                revolutionizes the user experience by offering personalized
                movie suggestions. With secure user authentication and the
                integration of Alan AI voice functionality, Movieflix enhances
                user interactions and accessibility. Furthermore, the system
                leverages the power of Axios and Redux to retrieve real-time
                data through API calls, ensuring up-to-date and relevant movie
                information for users.
              </p>
              <div className='project__tags'>
                {' '}
                React.js &nbsp; Redux &nbsp; Material UI &nbsp; Alan AI &nbsp;
              </div>
              <div className='project__icons'>
                <a
                  href='https://github.com/vinayaksaxena1507/MovieFlix'
                  target='_blank'
                  rel='noreferrer'
                  style={{ marginRight: '1.6rem' }}
                >
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a
                  href='https://movieflixe.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </LazyLoad>
      <LazyLoad once height={400}>
        <section className='project__section'>
          <div className='project__left1'>
            <h3 className='project__headingTertiary'>Featured Project</h3>
            <a
              href='https://my-blog-space-ten.vercel.app/'
              target='_blank'
              rel='noreferrer'
              className='project__headingSecondary'
            >
              <h2>My Blog Space</h2>
            </a>
            <div className='project__descriptionContainer project__descriptionContainer1'>
              <p className='project__description'>
                My Blog Space is a Next.js 13-based blogging website that
                utilizes React, Tailwind CSS, and TypeScript for a seamless user
                experience. It leverages Sanity v3 CMS to securely store
                user-generated blogs, providing a reliable and scalable solution
                for content management.
                {' '}
              </p>
              <div className='project__tags'>
                Next.js &nbsp; React.js &nbsp; TypeScript &nbsp; Tailwind CSS
                &nbsp; Sanity CMS &nbsp;
                {' '}
              </div>
              <div className='project__icons project__icons1'>
                <a
                  href='https://github.com/vinayaksaxena1507/My-Blog-Space'
                  target='_blank'
                  rel='noreferrer'
                  style={{ marginRight: '1.6rem' }}
                >
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a
                  href='https://my-blog-space-ten.vercel.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className='project__right'>
            <img
              className='project__img'
              src='https://res.cloudinary.com/df2jdgipx/image/upload/v1685821827/Screenshot_2023-06-04_011843_t525pc.png'
              alt='my blog space'
            />
          </div>
        </section>
      </LazyLoad>
      <LazyLoad once height={400}>
        <section className='project__section project__section3'>
          <div className='project__left'>
            <img
              className='project__img'
              src='https://res.cloudinary.com/df2jdgipx/image/upload/v1686498614/Screenshot_2023-06-11_202536_xs89bu.png'
              alt='online grocery store'
            />
          </div>
          <div className='project__right'>
            <h3 className='project__headingTertiary'>Featured Project</h3>
            <a
              href='https://ai-weather-app-rceg.vercel.app/'
              target='_blank'
              rel='noreferrer'
              className='project__headingSecondary'
            >
              <h2>AI Weather App</h2>
            </a>
            <div className='project__descriptionContainer'>
              <p className='project__description'>
                Weather app that leverages a powerful combination of
                technologies. The app provides real-time weather information and
                a user-friendly interface.
                <br />
                <br />
                Users can easily access accurate weather forecasts, interact
                with a conversational AI assistant powered by ChatGPT, and enjoy
                a seamless experience with the help of modern design elements
                and performance optimizations.
              </p>
              <div className='project__tags'>
                {' '}
                Next.js &nbsp; React.js &nbsp; Tremor 2.0 &nbsp; Stepzen &nbsp;
                GraphQL
              </div>
              <div className='project__icons'>
                <a
                  href='https://github.com/vinayaksaxena1507/AI-Weather-App'
                  target='_blank'
                  rel='noreferrer'
                  style={{ marginRight: '1.6rem' }}
                >
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a
                  href='https://ai-weather-app-rceg.vercel.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </LazyLoad>

      {/* --------------------------------------------------- for Mobiles ----------------------------------------------------------------- */}

      <ul className='projectResp__list'>
        <li className='projectResp__items projectResp__items1'>
          <div className='projectResp__card'>
            <div className='projectResp__cardTop'>
              <svg className='projectResp__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='projectResp__cardLink'>
                <a
                  href='https://github.com/vinayaksaxena1507/MovieFlix'
                  target='_blank'
                  rel='noreferrer'
                  style={{ marginRight: '1.6rem' }}
                >
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a
                  href='https://movieflixe.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='projectResp__cardBody'>
              <div className='projectResp__cardBodyHeading'>Movieflix</div>
              <p className='projectResp__cardBodyDescription'>
                Movieflix is an advanced A.I. Movie Recommendation System using
                React.js, Redux, Material UI, and Alan AI. It offers
                personalized movie suggestions, secure authentication, and voice
                functionality. It retrieves real-time data through API calls for
                up-to-date movie information.
              </p>
              {' '}
            </div>
            <div className='projectResp__cardFooter'>
              <div className='projectResp__tags'>
                {' '}
                React.js &nbsp; Redux &nbsp; Material UI &nbsp; Alan AI &nbsp;
              </div>
            </div>
          </div>
        </li>
        <li className='projectResp__items  projectResp__items2'>
          <div className='projectResp__card'>
            <div className='projectResp__cardTop'>
              <svg className='projectResp__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='projectResp__cardLink'>
                <a
                  href='https://github.com/vinayaksaxena1507/My-Blog-Space'
                  target='_blank'
                  rel='noreferrer'
                  style={{ marginRight: '1.6rem' }}
                >
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a
                  href='https://my-blog-space-ten.vercel.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='projectResp__cardBody'>
              <div className='projectResp__cardBodyHeading'>My Blog Space</div>
              <p className='projectResp__cardBodyDescription'>
                My Blog Space is a Next.js 13-based blogging website that
                utilizes React, Tailwind CSS, and TypeScript for a seamless user
                experience. It leverages Sanity v3 CMS to securely store
                user-generated blogs, providing a reliable and scalable solution
                for content management.
              </p>
            </div>
            <div className='projectResp__cardFooter'>
              <div className='projectResp__tags'>
                {' '}
                Next.js &nbsp; React.js &nbsp; TypeScript &nbsp; Tailwind CSS
                &nbsp; Sanity CMS &nbsp;
              </div>
            </div>
          </div>
        </li>
        <li className='projectResp__items projectResp__items3'>
          <div className='projectResp__card'>
            <div className='projectResp__cardTop'>
              <svg className='projectResp__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='projectResp__cardLink'>
                <a
                  href='https://github.com/vinayaksaxena1507/AI-Weather-App'
                  target='_blank'
                  rel='noreferrer'
                  style={{ marginRight: '1.6rem' }}
                >
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a
                  href='https://ai-weather-app-rceg.vercel.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='projectResp__cardBody'>
              <div className='projectResp__cardBodyHeading'>AI Weather App</div>
              <p className='projectResp__cardBodyDescription'>
                Weather app that leverages a powerful combination of
                technologies. The app provides real-time weather information and
                a user-friendly interface.
              </p>
            </div>
            <div className='projectResp__cardFooter'>
              <div className='projectResp__tags'>
                {' '}
                Next.js &nbsp; React.js &nbsp; Tremor 2.0 &nbsp; Stepzen &nbsp;
                GraphQL
              </div>
            </div>
          </div>
        </li>
      </ul>

      <span className='sectiontag'>&lt;/section&gt;</span>
    </div>
  );
};

export default Project;
