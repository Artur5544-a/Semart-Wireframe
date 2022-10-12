import React from 'react'
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import './NavBar.css'
export const NavBar = () => {
    return (
        <div className='NavBar' >
            <nav>
                <div className='nav-logo'>
                    <NavLink to='/'>
                        <p>SEMART</p>
                    </NavLink>

                </div>
                <ul>
                    <li>SHOP</li>
                    <li>GIFT GUIDES</li>
                    <li>CONTACT US</li>
                </ul>
                <div className='inp-search'>
                    <AiOutlineSearch />
                    <input className='inp-input' type="search" placeholder='Search...' />
                    <button className='inputs-btn' >Sign in</button>
                </div>
                <div className='nav-icon'>
                    <AiOutlineShoppingCart />
                    <AiOutlineHeart />
                </div>
                <div className='nav-burger-menu'>
                    <FiMenu />
                </div>
            </nav>
        </div>
    )
}
