import classes from './Person.module.css';
import sanityClient from '../../../../client';
import React, { useEffect, useState } from 'react';

export default function Person() {
  const [testimonialsData, setTestimonialsData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "testimonials"]{
        title,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        },
        description,
    
      }`
      )
      .then((data) => setTestimonialsData(data))
      .catch(console.error);
  }, []);
  console.log(testimonialsData);

  return (
    <div className={classes.box__persons}>
      {testimonialsData &&
        testimonialsData.map((slide, _id) => (
          <div key={_id}>
            <div className={classes.container__image}>
              <img src={slide.mainImage.asset.url} alt={slide.mainImage.alt} />
            </div>

            <div className={classes.text}>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
