import './index.css'
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <nav className="menu">
            <ul>
                <li>
                    <Link className='link' to="/">Home</Link>
                </li>
                <li>
                    <Link className='link' to="/filmes">Filmes</Link>
                </li>
            </ul>
        </nav>
    )
}