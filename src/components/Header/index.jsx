import logo from './assets/img/logo.svg'
import search from './assets/img/search.svg'
import cart from './assets/img/cart.svg'
import menu from './assets/img/menu.svg'
import config from './assets/img/config.svg'
import { Search } from '../Search/index'
import { useState } from 'react'
import './styles.css'

export default function Header() {
    const [open, setOpen] = useState(false)
    const [find, setFind] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleSearch = () => {
        setFind(!find)
    }

    return (
        <>
            <header className='container'>
                <a href="/">
                    <img src={logo} alt="Logo" title='Logo' className='logo' />
                </a>
                <div className='icons'>
                    <img src={search} alt="Search" className='icon-search' title='Search' onClick={handleSearch} />
                    <img src={cart} alt="Cart" title='Cart' />
                    <img src={menu} alt="Menu" className='icon-menu' title='Menu' onClick={handleOpen} />

                    <img src={config} alt="Options" title='Options' />
                </div>

                {find && (
                    <div className='header-search'>
                        <Search />
                    </div>
                )}

            </header>
            {open && (
                <>
                    <div className='overlay'></div>
                    <nav className='menuOpen'>
                        <a className='menu-link' href="#">Promoções</a>
                        <a className='menu-link' href="#">Lançamentos</a>
                        <a className='menu-link' href="#">Vestidos</a>
                        <a className='menu-link' href="#">Infantil</a>
                        <a className='menu-link' href="#">Acessórios</a>
                    </nav>
                </>
            )}
        </>
    )
}