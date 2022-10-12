import React from 'react'
import './Main.css'
import img1 from '../../img/img1.png'
import img2 from '../../img/img2.png'
import img3 from '../../img/img3.png'
import { Section1 } from './Section1/Section1'
import { Section2 } from './Section2/Section2'
import { Section3 } from './Section3/Section3'
export const Main = () => {
    return (
        <div className='Main'>
            <div className='main-header'>
                <div className='header-block'>
                    <div className='header-block-img'>
                        <img src={img1} />
                    </div>
                    <div className='header-block-title'>
                        <h1>Style starts here…</h1>
                        <p>I like for jewelry to tell a story and to be able to talk about what I’m wearing. That’s more important to me than a name, brand, or label.</p>
                        <div className='btns'>
                            <button className='header-btn'>SHOP NOW</button>
                        </div>
                    </div>
                </div>
                <div className='headers-image'>
                    <img src={img2} />
                    <img src={img3} />
                </div>
            </div>
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
    )
}
