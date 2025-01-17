import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home/index'
import Login, { SignUp } from '../pages/Login'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={Home} path="/" />
                <Route Component={Login} path="/login" />
                <Route Component={SignUp} path="/signup" />
            </Routes>
        </BrowserRouter>
    )
}