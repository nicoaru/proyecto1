import React from "react"
import "./navSearch.css"
import search from "../../recursos/search.png"

function NavSearch({className}) {
    return(
        <form className={className+" nav-search-form"}>
            <input className="nav-search-input" type="text" placeholder="Buscar productos, marcas y más..."></input>
            <button className="nav-search-btn" type="submit">
                <img className="search-icon" src={search} alt="lupa"/>
            </button>
        </form>
    )
}

export { NavSearch }