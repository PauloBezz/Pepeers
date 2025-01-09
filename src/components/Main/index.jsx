import './styles.css'
import outono from './assets/Outono.svg'
import casual from './assets/Casual.svg'
import moleton from './assets/Moleton.svg'
import primavera from './assets/Primavera.svg'
import Arrow from './assets/Arrow'
import { Card } from '../Card'

export default function Main() {


    const date = new Date();
    date.setDate(date.getDate() + 2);
    let dia = date.getDate();
    let mes = date.getMonth() + 1;
    let ano = date.getFullYear();
    console.log(dia);

    if (dia < 10) {
        dia = '0' + dia;
    }

    if (mes < 10) {
        mes = '0' + mes
    }


    const day = `${dia}/${mes}/${ano}`

    return (
        <section className='main-container'>
            <span className='main-title'>
                <h1 className='power'>Seu
                    <div className='yellow'>poder,</div>
                </h1>

                <div className='title'>
                    <h1>nosso</h1>
                    <h1 className='green'>conjunto!</h1>
                </div>
            </span>

            <figure className='main-carrossel'>
                <article className='first'>

                    <Card src={outono} alt={"Modelo Outono"} title={'Outono'} category={'Outono Pink'} />
                    <Card src={casual} alt={"Modelo Casual"} title={'Casual'} category={'Casual'} />
                </article>
                <div className='second'>
                    <Card src={moleton} alt={"Modelo Moleton"} title={'Moleton'} category={'Moleton'} />
                    <Card src={primavera} alt={"Modelo Primavera"} title={'Primavera'} category={'Primavera'} />
                </div>
            </figure>

            <button className='main-button'>Coringa?<Arrow /></button>
            <div className='main-notice'>
                <p>{`Frete grátis até ${day}`}</p>
            </div>

        </section>
    )
}