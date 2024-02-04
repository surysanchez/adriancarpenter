import React from 'react';

import './app.scss'
import './App.css';

import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';



const App = () => (
  <div>
    <section id='HomePage'>
<Navbar/>
    </section>
    <section >
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
