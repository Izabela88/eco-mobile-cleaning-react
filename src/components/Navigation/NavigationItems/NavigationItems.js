import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

export default function NavigationItems() {
  return (
    <ul className={classes.navigation__items}>
      <NavigationItem id='home'>
        <div className={classes.icon}>
          <p>Home</p>
        </div>
      </NavigationItem>
      <NavigationItem id='about'>
        <div className={classes.icon}>
          <p>About</p>{' '}
        </div>
      </NavigationItem>
      <NavigationItem id='prices'>
        <div className={classes.icon}>
          <p>Prices</p>
        </div>
      </NavigationItem>
      <NavigationItem id='testimonials'>
        <div className={classes.icon}>
          <p>Reviews</p>
        </div>
      </NavigationItem>
      <NavigationItem id='contact'>
        <div className={classes.icon}>
          <p>Booking</p>
        </div>
      </NavigationItem>
      <NavigationItem id='contact'>
        <div className={classes.icon}>
          <p>Contact</p>
        </div>
      </NavigationItem>
    </ul>
  );
}
