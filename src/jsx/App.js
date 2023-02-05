import React from 'react';
import '../css/App.css'
import Boton from './botones';
import Pantalla from './pantalla';
import { useState } from 'react';

function Calculadora(){

    const [denominador, setDem] = useState('');
    const [numerador, setNum] = useState('');

    const modificarInput = (valor) => {

        if('1234567890'.indexOf(valor) != -1){
            setNum(numerador + valor);
        }
        if('+-/*.'.indexOf(valor) != -1){
            if(numerador){
               if('+-/*.'.indexOf(numerador.slice(-1)) != -1){
                    setNum(numerador.slice(0 ,-1) + valor);
               }
               else{
                    setNum(numerador + valor);
               }
            }

        }
        if(valor == 'Clear'){
            setNum('');
            setDem('');
        }
        if(valor == '='){
            var res;
            res = eval(numerador);
            setDem(res);
        }
        if(valor == '('){
            setNum(numerador + valor);
        }
        if(valor == ')'){
            setNum(numerador + valor);
        }
        if(valor == '+-'){
            setNum(numerador + '*(-1)')
        }
    };


    return(
        <div id="contenedor">
            <div id="display">
                <Pantalla 
                input = {numerador}
                output = {denominador}/>
            </div>
            <div id="teclado">
                <div className='fila-botones' >
                    <Boton
                        contenido='1'
                        output={modificarInput}
                     />
                      <Boton
                        contenido='2'
                        output={modificarInput}
                     />
                      <Boton
                        contenido='3'
                        output={modificarInput}
                     />
                      <Boton
                        contenido='+'
                        output={modificarInput}
                     />
                </div>
                <div className='fila-botones' >
                    <Boton
                        contenido='4'
                        output={modificarInput}
                     />
                      <Boton
                        contenido='5'
                        output={modificarInput}
                     />
                      <Boton
                        contenido='6'
                        output={modificarInput}
                     />
                      <Boton
                        contenido='-'
                        output={modificarInput}
                     />
                </div>
                <div className='fila-botones' >
                <Boton
                        contenido='7'
                        output={modificarInput}
                     />
                      <Boton
                        contenido='8'
                        output={modificarInput}
                     />
                      <Boton
                        contenido='9'
                        output={modificarInput}
                     />
                      <Boton
                        contenido='*'
                        output={modificarInput}
                     />
                </div>
                <div className='fila-botones' >
                    <Boton
                        contenido='('
                        output={modificarInput}
                     />
                      <Boton
                        contenido='0'
                        output={modificarInput}
                     />
                      <Boton
                        contenido=')'
                        output={modificarInput}
                     />
                      <Boton
                        contenido='/'
                        output={modificarInput}
                     />
                </div>
                <div className='fila-botones' >
                    <Boton
                        contenido='Clear'
                        output={modificarInput}
                   />
                    <Boton
                        contenido='+-'
                        output={modificarInput}
                    />
                    <Boton
                        contenido='.'
                        output={modificarInput}
                    />
                     <Boton
                        contenido='='
                        output={modificarInput}
                    />
                </div>
            </div>
        </div>
    );
}


export default Calculadora;