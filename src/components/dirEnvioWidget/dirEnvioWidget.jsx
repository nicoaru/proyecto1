import React from "react"
import location from "../../recursos/location.png"
import "./dirEnvioWidget.css"





function DirEnvioWidget({className}) {
    return(
        <div className={className+" dirEnvioContainer"}>
            <img src={location} alt="location point icon" height="24px"/>
            <div className="datosEnvioContainer">
                <p className="datosEnvioContainer-nombre">Enviar a Nombre</p>
                <p className="datosEnvioContainer-direccion">Dirección</p>
            </div>
        </div>
    )


}

export { DirEnvioWidget }