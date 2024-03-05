import './App.css';

import { BrowserRouter as Router, BrowserRouter } from 'react-router-dom';

// Component
import Navbar from './components/navbar';
import Home from './components/pages/home';
import SvgOne from './components/pages/svgOne';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <SvgOne />
      </BrowserRouter>
    </>
  );
}

export default App;
