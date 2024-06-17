import {db} from "../db.js"

export const getClientes = (_, res) => {
    const q = "SELECT * FROM cliente"

    db.query(q, (err, data) => {
        if(err) return res.status(500).send(err)
        
        if(data) return res.status(200).send(data)
    } )

}

export const addClientes = (req, res) => {
    const q = "INSERT INTO cliente (`endereco`,`cidade`,`cep`,`pais`,`telefone`,`uf`,`email`) VALUES (?)"

    const values = [
        req.body.endereco,
        req.body.cidade,
        req.body.cep,
        req.body.pais,
        req.body.telefone,
        req.body.uf,
        req.body.email,
    ]

    const qVerify = `SELECT * FROM cliente WHERE email = "${values[6]}" `

    db.query(qVerify, (err, data) => {
        if(err) return res.status(500).send(err)
        
        if(data.length !== 0){//possui usuário com esse email
            return res.status(500).send("Possui usuário com esse email: ")
        }
        else{
            db.query(q, [values], (err, data) => {
                if(err) return res.status(500).send(err)
                
                if(data) return res.status(200).send("Cliente adicionado com sucesso")
            })
        }
    })
    
}

export const editClientes = (req, res) => {
    const id = req.params.id
    const values = [
        req.body.endereco,
        req.body.cidade,
        req.body.cep,
        req.body.pais,
        req.body.telefone,
        req.body.uf,
        req.body.email,
    ]
    const q = `UPDATE cliente SET endereco =  '${values[0]}'  ,cidade = '${values[1]}' ,cep =  '${values[2]}' ,pais =  '${values[3]}' ,telefone =  '${values[4]}' , uf =  '${values[5]}' , email =  '${values[6]}'  WHERE codigo_cliente = ${id}`  

    

    db.query(q, [...values, id], (err) => {
        if(err) res.status(500).send(err)
        
        res.status(200).json("Cliente modificado com sucesso")
    } )

    //res.send("rota editar cliente: "+id)
}

export const deleteClientes = (req, res) => {
    const id = req.params.id
    const q = `DELETE  FROM cliente WHERE codigo_cliente = ${id}`

    db.query(q, [id] , (err, data) => {
        if(err) res.status(500).send(err)
        
        if(data) res.status(200).send("Cliente removido com sucesso")
    } )

}