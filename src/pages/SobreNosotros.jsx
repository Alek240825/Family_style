import React from "react";
import Header from "./HeaderNosotros";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Truck, HeartHandshake, PhoneCall } from 'lucide-react';

export const metadata = {
  title: "Sobre Nosotros - Family style",
  description: "Conoce más sobre Family style",
};

function SobreNosotros() {
  return (
    <html lang="es">
      <body>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="container mx-auto px-4 py-12">
              <h1 className="text-4xl font-bold text-center mb-8">
                Sobre Family style
              </h1>

              <div className="max-w-3xl mx-auto mb-12">
                <p className="text-lg text-gray-700 mb-4">
                  En Family style, nos apasiona ofrecer el mejor calzado para
                  todos los estilos y ocasiones. Fundada en 2010, nuestra misión
                  es proporcionar zapatillas de alta calidad que combinen
                  comodidad, estilo y durabilidad.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Trabajamos con las mejores marcas y diseñadores para asegurar
                  que nuestros clientes tengan acceso a las últimas tendencias y
                  tecnologías en calzado. Ya sea que busques zapatillas para
                  correr, para el día a día o para ocasiones especiales, en
                  Family style encontrarás la opción perfecta.
                </p>
                <p className="text-lg text-gray-700">
                  Nuestro compromiso va más allá de vender zapatillas. Nos
                  esforzamos por ofrecer una experiencia de compra excepcional,
                  con un servicio al cliente de primera clase y políticas de
                  devolución flexibles.
                </p>
              </div>

              <h2 className="text-3xl font-semibold text-center mb-8">
                ¿Por qué elegir Family style?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <ShoppingBag className="mr-2" />
                      Amplia selección
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Ofrecemos una extensa gama de zapatillas para hombres,
                      mujeres y niños, abarcando todos los estilos y
                      necesidades.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Truck className="mr-2" />
                      Envío rápido y gratuito
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Disfruta de envío gratuito en pedidos superiores a $50 y
                      recibe tus zapatillas en tiempo récord.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <HeartHandshake className="mr-2" />
                      Garantía de satisfacción
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Si no estás completamente satisfecho con tu compra,
                      ofrecemos devoluciones gratuitas dentro de los 30 días.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <PhoneCall className="mr-2" />
                      Atención al cliente 24/7
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Nuestro equipo de atención al cliente está disponible las
                      24 horas del día, los 7 días de la semana para ayudarte
                      con cualquier consulta.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}

export default SobreNosotros;