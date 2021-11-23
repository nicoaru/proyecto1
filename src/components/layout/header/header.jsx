import React from "react"
import Stack from 'react-bootstrap/Stack'
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
            <div className="navbar-top-wrapper">
                <NavBarBrand/>
                <NavSearch/>
                <ForMobile>
                    <CartWidget/>
                </ForMobile>
                <ForDesktop>
                    <NavBarPromo/>
                </ForDesktop>                    
            </div>
            <div className="navbar-bottom-wrapper">
                <DirEnvioWidget/>
                <ForMobile>
                    <NavBarMobile/>
                </ForMobile>
                <ForDesktop>
                    <NavBarDesktop/>
                </ForDesktop>
                <ForDesktop>
                    <CartWidget/>
                </ForDesktop>            
            </div>

        </header>
    )
}

export { Header }