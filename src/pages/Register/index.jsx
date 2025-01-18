import './styles.css'
import logo from './assets/logo.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
    const [email, setEmail] = useState("")
    const [user, setUser] = useState("")
    const [password, setPass] = useState("")
    const [conf, setConf] = useState("")

    const navigate = useNavigate();

    function handleHome(e) {
        e.preventDefault();

        if (user != "" && email != "" && password == conf) {
            alert(`Usuário ${user} cadastrado.`)
            navigate('/');
        }
        if (password != conf) {
            alert("Senhas divergentes.")
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
                <button type='submit' className='btn-login' onClick={handleHome} >Cadastrar</button>
            </div>
        </main>
    )
}