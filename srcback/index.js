import app from "./app.js";
import { MONGODB_URI, PORT } from "./config.js";
import cors from "cors";
import mongoose from "mongoose";

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log("MongoDB is connected");

        const server = app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });

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
    })
    .catch((err) => {
        console.error("Error al conectar a MongoDB", err);
        process.exit(1);
    });
