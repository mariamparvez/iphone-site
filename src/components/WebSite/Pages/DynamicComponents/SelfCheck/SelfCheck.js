import React from 'react'
import './SelfCheck.css'
import { SCData } from './SCData'
import { Container } from 'react-bootstrap'

function SelfCheck() {
    return (
        <Container>
        <div className="section-header text-center">
            <p className='sc-p'>Ask a few questions and know your health risks</p>
        </div>
        <div className='sc-section'>
        {SCData.map(item => {
                return(
                    <div className='sc-box'>
                    <img key={item.text} width={160} height={160} src={item.img} alt="itemimg" />
                    
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
