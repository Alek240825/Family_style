import { db, storage } from "../firebase.js";  // Asegúrate de que el archivo firebase.js esté exportando correctamente estos objetos.
import { ref, getDownloadURL } from "firebase/storage";  // Para obtener la URL de las imágenes.
import { collection, getDocs } from "firebase/firestore";  // Si también necesitas obtener datos de Firestore.

 export const getMarcas = async (req, res) => {
  try {
    // Si solo deseas obtener las imágenes de Firebase Storage, puedes hacer lo siguiente:
    const marcas = [
      { id: 1, name: "Nike", logoPath: "logos/nike.png" },
      { id: 2, name: "Adidas", logoPath: "logos/adidas.png" },
      { id: 3, name: "Puma", logoPath: "logos/puma.png" },
      { id: 4, name: "Fila", logoPath: "logos/fila.png" },
      { id: 5, name: "New Balance", logoPath: "logos/newbalance.png" },
      { id: 6, name: "Skechers", logoPath: "logos/skechers.png" },

    ];

    // Obtenemos la URL de la imagen para cada marca desde Firebase Storage
    const marcasConImagenes = await Promise.all(
      marcas.map(async (marca) => {
        const logoRef = ref(storage, marca.logoPath);  // Accedemos al archivo en Storage
        try {
          const logoURL = await getDownloadURL(logoRef);  // Obtenemos la URL de la imagen
          return { ...marca, logo: logoURL };  // Añadimos la URL a la marca
        } catch (error) {
          console.error(`Error obteniendo la URL de la imagen para ${marca.name}:`, error);
          return { ...marca, logo: "/placeholder.svg?height=100&width=200&text=Error" };  // Si hay un error, usar una imagen de fallback
        }
      })
    );

    res.json(marcasConImagenes);  // Devolvemos las marcas con las URLs de las imágenes.
  } catch (error) {
    console.error("Error obteniendo las marcas:", error);
    res.status(500).send("Error al obtener las marcas.");
  }
};

