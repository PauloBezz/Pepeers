

export function Category({ onClick, src, alt, title, category }) {
    return (
        <div onClick={onClick} >
            <img src={src} alt={alt} title={title} />
            <p className='category'>{category}</p>
        </div>
    )
}