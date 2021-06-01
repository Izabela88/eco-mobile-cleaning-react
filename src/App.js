import Home from './components/Home/Home';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import About from './components/About/About';
import Prices from './components/Prices/Prices';

function App() {
  return (
    <div className='App'>
      <Home />
      <Toolbar />
      <About />
      <Prices />
    </div>
  );
}

export default App;
