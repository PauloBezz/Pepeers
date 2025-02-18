import './styles.css'
import { Link } from 'react-router-dom'
import logo from './assets/logo.svg'

export default function Err() {
    return (
        <section className='err-container'>
                <img src={logo} alt="Logo" />
            <div>
                <h1>404 Not found</h1>
                <p>THE PAGE YOU ARE LOOKING FOR WAS NOT FOUND.</p>
            </div>
            <Link to={'/'} >Ir para Home</Link>
        </section>
    )
}