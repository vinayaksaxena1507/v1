import React from 'react';
import './leftSidebar.scss';

const LeftSideBar = () => (
  <div className='left'>
    <main className='left__main'>
      <ul className='left__social'>
        <li className='left__linkItems'>
          <a
            href='https://www.youtube.com/@IgniteTechie'
            className='left__links'
            target='_blank'
            rel='noreferrer'
          >
            <svg className='left__icon'>
              <use href='icons/symbol-defs.svg#icon-youtube' />
            </svg>
          </a>
        </li>
        <li className='left__linkItems'>
          <a
            href='https://github.com/vinayaksaxena1507'
            className='left__links'
            target='_blank'
            rel='noreferrer'
          >
            <svg className='left__icon'>
              <use href='/icons/symbol-defs.svg#icon-github' />
            </svg>
          </a>
        </li>
        <li className='left__linkItems'>
          <a
            href='https://www.instagram.com/iamvinayaksaxena/'
            className='left__links'
            target='_blank'
            rel='noreferrer'
          >
            <svg className='left__icon'>
              <use href='/icons/symbol-defs.svg#icon-instagram' />
            </svg>
          </a>
        </li>
        <li className='left__linkItems'>
          <a
            href='https://www.linkedin.com/in/vinayakravisaxena/'
            target='_blank'
            rel='noreferrer'
            className='left__links'
          >
            <svg className='left__icon'>
              <use href='/icons/symbol-defs.svg#icon-linkedin' />
            </svg>
          </a>
        </li>
      </ul>
      <div className='left__line' />
    </main>
  </div>
);

export default LeftSideBar;
