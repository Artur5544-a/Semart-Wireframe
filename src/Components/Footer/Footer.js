import React from 'react'
import './Footer.css'
import { FiInstagram, FiFacebook } from 'react-icons/fi';
import { BsPinterest } from 'react-icons/bs';

export const Footer = () => {
    return (
        <div className='Footer'>
            <div className='footers'>
                <div className='footers-title'>
                    <p>SEMART</p>
                </div>
                <div className='Footers-ul ul'>
                    <p>Customer Care</p>
                    <ul>
                        <li>Contact Us</li>
                        <li>FAQs</li>
                        <li> Help Topics</li>
                        <li>Order Status</li>
                        <li> Returns</li>
                    </ul>
                </div>
                <div className='footers-ul2 ul'>
                    <p>Connect</p>
                    <ul>
                        <li><FiInstagram /></li>
                        <li><FiFacebook /></li>
                        <li><BsPinterest /></li>
                    </ul>
                </div>
                <div className='footers-inp' >
                    <h3>Get Exclusive Offers and News</h3>
                    <div className='inp'>
                        <input className='inputs' type="Email" placeholder='Your Email' />
                        <button className='btn-inp'>SIGN UP</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
