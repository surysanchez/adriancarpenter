import React from 'react';

import './app.scss'
import './App.css';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';



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
