import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;