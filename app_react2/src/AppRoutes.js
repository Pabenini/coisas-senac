import Home from './pages/Home'
import Filmes from './pages/Filmes';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />}>Home</Route>
                <Route path="/filmes" element={<Filmes />}>Home</Route>
            </Routes>
        </BrowserRouter>
    )
}