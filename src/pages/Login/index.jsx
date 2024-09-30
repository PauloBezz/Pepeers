import logo from './assets/logo.svg'
import backimage from './assets/woman.svg'
import './styles.css'

export default function Login() {
    return (
        <>
                <div className='login-image'>
                    <img src={backimage} alt="" />
                </div>
            <main className='login-container'>

                <a href="/login">
                    <img src={logo} alt="" className='login-logo' />
                </a>

                <h3>Moda feminina e realização</h3>

                <section>
                    <h1>Login</h1>

                    <div>
                        <article>
                            <h5>Usuário</h5>
                            <input type="user" />
                        </article>
                        <article>
                            <h5>Senha</h5>
                            <input type="name" />
                        </article>
                        <p>Esqueceu a senha?</p>

                        <button>Continuar</button>
                    </div>
                </section>
            </main>
        </>
    )
}