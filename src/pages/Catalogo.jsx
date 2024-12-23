import React, { useState, useEffect, useMemo } from "react";
import axios from "axios"; // Para realizar solicitudes HTTP
import HeaderCatalogo from "./HeaderCatalogo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProductCard = ({ product }) => (
  <Card>
    <CardContent className="p-4">
      <img
        src={product.image } // Usa una imagen predeterminada si no hay imagen
        alt={product.name}
        width={200}
        height={200}
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
      <p className="text-sm text-gray-500 mb-4">Marca: {product.marca}</p>
      <Button className="w-full">Añadir al carrito</Button>
    </CardContent>
  </Card>
);

function Catalogo() {
  const [products, setProducts] = useState([]);
  const [gender, setGender] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [brand, setBrand] = useState(null);

  // Obtén los productos desde la API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/Products"); // URL del backend
        console.log("Productos obtenidos:", response.data); // Verifica la respuesta aquí
        setProducts(response.data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (gender) {
      result = result.filter((p) => p.gender === gender);
    }
    if (brand) {
      result = result.filter((p) => p.marca === brand);
    }
    return result;
  }, [gender, brand, products]);

  return (
    <div className="container mx-auto px-4">
      <HeaderCatalogo />
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Catálogo de Productos</h1>
        <div className="flex flex-wrap gap-4">
          <Select onValueChange={setGender} aria-label="Filtrar por género">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Género" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gender">Genero</SelectItem>
              <SelectItem value="masculino">Masculino</SelectItem>
              <SelectItem value="femenino">Femenino</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={setBrand} aria-label="Filtrar por marca">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Marca" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="brand">Marca</SelectItem>
              <SelectItem value="Nike">Nike</SelectItem>
              <SelectItem value="Adidas">Adidas</SelectItem>
              <SelectItem value="Puma">Puma</SelectItem>
              <SelectItem value="Reebok">Reebok</SelectItem>
              <SelectItem value="New Balance">New Balance</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => <ProductCard key={product._id} product={product} />)
        ) : (
          <p className="col-span-full text-center text-gray-600">No se encontraron resultados.</p>
        )}
      </div>
    </div>
  );
}

export default Catalogo;
