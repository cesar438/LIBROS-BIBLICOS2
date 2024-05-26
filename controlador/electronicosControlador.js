//----------controlador
//llamando nuuestro modelo
const Electronicos = require('../modelos/Electronicos');
const { Op } = require('sequelize');
exports.getTodosLosElectronicos = async (peticion, respuesta) => {
    try {
        const electronicos = await  Electronicos.findAll();
        respuesta.json(electronicos);
    } 
    catch (error) {
        console.log(error);
        respuesta.status(500).send(error);
    }
};
//empod por id elecetronico
exports.getElectronicosPorId = async (peticion, respuesta) => {
    try {
        const { id } = peticion.params;
        const electronicos = await Electronicos.findByPk(id);
        if (Electronicos)
            respuesta.json(electronicos);
        else
        respuesta.status(404).send({mensaje: 'Electronico no encontrado'});
    } 
    catch (error) {
        console.log(error);
        respuesta.status(500).send(error);
    }
};
//emp CREAR electronicos
exports.crearElectronicos = async (peticion, respuesta) => {
    try {
        const nuevoElectronico = await Electronicos.create(peticion.body);
        respuesta.status(201).json(nuevoElectronico);

    } 
    catch (error) {
        console.log(error);
        respuesta.status(500).send(error);
    }
};
// actualizar
exports.actualizarElectronico = async (peticion, respuesta) => {
    try {
      const { id } = peticion.params;
      const [electronicoActualizado] = await Electronicos.update(peticion.body,{
        where : {IdEquipo: id}
      });
      if (electronicoActualizado){
        const electronicoAct = await Electronicos.findByPk(id);
        respuesta.json(electronicoAct);
      }
      else {
        respuesta.status(404).send({mensaje: 'electronico no actualizado'});
      }
    } 
    catch (error) {
        console.log(error);
        respuesta.status(500).send(error);
    }
};
//eliminar libro
exports.eliminarElectronico = async (peticion, respuesta) => {
    try {
        const { id } = peticion.params;
        const eliminado = await Electronicos.destroy({
            where : {IdEquipo : id}
        });
        if (eliminado)
            respuesta.status(200).json({mensaje: 'Electronico eliminad'});
        else
        respuesta.status(404).json({mensaje: 'Electronicono encontrado'});
    } 
    catch (error) {
        console.log(error);
        respuesta.status(500).send(error);
    }
};
//buscar libro
exports.buscarElectronico = async (peticion, respuesta) => {
    try {
        const { nombre } = peticion.query;
        const electronico = await Electronicos.findAll({
            where : { nombre : { [Op.like] : `%${nombre}%`} }
        });
        respuesta.json(electronico);
    } 
    catch (error) {
        console.log(error);
        respuesta.status(500).send(error);
    }
};