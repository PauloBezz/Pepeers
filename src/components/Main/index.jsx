import Header from '../Header'
import casual from './assets/Casual.svg'
import moleton from './assets/Moleton.svg'
import primavera from './assets/Primavera.svg'
import outono from './assets/Outono.svg'
import './styles.css'

export default function Main() {
    return (
        <>
            <Header />
            <section>
                <span className='title'>
                    <h1>Seu poder,
                        <h1>Nosso conjunto!</h1>
                    </h1>
                </span>

                <div>
                    <img src={outono} alt="" />
                    <img src={casual} alt="" />
                    <img src={moleton} alt="" />
                    <img src={primavera} alt="" />
                </div>

                <button>Coringa?</button>
            </section>
        </>
    )
}