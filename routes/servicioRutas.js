const express = require('express');
const router = express.Router();
const servicioControlador = require('../controllers/servicioControlador');

router.get('/busqueda', servicioControlador.buscarEquipo);
router.get('/', servicioControlador.getTodosLosEquipos);
router.get('/:id', servicioControlador.getServicioPorId);
router.post('/', servicioControlador.crearMantenimiento);
router.put('/:id', servicioControlador.actualizarRegistro);
router.delete('/:id', servicioControlador.eliminarEquipo);


module.exports = router;