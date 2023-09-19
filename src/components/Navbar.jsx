import { Link } from "react-router-dom";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.scss';
import synergylogo from '../assets/synergy-logo.svg';
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { isMobile } from "react-device-detect";
const NavigationBar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else if (isMobile) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <>
            <Navbar variant="dark" expand="md" className={colorChange ? 'navbar-main navbar_black' : 'navbar-main navbar-transparent'} fixed="top">
                <Container fluid>
                    <Navbar.Brand href="/" className="nav-item" id="nav-logo"><img className="logo-img" src={synergylogo} alt="synergy-logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/" className="nav-item">Home</Nav.Link>
                            <Nav.Link href="/events" className="nav-item">Events</Nav.Link>
                            {/* <Nav.Link href="#action2" className="nav-item">Talks</Nav.Link> */}
                            <Nav.Link href="/team" className="nav-item">Team</Nav.Link>
                        </Nav>
                        <div className="d-flex">
                            <span className="nav-icons">
                                <a href="https://www.linkedin.com/company/synergy-iiitbangalore/" target="_blank" rel="noreferrer">
                                    <BsLinkedin style={{ fontSize: "1.5em" }} className='navbar-social-icons' />
                                </a>
                            </span>
                            <span className="nav-icons">
                                <a href="https://www.instagram.com/synergy_iiitb/" target="_blank" rel="noreferrer">
                                    <BsInstagram style={{ fontSize: "1.5em" }} className='navbar-social-icons' />
                                </a>
                            </span>
                            <span className="nav-icons">
                            <a href="https://twitter.com/IIITB_official" target="_blank" rel="noreferrer" >
                                                <FaTwitter className='navbar-social-icons' style={{fontSize: "1.5em" }} />
                                            </a>
                            </span>
                            <span className="nav-icons">
                            <a href="https://www.facebook.com/IIITBofficial/" target="_blank" rel="noreferrer">
                                                <BsFacebook className='navbar-social-icons' style={{fontSize: "1.5em" }} />
                                            </a>
                            </span>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default NavigationBar;