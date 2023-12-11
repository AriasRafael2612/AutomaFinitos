import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-gray-900 to-gray-800 p-12">
        <div className="container mx-auto">
        <div className="text-center mt-15">
                <h1 className="text-white text-3xl font-bold mb-4"> AUTOMATAS FINITOS</h1>
        </div>

        <nav className="space-x-4">
            <ul className='flex justify-evenly uppercase'>
                <li className ="hover:text-teal-400">
                    <Link className ="cursor-pointer text-blue-400"  href='/'>Inicio</Link>
                </li>

                <li className ='hover:scale-25 duration-300 py-1 hover:text-teal-400'>
                    <Link className ="cursor-pointer text-blue-400" href='/ejercicio01'>Ejercicio 01</Link>
                </li>

                <li className ='hover:scale-25 duration-300 py-1 hover:text-teal-400'>
                    <Link className ="cursor-pointer text-blue-400" href='/ejercicio02'>Ejercicio 02</Link> 
                </li>

                <li className ='hover:scale-25 duration-300 py-1 hover:text-teal-400'>
                    <Link className ="cursor-pointer text-blue-400" href='/ejercicio03'>Ejercicio 03</Link> 
                </li>

                <li className ='hover:scale-25 duration-300 py-1 hover:text-teal-400'>
                    <Link className ="cursor-pointer text-blue-400" href='/ejercicio04'>Ejercicio 04</Link> 
                </li>
                        
                <li className ='hover:scale-25 duration-300 py-1 hover:text-teal-400'>
                    <Link className ="cursor-pointer text-blue-400" href='/ejercicio05'>Ejercicio 05</Link> 
                </li>

                <li className ='hover:scale-25 duration-300 py-1 hover:text-teal-400'>
                    <Link className ="cursor-pointer text-blue-400" href='/ejercicio06'>Ejercicio 06</Link> 
                </li>


            </ul>
        </nav>
    </div>
    </header>      
     
  )
}

export default Header
