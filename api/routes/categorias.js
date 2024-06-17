import express from "express"
import { getCategorias, addCategorias, editCategorias, deleteCategorias } from "../controller/categoria.js"

const router = express.Router()

router.get("/categoria", getCategorias)

router.post("/categoria", addCategorias)

router.put("/categoria/:id", editCategorias)

router.delete("/categoria/:id", deleteCategorias)

export default router