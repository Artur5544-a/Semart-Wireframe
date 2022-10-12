import Mask1 from '../../../../img/Mask1.png'
import Mask2 from '../../../../img/Mask2.png'
import Mask3 from '../../../../img/Mask3.png'
import Mask4 from '../../../../img/Mask4.png'
import Mask5 from '../../../../img/Mask5.png'
import Mask6 from '../../../../img/Mask6.png'
import Mask7 from '../../../../img/Mask7.png'
import Mask8 from '../../../../img/Mask8.png'
import Mask9 from '../../../../img/Mask9.png'
import Mask10 from '../../../../img/Mask10.png'
import Mask11 from '../../../../img/Mask11.png'
import Mask12 from '../../../../img/Mask12.png'
import { useMatch } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai';
import './Ring.css'
const Ring = () => {
    const match = useMatch('/Ring/:id')
    const indexPage = parseInt(match.params.id)
    const obj1 = [
        { id: 1, img: Mask1, price: " $1,870", title: "(Setting Price)" },
        { id: 2, img: Mask2, price: " $999", title: "(Setting Price)" },
        { id: 3, img: Mask3, price: " $1,200", title: "(Setting Price)" },
        { id: 4, img: Mask4, price: " $1,400", title: "(Setting Price)" },
        { id: 5, img: Mask5, price: " $200", title: "(Setting Price)" },
        { id: 6, img: Mask6, price: " $1,100", title: "(Setting Price)" },
        { id: 7, img: Mask7, price: " $1,990", title: "(Setting Price)" },
        { id: 8, img: Mask8, price: " $1,300", title: "(Setting Price)" },
        { id: 9, img: Mask9, price: " $1,000", title: "(Setting Price)" },
        { id: 10, img: Mask10, price: " $1,800", title: "(Setting Price)" },
        { id: 11, img: Mask11, price: " $500", title: "(Setting Price)" },
        { id: 12, img: Mask12, price: " $550", title: "(Setting Price)" },
    ]
    let content = obj1.filter(item => item.id === indexPage)
    let filteredContent = content.map(item =>
        <div className='ring-info' key={item.id}>
            <div className='infos'>
                <div className='infos-img'>
                    <img src={item.img} />
                </div>
                <div className='info-txt'>
                    <h5>14K White Gold Tapered Baguette Emerald Halo Engagement Ring</h5>
                    <h4>SKU 17066W14</h4>
                    <h3>{item.price}<br />{item.title}</h3>
                    <button className='info-txt-btn'>ADD TO CART</button>
                    <span><AiOutlineHeart /></span>
                </div>
            </div>
        </div>
    )
    return (
        <div className='ring-infos'>
            {filteredContent}
            
        </div>
    )
}


export default Ring