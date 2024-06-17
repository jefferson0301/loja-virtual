import express from "express"
import { getClientes, addClientes, editClientes, deleteClientes } from "../controller/cliente.js"

const router = express.Router()

router.get("/cliente", getClientes)

router.post("/cliente", addClientes)

router.put("/cliente/:id", editClientes)

router.delete("/cliente/:id", deleteClientes)

export default router