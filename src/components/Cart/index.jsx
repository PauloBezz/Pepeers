import { Link } from "react-router-dom"
import "./styles.css"

export const Cart = ({ data = [] }) => {

    const cartItems = data.cart || []

    return (
        <section className="cart-container">
            <h1>Meus pedidos</h1>
            {cartItems.length === 0 ? (
                <p>Seu carrinho está vazio</p>
            ) : (
                <div>
                    {cartItems.map((item, index) => (
                        <div key={index}>
                            <p>{item}</p>
                        </div>

                    ))}
                </div>
            )}
            <Link to={"/"}>Comprar</Link>
        </section>
    )
}