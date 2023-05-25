import React from 'react';
import Introduction from 'components/Introduction/Introduction';
import './center.scss';
import About from '@components/About/About';
import LazyLoad from 'react-lazyload';
import Project from '@components/Projects/Projects';
import OtherProjects from '@components/OtherProjects/OtherProjects';
import Touch from '@components/Touch/Touch';
import Experience from '@components/Work/Work';

const Center = () => (
  <div>
    <span className='tag'>&lt;body&gt;</span>
    <Introduction />
    <LazyLoad once height={566}>
      <About />
    </LazyLoad>
    <LazyLoad once height={566}>
      <Experience />
    </LazyLoad>
    <LazyLoad once height={566}>
      <Project />
    </LazyLoad>
    <LazyLoad once height={566}>
      <OtherProjects />
    </LazyLoad>
    <LazyLoad once height={566}>
      <Touch />
    </LazyLoad>
    <span className='tag'>&lt;/body&gt;</span>
  </div>
);

export default Center;
