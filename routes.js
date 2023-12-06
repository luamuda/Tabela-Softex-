const express = require('express');
const router = express.Router();
const { consultaID, consultaSexo, consultaSalario} = require('Consultas.js');

router.get('/Cliente/:id', (req, res) => {
    const id = req.params.id;
    consultaID(id, res);
});

router.get('/clientes/:sexo', (req, res) => {
    const sexo = req.params.sexo;
    consultaSexo(sexo, res);
});

router.get('Clientes/salario', (req, res) => {
    consultaSalario(res);
});

module.exports = router;