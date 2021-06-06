import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

export default function NavigationItems() {
  return (
    <ul className={classes.navigation__items}>
      <NavigationItem id='home'>Home</NavigationItem>
      <NavigationItem id='about'>About</NavigationItem>
      <NavigationItem id='prices'>Prices</NavigationItem>
      <NavigationItem id='testimonials'>Testimonials</NavigationItem>
      <NavigationItem id='contact'>Contact</NavigationItem>
    </ul>
  );
}
