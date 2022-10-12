import desinger1 from '../../../../img/desinger1.png'
import desinger2 from '../../../../img/desinger2.png'
import desinger3 from '../../../../img/desinger3.png'
import desinger4 from '../../../../img/desinger4.png'
import desinger5 from '../../../../img/desinger5.png'
import desinger6 from '../../../../img/desinger6.png'
import desinger7 from '../../../../img/desinger7.png'
import desinger8 from '../../../../img/desinger8.png'
import { useMatch } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai';
const Designers = () => {
    const match = useMatch('/DESIGNER/:id')
    const indexPage = parseInt(match.params.id)
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


export default Designers