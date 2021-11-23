import React from "react"
import cartIcon from "../../recursos/cart.png"
import "./cartWidget.css"


function CartWidget() {
    return(
        <img className="cartIcon" src={cartIcon} alt="cart icon"/>
    )
}

export { CartWidget }