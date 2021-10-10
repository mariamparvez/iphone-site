import React from 'react';
import CountDown from '../Components/CountDown/CountDown';
import './Content.css'

const Content = () => {
    return ( 
        <main id='coming-soon' style={{padding: '6rem 1rem 0'}}>
            <section>
            <h1>Under <br/>Construction</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/>Inventore sunt eos facilis dolor quia saepe dolores sint quod quidem ad.</p>
            <CountDown/>
            <h4>We will notify you for updates.</h4>
            <div className='cs-box'>
                <input type="text" placeholder='Enter Your Email' className='cs-input' />
                <button type="button" class="btn btn-success">Notify Me</button>
            </div>
            </section>
        </main>
     );
}
 
export default Content;