import React, {useEffect} from 'react';
import './ForWoman.css';
import Blog from '../Blog/BlogWomen';
import Slide from './Slide/Slide';
import WHI from './WHI/WHI';
import Appointment from '../Appointments/AppointmentW/Appointment';
import Space from '../DynamicComponents/Space/Space';
import Services from '../DynamicComponents/Services/Services';

const ForWoman = () => {
    useEffect(() => {
        window.scroll(0,0)
    }, )
    return ( 
<main>
    <Space/>
<section className="fw-banner">
        <article className="banner-design">
            <div className="banner-head">
                <h5>Simplifying Healthcare for Women</h5>
                <p>Stay Strong and Healthy</p>
            </div>
        </article>
    </section> 
<Slide/>
<Appointment/>
<WHI/>
<Blog/>

<Services/>

</main>
     );
}
 
export default ForWoman;