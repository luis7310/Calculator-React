import React from "react";
import '../css/pantalla.css'

function Pantalla({input, output}){
    return(
        <div id="contenedor-pantalla">
            <div id="pantalla-input">
                {input}
            </div>
            <div id="pantalla-output">
                {output}
            </div>
        </div>
    );
}

export default Pantalla;