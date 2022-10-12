import React from 'react'
import wedding1 from '../../../img/wedding1.png'
import wedding2 from '../../../img/wedding2.png'
import wedding3 from '../../../img/wedding3.png'
import wedding4 from '../../../img/wedding4.png'
import wedding5 from '../../../img/wedding5.png'
import wedding6 from '../../../img/wedding6.png'
import wedding7 from '../../../img/wedding7.png'
import wedding8 from '../../../img/wedding8.png'
import { NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
export const Wedding = () => {
    const obj1 = [
        { id: 1, img: wedding1, price: " $1,870", title: "(Setting Price)" },
        { id: 2, img: wedding2, price: " $999", title: "(Setting Price)" },
        { id: 3, img: wedding3, price: " $1,200", title: "(Setting Price)" },
        { id: 4, img: wedding4, price: " $1,400", title: "(Setting Price)" },
        { id: 5, img: wedding5, price: " $1,870", title: "(Setting Price)" },
        { id: 6, img: wedding6, price: " $999", title: "(Setting Price)" },
        { id: 7, img: wedding7, price: " $1,200", title: "(Setting Price)" },
        { id: 8, img: wedding8, price: " $1,400", title: "(Setting Price)" },
    ]
    return (
        <div className='rings-block' >
            <h3>Wedding and Anniversary</h3>
            <div className='ring'>
                {obj1.map(item => {
                    return (
                        <NavLink to={"/WEDDING/" + item.id}>
                            <div className='ring-items'>
                                <div className='ring-img'>
                                    <img src={item.img} />
                                </div>
                                <div className='rings-txt'>
                                    <div className='rings-title'>
                                        <h3>{item.price}</h3>
                                        <h2>{item.title}</h2>
                                    </div>
                                    <div className='ring-icon' >
                                        <AiOutlineShoppingCart />
                                        <AiOutlineHeart />
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    )
                })}
            </div>
        </div >
    )
}