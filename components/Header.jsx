import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 p-12">
      
        <div className="text-center mt-5">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4">AUTOMATAS FINITOS</h1>
        </div>

        <nav className="space-x-4">
          <ul className="flex flex-col md:flex-row md:items-center md:justify-evenly uppercase">

            <li className='hover:scale-110 transition duration-300 py-1 hover:text-teal-400'>
              <Link href='/'>Inicio</Link>
            </li>

            <li className='hover:scale-110 transition duration-300 py-1 hover:text-teal-400'>
              <Link href='/ejercicio01'>Ejercicio 01</Link>
            </li>

            <li className='hover:scale-110 transition duration-300 py-1 hover:text-teal-400'>
              <Link href='/ejercicio02'>Ejercicio 02</Link>
            </li>

            <li className='hover:scale-110 transition duration-300 py-1 hover:text-teal-400'>
              <Link href='/ejercicio03'>Ejercicio 03</Link>
            </li>

            <li className='hover:scale-110 transition duration-300 py-1 hover:text-teal-400'>
              <Link href='/ejercicio04'>Ejercicio 04</Link>
            </li>

            <li className='hover:scale-110 transition duration-300 py-1 hover:text-teal-400'>
              <Link href='/ejercicio05'>Ejercicio 05</Link>
            </li>

          </ul>
        </nav>
     
    </header>
  );
}

export default Header;
