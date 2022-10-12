import React from 'react'
import './Section3.css'
import img11 from '../../../img/img11.png'
import img12 from '../../../img/img12.png'
import { NavLink } from 'react-router-dom'
export const Section3 = () => {
    return (
        <div className='section3'>
            <div className='section3-blocks'>
                <div className='block-item'>
                    <div className='items-images'>
                        <img src={img11} />
                    </div>
                    <div className='items-txt1'>
                        <NavLink to='/DESIGNER'>
                            <h1>DESIGNER <br />
                                COLLECTIONS</h1>
                        </NavLink>

                    </div>
                </div>
                <div className='block-item'>
                    <div className='items-images'>
                        <img src={img12} />
                    </div>
                    <div className='items-txt2'>
                        <NavLink to='/WEDDING'>
                            <h1>WEDDING AND <br />
                                ANNIVERSARY</h1>
                        </NavLink>

                    </div>
                </div>
            </div>
        </div>
    )
}
