import classes from './About.module.css';
import img from '../../assets/images/i21.png';
import AboutBox from './AboutBox/AboutBox';

export default function About() {
  return (
    <section
      style={{
        backgroundImage: `url(${img})`,
        filter: 'brightness(90%)',
      }}
      className={classes.about}
      id='about'
    >
      <div className={classes.image}></div>
      <div className={classes.container}>
        <div className={classes.heading}>
          <h1>
            <span>About</span> Us
          </h1>
        </div>
        <AboutBox />
      </div>
    </section>
  );
}
