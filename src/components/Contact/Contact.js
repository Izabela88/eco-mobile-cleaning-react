import React from 'react';
import styles from './Contact.module.css';
import Form from './Form/Form';
import img from '../../assets/images/i1.jpg';
import email from '../../assets/images/icons/email.svg';
import phone from '../../assets/images/icons/phone.svg';
import address from '../../assets/images/icons/map-pointer.svg';

export default function Contact() {
  return (
    <section
      id='contact'
      className={styles.contact}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className={styles.box}></div>
      <div className={styles.container}>
        <div className={styles.headings}>
          <h1>
            <span>Questions?</span> Stay in Touch!
          </h1>
        </div>
        <div className={styles.contact__box}>
          <div className={styles.form__box}>
            <Form />
          </div>

          <div className={styles.form__icons}>
            <div className={styles.icon}>
              <img src={email} alt='' />
            </div>
            <p> yuyken@gmail.com</p>
            <div className={styles.icon}>
              <img src={phone} alt='' />
            </div>
            <p>+44 7456 470550</p>
            <div className={styles.icon}>
              <img src={address} alt='' />
            </div>
            <p>
              136 Field Lane
              <br /> 26 Cheering Lane <br />
              Derby DE24 0GT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
