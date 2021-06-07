import React from 'react';
import classes from './Contact.module.css';
import Form from './Form/Form';
import img from '../../assets/images/i1.jpg';
import email from '../../assets/images/icons/email.svg';
import phone from '../../assets/images/icons/phone.svg';
import address from '../../assets/images/icons/map-pointer.svg';
import fac from '../../assets/images/icons/facebook-logo.svg';

export default function Contact() {
  return (
    <section
      id='contact'
      className={classes.contact}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className={classes.box}></div>
      <div className={classes.container}>
        <div className={classes.headings}>
          <h1>
            <span>Book</span> Your Appoitment Here!
          </h1>
        </div>
        <div className={classes.contact__box}>
          <div className={classes.form__box}>
            <Form />
          </div>

          <div className={classes.form__icons}>
            <div className={classes.icon}>
              <img src={email} alt='' />
            </div>
            <p> yuyken@gmail.com</p>
            <div className={classes.icon}>
              <img src={phone} alt='' />
            </div>
            <p>+44 7456 470550</p>
            <div className={classes.icon}>
              <img src={address} alt='' />
            </div>
            <p>
              136 Field Lane
              <br /> 26 Cheering Lane <br />
              Derby DE24 0GT
            </p>
            <div className={classes.icon}>
              <img src={fac} alt='' />
            </div>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.facebook.com/Eco-mobile-cleaning-411751672939251/reviews/?ref=page_internal'
            >
              Check out our Facebook site here!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
