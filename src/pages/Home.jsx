import Header from './Header'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-8">
          Bienvenido a zapatillasX
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-700 max-w-2xl mx-auto">
          Descubre nuestra colección de zapatillas de alta calidad para todos los estilos y ocasiones.
        </p>
      </main>
    </div>
  )
}

