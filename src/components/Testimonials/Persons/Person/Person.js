import classes from './Person.module.css';
import sanityClient from '../../../../client';
import React, { useEffect, useState } from 'react';
import ReactCardCarousel from 'react-card-carousel';

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
    <ReactCardCarousel autoplay={true} autoplay_speed={6000}>
      {testimonialsData &&
        testimonialsData.map((slide, index) => (
          <div className={classes.box__persons} key={index}>
            <div className={classes.container__image}>
              <img src={slide.mainImage.asset.url} alt={slide.mainImage.alt} />
            </div>

            <div className={classes.text}>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
    </ReactCardCarousel>
  );
}
