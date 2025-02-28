
export function AllSector({ data = [] }) {
    return (
        <main className="sector-container">
            {data.map((item) => (
                <article key={item.id} className="sector-item">
                    <div className="sector-content">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <span>
                        <h1>{item.title}</h1>
                        <p>{item.price}</p>
                    </span>
                </article>
            )
            )}
        </main>
    )
}