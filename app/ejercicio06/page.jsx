'use client'
import React, {useState} from 'react'


const Ejercicio06 = () => {
    const [palabra,setPalabra] = useState('');
    const [resultado, setResultado] = useState('');
    

    const matriz = [
      [1, 200, 200],
      [1, 1, 200]
    ]
    const analizar = () => {
        //La palabra que pone el usuario en arreglo
        const c = palabra.split('');
        //La variable que controla el ciclo para la iteracion
        let i = 0;
        //variable estado que funcionara como estado inicial
        let estado = 0;
        //creamos la variable caracter
        let caracter = 0;

        const resultado = document.querySelector('#resultado');

        //Crear patrones para analizar la palabra caracter por caracter
        const is0 = new RegExp('[a]');
        const is1 = new RegExp('[b]');

        while (i < c.length) {
        
        if(is0.test(c[i])){
            caracter = 0;
        }else if(is1.test(c[i])){
            caracter = 1;
        }else{
            caracter = 2;
        }
        estado = matriz[estado][caracter]
        console.log(estado)
        if (estado === 200) {
            setResultado('palabra invalida')
            resultado.className = 'mt-5 p-3 bg-red-500 text-center font-bold text-white uppercase rounded';
            return
        }
        i++
    }
    if(estado === 1){
        setResultado('palabra aceptada')
        resultado.className = 'mt-5 p-3 mb-5 bg-green-800 text-center font-bold text-white uppercase rounded';
    }
}
  const limpiar = () => {

  setPalabra('');
  setResultado('');
  }
  return (
    <div className = 'max-w-lg mx-auto mt-24 bg mg-10px' style={{ maxWidth: '800px'}}>
      <h1 className = 'text-center font-bold'>DFA que acepta todas las cadenas sobre "a, b" donde cada cadena debera comenzar por un a</h1>
      
        <div className = 'mt-5 flex'>
          <input 
          className = 'w-full p-2 md:p-3 rounded border-blue-500'
          value = {palabra} onChange = {e => setPalabra(e.target.value)} id = 'variable' type="text" placeholder = 'Coloca la entrada'/>
        </div>

        <div className="flex justify-evenly uppercase mt-8">
          <div className="flex w-full">
            <button
              className="flex-1 mr-2 p-3 uppercase font-bold cursor-pointer rounded bg-gradient-to-b from-black to-black hover:from-gray-700 hover:to-gray-800 text-blue-500 hover:text-white"
              id="analizar"
              onClick={analizar}
            >
              Analizar la entrada
            </button>

            <button
              onClick={limpiar}
              className="flex-1 mr-2 p-3 uppercase font-bold cursor-pointer rounded bg-gradient-to-b from-black to-black hover:from-gray-700 hover:to-gray-800 text-blue-500 hover:text-white"
            >
              Limpiar
            </button>
          </div>
        </div> 
      <div id = "resultado">
        {resultado}
      </div>
    </div>
  )
}

export default Ejercicio06