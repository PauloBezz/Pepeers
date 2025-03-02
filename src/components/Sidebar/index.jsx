import './styles.css'
import { Search } from '../Search'
import { Link } from 'react-router-dom'

export default function Sidebar() {


    return (
        <main className='sidebar-container'>
            <nav className='sidebar-content'>
                <Link className='sidebar-link' to={`/sector/promotions`}>Promoções</Link>
                <Link className='sidebar-link' to={`/sector/releases`}>Lançamentos</Link>
                <Link className='sidebar-link' to={`/sector/dresses`}>Vestidos</Link>
                <Link className='sidebar-link' to={`/sector/accessories`}>Acessórios</Link>
                <Search />
            </nav>
        </main>
    )
}