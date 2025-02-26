import './styles.css'
import Next from './assets/arrowNext.svg'
import Prev from './assets/arrowPrev.svg'

export default function More({ data }) {
    

    // const handleNext = () =>{
        
    // }

    return (
        <section className='more-container' >
            <button className='more-btn' onClick={""}>
            <img src={Prev}  alt="Seta esquerda"/>
            </button>
            {/* Chamada de 2 itens do array e em seguida mapeando os itens*/}
            {data.slice(0,2).map(({ id, image, title, itens, price }) => (
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
            <button className='more-btn'>
            <img src={Next} alt="Seta direita" />
            </button>
        </section>
    )
}