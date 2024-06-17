import express from "express"
import { getPedidos, addPedidos, editPedidos, deletePedidos } from "../controller/pedido.js"

const router = express.Router()

router.get("/pedido", getPedidos)

router.post("/pedido", addPedidos)

router.put("/pedido/:id", editPedidos)

router.delete("/pedido/:id", deletePedidos)

export default router