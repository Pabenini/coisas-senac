import Home from './pages/Home'
import Students from './pages/Students'
import Col from './pages/Col'
import Courses from './pages/Courses'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}> </Route>
                <Route path="/students" element={<Students />}> </Route>
                <Route path="/col" element={<Col />}> </Route>
                <Route path="/courses" element={<Courses />}> </Route>
            </Routes>
        </BrowserRouter>
    )
}