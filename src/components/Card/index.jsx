

export default function Card() {
    return (
        <article>
            <div>
                <img src={image} alt={`Imagem de ${title}`} />
            </div>
            <h2>{title}</h2>
            <p>{price}</p>
        </article>
    )
}