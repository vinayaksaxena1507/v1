import AnimatedLetters from '@components/AnimatedLetters/AnimatedLetters';
import React, { useState, useEffect, useRef } from 'react';
import './contact.scss';
import Map, { Marker } from 'react-map-gl';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [...'Contact me'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  });

  const form = useRef<HTMLFormElement>(null);

  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLTextAreaElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current !== null) {
      emailjs
        .sendForm(
          'service_iuu8yoi',
          'template_639b9mv',
          form.current,
          'W29NHaZ1mvjpQoYJb',
        )
        .then(
          () => {
            window.alert('Mail Sent Successfully!!!');
          },
          () => {},
        );
    }

    if (inputRef1.current !== null) inputRef1.current.value = '';
    if (inputRef2.current !== null) inputRef2.current.value = '';
    if (inputRef2.current !== null) inputRef2.current.value = '';
  };

  return (
    <div className='contact'>
      <div className='contact__left'>
        <span className='tag' style={{ padding: '0rem' }}>
          &lt;body&gt;
        </span>
        <h1 className='about__headingPrimary'>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
        <p className='contact__description'>
          I am interested in freelance opportunities - especially on ambitious
          or large projects. However, if you have any other requests or
          questions, don&apos;t hesitate to contact me using below form either.
        </p>
        <div className='form'>
          <form ref={form} onSubmit={sendEmail}>
            <div className='form__group'>
              <input
                name='user_name'
                ref={inputRef1}
                type='text'
                className='form__input'
                id='name'
                placeholder='Full Name'
                required
              />
              <label htmlFor='name' className='form__label'>
                Full Name
              </label>
            </div>
            <div className='form__group'>
              <input
                type='email'
                ref={inputRef2}
                name='user_email'
                className='form__input'
                id='email'
                placeholder='Email Address'
                required
              />
              <label htmlFor='email' className='form__label'>
                Email Address
              </label>
            </div>
            <div className='form__group'>
              <textarea
                name='message'
                ref={inputRef3}
                className='form__input'
                id='email'
                placeholder='Message'
                required
              />
              <label htmlFor='email' className='form__label'>
                Message
              </label>
            </div>
            <button type='submit' value='Send' className='intro__button'>
              Send Mail
            </button>
          </form>
        </div>
        <span className='tag' style={{ padding: '0rem' }}>
          &lt;body&gt;
        </span>
      </div>
      <div className='contact__right'>
        <Map
          mapboxAccessToken='pk.eyJ1IjoiaWFtdmluYXlha3NheGVuYSIsImEiOiJjbGhreWJzZ2wwaTBtM2VvcDZ0NGt2cDFrIn0.MqFloMNF-92n_Vng2scO8w'
          initialViewState={{
            longitude: 78.561214,
            latitude: 25.45797,
            zoom: 9.5,
          }}
          // style={{ width: "100%", height: 600 }}
          mapStyle='mapbox://styles/iamvinayaksaxena/clhkyhjfb01nm01pg13fzayq5'
        >
          <Marker latitude={25.45797} longitude={78.561214}>
            <button type='button' className='map__button'>
              <svg
                width='40'
                height='132'
                viewBox='0 0 420 512'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g filter='url(#filter0_d_405_4)'>
                  <path
                    d='M235 473C173.283 420.483 127.188 371.704 96.7125 326.663C66.2375 281.621 51 239.933 51 201.6C51 144.1 69.4958 98.2917 106.487 64.175C143.479 30.0583 186.317 13 235 13C283.683 13 326.521 30.0583 363.512 64.175C400.504 98.2917 419 144.1 419 201.6C419 239.933 403.763 281.621 373.288 326.663C342.812 371.704 296.717 420.483 235 473Z'
                    fill='#0A192F'
                  />
                </g>
                <path
                  d='M324.275 124L243.706 279.334V362.293H195.91V279.334L115 124H168.94L220.149 232.905L271.017 124H324.275Z'
                  fill='#FFD700'
                />
                <path
                  d='M355 124L274.431 279.334V362.293H226.636V279.334L145.726 124H199.666L250.875 232.905L301.743 124H355Z'
                  fill='#115173'
                />
                <defs>
                  <filter
                    id='filter0_d_405_4'
                    x='0'
                    y='0'
                    width='420'
                    height='512'
                    filterUnits='userSpaceOnUse'
                    colorInterpolationFilters='sRGB'
                  >
                    <feFlood floodOpacity='0' result='BackgroundImageFix' />
                    <feColorMatrix
                      in='SourceAlpha'
                      type='matrix'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                      result='hardAlpha'
                    />
                    <feOffset dx='-25' dy='13' />
                    <feGaussianBlur stdDeviation='13' />
                    <feComposite in2='hardAlpha' operator='out' />
                    <feColorMatrix
                      type='matrix'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0'
                    />
                    <feBlend
                      mode='normal'
                      in2='BackgroundImageFix'
                      result='effect1_dropShadow_405_4'
                    />
                    <feBlend
                      mode='normal'
                      in='SourceGraphic'
                      in2='effect1_dropShadow_405_4'
                      result='shape'
                    />
                  </filter>
                </defs>
              </svg>
            </button>
          </Marker>
        </Map>
      </div>
    </div>
  );
};

export default Contact;
