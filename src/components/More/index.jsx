import './styles.css'

export default function More({ data }) {
    
    return (
        <section className='more-container' >
            {/* Chamada de 2 itens do array e em seguida mapeando os itens*/}
            {data.slice(0, 2)?.map(({ id, image, title, itens, price }) => (
                <div key={id} className='more-info'>
                    <img src={image} alt={`Conjunto ${title}`} />
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
        </section>
    )
}