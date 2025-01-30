import { Link } from "react-router-dom"

export default function Selection({ title, image, items, priceItem, price, size, color }) {
    return (
        <>
            <section>
                <img src={image} alt="" />
                <aside>
                    <div>
                        <div>
                            <h1>{title}</h1>
                            <ul>
                                <li>{items}
                                    <p>{priceItem}</p>
                                </li>
                                <input type="text" value={size} />
                            </ul>
                        </div>
                        <div>
                            <input type="checkbox" value={color} />
                        </div>
                        <h5>{price}</h5>
                    </div>
                    <button>Adicionar ao carrinho</button>
                    <Link>Forma de pagamento</Link>
                </aside>
            </section>
        </>
    )
}