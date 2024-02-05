import React from 'react';

import './app.scss'

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';



const App = () => (
  <div>
    <section id='Homepage'> <Navbar/>
    <Home/>
     </section>
    <section id='About'>About</section>
    <section id='Services'>Services</section>
    <section id='Gallery'>Gallery</section>
    <section id='Contact'>Contact</section>
    <section>Footer</section>
    
  </div>
);

export default App;
