import React,{useEffect} from 'react';
import { Container } from 'react-bootstrap';
import Specialitites from '../DynamicComponents/Specialities/specialities';
import OurService from '../DynamicComponents/OurService/OurService';
import Feedback from './FeedBack';
import Blog from '../Blog/Blog';
import Appointment from '../Appointments/Appointment/Appointment';
import Space from '../DynamicComponents/Space/Space';
import DocHome from '../Doctors/Doctors/DocHome';
import HomeBanner from './HomeBanner/HomeBanner';
import SelfCheck from '../DynamicComponents/SelfCheck/SelfCheck';
import BannerTwo from './BannerTwo/BannerTwo';
import Tests from '../DynamicComponents/Tests/Tests';
import Search from '../DynamicComponents/Search/Search';

const Home = () => {

    useEffect(() => {
        window.scroll(0,0)
    }, )

    return ( 
        <>
<main className="main-wrapper">
<Space/>
<Search/>
<HomeBanner/>
<OurService/>
<Tests/>

<div className="section-header text-center">
    <p className="section-p text-center">Top Health Care Professionals to Solve Your Health Issues.</p>
</div>  
<DocHome/>


<Specialitites/>
<Appointment/>


<BannerTwo/>
<SelfCheck/>
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