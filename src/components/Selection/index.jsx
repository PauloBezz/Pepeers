import './styles.css'
import { Link, useParams } from "react-router-dom"
import Cash from './assets/Cash';

export default function Selection({ data }) {
    const { index } = useParams();
    const item = data?.[index]
    const { id, image, title, description, items, priceItems, price } = item;

    return (
        <section key={id} className="selection-container">
            <div className="selection-image">
                <img src={image} alt={`Conjunto ${title}`} />
            </div>
            <aside className="selection-content">

                <h1>Modelo {title}</h1>
                <div className="selection-info">
                    <span>
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
                    </span>
                    <h5>{price}</h5>
                </div>

                <div className="selection-actions">
                    <p><Cash /> Escolher forma de pagamento</p>
                    <Link to={''}>Adicionar ao carrinho</Link>
                </div>
            </aside>
        </section>
    )
}