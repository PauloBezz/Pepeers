import './styles.css'
import { Link, useParams } from "react-router-dom"
import { other } from '../../data/info.json'
import Cash from './assets/Cash';
import More from '../More';
import Cancel from './assets/Cancel';

export default function Selection({ data }) {
    const { index } = useParams();
    const item = data?.[index]
    const { id, image, title, description, items, priceItems, price } = item;

    return (
        <section key={id} className="selection-container">
            <div className="selection-image">
                <img src={image} alt={`Conjunto ${title}`} />
                <p>{description}</p>
            </div>
            <aside className="selection-content">
                <div className='selection-title'>
                    <h1>Modelo {title}</h1>
                    <Link to={'/'}><Cancel /></Link>
                </div>

                <div className="selection-info">
                    <span>
                        {items && (
                            <ul>
                                {items.split(",").map((item, index) => (
                                    <li key={index}>{item.trim()}
                                        <p>{priceItems.split(",")[index]?.trim()}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </span>
                    <h5>{price}</h5>
                </div>

                <div className="selection-actions">
                    <button>Adicionar ao carrinho</button>
                    <Link to={'/cash'}><Cash />Comprar</Link>
                </div>
                <More data={other.slice(0, 2)} />
            </aside>
        </section>
    )
}