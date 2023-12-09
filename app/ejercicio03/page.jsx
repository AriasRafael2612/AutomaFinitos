'use client'
import React, { useState } from 'react';

const Ejercicio03 = () => {
  const [palabra, setPalabra] = useState('');
  const [resultado, setResultado] = useState('');

  const matriz = [
    [1, 0, 200],
    [2, 0, 200],
    [2, 2, 200]
  ];

  const analizar = () => {
    const c = palabra.split('');
    let i = 0;
    let estado = 0;
    let caracter = 0;

    const resultado = document.querySelector('#resultado');

    while (i < c.length) {
      if (c[i] === 'a') {
        caracter = 0;
      } else if (c[i] === 'b') {
        caracter = 1;
      } else {
        caracter = 2;
      }

      estado = matriz[estado][caracter];

      if (estado === 200) {
        setResultado('palabra invalida')
            resultado.className = 'mt-5 p-3 bg-red-500 text-center font-bold text-white uppercase rounded';
            return
      }

      i++;
    }

    if (estado === 0) {
      setResultado('palabra aceptada')
      resultado.className = 'mt-5 p-3 mb-5 bg-green-800 text-center font-bold text-white uppercase rounded';
    } else {
      setResultado('palabra invalida')
      resultado.className = 'mt-5 p-3 bg-red-500 text-center font-bold text-white uppercase rounded';
    }
  };

  const limpiar = () => {
    setPalabra('');
    setResultado('');
    const resultadoElement = document.querySelector('#resultado');
    resultadoElement.className = ''; // Limpiar las clases al limpiar
  };

  return (
    /* eslint-disable react/jsx-filename-extension */
    /* prettier-ignore */
    <div className='max-w-2xl mx-auto mt-12 bg px-4 py-0 sm:px-6 lg:px-8'>
      <h1 className='text-center font-bold'>
        DFA que acepta todas las cadenas sobre "a, b" donde cada "a" deberá ser seguida por una "b"
      </h1>

      <div className='mt-5 flex'>
        <input
          className='w-full p-2 md:p-3 rounded border-blue-500'
          value={palabra}
          onChange={(e) => setPalabra(e.target.value)}
          id='variable'
          type='text'
          placeholder='Coloca la entrada'
        />
      </div>

      <div className='flex justify-evenly uppercase mt-8'>
        <div className='flex w-full'>
          <button
            className='flex-1  mr-2 bg-teal-400 p-3 uppercase font-bold cursor-pointer rounded hover:bg-teal-600'
            id='analizar'
            onClick={analizar}
          >
            Analizar la entrada
          </button>

          <button
            onClick={limpiar}
            className='flex-1  mr-2 bg-teal-400 p-3 uppercase font-bold cursor-pointer rounded hover:bg-teal-600'
          >  
            Limpiar
          </button>
        </div> 
      </div>

      <div id = "resultado">
        {resultado}
      </div>
    </div>
    
  );
};

export default Ejercicio03;
