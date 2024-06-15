const express = require('express');
const router = express.Router();
const electronicoControlador = require('../controllers/electronicosControlador');

router.get('/busqueda', electronicoControlador.buscarElectronico);
router.get('/', electronicoControlador.getTodosLosElectronicos);
router.get('/:id', electronicoControlador.getElectronicosPorId);
router.post('/', electronicoControlador.crearElectronicos);
router.put('/:id', electronicoControlador.actualizarElectronico);
router.delete('/:id', electronicoControlador.eliminarElectronico);


module.exports = router;
