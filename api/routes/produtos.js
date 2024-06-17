import express from "express"
import { getProdutos, addProdutos, editProdutos, deleteProdutos } from "../controller/produto.js"

const router = express.Router()

router.get("/produtos", getProdutos)

router.post("/produtos", addProdutos)

router.put("/produtos/:id", editProdutos)

router.delete("/produtos/:id", deleteProdutos)

export default router