import React from 'react'
import watche1 from '../../../img/watche1.png'
import watche2 from '../../../img/watche2.png'
import watche3 from '../../../img/watche3.png'
import watche4 from '../../../img/watche4.png'
import watche5 from '../../../img/watche5.png'
import watche6 from '../../../img/watche6.png'
import watche7 from '../../../img/watche7.png'
import watche8 from '../../../img/watche8.png'
import watche9 from '../../../img/watche9.png'
import watche10 from '../../../img/watche10.png'
import watche11 from '../../../img/watche11.png'
import watche12 from '../../../img/watche12.png'
import { NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
export const Watche = () => {
    const obj1 = [
        { id: 1, img: watche1, price: " $1,870", title: "(Setting Price)" },
        { id: 2, img: watche2, price: " $999", title: "(Setting Price)" },
        { id: 3, img: watche3, price: " $1,200", title: "(Setting Price)" },
        { id: 4, img: watche4, price: " $1,400", title: "(Setting Price)" },
        { id: 5, img: watche5, price: " $200", title: "(Setting Price)" },
        { id: 6, img: watche6, price: " $1,100", title: "(Setting Price)" },
        { id: 7, img: watche7, price: " $1,990", title: "(Setting Price)" },
        { id: 8, img: watche8, price: " $1,300", title: "(Setting Price)" },
        { id: 9, img: watche9, price: " $1,000", title: "(Setting Price)" },
        { id: 10, img: watche10, price: " $1,800", title: "(Setting Price)" },
        { id: 11, img: watche11, price: " $500", title: "(Setting Price)" },
        { id: 12, img: watche12, price: " $550", title: "(Setting Price)" },
    ]
    return (
        <div className='rings-block' >
            <h3>Watches</h3>
            <div className='ring'>
                {obj1.map(item => {
                    return (
                        <NavLink to={"/Watches/" + item.id}>
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
