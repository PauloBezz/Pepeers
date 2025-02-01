import './styles.css'
import search from './assets/Lupa.svg'

export function Search() {

    return (
        <form className='search-container'>
            <input type="search" name='search' placeholder='Pesquisa' />
            <button><img src={search} alt="Button" /></button>
        </form>
    )
}