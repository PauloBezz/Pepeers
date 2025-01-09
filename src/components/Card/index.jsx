

export function Card({ src, alt, title, category }) {
    return (
        <div>
            <img src={src} alt={alt} title={title} />
            <p className='category'>{category}</p>
        </div>
    )
}