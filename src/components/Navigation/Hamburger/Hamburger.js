import React from 'react';
import classes from './Hamburger.module.css';
import { Squash as Hamburger } from 'hamburger-react';

function HamburgerIcon(props) {
  return (
    <div onClick={props.clicked} className={classes.hamburgerIcon}>
      <Hamburger rounded duration={0.3} color='#fff' easing='ease-in' />
    </div>
  );
}

export default HamburgerIcon;
