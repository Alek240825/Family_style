import multer from "multer";
import { db, storage } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const upload = multer({ storage: multer.memoryStorage() }).single("image");

export const uploadImage = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: "Error al subir la imagen" });
    }

    try {
      const file = req.file;
      if (!file) {
        return res
          .status(400)
          .json({ message: "No se ha enviado ninguna imagen" });
      }

      const storageRef = ref(storage, `products/${file.originalname}`);
      await uploadBytes(storageRef, file.buffer);

      const downloadURL = await getDownloadURL(storageRef);
      res.status(200).json({ imageUrl: downloadURL });
    } catch (error) {
      console.error("Error al subir la imagen:", error);
      res.status(500).json({ message: "Error al subir la imagen" });
    }
  });
};

// Ver los productos
export const getProducts = async (req, res) => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));

    if (querySnapshot.empty) {
      return res.status(404).json({ message: "No se encontraron productos" });
    }

    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(products);
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    res.status(500).json({ message: "Error al obtener los productos" });
  }
};

// Crear los productos
export const createProducts = async (req, res) => {
  try {
    const { name, gender, description, marca, price, image, status } = req.body;

    // Validación de campos
    if (!name || !description || !marca || !price) {
      return res
        .status(400)
        .json({ message: "Todos los campos son obligatorios" });
    }

    // Validación del género (opcional)
    const validGenerValues = ["masculino", "femenino", "unisex"];
    if (gener && !validGenerValues.includes(gener)) {
      return res
        .status(400)
        .json({ message: "El valor del género no es válido" });
    }

    const newProduct = {
      name,
      gender: gender || "unisex",
      description,
      marca,
      price: parseFloat(price) || 130000, // Asegura que sea un número
      image: image || [], // Lista de URLs de imágenes
      status: status || "active",
    };

    const docRef = await addDoc(collection(db, "products"), newProduct);
    res.status(201).json({ id: docRef.id, ...newProduct });
  } catch (error) {
    console.error("Error al crear el producto:", error);
    res.status(500).json({ message: "Error al crear el producto" });
  }
};
