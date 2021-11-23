import React from "react"
import logoChico from "../../recursos/logo_meli_chico.png"
import logoGrande from "../../recursos/logo_meli_grande.png"
import "./navBarBrand.css"


function NavBarBrand() {
    return(
        <div className="navbar-brand">
            <img className="navbar-brand-imgSm" src={logoChico} alt="logo mercado libre" />
            <img className="navbar-brand-imgLg" src={logoGrande} alt="logo mercado libre" />
        </div>
    )
}

export { NavBarBrand }
