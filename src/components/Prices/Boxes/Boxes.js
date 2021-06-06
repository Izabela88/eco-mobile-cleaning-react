import React from 'react';
import classes from './Boxes.module.css';
import icon1 from '../../../assets/images/icons/polish.svg';

const boxItems = [
  {
    id: 1,
    title: 'Machine Paint Correction',
    image: icon1,
    text1: '1 Stage',
    text2: 'Small Car - £100',
    text3: 'Medium Car - £130',
    text4: 'Large Car - £160',
  },
  {
    id: 2,
    title: 'Machine Paint Correction',
    image: icon1,
    text1: '2 Stage',
    text2: 'Small Car - £200',
    text3: 'Medium Car - £250',
    text4: 'Large Car - £300',
  },
  {
    id: 3,
    title: 'Machine Paint Correction',
    image: icon1,
    text1: '3 Stage',
    text2: 'Small Car - £300',
    text3: 'Medium Car - £350',
    text4: 'Large Car - £500',
  },
];

export default function Boxes() {
  return (
    <div className={classes.box}>
      {boxItems.map((boxItem, index) => (
        <div className={classes.box__item} key={boxItem.id}>
          {/* <div className={classes.icon}>
            <img src={boxItem.image} alt='Icon' />
          </div> */}
          <h2>{boxItem.title}</h2>
          <p>{boxItem.text1}</p>
          <p>{boxItem.text2}</p>
          <p>{boxItem.text3}</p>
          <p>{boxItem.text4}</p>
        </div>
      ))}
    </div>
  );
}
