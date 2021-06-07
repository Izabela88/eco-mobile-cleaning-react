import React from 'react';
import Boxes from './Boxes/Boxes';
import Aos from 'aos';

import classes from './Prices.module.css';
import Cards from './Cards/Cards';

export default function Prices() {
  React.useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <section className={classes.prices} id='prices'>
      <div className={classes.container}>
        <div data-aos='zoom-in' className={classes.heading}>
          <h1>
            <span>Prices</span> And Services
          </h1>
        </div>
        <div data-aos='fade-up' data-aos-mirror='true'>
          <Cards />
        </div>
        <div data-aos='fade-up' data-aos-mirror='true'>
          <Boxes />
        </div>
      </div>
    </section>
  );
}
