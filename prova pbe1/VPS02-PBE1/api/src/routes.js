const express = require('express')
const router = express.Router()

const clientes = require('./controller/clientes')
const telefone = require('./controller/telefone')
const fornecedores = require('./controller/fornecedores')
const pedidos = require('./controller/pedidos')
const produtos = require('./controller/produtos')


router.post('/clientes', clientes.create);
router.get('/clientes', clientes.read);
router.put('/clientes/:id', clientes.update);
router.delete('/clientes/:id', clientes.deletar);

router.post('/telefone', telefone.create);
router.get('/telefone', telefone.read);
router.put('/telefone/:id', telefone.update);
router.delete('/telefone/:id', telefone.deletar);

router.post('/fornecedores', fornecedores.create);
router.get('/fornecedores', fornecedores.read);
router.put('/fornecedores/:id', fornecedores.update);
router.delete('/fornecedores/:id', fornecedores.deletar);

router.post('/pedidos', pedidos.create);
router.get('/pedidos', pedidos.read);
router.put('/pedidos/:id', pedidos.update);
router.delete('/pedidos/:id', pedidos.deletar);

router.post('/produtos', produtos.create);
router.get('/produtos', produtos.read);
router.put('/produtos/:id', produtos.update);
router.delete('/produtos/:id', produtos.deletar);

module.exports = router;