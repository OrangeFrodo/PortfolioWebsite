import './App.css';

import { BrowserRouter as Router, BrowserRouter } from 'react-router-dom';

// Component

import Navbar2 from './components/navbar-2';
import SvgOne from './components/pages/svgOne';
import HeroSection from './components/pages/heroSection';
import Skills from './components/pages/skills';
import ListOfProjectsPage from './components/pages/listOfProjects';
import Contact from './components/pages/contact';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar2 />

          <HeroSection />
          <Skills />
          <ListOfProjectsPage />
          <Contact />

        <SvgOne />
      </BrowserRouter>
    </>
  );
}

export default App;
