import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

function CarruselZapatillas() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Llama a la API para obtener los productos
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/products"); // Ajusta la URL según sea necesario
        const data = await response.json();
        if (response.ok) {
          setProductos(data);
        } else {
          console.error("Error al obtener los productos:", data.message);
        }
      } catch (error) {
        console.error("Error de red al obtener los productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center">Cargando productos...</p>;
  }

  if (productos.length === 0) {
    return <p className="text-center">No hay productos disponibles.</p>;
  }

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-full mx-auto"
    >
      <CarouselContent>
        {productos.map((producto) => (
          <CarouselItem key={producto.id} className="basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-1/7 2xl:basis-1/8">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <img
                    src={producto.image[0] || "/placeholder.svg"}
                    alt={producto.name}
                    width={200}
                    height={200}
                    className="rounded-md object-cover mb-4"
                  />
                  <h3 className="font-semibold text-lg mb-2">{producto.name}</h3>
                  <p className="text-gray-600 mb-4">${producto.price.toFixed(2)}</p>
                  <Button>Añadir al carrito</Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CarruselZapatillas;
