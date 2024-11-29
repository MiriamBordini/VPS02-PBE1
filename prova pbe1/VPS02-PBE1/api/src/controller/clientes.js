const con = require('../connect/banco').con;

const create = (req, res) => {
    let nome = req.body.nome;
    let pagamento = req.body.pagamento;
    
    let query = 'INSERT INTO clientes (nome, pagamento) VALUES'
    query += `('${nome}','${pagamento}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })

}

const read = (req, res) => {
    con.query('SELECT * FROM clientes', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}


const update = (req, res) => {
    let nome = req.body.nome;
    let pagamento = req.body.pagamento;

    let query = `UPDATE clientes SET nome = '${nome}', pagamento = '${pagamento}' WHERE idcliente = ${req.params.id}`
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
    const query = 'DELETE FROM clientes WHERE idcliente = ?';
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