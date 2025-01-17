import './styles.css'
import logo from './assets/logo.svg'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate()

    function handleHome(e) {
        e.preventDefault();
        navigate('/');
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
                        <input type="email" />
                    </article>
                    <article>
                        <h5>Senha</h5>
                        <input type="password" />
                    </article>
                    <Link>Esqueceu a senha?</Link>
                </form>
                <button className='btn-login' onClick={handleHome}>Continuar</button>
            </div>
        </main>
    )
}

export function SignUp() {
    const [email, setEmail] = useState('')
    const [user, setUser] = useState('')
    const [password, setPass] = useState('')
    const [conf, setConf] = useState('')

    function handleHome(e) {
        e.preventDefault();
        navigate('/');
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
                <h1>Sign Up</h1>
                <div className='inputs'>
                    <div>
                        <p>Já tem conta? </p>
                        <a href="/login">Clique aqui!</a>
                    </div>
                    <article>
                        <h5>Nome completo</h5>
                        <input type="text" required value={user} onChange={(e) => setUser(e.target.value)} />
                    </article>
                    <article>
                        <h5>Email</h5>
                        <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </article>
                    <article>
                        <h5>Senha</h5>
                        <input type="password" required value={password} onChange={(e) => setPass(e.target.value)} />
                    </article>
                    <article>
                        <h5>Confirme sua senha</h5>
                        <input type="password" required value={conf} onChange={(e) => setConf(e.target.value)} />
                    </article>

                </div>
                <button type='submit' className='btn-login' onClick={handleHome}>Cadastrar</button>
            </div>
        </main>
    )
}