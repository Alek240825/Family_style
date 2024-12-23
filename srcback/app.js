import express from 'express';
import morgan from 'morgan';
import cors from "cors"
import fileUpload from 'express-fileupload';
import productRoutes from './routes/product.routes.js';

const app = express()
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use("/", productRoutes)


export default app