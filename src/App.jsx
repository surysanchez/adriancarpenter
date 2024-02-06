import React from 'react';
import './app.scss'


import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';



const App = () => (
  <div>
    <section id='Homepage'> <Navbar/>
    <HomePage/>
   
     </section>
    <section id='About'>About</section>
    <section id='Services'>Services</section>
    <section id='Gallery'>Gallery</section>
    <section id='Contact'>Contact</section>
    <section>Footer</section>
    
  </div>
);

export default App;
