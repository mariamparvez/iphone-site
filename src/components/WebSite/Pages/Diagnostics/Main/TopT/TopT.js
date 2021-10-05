import React, { Component } from "react";
import Slider from "react-slick";
import './TopT.css'
import { Link } from 'react-router-dom';

//images
import tOne from '../../../../../assets/img/top-rated/01.png'
import tTwo from '../../../../../assets/img/top-rated/02.png'
import tThree from '../../../../../assets/img/top-rated/03.png'
import tFour from '../../../../../assets/img/top-rated/04.png'
import tFive from '../../../../../assets/img/top-rated/05.png'
import tSix from '../../../../../assets/img/top-rated/06.png'
import tSeven from '../../../../../assets/img/top-rated/07.png'
import tEight from '../../../../../assets/img/top-rated/08.png'
import tNine from '../../../../../assets/img/top-rated/09.png'

export default class TopT extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 1000,
      cssEase: "linear",
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
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
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
         <section id="top-tests">
        <article>
            <div className="section-header text-center">
                <h2>Top Rated-tests</h2>
            </div>
        <Slider {...settings}>

        <div id="top-test-col">
            <div className="top-test">
                <Link to='/test-detail'>
                <div className="top-test-1">
                    <img className="top-test-img" src={tOne} alt=""/>
                    <h6>Lorem, ipsum.</h6>
                </div>
                </Link>
            </div>
        </div>

        <div id="top-test-col">
            <div className="top-test">
                <Link to='/test-detail'>
                <div className="top-test-1">
                    <img className="top-test-img" src={tTwo} alt=""/>
                    <h6>Lorem, ipsum.</h6>
                </div>
                </Link>
            </div>
        </div>

        <div id="top-test-col">
            <div className="top-test">
                <Link to='/test-detail'>
                <div className="top-test-1">
                    <img className="top-test-img" src={tThree} alt=""/>
                    <h6>Lorem, ipsum.</h6>
                </div>
                </Link>
            </div>
        </div>
  
        <div id="top-test-col">
            <div className="top-test">
                <Link to='/test-detail'>
                <div className="top-test-1">
                    <img className="top-test-img" src={tFour} alt=""/>
                    <h6>Lorem, ipsum.</h6>
                </div>
                </Link>
            </div>
        </div>

        <div id="top-test-col">
            <div className="top-test">
                <Link to='/test-detail'>
                <div className="top-test-1">
                    <img className="top-test-img" src={tFive} alt=""/>
                    <h6>Lorem, ipsum.</h6>
                </div>
                </Link>
            </div>
        </div>

</Slider>

<Slider {...settings}>

        <div id="top-test-col">
            <div className="top-test">
                <Link to='/test-detail'>
                <div className="top-test-1">
                    <img className="top-test-img" src={tSix} alt=""/>
                    <h6>Lorem, ipsum.</h6>
                </div>
                </Link>
            </div>
        </div>

        <div id="top-test-col">
            <div className="top-test">
                <Link to='/test-detail'>
                <div className="top-test-1">
                    <img className="top-test-img" src={tSeven} alt=""/>
                    <h6>Lorem, ipsum.</h6>
                </div>
                </Link>
            </div>
        </div>

        <div id="top-test-col">
            <div className="top-test">
                <Link to='/test-detail'>
                <div className="top-test-1">
                    <img className="top-test-img" src={tEight} alt=""/>
                    <h6>Lorem, ipsum.</h6>
                </div>
                </Link>
            </div>
        </div>

        <div id="top-test-col">
            <div className="top-test">
                <Link to='/test-detail'>
                <div className="top-test-1">
                    <img className="top-test-img" src={tNine} alt=""/>
                    <h6>Lorem, ipsum.</h6>
                </div>
                </Link>
            </div>
        </div>
        </Slider>

        </article>
        <button className="btn view-btn">View More</button>
      </section>
    );
  }
}






