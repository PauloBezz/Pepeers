import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home/index'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={Home} path="/" />
            </Routes>
        </BrowserRouter>
    )
}