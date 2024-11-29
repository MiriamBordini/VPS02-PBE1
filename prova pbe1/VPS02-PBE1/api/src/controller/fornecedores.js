const con = require('../connect/banco').con;

const create = (req, res) => {
    let nome = req.body.nome;
    let cnpj = req.body.cnpj;
    let email = req.body.email;
    
    let query = 'INSERT INTO fornecedores (nome, cnpj, email) VALUES'
    query += `('${nome}','${cnpj}','${email}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })

}

const read = (req, res) => {
    con.query('SELECT * FROM fornecedores', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}


const update = (req, res) => {
    let nome = req.body.nome;
    let cnpj = req.body.cnpj;
    let email = req.body.email;


    let query = `UPDATE fornecedores SET nome = '${nome}', cnpj = '${cnpj}', email = '${email}'WHERE idforn = ${req.params.id} `
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })

}


const deletar = (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM fornecedores WHERE idforn = ?';
    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}




module.exports = {
    create,
    read,
    deletar,
    update
}