import { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import './styles/App.css';
import Projects from './components/Projects';


function App() {
  const [isLightMode, setLightMode] = useState(false);

  return (
    <>
      <body className={isLightMode ? 'lightMode' : ""}>
        <Header isLightMode={isLightMode} setLightMode={setLightMode} />
        <Hero />
        <About />
        <Featured />
        <Projects />
        <Contact />
        <Footer />
      </body>
    </>
  );
}

export default App;
