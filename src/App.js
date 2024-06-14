import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Landing/Home';
import About from './Components/About/About';
import Sell from './Components/Sell/Sell';
import Careers from './Components/Career/Career';


function App() {
  return (
    <Router>
      <div>
       
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

