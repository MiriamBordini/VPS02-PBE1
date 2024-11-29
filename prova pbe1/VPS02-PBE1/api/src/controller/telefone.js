const con = require('../connect/banco').con;

const create = (req, res) => {
    let numero = req.body.numero;
    let idcliente = req.body.idcliente;
    let idforn = req.body. idforn;
    

    let query = 'INSERT INTO telefone (numero, idcliente, idforn) VALUES'
    query += `('${numero}','${idcliente}','${idforn}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })

}

const read = (req, res) => {
    con.query('SELECT * FROM telefone', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const update = (req, res) => {
    let numero = req.body.numero;
    let idcliente = req.body.idcliente;
    let idforn = req.body. idforn;
    
    let query = `UPDATE telefone SET numero = '${numero}', idcliente = '${idcliente}',idforn ='${idforn}'WHERE idtelefone = ${req.params.id} `
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
    const query = 'DELETE FROM telefone WHERE idtelefone = ?';
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