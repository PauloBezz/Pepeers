import { Link, useParams } from "react-router-dom"
import './styles.css'

export default function Selection({ data }) {
    const { index } = useParams();
    const item = data?.[index]
    const { id, image, title, description, items, price } = item;

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
                        <h3>{items}</h3>
                    </span>
                    <h5>{price}</h5>
                </div>

                <div className="selection-actions">
                    <p>Escolher forma de pagamento</p>
                    <Link to={''}>Adicionar o pagamento</Link>
                </div>
            </aside>
        </section>
    )
}