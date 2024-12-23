import { Router } from "express"
import { getProducts, createProducts } from "../controllers/product.controller.js"

const router = Router()
router.get("/Products", getProducts)

router.post("/Products", createProducts)


export default router;