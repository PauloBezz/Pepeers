

export function Card({ onClick, src, alt, title, category }) {
    return (
        <button onClick={onClick} >
            <img src={src} alt={alt} title={title} />
            <p className='category'>{category}</p>
        </button>
    )
}