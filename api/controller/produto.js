import {db} from "../db.js"

export const getProdutos = (_, res) => {
    const q = "SELECT * FROM produtos"

    db.query(q, (err, data) => {
        if(err) return res.status(500).send(err)
        
        if(data) return res.status(200).send(data)
    } )

}

export const addProdutos = (req, res) => {
    const q = "INSERT INTO produtos (`nome_produto`,`produto_codigo_fornecedor`,`produto_codigo_categoria`,`quatidade_por_unidade`,`preco_unitario`,`unidades_em_estoque`,`nivel_de_estoque`,`descontinuado`) VALUES (?)"

    const values = [
        req.body.nome_produto,
        req.body.produto_codigo_fornecedor,
        req.body.produto_codigo_categoria,
        req.body.quatidade_por_unidade,
        req.body.preco_unitario,
        req.body.unidades_em_estoque,
        req.body.nivel_de_estoque,
        req.body.descontinuado,
    ]

    const qVerify = `SELECT * FROM produtos WHERE nome_produto = "${values[0]}" `

    db.query(qVerify, (err, data) => {
        if(err) return res.status(500).send(err)
        
        if(data.length !== 0){//possui usuário com esse email
            return res.status(500).send("Já possui produto com esse nome")
        }
        else{
            db.query(q, [values], (err, data) => {
                if(err) return res.status(500).send(err)
                
                if(data) return res.status(200).send("Produto adicionada com sucesso")
            })
        }
    })
    
}

export const editProdutos = (req, res) => {
    const id = req.params.id
    const values = [
        req.body.nome_produto,
        req.body.produto_codigo_fornecedor,
        req.body.produto_codigo_categoria,
        req.body.quatidade_por_unidade,
        req.body.preco_unitario,
        req.body.unidades_em_estoque,
        req.body.nivel_de_estoque,
        req.body.descontinuado,
    ]
    const q = `UPDATE produtos SET nome_produto =  '${values[0]}'  ,produto_codigo_fornecedor = '${values[1]}' , produto_codigo_categoria =  '${values[2]}' , quatidade_por_unidade =  '${values[3]}' , preco_unitario =  '${values[4]}' , unidades_em_estoque =  '${values[5]}' , nivel_de_estoque =  '${values[6]}' , descontinuado =  '${values[7]}' WHERE codigo_produto = ${id}`  

    db.query(q, [...values, id], (err) => {
        if(err) res.status(500).send(err)
        
        res.status(200).json("Produto modificado com sucesso")
    } )

}

export const deleteProdutos = (req, res) => {
    const id = req.params.id
    const q = `DELETE  FROM produtos WHERE codigo_produto = ${id}`

    db.query(q, [id] , (err, data) => {
        if(err) res.status(500).send(err)
        
        if(data) res.status(200).send("Produto removido com sucesso")
    } )

}