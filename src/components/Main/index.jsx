import outono from './assets/Outono.svg'
import casual from './assets/Casual.svg'
import moleton from './assets/Moleton.svg'
import primavera from './assets/Primavera.svg'
import Arrow from './assets/Arrow'
import './styles.css'

export default function Main() {
    return (
        <section className='main-container'>
            <span className='text'>
                <h1 className='main-power'>Seu
                    <div className='yellow'>poder,</div>
                </h1>

                <div className='main-title'>
                    <h1 className=''> nosso </h1>
                    <h1 className='green'>conjunto!</h1>
                </div>
            </span>

            <figure className='main-carrossel'>
                <img src={outono} alt="Modelo Casual" title='Casual' />
                <img src={moleton} alt="Modelo Moleton" title="Moleton" />
                <div className='carrossel-top'>
                    <img src={casual} alt="Modelo Outono" title='Outono' />
                </div>

                <div className='carrossel-top'>
                    <img src={primavera} alt="Modelo Primavera" title="Primavera" />
                </div>
            </figure>

            <button className='main-button'>Coringa?<Arrow /></button>
            <div className='main-notice'>
                <p>Frete grátis até 12/10/2024</p>
            </div>

        </section>
    )
}