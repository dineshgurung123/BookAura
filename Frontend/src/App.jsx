import React from 'react';
import Home from './home/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Courses from './courses/Courses';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={<Courses />} /> {/* Changed path for Course */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
