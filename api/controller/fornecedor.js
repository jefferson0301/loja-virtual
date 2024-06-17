import {db} from "../db.js"

export const getFornecedores = (_, res) => {
    const q = "SELECT * FROM fornecedor"

    db.query(q, (err, data) => {
        if(err) return res.status(500).send(err)
        
        if(data) return res.status(200).send(data)
    } )

}

export const addFornecedores = (req, res) => {
    const q = "INSERT INTO fornecedor (`nome_empresa`,`endereco`,`cidade`,`uf`,`cep`,`pais`,`telefone`) VALUES (?)"

    const values = [
        req.body.nome_empresa,
        req.body.endereco,
        req.body.cidade,
        req.body.uf,
        req.body.cep,
        req.body.pais,
        req.body.telefone,
    ]

    const qVerify = `SELECT * FROM fornecedor WHERE nome_empresa = "${values[0]}" `

    db.query(qVerify, (err, data) => {
        if(err) return res.status(500).send(err)
        
        if(data.length !== 0){//possui usuário com esse email
            return res.status(500).send("Já possui fornecedor com esse nome")
        }
        else{
            db.query(q, [values], (err, data) => {
                if(err) return res.status(500).send(err)
                
                if(data) return res.status(200).send("Fornecedor adicionada com sucesso")
            })
        }
    })
    
}

export const editFornecedores = (req, res) => {
    const id = req.params.id
    const values = [
        req.body.nome_empresa,
        req.body.endereco,
        req.body.cidade,
        req.body.uf,
        req.body.cep,
        req.body.pais,
        req.body.telefone,
    ]
    const q = `UPDATE fornecedor SET nome_empresa =  '${values[0]}', endereco = '${values[1]}' , cidade =  '${values[2]}', uf = '${values[3]}', cep = '${values[4]}', pais = '${values[5]}', telefone = '${values[6]}' WHERE codigo_fornecedor = ${id}`  

    db.query(q, [...values, id], (err) => {
        if(err) res.status(500).send(err)
        
        res.status(200).json("Fornecedor modificado com sucesso")
    } )

}

export const deleteFornecedores = (req, res) => {
    const id = req.params.id
    const q = `DELETE  FROM fornecedor WHERE codigo_fornecedor = ${id}`

    db.query(q, [id] , (err, data) => {
        if(err) res.status(500).send(err)
        
        if(data) res.status(200).send("Fornecedor removido com sucesso")
    } )

}