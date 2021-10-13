import React, { Component } from "react";
import Slider from "react-slick";
import './OurService.css'
import { Link } from "react-router-dom";

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
      slidesToShow: 6,
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
        }
      ]
    };
    return (
      <Container className='speciality'>
      
        <div className="section-header text-center">
        <h2>Our Service</h2>
        </div>
        <Slider {...settings}>

  <article>
    <aside className='os-box'>
      <img className='os-img' src={OsOne} width={120} height={120} alt="os-one" />
      <p>Covid 19</p>
    </aside>
  </article>

  <article>
    <aside className='os-box'>
      <img className='os-img' src={OsTwo} width={120} height={120} alt="os-one" />
      <p>Medicine</p>
    </aside>
  </article>

  <article>
    <aside className='os-box'>
      <img className='os-img' src={OsThree} width={120} height={120} alt="os-one" />
      <p>Hospital</p>
    </aside>
  </article>

</Slider>

<Link to='/s-list'>
  <div id='view-btn'>
  <button className="btn view-btn">View More</button>
  </div>
</Link>
      </Container>
    );
  }
}


          