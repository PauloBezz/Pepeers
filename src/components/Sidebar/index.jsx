import './styles.css'
import { Search } from '../Search'

export default function Sidebar() {

    return (
        <article className='sidebar'>
            <nav className='sidebar-container'>
                <a className='sidebar-link' href="#">Promoções</a>
                <a className='sidebar-link' href="#">Lançamentos</a>
                <a className='sidebar-link' href="#">Vestidos</a>

                <a className='sidebar-link' href="#">Infantil</a>
                <a className='sidebar-link' href="#">Acessórios</a>

                <Search />
            </nav>
        </article>
    )
}