import React,{useEffect} from 'react';
import { Container } from 'react-bootstrap';
import Specialitites from '../DynamicComponents/Specialities/specialities';
import OurService from '../DynamicComponents/OurService/OurService';
import Feedback from './FeedBack';
import Appointment from '../Appointments/Appointment/Appointment';
import Space from '../DynamicComponents/Space/Space';
import HomeBanner from './HomeBanner/HomeBanner';
import SelfCheck from '../DynamicComponents/SelfCheck/SelfCheck';
import Tests from '../DynamicComponents/Tests/Tests';
import Search from '../DynamicComponents/Search/Search';
import Hospitals from '../DynamicComponents/Hospitals/Hospitals';

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
    <p className="section-p text-center">Find doctors in top hospitals</p>
</div>  
<Hospitals/>

<Specialitites/>
<Appointment/>

<SelfCheck/>
        
<Container>
    <article id='f-box' className='text-center'>
    <h3 style={{paddingTop: '2rem'}}>What People Say about Us</h3>
    <Feedback/>
    </article>
</Container>

</main>
</>
);
}
 
export default Home;