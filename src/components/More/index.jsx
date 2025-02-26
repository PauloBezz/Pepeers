import './styles.css'
import Next from './assets/arrowNext.svg'
import Prev from './assets/arrowPrev.svg'
import { useState } from 'react'

export default function More({ data = [] }) {
    const [more, setMore] = useState(0)

    const handleNext = () => {
        if (more + 2 < data.length) {
            setMore(more + 2)
        }
    }

    const handlePrev = () => {
        if (more > 0) {
            setMore(more - 2)
        }
    }

    return (
        <section className='more-container' >
            <button className='more-btn' onClick={handlePrev} disabled={more === 0}>
                <img src={Prev} alt="Seta esquerda" />
            </button>
            {/* Chamada de 2 itens do array e em seguida mapeando os itens*/}
            {data.slice(more, more + 2).map(({ id, image, title, itens, price }) => (

                <div key={id} className='more-info'>
                    <img src={image} alt={`Imagem do conjunto ${title}`} />
                    <div>
                        <h1>Conjunto {title}</h1>
                        {itens && (
                            itens.split(",").map((more, index) => (
                                <h5 key={index}>{more.trim()}</h5>
                            )))}
                        <p>{price}</p>
                        <input type="checkbox" />
                    </div>
                </div>
            ))}
            <button className='more-btn' onClick={handleNext} disabled={more + 2 >= data.length}>
                <img src={Next} alt="Seta direita" />
            </button>
        </section>
    )
}