import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const marcas = [
  { id: 1, name: "Nike", logo: "/placeholder.svg?height=100&width=200&text=Nike" },
  { id: 2, name: "Adidas", logo: "/placeholder.svg?height=100&width=200&text=Adidas" },
  { id: 3, name: "Puma", logo: "/placeholder.svg?height=100&width=200&text=Puma" },
  { id: 4, name: "Reebok", logo: "/placeholder.svg?height=100&width=200&text=Reebok" },
  { id: 5, name: "New Balance", logo: "/placeholder.svg?height=100&width=200&text=New+Balance" },
];

export function CarruselMarcas() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto"
    >
      <CarouselContent>
        {marcas.map((marca) => (
          <CarouselItem key={marca.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6 h-[150px]">
                  <img
                    src={marca.logo}
                    alt={`Logotipo de la marca ${marca.name}`}
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious aria-label="Anterior" />
      <CarouselNext aria-label="Siguiente" />
    </Carousel>
  );
}
