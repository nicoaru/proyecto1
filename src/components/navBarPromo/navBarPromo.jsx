import React from "react"
import navBarPromoImg from "../../recursos/promo_mes_img.png"
import "./navBarPromo.css"




function NavBarPromo({className}) {
    return(
        <div className={className}>
            <img src={navBarPromoImg} alt="promo del mes" height="39px"/>
        </div>
    )
}

export { NavBarPromo }