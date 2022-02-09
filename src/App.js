import React from 'react';
import { BrowserRouter as Router, Routes, Route, useHref, Link } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Resume from './pages/Resume';
import './app.css'

function App() {
  function about() {
    window.location.href = '/about'
  }
  function projects() {
    window.location.href = '/projects'
  }
  function contact() {
    window.location.href = '/contact'
  }
  function resume() {
    window.location.href = '/resume'
  }
  function home() {
    window.location.href = '/'
  }
  return (
    <div className="App">
      <Router>
        <h1 className='name'>Will</h1>
        <div className='name'>
        <button onClick={home}>Home</button>
        <button onClick={about}>About</button>
        <button onClick={projects}>Projects</button>
        <button onClick={contact}>Contact</button>
        <button onClick={resume}>Resume</button>
        </div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/Resume' element={<Resume />} />
        </Routes>
        <div className='bottom'>Made with love by Will on a Geonworks F1-8X</div>
      </Router>
    </div>
  );
}

export default App;
