import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import './App.css';
import {Home , Contact, Projects,Header ,About} from './components'

function AppRoutes() {
  return (
    <>
    
      <Router>
      <Header/>
         <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/Project' element={<Projects/>} />
            <Route path='/About' element={<About/>} />
         </Routes>
        
      </Router>
   
      </>
  );
}

export default AppRoutes;