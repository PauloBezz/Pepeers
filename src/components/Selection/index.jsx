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
            <aside className="selection-image">
                <div>
                    <h1>Modelo {title}</h1>
                    <Link to={'/'}><Cancel /></Link>
                </div>
                <img src={image} alt={`Conjunto ${title}`} />
            </aside>
            <aside className="selection-content">
                <Link to={'/'}><Cancel /></Link>

                <article className="selection-info">
                    <div>
                        <span className='selection-itens'>
                            <p>{description}</p>
                            {items && (
                                <ul>
                                    {items.split(",").map((item, index) => (
                                        <li key={index}>{item.trim()}
                                            <p>{priceItems.split(",")[index]?.trim()}</p>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <h5>{price}</h5>
                        </span>

                        <div className='selection-actions'>
                            <button>Adicionar ao carrinho</button>
                            <Link to={'/cash'}><Cash />Comprar</Link>
                        </div>
                    </div>
                    <More data={other} />
                </article>
            </aside>
        </section>
    )
}