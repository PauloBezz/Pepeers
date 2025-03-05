import './styles.css'
import Card from "../Card";


export function AllSector({ data = [] }) {

    return (
        <main className="allsector-container">
            {data.length === 0 && (
                <div className='allsector-null'>
                    <p>Nenhum conjunto foi encontrado</p>
                </div>
            )}

            {data.map((item, index) => (
                <Card
                    key={index}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                />
            ))}

        </main>
    )
}