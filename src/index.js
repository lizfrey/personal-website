import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Nav from './nav/nav';
import './style.scss';
import Fallback from './components/fallback';
import Contact from './nav/contact';

// eslint-disable-next-line react/function-component-definition
const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <div className="main-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Fallback />} />
          </Routes>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById('main'));
root.render(<App />);
