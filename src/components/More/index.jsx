import './styles.css'

export default function More({ image, title, itens, price }) {
    return (
        <div className='more-container'>
            <img src={image} alt="Imagem do conjunto" />
            <div className='more-info'>
                <h1>{title}</h1>
                <h5>{itens}</h5>
                <p>{price}</p>
            </div>
        </div>
    )
}