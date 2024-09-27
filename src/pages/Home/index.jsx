import Header from '../../components/Header'
import Main from '../../components/Main'
import Sidebar from '../../components/Sidebar'
import './styles.css'

export function Home() {
    return (
        <>
            <Header />
            <Sidebar/>
            <Main />
        </>
    )
}