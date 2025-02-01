import { Link, useParams } from "react-router-dom"


export default function Selection({ data }) {
    const { index } = useParams();
    const item = data?.[index]
    const { id, image, title, description, size, color, price } = item;
    return (
        <main>
            <section key={id}>
                <div>
                    <img src={image} alt={`Conjunto ${title}`} />
                </div>
                <aside>
                    <div>
                        <div>
                            <h1>{title}</h1>
                            <p>{description}</p>
                            {/* <input type="radio" name="size" value={size} /> */}
                        </div>
                        <div>
                            {/* <input type="checkbox" name="color" value={color} /> */}
                        </div>
                        <h5>{price}</h5>
                    </div>
                    <button>Adicionar ao carrinho</button>
                    <Link to={''}>Forma de pagamento</Link>
                </aside>
            </section>
        </main>
    )
}