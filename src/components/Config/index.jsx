import './styles.css'
import Moon from './assets/Moon';
import Sun from './assets/Sun';
import Woman from './assets/Woman';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


export function Config() {

    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/login');
    }

    const [dark, setDark] = useState(false);

    const changeTheme = (e) => {
        e.preventDefault();
        setDark(!dark)
    }



    return (
        <div className='container-config'>
            <a onClick={handleLogin}><Woman/> Login</a>
            <a onClick={changeTheme}>
                {dark ? <Moon /> : <Sun />}{dark ? 'Dark' : 'Sun'}</a>
        </div >
    )
}