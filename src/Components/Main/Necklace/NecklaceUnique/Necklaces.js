import pexels1 from '../../../../img/pexels1.png'
import pexels2 from '../../../../img/pexels2.png'
import pexels3 from '../../../../img/pexels3.png'
import pexels4 from '../../../../img/pexels4.png'
import pexels5 from '../../../../img/pexels5.png'
import pexels6 from '../../../../img/pexels6.png'
import pexels7 from '../../../../img/pexels7.png'
import pexels8 from '../../../../img/pexels8.png'
import pexels9 from '../../../../img/pexels9.png'
import pexels10 from '../../../../img/pexels10.png'
import pexels11 from '../../../../img/pexels11.png'
import pexels12 from '../../../../img/pexels12.png'
import { useMatch } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai';
const Necklaces = () => {
    const match = useMatch('/Necklaces/:id')
    const indexPage = parseInt(match.params.id)
    const obj1 = [
        { id: 1, img: pexels1, price: " $1,870", title: "(Setting Price)" },
        { id: 2, img: pexels2, price: " $999", title: "(Setting Price)" },
        { id: 3, img: pexels3, price: " $1,200", title: "(Setting Price)" },
        { id: 4, img: pexels4, price: " $1,400", title: "(Setting Price)" },
        { id: 5, img: pexels5, price: " $200", title: "(Setting Price)" },
        { id: 6, img: pexels6, price: " $1,100", title: "(Setting Price)" },
        { id: 7, img: pexels7, price: " $1,990", title: "(Setting Price)" },
        { id: 8, img: pexels8, price: " $1,300", title: "(Setting Price)" },
        { id: 9, img: pexels9, price: " $1,000", title: "(Setting Price)" },
        { id: 10, img: pexels10, price: " $1,800", title: "(Setting Price)" },
        { id: 11, img: pexels11, price: " $500", title: "(Setting Price)" },
        { id: 12, img: pexels12, price: " $550", title: "(Setting Price)" },
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


export default Necklaces