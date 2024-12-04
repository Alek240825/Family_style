import React from 'react';
import Header from "./Header";
import { CarruselPrincipal } from './CarruselPrincipal';
import CarruselMarcas from './CaruselMarcas';
import CarruselZapatillas from './CarruselZapatillas';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-8">
          Bienvenido a Family style
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Descubre nuestra colección de zapatillas de alta calidad para todos los estilos y ocasiones.
        </p>
        
        <CarruselPrincipal />

        <h2 className="text-2xl md:text-3xl font-bold text-left text-gray-900 mb-8">
          Nuestras Marcas
        </h2>
        <CarruselMarcas />

        <h2 className="text-2xl md:text-3xl font-bold text-left text-gray-900 my-8">
          Zapatillas Destacadas
        </h2>
        <CarruselZapatillas />
      </main>
    </div>
  );
}

export default Home;

