import React from 'react';
import Boxes from './Boxes/Boxes';

import classes from './Prices.module.css';
import Cards from './Cards/Cards';

export default function Prices() {
  return (
    <section className={classes.prices} id='prices'>
      <div className={classes.container}>
        <div className={classes.heading}>
          <h1>
            <span>Prices</span> And Services
          </h1>
        </div>
        <Cards />
        <Boxes />
      </div>
    </section>
  );
}
