import React from 'react';
import Home from './home/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Courses from './courses/Courses';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={<Courses />} /> {/* Changed path for Course */}
          <Route path='/signup' element={<Signup />} /> {/* Changed path for Course */}
       

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
