import React from 'react'
import './Test.css'
import one from '../../../../assets/img/tests/covid-test.jpg'
import two from '../../../../assets/img/tests/medical-checkup.jpg'

const data = [
    {
        img: one,
        header: 'Video Consultation',
        text: 'K K-clinic'
    },
    {
        img: two,
        header: 'Medical Check up',
        text: 'K K-clinic'
    }
]

function Tests() {
    return (
        <div>
        <div className='tests'>
            
            {data.map(item => {
                return(
                <div className='tests-box'>
                    <img src={item.img} width={160} height={100} alt="imgtest"/>
                    <h6>{item.header}</h6>
                    <p>{item.text}</p>
                </div>
                )
            })}
        </div>
        </div>
    )
}

export default Tests
