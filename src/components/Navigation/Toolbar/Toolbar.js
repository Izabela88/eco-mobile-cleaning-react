import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import { debounce } from '../../utilities/helpers';
import { useState, useEffect } from 'react';

export default function Toolbar(props) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <header
      className={classes.toolbar}
      style={{ top: visible ? '0' : '-220px' }}
    >
      <div className={classes.logo}>
        <Logo id='home' />
      </div>

      <nav className={classes.desktop__only}>
        <NavigationItems />
      </nav>
    </header>
  );
}
