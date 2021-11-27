import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from 'react-bootstrap/Nav'
import NavDropdown from "react-bootstrap/NavDropdown"
import notifIcon from "../../recursos/notifIcon.png"
import { CartWidget } from "../cartWidget/cartWidget"
import "./navBarDesktop.css"


function NavBarDesktop() {
    return(
        <Navbar className="navbar-desktop py-0" variant="ligth" bg="ligth" expand="lg">
            <Container className="py-0">
                <Nav className="navbar-desktop-leftItemsNav py-0">
                    <NavDropdown className="nav-item-categorias py-0" id="nav-dropdown-dark-example" title="Categorías" menuVariant="dark">
                            <NavDropdown.Item href="#">Autos</NavDropdown.Item>
                            <NavDropdown.Item href="#">Inmuebles</NavDropdown.Item>
                            <NavDropdown.Item href="#">Tecnología</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="nav-item-ofertas py-0" href="">Ofertas</Nav.Link>
                    <Nav.Link className="nav-item-historial py-0" href="">Historial</Nav.Link>
                    <Nav.Link className="nav-item-supermercado py-0" href="">Supermercado</Nav.Link>
                    <Nav.Link className="nav-item-moda py-0" href="">Moda</Nav.Link>
                    <Nav.Link className="nav-item-vender py-0" href="">Vender</Nav.Link>
                    <Nav.Link className="nav-item-ayuda py-0" href="">Ayuda</Nav.Link>
                </Nav>
                <Nav className="navbar-desktop-rigthItemsNav py-0 align-items-center">
                    <NavDropdown className="py-0" id="nav-dropdown-dark-example" title="UserName" menuVariant="dark">
                                <NavDropdown.Item href="#">UserLevel</NavDropdown.Item>
                                <NavDropdown.Item href="#">Compras</NavDropdown.Item>
                                <NavDropdown.Item href="#">Preguntas</NavDropdown.Item>
                                <NavDropdown.Item href="#">Mercado Crédito</NavDropdown.Item>
                                <NavDropdown.Item href="#">Peliculas y series</NavDropdown.Item>
                                <NavDropdown.Item href="#">Mis datos</NavDropdown.Item>
                                <NavDropdown.Item href="#">Seguridad</NavDropdown.Item>
                                <NavDropdown.Item href="#">Privacidad</NavDropdown.Item>
                                <NavDropdown.Item href="#">Vender</NavDropdown.Item>
                                <NavDropdown.Item href="#">Salir</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="py-0" href="">Mis compras</Nav.Link>
                    <NavDropdown className="py-0" id="nav-dropdown-dark-example" title="Favoritos" menuVariant="dark">
                        <NavDropdown.Item href="#">Favorito 1</NavDropdown.Item>
                        <NavDropdown.Item href="#">Favorito 2</NavDropdown.Item>
                        <NavDropdown.Item href="#">Favorito 3</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="py-0" href=""><img src={notifIcon} alt="bell icon" className="navbar-desktop-notifIcon"/></Nav.Link>
                    <Nav.Link className="py-0 pe-0" href=""><CartWidget/></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export { NavBarDesktop }




/*         <div className="navBar-desktop">
<ul className="navBar-desktop-left">
    <li>Categorías
        <ul></ul>
    </li>
    <li>Ofertas</li>
    <li>Historial</li>
    <li>Supermercado</li>
    <li>Moda</li>
    <li>Vender</li>
    <li>Ayuda</li>
</ul>

<ul className="navBar-desktop-right">
    <li>UserName 
        <ul></ul>
    </li>
    <li>Mis Compras</li>
    <li>Favoritos
        <ul></ul>
    </li>
    <li>Notificaciones</li>
</ul>
</div>
*/    



