import React from 'react';
import classes from './AboutBox.module.css';
import icon1 from '../../../assets/images/icons/best-value.svg';
import icon2 from '../../../assets/images/icons/team.svg';
import icon3 from '../../../assets/images/icons/plant-based.svg';
import icon4 from '../../../assets/images/icons/map-pointer.svg';
import icon5 from '../../../assets/images/icons/clock.png';
import icon6 from '../../../assets/images/icons/water.svg';

const boxItems = [
  {
    id: 1,
    title: 'Great Value',
    image: icon1,
    text: 'We offer multiple services at a great value to meet your needs.',
  },
  {
    id: 2,
    title: 'Experienced Team',
    image: icon2,
    text: 'Our crew members are all trained and skilled and fully equiped with equipment and supplies needed that we can deliver the best results.',
  },
  {
    id: 3,
    title: 'Eco Friendly Products',
    image: icon3,
    text: 'Our products are eco-friendly. We use only 3l of water for one car with absolutely zero-waste! We will clean your car inside and outside with steam!',
  },
  {
    id: 4,
    title: 'Convenience',
    image: icon4,
    text: 'We are dedicated to providing quality service, customer satisfaction at a great value an area up to 35 miles from Derby.',
  },
  {
    id: 5,
    title: 'Time and Money Saving',
    image: icon5,
    text: ' Do not waste your precious time and money! We will come to you and clean your car!',
  },
  {
    id: 6,
    title: 'Never Wet Surfaces!',
    image: icon6,
    text: '​The steam remove even strong dirt from the surface of the fabric without getting it wet!',
  },
];

export default function AboutBox() {
  return (
    <div className={classes.box}>
      {boxItems.map((boxItem, index) => (
        <div className={classes.box__item} key={boxItem.id}>
          <div className={classes.icon}>
            <img src={boxItem.image} alt='Icon' />
          </div>
          <h2>{boxItem.title}</h2>
          <p>{boxItem.text}</p>
        </div>
      ))}
    </div>
  );
}
