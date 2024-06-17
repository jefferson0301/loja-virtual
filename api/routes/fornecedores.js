import express from "express"
import { getFornecedores, addFornecedores, editFornecedores, deleteFornecedores } from "../controller/fornecedor.js"

const router = express.Router()

router.get("/fornecedor", getFornecedores)

router.post("/fornecedor", addFornecedores)

router.put("/fornecedor/:id", editFornecedores)

router.delete("/fornecedor/:id", deleteFornecedores)

export default router