import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from '../pages/Login'
import SignUp from '../pages/Register'
import { Home } from '../pages/Home/index'
import { Product } from '../pages/Product'
import Err from '../pages/Err'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={Home} path="/" />
                <Route Component={Login} path="/login" />
                <Route Component={SignUp} path="/signup" />
                <Route Component={Product} path="/product/:index" />
                <Route Component={Err} path='*' />
            </Routes>
        </BrowserRouter>
    )
}