import closet from "./assets/closet.jpg"

export default function About() {
    return (
        <section className="container-about">
            <div className="about-image">
                <img src={closet} alt="" />
            </div>
            <span>
                <h1>Nossa História</h1>
                <p>Desde 2020, anunciamos as peças mais elegantes para nossas clientes, independendente de gosto a sensação de vestir e olhar no espelho o resultado é impactante, criar tendências, moldar com suas medidas é um fato de esperar pelo melhor, porque boas coisas podem estar apenas cliques de distância. Faça parte do sonho Pepeers, trabalhamos cada vez mais na evolução da marca.</p>
            </span>
        </section>
    )
}