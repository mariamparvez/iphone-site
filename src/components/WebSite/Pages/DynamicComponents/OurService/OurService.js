import React, { Component } from "react";
import Slider from "react-slick";
import './OurService.css'

import OsOne from '../../../../assets/img/os-img/1.jpg'
import OsTwo from '../../../../assets/img/os-img/2.jpg'
import OsThree from '../../../../assets/img/os-img/3.jpg'
import { Container } from "react-bootstrap";

export default class OurService extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToScroll: 0,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 440,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            touchThreshold:100,
          }
        }
      ]
    };
    return (
      <Container className='speciality'>
      
        <div className="section-header text-center">
        <h2>Our Services</h2>
        </div>
        <Slider {...settings}>

  <article>
    <aside className='os-box'>
      <img className='os-img' src={OsOne}alt="os-one" />
      <p>Covid 19 Test</p>
    </aside>
  </article>

  <article>
    <aside className='os-box'>
      <img className='os-img' src={OsTwo}alt="os-one" />
      <p>Medicines</p>
    </aside>
  </article>

  <article>
    <aside className='os-box'>
      <img className='os-img' src={OsThree}alt="os-one" />
      <p>Certified Labs</p>
    </aside>
  </article>

  <article>
    <aside className='os-box'>
      <img className='os-img' src={OsThree}alt="os-one" />
      <p>Hospital</p>
    </aside>
  </article>
</Slider>

      </Container>
    );
  }
}


          