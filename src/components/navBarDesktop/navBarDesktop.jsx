import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from 'react-bootstrap/Nav'
import NavDropdown from "react-bootstrap/NavDropdown"
import notifIcon from "../../recursos/notifIcon.png"
import "./navBarDesktop.css"


function NavBarDesktop() {
    return(
        <Navbar className="navbar-desktop" variant="dark" bg="dark" expand="lg">
            <Container fluid>
                <Nav>
                    <NavDropdown id="nav-dropdown-dark-example" title="Categorías" menuVariant="dark">
                            <NavDropdown.Item href="#">Autos</NavDropdown.Item>
                            <NavDropdown.Item href="#">Inmuebles</NavDropdown.Item>
                            <NavDropdown.Item href="#">Tecnología</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="">Ofertas</Nav.Link>
                    <Nav.Link href="">Historial</Nav.Link>
                    <Nav.Link href="">Supermercado</Nav.Link>
                    <Nav.Link href="">Moda</Nav.Link>
                    <Nav.Link href="">Vender</Nav.Link>
                    <Nav.Link href="">Ayuda</Nav.Link>
                </Nav>
                <Nav>
                    <NavDropdown id="nav-dropdown-dark-example" title="UserName" menuVariant="dark">
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
                        <Nav.Link href="">Mis compras</Nav.Link>
                        <NavDropdown id="nav-dropdown-dark-example" title="Favoritos" menuVariant="dark">
                            <NavDropdown.Item href="#">Favorito 1</NavDropdown.Item>
                            <NavDropdown.Item href="#">Favorito 2</NavDropdown.Item>
                            <NavDropdown.Item href="#">Favorito 3</NavDropdown.Item>
                    </NavDropdown>
                        <Nav.Link href=""><img src={notifIcon} height="20px" alt="bell icon"/></Nav.Link>
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



