'use client'
import React, { useState } from 'react';

const Ejercicio01 = () => {
  const [palabra, setPalabra] = useState('');
  const [resultado, setResultado] = useState('');

  const matriz = [
    [1, 200, 200],
    [1, 1, 200]
  ];

  const analizar = () => {
    const c = palabra.split('');
    let i = 0;
    let estado = 0;
    let caracter = 0;

    const isLetter = new RegExp('[a-zA-Z]');
    const isDigit = new RegExp('[0-9]');

    while (i < c.length) {
      if (isLetter.test(c[i])) {
        caracter = 0;
      } else if (isDigit.test(c[i])) {
        caracter = 1;
      } else {
        caracter = 2;
      }
      estado = matriz[estado][caracter];
      if (estado === 200) {
        setResultado('palabra invalida');
        return;
      }
      i++;
    }
    if (estado === 1) {
      setResultado('palabra aceptada');
    }
  };

  const limpiar = () => {
    setPalabra('');
    setResultado('');
  };

  return (
    <div className='max-w-2xl mx-auto mt-12 bg px-4 py-0 sm:px-6 lg:px-8'>
      <h1 className='text-center font-bold'>
        Automata que valida identificadores
      </h1>
      <div className='mt-5'>
        <input
          className='w-full p-2 rounded'
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
            className='flex-1 mr-2 bg-teal-400 p-3 uppercase font-bold cursor-pointer rounded hover:bg-teal-600'
            id='analizar'
            onClick={analizar}
          >
            Analizar la entrada
          </button>

          <button
            onClick={limpiar}
            className='flex-1 mr-2 bg-teal-400 p-3 uppercase font-bold cursor-pointer rounded hover:bg-teal-600'
          >
            Limpiar
          </button>
        </div>
      </div>
      <div className='mt-3' id='resultado'>
        {resultado && (
          <div
            className={`p-3 ${
              resultado === 'palabra aceptada'
                ? 'bg-green-800 text-center font-bold text-white uppercase rounded'
                : 'bg-red-500 text-center font-bold text-white uppercase rounded'
            }`}
          >
            {resultado}
          </div>
        )}
      </div>
    </div>
  );
};

export default Ejercicio01;
