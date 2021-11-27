import React from "react"
import Container from 'react-bootstrap/Container'
import { ForMobile } from "../../querys/forMobile/forMobile"
import { ForDesktop } from "../../querys/forDesktop/forDesktop"
import { NavBarBrand } from "../../navBarBrand/navBarBrand"
import { CartWidget } from "../../cartWidget/cartWidget"
import { NavSearch } from "../../buscador/navSearch"
import { NavBarDesktop } from "../../navBarDesktop/navBarDesktop"
import { NavBarMobile } from "../../navBarMobile/navBarMobile"
import { DirEnvioWidget } from "../../dirEnvioWidget/dirEnvioWidget"
import { NavBarPromo } from "../../navBarPromo/navBarPromo"
import "./header.css"


function Header() {
    return(
        <header className="header">
            <Container className="navbar-wrapper" fluid='xl'>
                <div className="navbar-top-wrapper">
                    <NavBarBrand/>
                    <NavSearch className="navSearch-comp"/>
                    <ForMobile>
                        <NavBarMobile/>
                    </ForMobile>
                    <ForMobile>
                        <CartWidget/>
                    </ForMobile>
                    <div className='navbarPromo-container'>
                        <ForDesktop>
                            <NavBarPromo className="navBarPromo-comp"/>
                        </ForDesktop>                          
                    </div>
                </div>
                <div className="navbar-bottom-wrapper">
                    <DirEnvioWidget className="dirEnvio-comp"/>
                    <ForDesktop>
                        <NavBarDesktop/>
                    </ForDesktop>
                </div>
            </Container>
        </header>
    )
}

export { Header }