import React from 'react';
import logo1 from '../../assets/images/logo.png';
import classes from './Logo.module.css';
import { Link } from 'react-scroll';

const logo = (props) => (
  <div className={classes.logo}>
    <Link smooth='easeInOutCubic' duration={2000} to={props.id}>
      <img src={logo1} alt='Logo' />
    </Link>
  </div>
);

export default logo;
