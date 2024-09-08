import outono from './assets/Outono.svg'
import casual from './assets/Casual.svg'
import moleton from './assets/Moleton.svg'
import primavera from './assets/Primavera.svg'
import Arrow from './assets/Arrow'
import './styles.css'

export default function Main() {
    return (
        <section className='main-container'>
            <span className='main-title'>
                <h1>Seu poder,</h1>
                <h1>Nosso conjunto!</h1>
            </span>

            <div className='main-carrossel'>
                <img src={outono} alt="Modelo Outono" title='Outono' />
                <img src={casual} alt="Modelo Casual" title='Casual'/>
                <img src={moleton} alt="Modelo Moleton" title="Moleton" />
                <img src={primavera} alt="Modelo Primavera" title="Primavera" />
            </div>

            <button className='main-button'>Coringa?<Arrow/></button>
            <div className='main-notice'>
                <p>Frete grátis até 12/10/2024</p>
            </div>

        </section>
    )
}

/* */