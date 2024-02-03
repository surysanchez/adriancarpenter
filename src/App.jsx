import React from 'react';

import './app.scss'
import './App.css';
import { Navbar } from 'react-bootstrap';
import Home from './components/Home/Home';



const App = () => (
  <div>
    {/* <section>
   <Navbar/>
    </section> */}
    <section>
   <Home/>
    </section>
    <section>About</section>
    <section>Services</section>
    <section>Video</section>
    <section>Contact</section>
    <section>Footer</section>
    
  </div>
);

export default App;
