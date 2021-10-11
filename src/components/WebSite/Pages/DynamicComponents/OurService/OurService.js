import React, { Component } from "react";
import Slider from "react-slick";
import './OurService.css'
import { Link } from "react-router-dom";

import osOne from "../../../../assets/img/our-service/corona.svg";
import osTwo from "../../../../assets/img/our-service/hospital.svg";
import osThree from "../../../../assets/img/our-service/medicine.svg";
import osFour from "../../../../assets/img/our-service/others.svg";
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
            slidesToShow: 4,
            slidesToScroll: 4
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

  <article className='s-items'>
    <aside className="speicality-item">
      <Link to='/doctors'> 
        <div id='img-spec'>
          <img src={osOne} alt="Speciality"/> 
        </div>
      </Link>
      <p>Covid 19</p>
      </aside>
  </article>

  <article className='s-items'>
    <aside className="speicality-item">
      <Link to='/doctors'> 
        <div id='img-spec'>
          <img src={osTwo} alt="Speciality"/> 
        </div>
      </Link>
      <p>Hospital</p>
      </aside>
  </article>

  <article className='s-items'>
    <aside className="speicality-item">
      <Link to='/doctors'> 
        <div id='img-spec'>
          <img src={osThree} alt="Speciality"/> 
        </div>
      </Link>
      <p>Medicine</p>
      </aside>
  </article>

  <article className='s-items'>
    <aside className="speicality-item">
      <Link to='/doctors'> 
        <div id='img-spec'>
          <img src={osFour} alt="Speciality"/> 
        </div>
      </Link>
      <p>Others</p>
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


          