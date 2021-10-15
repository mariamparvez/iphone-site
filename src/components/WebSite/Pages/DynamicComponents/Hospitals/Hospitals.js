import React, { Component } from "react";
import './Hospitals.css'
import Slider from "react-slick";
import { Container } from "react-bootstrap";
export default class Responsive extends Component {
    state = {
        hospitals: []
    }
    componentDidMount() {
        fetch('https://randomuser.me/api/?results=5')
        .then((response) => response.json())
        .then(hospitalList => {
            this.setState({ hospitals: hospitalList.results });
        });
    }
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
    console.log(this.state.hospitals)
    return (
      <Container className='hospitals'>
        <Slider {...settings}>
         {this.state.hospitals.map(hospital => {
             return(
                 <>
                 <section className='hospital-box'>
                     <img src={hospital.picture.medium} alt="" />
                     <article className='hospital-text'>
                         <h5>{hospital.name.first} {hospital.name.last}</h5>
                         <p>{hospital.location.country} {hospital.location.state}</p>
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