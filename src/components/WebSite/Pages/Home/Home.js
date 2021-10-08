import React,{useEffect} from 'react';
import { Container } from 'react-bootstrap';
import Specialitites from '../DynamicComponents/Specialities/specialities';
import Feedback from './FeedBack';
import Blog from '../Blog/Blog';
import Three from '../DynamicComponents/Three/Three';
import Appointment from '../Appointments/Appointment/Appointment';
import Space from '../DynamicComponents/Space/Space';
import DocHome from '../Doctors/Doctors/DocHome';
import './FormDesign.css'
import HomeBanner from './HomeBanner/HomeBanner';
import SearchS from './Search/SearchS';
import SelfCheck from '../DynamicComponents/SelfCheck/SelfCheck';
import BannerTwo from './BannerTwo/BannerTwo';

const Home = () => {

    useEffect(() => {
        window.scroll(0,0)
    }, )

    return ( 
        <>
<main className="main-wrapper">
<Space/>
<HomeBanner/>
<SearchS/>
<Specialitites/>
<Three/>
<Appointment/>
<SelfCheck/>
<BannerTwo/>
<div className="section-header text-center">
    <p className="section-p text-center">Top Health Care Professionals to Solve Your Health Issues.</p>
</div>  
<DocHome/>
<Container>
    <article id='f-box' className='text-center'>
    <h3 style={{paddingTop: '2rem'}}>What People Say about Us</h3>
    <Feedback/>
    </article>
</Container>
<Blog/>
</main>
</>
);
}
 
export default Home;