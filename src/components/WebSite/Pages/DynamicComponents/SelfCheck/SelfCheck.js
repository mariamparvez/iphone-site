import React from 'react'
import { Link } from 'react-router-dom'
import './SelfCheck.css'
import { SCData } from './SCData'
import { Container } from 'react-bootstrap'

function SelfCheck() {
    return (
        <Container>
        <div className="section-header text-center">
            <h2>Start a Self check-up</h2>
            <p className='sc-p'>Ask a few questions and know your health risks</p>
        </div>
        <div className='sc-section'>
        {SCData.map(item => {
                return(
                    <div className='sc-box'>
                    <img key={item.text} src={item.img} alt="itemimg" />
                    <p>{item.text}</p>
                    </div>
                )
            })}
        </div>

        <Link to='/s-list'>
        <div id='view-btn'>
        <button className="btn view-btn">View More</button>
        </div>
        </Link>

        <div>

        </div>
        </Container>
    )
}

export default SelfCheck
