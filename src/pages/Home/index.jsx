import './styles.css'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Main from '../../components/Main'

export function Home() {
    return (
        <>
            <Header />
            <Sidebar />
            <Main />
            <Footer />
        </>
    )
}