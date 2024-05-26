const express = require('express');
const router = express.Router();
const modeloControlador = require('../controlador/modeloControlador');

router.get('/', modeloControlador.getTodosLosModelo);
// CONSULTAS - REPORTES
// BUSCAR VERSICULOS DE UN LIBRO : NUMEROS
router.get('/electronico/:nombreElectronico', modeloControlador.getModeloPorElectronico);
// contar versiculos por cada libro
router.get('/contar', modeloControlador.ContarModelosPorElectronico);
module.exports = router;