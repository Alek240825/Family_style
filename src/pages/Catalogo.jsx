import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderCatalogo from './HeaderCatalogo';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Catalogo() {
  const [zapatillas, setZapatillas] = useState([
    { id: 1, name: "Deportiva Hombre", price: 89.99, priceRange: '50-100', image: "/placeholder.svg?height=200&width=200&text=Deportiva+Hombre", gender: 'masculino', brand: 'Nike' },
    { id: 2, name: "Casual Mujer", price: 69.99, priceRange: '50-100', image: "/placeholder.svg?height=200&width=200&text=Casual+Mujer", gender: 'femenino', brand: 'Adidas' },
    { id: 3, name: "Running Hombre", price: 99.99, priceRange: '50-100', image: "/placeholder.svg?height=200&width=200&text=Running+Hombre", gender: 'masculino', brand: 'Puma' },
    { id: 4, name: "Moda Mujer", price: 79.99, priceRange: '50-100', image: "/placeholder.svg?height=200&width=200&text=Moda+Mujer", gender: 'femenino', brand: 'Reebok' },
    { id: 5, name: "Trekking Unisex", price: 109.99, priceRange: '100-150', image: "/placeholder.svg?height=200&width=200&text=Trekking+Unisex", gender: 'masculino', brand: 'New Balance' },
  ]);
  const [filteredZapatillas, setFilteredZapatillas] = useState(zapatillas);
  const [gender, setGender] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [brand, setBrand] = useState(null);

  const filterAndSortZapatillas = () => {
    let result = [...zapatillas];
    
    if (gender) {
      result = result.filter(z => z.gender === gender);
    }
    
    if (brand) {
      result = result.filter(z => z.brand === brand);
    }
    
    if (sortBy) {
      result = result.filter(z => {
        if (sortBy === '150+') {
          return z.price >= 150;
        }
        const [min, max] = sortBy.split('-').map(Number);
        return z.price >= min && z.price < max;
      });
    }
    
    setFilteredZapatillas(result);
  };

  return (
    <div className="container mx-auto px-4">
          <HeaderCatalogo />
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Catálogo de Zapatillas</h1>
        <div className="flex flex-wrap gap-4">
          <Select onValueChange={(value) => setGender(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Género" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="masculino">Masculino</SelectItem>
              <SelectItem value="femenino">Femenino</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => setSortBy(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Rango de precio" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-50">$0 - $50</SelectItem>
              <SelectItem value="50-100">$50 - $100</SelectItem>
              <SelectItem value="100-150">$100 - $150</SelectItem>
              <SelectItem value="150+">$150+</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => setBrand(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Marca" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Nike">Nike</SelectItem>
              <SelectItem value="Adidas">Adidas</SelectItem>
              <SelectItem value="Puma">Puma</SelectItem>
              <SelectItem value="Reebok">Reebok</SelectItem>
              <SelectItem value="New Balance">New Balance</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={filterAndSortZapatillas}>Aplicar Filtros</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredZapatillas.map((zapatilla) => (
          <Card key={zapatilla.id}>
            <CardContent className="p-4">
              <img
                src={zapatilla.image}
                alt={zapatilla.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h2 className="text-lg font-semibold mb-2">{zapatilla.name}</h2>
              <p className="text-gray-600 mb-2">${zapatilla.price.toFixed(2)} (Rango: {zapatilla.priceRange})</p>
              <p className="text-sm text-gray-500 mb-4">Marca: {zapatilla.brand}</p>
              <Button className="w-full">Añadir al carrito</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Catalogo;

