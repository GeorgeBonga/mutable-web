import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import '../src/index';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './Components/Home/Home';


function App() {
 
  return (
    <>
      <Router>
      
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </Router>
    </>
  );
}


export default App;
