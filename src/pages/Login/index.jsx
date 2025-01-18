import './styles.css'
import logo from './assets/logo.svg'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleHome(e) {
        e.preventDefault();

        if (user != "" && password != "") {
            alert("Usuário autorizado!")
            navigate('/');
        }
    }

    return (
        <main className='login-container'>
            <div className='login-title'>

                <a href="/login">
                    <img src={logo} alt="Logo" title='Logo' className='login-logo' />
                </a>
                <h3>Moda feminina e realização</h3>
            </div>
            <div className='login-content'>
                <h1>Login</h1>
                <form className='inputs'>
                    <div>
                        <p>Não tem conta? </p>
                        <a href="/signup">Clique aqui!</a>
                    </div>
                    <article>
                        <h5>Email</h5>
                        <input type="email" required value={user} onChange={(e) => (setUser(e.target.value))} />
                    </article>
                    <article>
                        <h5>Senha</h5>
                        <input type="password" required value={password} onChange={(e) => (setPassword(e.target.value))} />
                    </article>
                    <Link>Esqueceu a senha?</Link>
                </form>
                <button className='btn-login' onClick={handleHome}>Continuar</button>
            </div>
        </main>
    )
}