import React from 'react';
import './App.css';

import { AboutUs, FindUs, Footer, Gallery, Header, SpecialMenu } from './container';
import { Navbar,CreateReviews } from './components';
import ReviewsPage from './container/ReviewsPage/ReviewsPage';

// import Contact from './container/Contact/Contact';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Gallery />
    {/* <Intro /> */}
    <FindUs />
    <ReviewsPage/>
    <CreateReviews/>
    {/* <Contact/> */}
    <Footer/>
  </div>
);

export default App;


