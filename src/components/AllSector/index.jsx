

export function AllSector({ data = [] }) {

    return (
        <main className="sector-container">
            {data.map((item, index) => (
                <article key={index} className="sector-item">
                    <div className="sector-content">
                        <img src={item.image} alt={`Imagem de ${item.title}`} />
                    </div>
                    <span>
                        <h2>{item.title}</h2>
                        <p>{item.price}</p>
                    </span>
                </article>
            )
            )}
        </main>
    )
}