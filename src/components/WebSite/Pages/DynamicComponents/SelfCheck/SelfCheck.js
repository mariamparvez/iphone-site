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
                    <img key={item.text} width={90} height={90} src={item.img} alt="itemimg" />
                    
                    <div className='scu-p'>
                    <p>{item.text}</p>
                    </div>
                   
                    </div>
                )
            })}
        </div>

        <div>

        </div>
        </Container>
    )
}

export default SelfCheck
