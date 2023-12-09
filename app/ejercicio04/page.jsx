'use client'
import React, {useState} from 'react'


const Ejercicio04 = () => {
    const [palabra,setPalabra] = useState('');
    const [resultado, setResultado] = useState('');
    

    const matriz = [
        [1, 0, 200],
        [2, 0, 200],
        [2, 3, 200],
        [1, 4, 200],
        [4, 4, 200]
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
        const isA = new RegExp('[a]');
        const isB = new RegExp('[b]');

        while (i < c.length) {
        
        if(isA.test(c[i])){
            caracter = 0;

        }if(isA.test(c[i])){
            caracter = 0;

        }else if(isB.test(c[i])){
            caracter = 1;
        }else if(isB.test(c[i])){
            caracter = 4;
        }else{
            caracter = 2;
        }
        estado = matriz[estado][caracter]
        // console.log(estado)
        if (estado === 200) {
            setResultado('palabra invalida')
            resultado.className = 'mt-5 p-3 bg-red-500 text-center font-bold text-white uppercase rounded';
            return
        }
        i++
    }
    if(estado === 4){
        setResultado('palabra aceptada')
        resultado.className = 'mt-5 p-3 mb-5 bg-green-800 text-center font-bold text-white uppercase rounded';
    }else {
        setResultado('palabra invalida')
        resultado.className = 'mt-5 p-3 bg-red-500 text-center font-bold text-white uppercase rounded';
    }
}
  const limpiar = () => {
    setPalabra('');
    setResultado('');
    const resultadoElement = document.querySelector('#resultado');
    resultadoElement.className = ''; // Limpiar las clases al limpiar
  }
  return (
    <div className = 'max-w-2xl mx-auto mt-12 bg px-4 py-0 sm:px-6 lg:px-8'>
      <h1 className = 'text-center font-bold'>DFA que acepta todas las cadenas sobre "a, b" donde acepte la palabra "aabb"</h1>
      
        <div className = 'mt-5 flex'>
          <input 
          className = 'w-full p-2 md:p-3 rounded border-blue-500'
          value = {palabra} onChange = {e => setPalabra(e.target.value)} id = 'variable' type="text" placeholder = 'Coloca la entrada'/>
        </div>

        <div className="flex justify-evenly uppercase mt-8">
          <div className="flex w-full">
            <button 
             className="flex-1  mr-2 bg-teal-400 p-3 uppercase font-bold cursor-pointer rounded hover:bg-teal-600"
            id = 'analizar' onClick={analizar}>analizar la entrada</button>
          
              <button onClick={limpiar}  
              className="flex-1  mr-2 bg-teal-400 p-3 uppercase font-bold cursor-pointer rounded hover:bg-teal-600">
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

export default Ejercicio04
