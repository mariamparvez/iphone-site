import React, { Component } from "react";
import './Hospitals.css'
import { hList } from "./hList";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
export default class Responsive extends Component {
  
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Container className='hospitals'>
        <Slider {...settings}>
         {hList.map(hospital => {
             return(
                 <>
                 <section className='hospital-box'>
                     <img src={hospital.img} alt="" />
                     <article className='hospital-text'>
                         <h5>{hospital.name}</h5>
                         <p>{hospital.place}</p>
                     </article>
                 </section>
                 </>
             )
         })}
        </Slider>
        
      </Container>
    );
  }
}