import { Router } from "express";
import { getProducts, createProducts, uploadImage } from "../controllers/product.controller.js";

const router = Router();

router.get("/products", getProducts);
router.post("/products", createProducts);
router.post("/products/upload", uploadImage);

export default router;
