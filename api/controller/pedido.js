import {db} from "../db.js"

export const getPedidos = (_, res) => {
    const q = "SELECT * FROM pedido"

    db.query(q, (err, data) => {
        if(err) return res.status(500).send(err)
        
        if(data) return res.status(200).send(data)
    } )

}

export const addPedidos = (req, res) => {
    const q = "INSERT INTO pedido (`data_pedido`,`data_entrega`,`data_envio`,`frete`,`nome_destinatario`,`endereco_destinatario`,`cep_destino`,`pais_destino`, `pedido_codigo_cliente`,`cidade_destino`) VALUES (?)"

    const values = [
        req.body.data_pedido,
        req.body.data_entrega,
        req.body.data_envio,
        req.body.frete,
        req.body.nome_destinatario,
        req.body.endereco_destinatario,
        req.body.cep_destino,
        req.body.pais_destino,
        req.body.pedido_codigo_cliente,
        req.body.cidade_destino,
    ]

    db.query(q, [values], (err, data) => {
        if(err) return res.status(500).send(err) 
            if(data) return res.status(200).send("Produto adicionada com sucesso")
        })
    
}

export const editPedidos = (req, res) => {
    const id = req.params.id
    const values = [
        req.body.data_pedido,
        req.body.data_entrega,
        req.body.data_envio,
        req.body.frete,
        req.body.nome_destinatario,
        req.body.endereco_destinatario,
        req.body.cep_destino,
        req.body.pais_destino,
        req.body.pedido_codigo_cliente,
        req.body.cidade_destino,
    ]
    const q = `UPDATE pedido SET data_pedido =  '${values[0]}'  ,data_entrega = '${values[1]}' , data_envio =  '${values[2]}' , frete =  '${values[3]}' , nome_destinatario =  '${values[4]}' , endereco_destinatario =  '${values[5]}' , cep_destino =  '${values[6]}' , pais_destino =  '${values[7]}', pedido_codigo_cliente =  '${values[8]}', cidade_destino =  '${values[9]}' WHERE numero_pedido = ${id}`  

    db.query(q, [...values, id], (err) => {
        if(err) res.status(500).send(err)
        
        res.status(200).json("Pedido modificado com sucesso")
    } )

}

export const deletePedidos = (req, res) => {
    const id = req.params.id
    const q = `DELETE  FROM pedido WHERE numero_pedido = ${id}`

    db.query(q, [id] , (err, data) => {
        if(err) res.status(500).send(err)
        
        if(data) res.status(200).send("Pedido removido com sucesso")
    } )

}