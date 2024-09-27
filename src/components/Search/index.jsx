import './styles.css'
import search from './Lupa.svg'

export function Search() {
    
    return (
        <div className='search-container'>
            <img src={search} alt="" />
            <input type="text" />
        </div>
    )
}