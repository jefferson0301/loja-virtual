import express from "express"
import { getMostrarCompras } from "../controller/compra.js"

const router = express.Router()

router.get("/mostrar-carrinho", getMostrarCompras)

//router.post("/categoria", addCategorias)

//router.put("/categoria/:id", editCategorias)

//router.delete("/categoria/:id", deleteCategorias)

export default router