import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { images } from '../../constants';
import {motion} from "framer-motion"

import './Header.css';
// import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <>

    <MDBCarousel showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src={images.carpenter} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img  src={images.about} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img   src={images.parallax} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
    </>
  )
};

export default Header;
