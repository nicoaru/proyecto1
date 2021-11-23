import React from "react"
import navBarPromoImg from "../../recursos/promo_mes_img.webp"
import "./navBarPromo.css"




function NavBarPromo() {
    return(
        <div>
            <img src={navBarPromoImg} alt="promo del mes" height="39px"/>
        </div>
    )
}

export { NavBarPromo }