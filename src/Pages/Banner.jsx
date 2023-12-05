import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Buttons } from '../Ui';
// import './styles.css'; // Import your CSS file

export default function Banners() {
  return (
    <div className="banner-wrapper">
      <div className='moon'>
        <Image className='Banner-img' src='https://unoapp.com/wp-content/uploads/2022/06/unoapp-software-engg-software-development-life-cycle-graphic.png' alt='Banner Image' />
      </div>

      <Container className='banner-container d-flex flex-column '>
        <div className='d-md-flex flex-md-row-reverse'>
          <div className='flex-grow-1'>
            <p className='fw-bolder banner-container-p1 ' >
              WE CRAFT AND CREATE WEB AND MOBILE APPS.
            </p>
            <p className='banner-container-p2' >
              Unoapp provides full development and design services to help you create amazing products and mobile experiences.
            </p>
            <div className='banner-container-div'>
            <Buttons text={"Contact Now"} width={"10rem"} height={"3rem"} backgroundColor={"#333333"} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
