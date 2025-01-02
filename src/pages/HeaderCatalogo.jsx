import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  logo from "../assets/Logo.png";

function HeaderCatalogo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-black text-xl font-bold">
              <img src={logo} alt="logo" className='h-10'/>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Inicio
            </Link>
            <Link to="/sobre-nosotros" className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Sobre Nosotros
            </Link>
          </nav>
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-black hover:text-gray-700 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black" 
              aria-controls="mobile-menu" 
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="text-black hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Inicio
            </Link>
            <Link to="/sobre-nosotros" className="text-black hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Sobre Nosotors
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default HeaderCatalogo;

