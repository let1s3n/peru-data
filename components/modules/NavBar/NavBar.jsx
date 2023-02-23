import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
const NavBar = () => {
    return (
        <Navbar className="p-0" bg="light" expand="lg">
            <Container className="g-0">
                <Navbar.Brand href="/" className="logo fs-1 fw-bold bg-white py-1 px-2 rounded-pill">PD</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="/graficos">Gráficos</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar