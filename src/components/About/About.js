import classes from './About.module.css';
import img from '../../assets/images/i21.png';
import AboutBox from './AboutBox/AboutBox';
import Aos from 'aos';
import React from 'react';

export default function About() {
  React.useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <section
      style={{
        backgroundImage: `url(${img})`,
        filter: 'brightness(90%)',
      }}
      className={classes.about}
      id='about'
    >
      <div className={classes.image}></div>
      <div data-aos-offset='200' data-aos='zoom-in' className={classes.heading}>
        <h1>
          <span>About</span> Us
        </h1>
      </div>
      <div className={classes.container}>
        <div data-aos='fade-up' data-aos-mirror='true'>
          <AboutBox />
        </div>
      </div>
    </section>
  );
}
