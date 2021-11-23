import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container"
import Nav from 'react-bootstrap/Nav'

import "./navBarMobile.css"



function NavBarMobile() {
    return(
        <Navbar className="navbar-mobile" collapseOnSelect expand="lg" bg="light">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="">Inicio</Nav.Link>
                        <Nav.Link href="">Notificaciones</Nav.Link>
                        <Nav.Link href="">Mis compras</Nav.Link>
                        <Nav.Link href="">Favoritos</Nav.Link>
                        <Nav.Link href="">Ofertas</Nav.Link>
                        <Nav.Link href="">Mercado Crédito</Nav.Link>
                        <Nav.Link href="">Películas y series</Nav.Link>
                        <Nav.Link href="">Historial</Nav.Link> 
                        <Nav.Link href="">Mi cuentas</Nav.Link>
                        <Nav.Link href="">Mercado Shops</Nav.Link>
                        <hr class="collapsed-navbar-divider"/>
                        <Nav.Link href="">Supermercado</Nav.Link> 
                        <Nav.Link href="">Moda</Nav.Link>
                        <Nav.Link href="">Tiendas oficiales</Nav.Link>
                        <Nav.Link href="">Categorías</Nav.Link>
                        <hr class="collapsed-navbar-divider"/>
                        <Nav.Link href="">Resumen</Nav.Link> 
                        <Nav.Link href="">Vender</Nav.Link>
                        <hr class="collapsed-navbar-divider"/>
                        <Nav.Link href="">Ayuda</Nav.Link>
                        <hr class="collapsed-navbar-divider"/>
                        <Nav.Link href="">¡Comprá y vendé con la app!</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export { NavBarMobile }