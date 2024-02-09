import React from 'react';
import './app.scss'

import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import About from './components/About/About';
import Services from './components/CarpenterServices/Services';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';

const App = () => (
  <div>
    <section id='Homepage'> <Navbar/> <HomePage/> </section>

    <section id='About'> <About/></section>

    <section> <Services/> </section>

    <section> <Gallery/> </section>

    <section id='Contact'><Contact/> </section>
    {/* <section>Footer</section> */}
    
  </div>
);

export default App;
