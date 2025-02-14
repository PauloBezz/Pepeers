import './styles.css'

export default function More({ data }) {

    return (
        <div className='more-container' >
            {data?.map(({ id, image, title, itens, price }) => (
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
        </div>
    )
}