import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.scss';
const NavigationBar = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">LOGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Workshops</Nav.Link>
                            <Nav.Link href="#action2">Competitions</Nav.Link>
                            <Nav.Link href="#action2">Panel Discussions</Nav.Link>
                            <Nav.Link href="#action2">Talks</Nav.Link>
                            <Nav.Link href="#action2">Team</Nav.Link>
                        </Nav>
                        <div className="d-flex">
                            dlkjeh
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}
export default NavigationBar;