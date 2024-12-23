import Product from "../models/product.model.js"
import cloudinary from "../claudinary.js"
import multer from "multer";
import fs from "fs-extra"
import { CloudinaryStorage } from "multer-storage-cloudinary";

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "productos",
        allowed_formats: ["jpg", "png", "jpeg", "gif"],
    }
});

const upload = multer({storage:storage})

//Ver los productos
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error("Error al crear el producto:", error);
        return res.status(500).json({ message: "Error al crear el producto" });
    }
};

//Crear los productos
export const createProducts = async (req, res) => {
    try {
        const { name, description, marca, price, image } = req.body;
        const newProduct = new Product({
            name,
            description,
            marca,
            price,
            image
        });

        await newProduct.save();
        res.status(201).json(newProduct); // 201 Created
    } catch (error) {
        console.error("Error al crear el producto:", error);
        res.status(500).json({ message: "Error al crear el producto" });
    }
};


