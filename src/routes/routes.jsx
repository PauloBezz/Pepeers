import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "../pages/Home";


export const Router = () =>{

    <BrowserRouter>
        <Routes>
            <Route component={Home} path="/" exact />
        </Routes>
    </BrowserRouter>
}