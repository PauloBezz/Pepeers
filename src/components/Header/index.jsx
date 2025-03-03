import './styles.css'
import logoSmall from './assets/logoSmall.svg'
import logo from './assets/logo.svg'
import search from './assets/search.svg'
import cart from './assets/cart.svg'
import menu from './assets/menu.svg'
import config from './assets/config.svg'
import { Search } from '../Search/index'
import { useState } from 'react'
import { Config } from '../Config'
import { Cart } from '../Cart'

export default function Header() {
    const [open, setOpen] = useState(false)
    const [find, setFind] = useState(false)
    const [conf, setConf] = useState(false)
    const [shopping, setShopping] = useState(false)


    const handleOpen = () => {
        setOpen(!open);
    }

    const handleSearch = () => {
        setFind(!find);
    }

    const handleConfig = () => {
        setConf(!conf);
    }

    const handleCart = () => {
        setShopping(!shopping);
    }

    return (
        <>
            <header className='container-header'>
                <a href="/" className='logoSmall'>
                    <img src={logoSmall} alt="Logo" title='Logo' />
                </a>
                <a href="/">
                    <img src={logo} alt="Logo" title='Logo' className='logo' />
                </a>
                <div className='header-icons'>
                    <img src={search} alt="Search" className='icon-search' title='Search' onClick={handleSearch} />
                    
                    
                    <button onClick={handleCart}>
                        <img src={cart} alt="Cart" title='Cart' />
                    </button>
                    {!shopping && <Cart />}

                    <img src={menu} alt="Menu" className='icon-menu' title='Menu' onClick={handleOpen} />
                    <img src={config} alt="Options" title='Options' onClick={handleConfig} />
                </div>

                {find && (
                    <div className='header-search'>
                        <Search />
                    </div>
                )}


            </header>

            {open && (
                <nav className='menuOpen'>
                    <a className='menu-link' href="#">Promoções</a>
                    <a className='menu-link' href="#">Lançamentos</a>
                    <a className='menu-link' href="#">Vestidos</a>
                    <a className='menu-link' href="#">Acessórios</a>
                </nav>
            )}

            {conf && (
                <Config />
            )}
        </>
    )
}