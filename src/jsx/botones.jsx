import React from 'react'
import '../css/botones.css'

function Boton({contenido, output }){
    return(
        <button id="contenedor-btn" onClick={() => output(contenido)} >
            {contenido}
        </button>
    );
}



export default Boton;