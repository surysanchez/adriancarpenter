import React from 'react';


import { AboutUs, FindUs, Footer, Gallery, Header, Intro, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import Contact from './container/Contact/Contact';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Gallery />
    {/* <Intro /> */}
    <FindUs />
    {/* <Contact/> */}
    <Footer/>
  </div>
);

export default App;


