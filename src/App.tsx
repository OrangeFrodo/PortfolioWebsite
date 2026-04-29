import './App.css';
import { BrowserRouter } from 'react-router-dom';

// Components
import Navbar2 from './components/navbar-2';
import SvgOne from './components/pages/svgOne';
import HeroSection from './components/pages/heroSection';
import Skills from './components/pages/skills';
import ListOfProjectsPage from './components/pages/listOfProjects';
import Certificates from './components/pages/certificates';
import Contact from './components/pages/contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar2 />
        <HeroSection />
        <Skills />
        <ListOfProjectsPage />
        <Certificates />
        <Contact />
      </BrowserRouter>
    </>
  );
}

export default App;
