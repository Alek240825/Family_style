import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import HeaderCatalogo from "./HeaderCatalogo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLocation } from "react-router-dom";

const ProductCard = ({ product }) => (
  <Card>
    <CardContent className="p-4">
      <img
        src={product.image}
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
  const [genders, setGenders] = useState([]);
  const [brands, setBrands] = useState([]);
  const location = useLocation(); // Hook para obtener la URL actual

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };
    fetchProducts();
  }, []);

  // Obtén el filtro de la URL al cargar
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const selectedBrand = params.get("marca");
    if (selectedBrand) {
      setBrands([selectedBrand]);
    }
  }, [location]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const genderMatch = genders.length === 0 || genders.includes(product.gener);
      const brandMatch = brands.length === 0 || brands.includes(product.marca);
      return genderMatch && brandMatch;
    });
  }, [brands, genders, products]);

  const handleGenderChange = (gender) => {
    setGenders((prev) =>
      prev.includes(gender)
        ? prev.filter((g) => g !== gender)
        : [...prev, gender]
    );
  };

  const handleBrandChange = (brand) => {
    setBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  return (
    <div className="container mx-auto px-4">
      <HeaderCatalogo />
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">
          Catálogo de Productos
        </h1>
        <Accordion type="single" collapsible className="w-full md:w-64">
          <AccordionItem value="gender">
            <AccordionTrigger>Género</AccordionTrigger>
            <AccordionContent>
              {["unisex", "masculino", "femenino"].map((gender) => (
                <div key={gender} className="flex items-center space-x-2 mb-2">
                  <Checkbox
                    id={`gender-${gender}`}
                    checked={genders.includes(gender)}
                    onCheckedChange={() => handleGenderChange(gender)}
                  />
                  <label
                    htmlFor={`gender-${gender}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {gender.charAt(0).toUpperCase() + gender.slice(1)}
                  </label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="brand">
            <AccordionTrigger>Marca</AccordionTrigger>
            <AccordionContent>
              {["Nike", "Adidas", "Puma", "Reebok", "New Balance"].map((brand) => (
                <div key={brand} className="flex items-center space-x-2 mb-2">
                  <Checkbox
                    id={`brand-${brand}`}
                    checked={brands.includes(brand)}
                    onCheckedChange={() => handleBrandChange(brand)}
                  />
                  <label
                    htmlFor={`brand-${brand}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {brand}
                  </label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">
            No se encontraron resultados.
          </p>
        )}
      </div>
    </div>
  );
}

export default Catalogo;
