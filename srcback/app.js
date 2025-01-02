import express from 'express';
import cors from 'cors';
import productRoutes from './routes/product.routes.js';
import marcasRouter from './routes/marcas.route.js';

const app = express();

// Middleware para manejar datos en formato JSON
app.use(express.json());

// Configuración de CORS
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

// Rutas para productos
app.use("/products", productRoutes);

// Rutas para marcas
app.use("/marcas", marcasRouter);

export default app;
