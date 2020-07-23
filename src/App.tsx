import React from 'react';
import {Home , Contact, Projects,Header ,About} from './components'
import './App.css';

function App() {
  return (
    <div className="App">
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;
