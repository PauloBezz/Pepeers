import './styles.css'
import search from './Lupa.svg'

export function Search() {
    
    return (
        <div className='search-container'>
            <button><img src={search} alt="" /></button>
            <input type="text"  placeholder='Pesquisa'/>
        </div>
    )
}