const express = require('express');
const router = express.Router();
const ventasControlador = require('../controllers/ventasControlador');

router.get('/', ventasControlador.getTodosLosVentas);
// CONSULTAS - REPORTES
// BUSCAR VERSICULOS DE UN LIBRO : NUMEROS
router.get('/electronico/:nombreElectronico', ventasControlador.getVentasPorElectronico);
// contar versiculos por cada libro
router.get('/contar', ventasControlador.ContarVentasPorElectronico);
module.exports = router;