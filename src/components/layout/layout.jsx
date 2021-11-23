import React from "react"
import { Header } from "./header/header"
import { Footer } from "./footer/footer"
import "./layout.css"

function Layout({children}) {
    return(
        <main>
            <Header/>
            {/* {children} */}
            {/* <Footer/> */}
        </main>
    )
}

export { Layout }