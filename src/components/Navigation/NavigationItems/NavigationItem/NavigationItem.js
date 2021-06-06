import React from 'react';
import classes from './NavigationItem.module.css';
import { Link } from 'react-scroll';

export default function NavigationItem(props) {
  return (
    <li className={classes.navigation__item}>
      <Link
        activeClass={classes.active}
        to={props.id}
        spy={true}
        smooth='easeInOutCubic'
        duration={1500}
      >
        {props.children}
      </Link>
    </li>
  );
}
