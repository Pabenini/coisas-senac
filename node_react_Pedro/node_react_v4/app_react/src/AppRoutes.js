
import Home from './pages/Home'
import Music from './pages/Music'
import Students from './pages/Students'
import StudentsCadastre from './pages/Students/cadastre.js'
import Col from './pages/Col'
import Courses from './pages/Courses'
import FormUser from './pages/User/form'
import FormBooks from './pages/Books/form'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from './components/Menu/menu'
import Nav from './components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />}> </Route>
                <Route path="/music" element={<Music />}> </Route>
                <Route path="/students" element={<Students />}> </Route>
                <Route path="/Students/cadastre.js" element={<StudentsCadastre />}> </Route>
                <Route path="/col" element={<Col />}> </Route>
                <Route path="/courses" element={<Courses />}> </Route>
                <Route path="/user/form.js" element={<FormUser />}> </Route>
                <Route path="/books/form.js" element={<FormBooks />}> </Route>

            </Routes>
        </BrowserRouter>
    )
}