import './styles.css'
import logo from './assets/logo.svg'
import backimage from './assets/woman.svg'

export default function Login() {
    return (
        <main className='login-container'>
            <div className='login-content'>
                <a href="/login">
                    <img src={logo} alt="" className='login-logo' />
                </a>

                <h3>Moda feminina e realização</h3>

                <h1>Login</h1>

                <div className='inputs'>
                    <article>
                        <h5>Usuário</h5>
                        <input type="user" />
                    </article>
                    <article>
                        <h5>Senha</h5>
                        <input type="password" />
                    </article>
                    <a>Esqueceu a senha?</a>

                </div>
                <button className='btn-login'>Continuar</button>
            </div>
        </main>
    )
}