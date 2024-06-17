import {db} from "../db.js"

export const getMostrarCompras = (_, res) => {
    const q = "SELECT  pedido.*, ((item_pedido.preco_unitario*item_pedido.quantidade)-item_pedido.desconto) AS total_compra FROM  pedido JOIN item_pedido ON pedido.numero_pedido = item_pedido.numero_do_pedido"

    db.query(q, (err, data) => {
        if(err) return res.status(500).send(err)
        
        if(data) return res.status(200).send(data)
    } )

}

export const addCategorias = (req, res) => {
    const q = "INSERT INTO categoria (`nome_categoria`,`descricao`,`figura`) VALUES (?)"

    const values = [
        req.body.nome_categoria,
        req.body.descricao,
        req.body.figura,
    ]

    const qVerify = `SELECT * FROM categoria WHERE nome_categoria = "${values[0]}" `

    db.query(qVerify, (err, data) => {
        if(err) return res.status(500).send(err)
        
        if(data.length !== 0){//possui usuário com esse email
            return res.status(500).send("Já possui categoria com esse nome")
        }
        else{
            db.query(q, [values], (err, data) => {
                if(err) return res.status(500).send(err)
                
                if(data) return res.status(200).send("Categoria adicionada com sucesso")
            })
        }
    })
    
}

export const editCategorias = (req, res) => {
    const id = req.params.id
    const values = [
        req.body.nome_categoria,
        req.body.descricao,
        req.body.figura,
    ]
    const q = `UPDATE categoria SET nome_categoria =  '${values[0]}'  ,descricao = '${values[1]}' , figura =  '${values[2]}' WHERE codigo_categoria = ${id}`  

    db.query(q, [...values, id], (err) => {
        if(err) res.status(500).send(err)
        
        res.status(200).json("Categoria modificado com sucesso")
    } )

}

export const deleteCategorias = (req, res) => {
    const id = req.params.id
    const q = `DELETE  FROM categoria WHERE codigo_categoria = ${id}`

    db.query(q, [id] , (err, data) => {
        if(err) res.status(500).send(err)
        
        if(data) res.status(200).send("Categoria removido com sucesso")
    } )

}