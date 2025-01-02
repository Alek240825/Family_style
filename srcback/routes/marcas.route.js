import express from 'express';
import { getMarcas } from '../controllers/marcas.controller.js';

const router = express.Router();

// Ruta para obtener todas las marcas
router.get('/', getMarcas);

export default router;
