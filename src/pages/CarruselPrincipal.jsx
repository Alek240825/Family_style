import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export function CarruselPrincipal() {
  return (
    <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto mb-16">
      <CarouselContent>
        {[1, 2, 3, 4, 5].map((index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div className="flex aspect-square items-center justify-center p-6 relative">
                <img
                  src={`/placeholder.svg?height=400&width=400&text=Zapatilla+${index}`}
                  alt={`Zapatilla ${index}`}
                  width={400}
                  height={400}
                  className="rounded-md object-cover"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

