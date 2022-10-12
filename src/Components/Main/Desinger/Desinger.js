import React from 'react'
import desinger1 from '../../../img/desinger1.png'
import desinger2 from '../../../img/desinger2.png'
import desinger3 from '../../../img/desinger3.png'
import desinger4 from '../../../img/desinger4.png'
import desinger5 from '../../../img/desinger5.png'
import desinger6 from '../../../img/desinger6.png'
import desinger7 from '../../../img/desinger7.png'
import desinger8 from '../../../img/desinger8.png'
import { NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
export const Desinger = () => {
    const obj1 = [
        { id: 1, img: desinger1, price: " $1,870", title: "(Setting Price)" },
        { id: 2, img: desinger2, price: " $999", title: "(Setting Price)" },
        { id: 3, img: desinger3, price: " $1,200", title: "(Setting Price)" },
        { id: 4, img: desinger4, price: " $1,400", title: "(Setting Price)" },
        { id: 5, img: desinger5, price: " $1,870", title: "(Setting Price)" },
        { id: 6, img: desinger6, price: " $999", title: "(Setting Price)" },
        { id: 7, img: desinger7, price: " $1,200", title: "(Setting Price)" },
        { id: 8, img: desinger8, price: " $1,400", title: "(Setting Price)" },

    ]
    return (
        <div className='rings-block' >
            <h3>Designer Collections</h3>
            <div className='ring'>
                {obj1.map(item => {
                    return (
                        <NavLink to={"/DESIGNER/" + item.id}>
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
