import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const galleryImages = [images.store2, images.kitchen0,images.kitchen00,images.kitchen1, images.kitchen2,images.kitchen3, images.kitchen4, images.kitchen5,images.kitchen6,images.kitchen7,images.kitchenman, images.kitchenfinish,
  images.cabinet1, images.cabinet2, images.cabinet3,
   images.beforeAter, images.servicesCollage,images.floor2 ,images.floorpic , images.beforeAter2, images.floor, images.closet]
// const galleryNewImages = [images.kitchen0,images.kitchen00,images.kitchen1, images.kitchen2,images.kitchen3, images.kitchen4, images.kitchen5,images.kitchen6,images.kitchen7,
// ];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 350;
    } else {
      current.scrollLeft += 350;
    }
  };

  return (
    <div className="app__gallery flex__center" id='gallery'>
      <div className="app__gallery-content">
        <SubHeading title="Follow our work" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Some of my works</p>
        {/* <p>Thank you for supporting and trusting my small business, new professional pictures are comming soon.</p> */}
        {/* <button type="button" className="custom__button">
          <a  href="" target="_blank"
                  rel="noopener noreferrer"
                  alt="ig" >View More</a>
        </button> */}
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" /> <a  href="" target="_blank"
                  rel="noopener noreferrer"
                  alt="ig" >
              {/* <BsInstagram className="gallery__image-icon" />  */}
              </a>
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>

   

      {/* <h4 className="headtext__cormorant">Recent Work!</h4>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryNewImages.map((Newimage, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={Newimage} alt="gallery_image" /> <a  href="" target="_blank"
                  rel="noopener noreferrer"
                  alt="ig" >
              <BsInstagram className="gallery__image-icon" /> 
              </a>
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div> */}
      </div>
  );
};

export default Gallery