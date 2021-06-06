import React from 'react';
import classes from './Home.module.css';
import img from '../../assets/images/home-img.png';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section
      className={classes.home}
      id='home'
      style={{
        backgroundImage: `url(${img})`,
        filter: 'brightness(90%)',
      }}
    >
      <div className={classes.image}></div>
      <div className={classes.heading}>
        <div className={classes.heading1}>
          <h1>welcome to</h1> <br />
        </div>
        <div className={classes.heading2}>
          <h2>
            <span>Eco</span> Mobile <br />
            Cleaning
          </h2>
        </div>
      </div>
      <div className={classes.text}>
        <p>
          <span>Mobile</span> Car Wash <br /> <span>Detailing</span> services
          with a personal touch <br />
          <span>Your</span> car is always in great hands with us
        </p>
        <Link to='prices' spy={true} smooth='easeInOutCubic' duration={2000}>
          <div className={classes.btn}>Prices</div>
        </Link>
      </div>
    </section>
  );
}
