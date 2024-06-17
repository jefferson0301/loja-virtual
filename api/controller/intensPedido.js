import {db} from "../db.js"

export const getItensPedidos = (_, res) => {
    const q = "SELECT * FROM item_pedido"

    db.query(q, (err, data) => {
        if(err) return res.status(500).send(err)
        
        if(data) return res.status(200).send(data)
    } )

}

export const addItensPedidos = (req, res) => {
    const q = "INSERT INTO item_pedido (`numero_do_pedido`,`codigo_do_produto`,`preco_unitario`,`quantidade`,`desconto`) VALUES (?)"

    const values = [
        req.body.numero_do_pedido,
        req.body.codigo_do_produto,
        req.body.preco_unitario,
        req.body.quantidade,
        req.body.desconto,
    ]
    
    db.query(q, [values], (err, data) => {
        if(err) return res.status(500).send(err) 
        if(data) return res.status(200).send("Itens pedido adicionada com sucesso")
    })
        
    
    
}

export const editItensPedidos = (req, res) => {
    const id = req.params.id
    const values = [
        req.body.numero_do_pedido,
        req.body.codigo_do_produto,
        req.body.preco_unitario,
        req.body.quantidade,
        req.body.desconto,
    ]
    const q = `UPDATE item_pedido SET numero_do_pedido =  '${values[0]}'  ,codigo_do_produto = '${values[1]}' , preco_unitario =  '${values[2]}' , quantidade =  '${values[3]}' , desconto =  '${values[4]}' WHERE numero_do_pedido = '${values[0]}' AND codigo_do_produto = '${values[1]}'   `  

    db.query(q, [...values, id], (err) => {
        if(err) res.status(500).send(err)
        
        res.status(200).json("Item Pedido modificado com sucesso")
    } )

}

export const deleteItensPedidos = (req, res) => {
    const id = req.params.id
    const values = [
        req.body.numero_do_pedido,
        req.body.codigo_do_produto,
    ]
    const q = `DELETE  FROM item_pedido WHERE numero_do_pedido = '${values[0]}' AND codigo_do_produto = '${values[1]}' `

    db.query(q, [id] , (err, data) => {
        if(err) res.status(500).send(err)
        
        if(data) res.status(200).send("item pedido removido com sucesso")
    } )

}