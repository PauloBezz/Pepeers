import logo from './assets/img/logo.svg'
import search from './assets/img/search.svg'
import cart from './assets/img/cart.svg'
import menu from './assets/img/menu.svg'
import './styles.css'

export default function Header() {
    return (
        <header className='container'>
            <a href="/">
                <img src={logo} alt="Logo" title='Logo' className='logo' />
            </a>
            <div className='icons'>
                <img src={search} alt="Search" title='Search' />
                <img src={cart} alt="Cart" title='Cart' />
                <img src={menu} alt="Menu" title='Menu' />
            </div>
        </header>
    )
}