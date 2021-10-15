import React, {useEffect} from 'react';
import './Diagnostics.css'
import PosterCard from '../Poster/PosterCard';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Carousel from '../Components/Carousel';
import PopC from './PopC/PopC';
import Space from '../../DynamicComponents/Space/Space';

//images
import iconOne from "../../../../assets/img/specialities/svg/1.svg";
import iconTwo from "../../../../assets/img/specialities/svg/2.svg";
import iconThree from "../../../../assets/img/specialities/svg/3.svg";
import TopT from './TopT/TopT';
import Search from '../../DynamicComponents/Search/Search';




const Diagnostics = () => {
	useEffect(() => {
        window.scroll(0,0)
    }, )
	return ( 
		<>
		<Space/>
		<Container>
			
		<section style={{paddingTop: '2rem'}}><Search/> </section>
  		<Carousel/>
		</Container>	

			<section id="aff-blogs" className="section section-blogs">
				<article id="view-btn">
				<div className="container">
					<div className="section-header text-center">
						<h2>Affordable health Packages</h2>
						<p className="sub-title">Every time you book a test with Medatu, we connect you with the most leading and certified labs located near you.</p>
					</div>
					<div>
					<PosterCard/>
					</div>
					</div>
					<button className="btn view-btn">View More</button>
				</article>
			</section>

           
			<section id="view-btn" >
				<div id="browse-section">
				<div className="container">
					<div className="section-header pop-header text-center">
						<h2>Popular Categories</h2><br/><br/>
					</div>
					<PopC/>
				</div>
				</div>
				<Link to='/pop-test'>
				<button className="btn view-btn">View More</button>
				</Link>
			</section>
			
<TopT/>

			<section id="view-btn" className="section section-blogs">
				
				<div className="container">

					<div className="section-header text-center">
						<h2>Featured Labs</h2>
						<p className="sub-title">Every time you book a test with Medatu, we connect you with the most leading and certified labs located near you.</p>
					</div>
			
					<div>
					<PosterCard/>
					</div>
					
				</div>
			
					<button className="btn view-btn">View More</button>
				
			</section>
</>
	 );
}
 
export default Diagnostics;

   