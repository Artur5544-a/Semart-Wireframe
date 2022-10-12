import React from 'react'
import './Section1.css'
import img4 from '../../../img/img4.png'
import img5 from '../../../img/img5.png'
import img6 from '../../../img/img6.png'
export const Section1 = () => {
    return (
        <div className='section1'>
            <h2>Shop fine jewelry for every day</h2>
            <div className='section1-item'>
                <div className='item'>
                    <img src={img4} />
                    <p>Rings</p>
                </div>
                <div className='item'>
                    <img src={img5} />
                    <p>Necklaces</p>
                </div>
                <div className='item'>
                    <img src={img6} />
                    <p>Earings</p>
                </div>
            </div>
        </div>
    )
}
