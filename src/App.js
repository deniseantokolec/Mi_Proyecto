import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from '../src/utilities/nav/nav';
import Nosotros from './utilities/sections/nosotros/nosotros';

import './App.css';
import Contacto from './utilities/sections/Contacto/contacto';



function App() {
  return (

   <div className="App">
      <div className='App-header'> 
        <Nav/>
        <div  className='body'>
        <Routes>
          <Route  path='/' element={<Nosotros/>}/>
          <Route path='/Contacto/' element={<Contacto/>}/>
          <Route />
          <Route />
        </Routes>
        </div>
        
      </div>

    </div>    
  )
}

export default App;
