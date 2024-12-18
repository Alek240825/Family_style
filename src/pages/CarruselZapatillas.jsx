import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const zapatillas = [
  { id: 1, name: "Zapatilla Deportiva", price: 89.99, image: "/placeholder.svg?height=200&width=200&text=Deportiva" },
  { id: 2, name: "Zapatilla Casual", price: 69.99, image: "/placeholder.svg?height=200&width=200&text=Casual" },
  { id: 3, name: "Zapatilla de Running", price: 99.99, image: "/placeholder.svg?height=200&width=200&text=Running" },
  { id: 4, name: "Zapatilla de Moda", price: 79.99, image: "/placeholder.svg?height=200&width=200&text=Moda" },
  { id: 5, name: "Zapatilla de Trekking", price: 109.99, image: "/placeholder.svg?height=200&width=200&text=Trekking" },
];

function CarruselZapatillas() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-full mx-auto"
    >
      <CarouselContent>
        {zapatillas.map((zapatilla) => (
          <CarouselItem key={zapatilla.id} className="basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-1/7 2xl:basis-1/8">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <img
                    src={zapatilla.image}
                    alt={zapatilla.name}
                    width={200}
                    height={200}
                    className="rounded-md object-cover mb-4"
                  />
                  <h3 className="font-semibold text-lg mb-2">{zapatilla.name}</h3>
                  <p className="text-gray-600 mb-4">${zapatilla.price.toFixed(2)}</p>
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
