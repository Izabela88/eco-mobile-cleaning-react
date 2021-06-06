import classes from './Persons.module.css';
import Person from './Person/Person';

export default function Persons() {
  return (
    <section className={classes.persons} id='testimonials'>
      <div className={classes.persons__heading}>
        <h1>
          <span>Our</span> Cursomers Love Us!
        </h1>
      </div>
      <Person />
    </section>
  );
}
