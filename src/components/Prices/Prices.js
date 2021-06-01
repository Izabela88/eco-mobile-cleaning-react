import React from 'react';

import classes from './Prices.module.css';
import Cards from './Cards/Cards';

export default function Prices() {
  return (
    <section className={classes.prices} id='prices'>
      {/* <div className={classes.bg__image}>
        <Image
          src='/images/bg.jpg'
          alt='About image'
          layout='fill'
          objectFit='cover'
        />
      </div> */}
      <div className={classes.heading}>
        <h1>
          <span>Prices</span> And Services
        </h1>
      </div>
      <Cards />
    </section>
  );
}
