import './styles.css'
import search from './Lupa.svg'

export function Search() {

    return (
        <article className='search-container'>
            <button><img src={search} alt="" /></button>
            <input type="search" name='search' placeholder='Pesquisa' />
        </article>
    )
}