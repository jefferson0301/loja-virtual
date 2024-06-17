import express from "express"
import cors from "cors"

//import rotas
import rotasCliente from "../api/routes/clientes.js"
import rotasCategorias from "../api/routes/categorias.js"
import rotasFornecedores from "../api/routes/fornecedores.js"
import rotasProdutos from "../api/routes/produtos.js"
import rotasPedidos from "../api/routes/pedidos.js"
import rotasItensPedidos from "../api/routes/itenspedidos.js"
import rotasCompras from "../api/routes/compras.js"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", rotasCliente)
app.use("/", rotasCategorias)
app.use("/", rotasFornecedores)
app.use("/", rotasProdutos)
app.use("/", rotasPedidos)
app.use("/", rotasItensPedidos)
app.use("/", rotasCompras)

app.listen(8804)