import { useRef, useState } from 'react';
import './App.css';
import Carousel from './components/Carousel';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Values from './components/Values';
import Work from './components/Work';

function App() {
  const [navbarShow, setNavbarShow] = useState(true);
  const valuesRef = useRef(null);
  const contactRef = useRef(null);
  const handleNavbar = (x) => {
    console.log(x);
  }
  return (
    <div onScroll={handleNavbar}>
      <Navbar isShow={navbarShow} valuesRef={valuesRef} contactRef={contactRef} />
      <Carousel />
      <Values refrence={valuesRef} />
      <Contact refrence={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
