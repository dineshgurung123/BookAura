import React from 'react';
import Home from './home/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Courses from './courses/Courses';
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';

function App() {
 
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
         
          <Route path='/signup' element={<Signup />} /> {/* Changed path for Course */}
       

        </Routes>
      </BrowserRouter>
     <Toaster/>

    </>
  );
}

export default App;
