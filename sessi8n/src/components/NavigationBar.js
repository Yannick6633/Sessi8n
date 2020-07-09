import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #000;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #fff;

        &:hover {
            color: #99ff66;
        }
    }
    
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Sessi8n</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/dj">DJ</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/albums">Albums</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/news">News</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)