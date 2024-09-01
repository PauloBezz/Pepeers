import logo from './assets/img/icon/logo.svg'
import search from './assets/img/icon/search.svg'
import cart from './assets/img/icon/cart.svg'
import menu from './assets/img/icon/menu.svg'

export default function Header() {
    return (
        <header className='container'>
            <img src={logo} alt="Logo" title='Logo' className='logo'/>
            <div className='icons'>
                <img src={search} alt="Search" title='Search' />
                <img src={cart} alt="Cart" title='Cart' />
                <img src={menu} alt="Menu" title='Menu' />
            </div>
        </header>
    )
}