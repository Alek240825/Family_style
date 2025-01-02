import app from "./app.js";
import { PORT } from "./config.js"; // Asegúrate de que config.js contenga el puerto
import cors from "cors";
import { initializeApp, getApps } from "firebase/app"; // Asegúrate de importar las funciones necesarias
import { getFirestore } from "firebase/firestore"; // Importar Firestore
import { getStorage } from "firebase/storage"; // Importar Storage
import { firebaseConfig } from "./firebase.js"; // Asegúrate de que  contenga la configuración

// Configuración de CORS
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

// Verificar si ya existe una instancia de Firebase App
let firebaseApp;
if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig);
} else {
    firebaseApp = getApps()[0]; // Obtener la instancia existente
    console.log("Firebase App ya está inicializada.");
}

// Exportar Firestore y Storage
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

// Inicializar servidor
const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Manejo de errores del servidor
server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
        console.error(
            `El puerto ${PORT} ya está en uso. Intenta usar otro puerto.`
        );
        process.exit(1);
    } else {
        console.error("Error del servidor:", err);
    }
});