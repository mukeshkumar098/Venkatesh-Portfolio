// App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Education/>
      <Services />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;