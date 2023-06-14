import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './navbar.scss';

const Navbar = () => (
  <nav className='navbar'>
    <div className='navbar__left'>
      <Link to='/' className='navbar__link'>
        <img
          alt='logo'
          src='http://res.cloudinary.com/df2jdgipx/image/upload/v1684169761/logo_qny4vm_be1n0a.png'
          className='navbar__img'
        />
      </Link>
    </div>
    <div className='navbar__right'>
      <ul className='navbar__list'>
        <li className='navbar__items'>
          <HashLink to='/#about' className='navbar__itemsLink'>
            <span className='navbar__itemsLinkNumeric'>01.</span>
            About
          </HashLink>
        </li>
        <li className='navbar__items'>
          <HashLink to='/#projects' className='navbar__itemsLink'>
            <span className='navbar__itemsLinkNumeric'>02.</span>
            Projects
          </HashLink>
        </li>
        <li className='navbar__items'>
          <HashLink to='/#work' className='navbar__itemsLink'>
            <span className='navbar__itemsLinkNumeric'>03.</span>
            Work
          </HashLink>
        </li>
        <li className='navbar__items'>
          <NavLink to='/contact' className='navbar__itemsLink'>
            <span className='navbar__itemsLinkNumeric'>04.</span>
            Contact
          </NavLink>
        </li>
      </ul>
      <a
        href='https://drive.google.com/file/d/1uR2azPghqgwhKhb8BEUWa6Oimf6HO6Ek/view?usp=sharing'
        target='_blank'
        rel='noreferrer'
        className='navbar__button'
      >
        Resume
      </a>
    </div>
  </nav>
);

export default Navbar;
