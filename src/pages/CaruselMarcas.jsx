import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

function CarruselMarcas() {
  const [marcas, setMarcas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook para redirección

  useEffect(() => {
    const fetchMarcas = async () => {
      try {
        const response = await fetch("http://localhost:4000/marcas");
        if (!response.ok) {
          throw new Error("Error al obtener las marcas");
        }
        const data = await response.json();
        setMarcas(data);
      } catch (err) {
        console.error("Error al cargar las marcas:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMarcas();
  }, []);

  if (loading) {
    return <p>Cargando marcas...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Carousel opts={{ align: "start" }} className="w-full max-w-full mx-auto">
      <CarouselContent>
        {marcas.map((marca) => (
          <CarouselItem key={marca.id} className="basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-1/7 2xl:basis-1/8">
            <div className="p-1">
              <Card>
                <CardContent
                  className="flex flex-col items-center justify-center p-6 h-[150px] cursor-pointer"
                  onClick={() => navigate(`/catalogo?marca=${marca.id}`)} // Redirección con filtro
                >
                  <img
                    src={marca.logo}
                    alt={marca.name}
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CarruselMarcas;
