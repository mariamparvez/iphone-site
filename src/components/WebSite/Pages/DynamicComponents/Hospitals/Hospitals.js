import React, { Component } from "react";
import Slider from "react-slick";
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
      speed: 500,
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
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
         {this.state.hospitals.map(hospital => {
             return(
                 <>
                 <section>
                     <img src={hospital.picture.medium} alt="" />
                     <article>
                         <h5>{hospital.name.first} {hospital.name.last}</h5>
                     </article>
                 </section>
                 </>
             )
         })}
        </Slider>
      </div>
    );
  }
}