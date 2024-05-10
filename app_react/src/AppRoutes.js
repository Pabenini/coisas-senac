import Home from './pages/Home/Home.js'
import Filmes from './pages/Filmes/Filmes.js'
import Menu from "./components/Menu/Menu.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
        <Menu />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Filmes" element={<Filmes />}></Route>
            </Routes>        
        </BrowserRouter>
    )
}

export default AppRoutes