import './styles.css'

export default function Card({ image, title, price }) {

    return (
        <button className='card-container'>
            <img src={image} alt={`Imagem de ${title}`} />
            <div>
                <h2>{title}</h2>
                <p>{price}</p>
            </div>
        </button>
    )
}