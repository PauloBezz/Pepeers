import './styles.css'
import logo from './assets/logo.svg'
import logoSmall from './assets/logoSmall.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className='footer-container'>
            <div className='footer-content'>
                <img src={logo} alt="logo" className='footer-logo' />
                <img src={logoSmall} alt="logo" className='footer-logoSmall' />

                <div className='footer-links'>
                    <Link>Contato</Link>
                    <Link>Trabalhe conosco</Link>
                </div>
            </div>
            <p>Copyright@ 2023-2025 Pepeeps. Todos direitos reservados ao uso.</p>
        </footer>
    )
}