import wedding1 from '../../../../img/wedding1.png'
import wedding2 from '../../../../img/wedding2.png'
import wedding3 from '../../../../img/wedding3.png'
import wedding4 from '../../../../img/wedding4.png'
import wedding5 from '../../../../img/wedding5.png'
import wedding6 from '../../../../img/wedding6.png'
import wedding7 from '../../../../img/wedding7.png'
import wedding8 from '../../../../img/wedding8.png'
import { useMatch } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai';
const Weddings = () => {
    const match = useMatch('/WEDDING/:id')
    const indexPage = parseInt(match.params.id)
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

export default Weddings