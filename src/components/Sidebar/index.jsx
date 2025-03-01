import './styles.css'
import { Search } from '../Search'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <main className='sidebar-container'>
            <nav className='sidebar-content'>
                <Link className='sidebar-link' href={`/sector`}>Promoções</Link>
                <Link className='sidebar-link' href={`/sector`}>Lançamentos</Link>
                <Link className='sidebar-link' href={`/sector`}>Vestidos</Link>
                <Link className='sidebar-link' href={`/sector`}>Acessórios</Link>
                <Search />
            </nav>
        </main>
    )
}