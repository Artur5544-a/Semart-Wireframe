import Bracelets1 from '../../../../img/Bracelets1.png'
import Bracelets2 from '../../../../img/Bracelets2.png'
import Bracelets3 from '../../../../img/Bracelets3.png'
import Bracelets4 from '../../../../img/Bracelets4.png'
import Bracelets5 from '../../../../img/Bracelets5.png'
import Bracelets6 from '../../../../img/Bracelets6.png'
import Bracelets7 from '../../../../img/Bracelets7.png'
import Bracelets8 from '../../../../img/Bracelets8.png'
import Bracelets9 from '../../../../img/Bracelets9.png'
import Bracelets10 from '../../../../img/Bracelets10.png'
import Bracelets11 from '../../../../img/Bracelets11.png'
import Bracelets12 from '../../../../img/Bracelets12.png'
import { useMatch } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai';
const Bracelet = () => {
    const match = useMatch('/Bracelet/:id')
    const indexPage = parseInt(match.params.id)
    const obj1 = [
        { id: 1, img: Bracelets1, price: " $1,870", title: "(Setting Price)" },
        { id: 2, img: Bracelets2, price: " $999", title: "(Setting Price)" },
        { id: 3, img: Bracelets3, price: " $1,200", title: "(Setting Price)" },
        { id: 4, img: Bracelets4, price: " $1,400", title: "(Setting Price)" },
        { id: 5, img: Bracelets5, price: " $200", title: "(Setting Price)" },
        { id: 6, img: Bracelets6, price: " $1,100", title: "(Setting Price)" },
        { id: 7, img: Bracelets7, price: " $1,990", title: "(Setting Price)" },
        { id: 8, img: Bracelets8, price: " $1,300", title: "(Setting Price)" },
        { id: 9, img: Bracelets9, price: " $1,000", title: "(Setting Price)" },
        { id: 10, img: Bracelets10, price: " $1,800", title: "(Setting Price)" },
        { id: 11, img: Bracelets11, price: " $500", title: "(Setting Price)" },
        { id: 12, img: Bracelets12, price: " $550", title: "(Setting Price)" },
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
export default Bracelet