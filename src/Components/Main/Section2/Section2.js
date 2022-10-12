import React from 'react'
import './Section2.css'
import { NavLink } from 'react-router-dom'
import img7 from '../../../img/img7.png'
import img8 from '../../../img/img8.png'
import img9 from '../../../img/img9.png'
import img10 from '../../../img/img10.png'
export const Section2 = () => {
    return (
        <div className='section2'>
            <p>SEMART’S<br /> BEST SELLERS</p>
            <div className='images'>
                <div className='img-items'>
                    <NavLink to='/Rings'>
                        <img src={img7} />
                        <p>Minimalist Rings</p>
                    </NavLink>
                </div>
                <div className='img-items'>
                    <NavLink to='/Necklaces'>
                        <img src={img8} />
                        <p>Layering necklaces</p>
                    </NavLink>
                </div>
                <div className='img-items'>
                    <NavLink to='/Bracelets'>
                        <img src={img9} />
                        <p>Bracelets</p>
                    </NavLink>
                </div>
                <div className='img-items'>
                    <NavLink to='/Watches'>
                        <img src={img10} />
                        <p>Watches</p>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
