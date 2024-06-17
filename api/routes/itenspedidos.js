import express from "express"
import { getItensPedidos, addItensPedidos, editItensPedidos, deleteItensPedidos } from "../controller/intensPedido.js"

const router = express.Router()

router.get("/itens-pedidos", getItensPedidos)

router.post("/itens-pedidos", addItensPedidos)

router.put("/itens-pedidos", editItensPedidos)

router.delete("/itens-pedidos", deleteItensPedidos)

export default router