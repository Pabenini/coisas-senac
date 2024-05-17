
import Home from './pages/Home'
import Filmes from './pages/Filmes'
import Col from './pages/Col'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}> </Route>
                <Route path="/filmes" element={<Filmes />}> </Route>
                <Route path="/col" element={<Col />}> </Route>
            </Routes>
        </BrowserRouter>
    )
}