import React, { useEffect, useState } from 'react';
import classes from './Cards.module.css';
import sanityClient from '../../../client';
import BlockContent from '@sanity/block-content-to-react';

export default function Cards() {
  const [cardsData, setCardsData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "cards" && featured != true]{
        title,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        },
        description,
     content,
     car1,
     car2,
     car3,
     popular
      }`
      )
      .then((data) => setCardsData(data))
      .catch(console.error);
  }, []);
  console.log(cardsData);

  return (
    <div className={classes.container}>
      <div className={classes.cards}>
        {cardsData &&
          cardsData.map((card, index) => (
            <div key={index} className={classes.card}>
              <div
                className={`${classes.card__side} ${classes.card__sidefront1} `}
              >
                <div className={classes.image}>
                  <img
                    src={card.mainImage.asset.url}
                    alt={card.mainImage.alt}
                  />
                </div>

                <div className={classes.text}>
                  <h1>{card.title}</h1>
                  <BlockContent blocks={card.content} />
                </div>
              </div>

              <div
                className={`${classes.card__side} ${classes.card__sideback} ${classes.card__sideback1}`}
              >
                <div className={classes.card__cta}>
                  <div className={classes.card__pricebox}>
                    <p>{card.car1}</p>
                    <p>{card.car2}</p>
                    <p>{card.car3}</p>
                  </div>
                  <h4>{card.description}</h4>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
