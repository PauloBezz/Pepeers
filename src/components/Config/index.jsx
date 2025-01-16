import { useNavigate } from 'react-router-dom'
import './styles.css'

export function Config() {

    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/login')
    }

    return (
        <div className='container-config'>
            <a href="" onClick={handleLogin}>Login</a>
            <a href="">Dark</a>
        </div>
    )
}