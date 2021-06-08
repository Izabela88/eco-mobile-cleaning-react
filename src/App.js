import Home from './components/Home/Home';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import About from './components/About/About';
import Prices from './components/Prices/Prices';
import Persons from './components/Testimonials/Persons/Persons';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTopBtn from './components/ScrollToTopBtn/ScrollToTopBtn';

function App() {
  return (
    <div className='App'>
      <Home />
      <Toolbar />
      <About />
      <Prices />
      <Persons />
      <Contact />
      <ScrollToTopBtn />
      <Footer />
    </div>
  );
}

export default App;
