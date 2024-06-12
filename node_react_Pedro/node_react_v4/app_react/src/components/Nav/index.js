import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Styles from './index.module.css';
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar expand="lg" className={Styles.Navbar}>
      <Container>
        <Navbar.Brand href="/">Supercell</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://supercell.com/en/games/clashroyale/">ClashRoyale</Nav.Link>
            <Nav.Link href="https://supercell.com/en/games/brawlstars/">BrawlStars</Nav.Link>
            <Nav.Link href="https://squadbusters.supercell.com/pt">SquadBusters</Nav.Link>
            <Nav.Link href="https://supercell.com/en/games/boombeach/">BoomBeach</Nav.Link>
            <Nav.Link href="https://supercell.com/en/games/clashofclans/">ClashofClans</Nav.Link>
            <Nav.Link href="https://supercell.com/en/games/hayday/">HayDay</Nav.Link>
          </Nav>
          <Nav.Link href="/user/form.js">Login</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;