import React from "react"
import location from "../../recursos/location.png"
import "./dirEnvioWidget.css"





function DirEnvioWidget() {
    return(
        <div className="datosEnvio">
            <img src={location} alt="location point icon" height="22px"/>
            <p>Enviar a Nombre</p>
            <p>Dirección</p>
        </div>
    )


}

export { DirEnvioWidget }