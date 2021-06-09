import classes from './ScrollToTopBtn.module.css';
import * as react from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = react.useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  // const scrollTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <Link to='home' spy={true} smooth='easeInOutCubic' duration={2000}>
      <FaArrowCircleUp
        className={classes.scrollTop}
        // onClick={scrollTop}
        style={{
          height: 40,
          color: '#fff',
          display: showScroll ? 'flex' : 'none',
        }}
      />
    </Link>
  );
};

export default ScrollArrow;
