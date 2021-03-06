import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.main__footer}>
    <div className={styles.footer__content}>
      <p>
        Copyright Eco Mobile Cleaning , Izabela Krupinska &copy; 2021. All
        Rights Reserved
      </p>
      <p className={styles.text}>
        Icons from{' '}
        <a href='https://www.flaticon.com/' title='Flaticon'>
          www.flaticon.com
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
