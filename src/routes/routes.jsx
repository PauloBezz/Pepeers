import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home/index'
import Login from '../pages/Login'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={Home} path="/" />
                <Route Component={Login} path="/login" />
            </Routes>
        </BrowserRouter>
    )
}