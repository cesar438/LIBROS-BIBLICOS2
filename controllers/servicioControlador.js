//----------controlador
//llamando nuuestro modelo
const Sevicios = require('../modelos/Sevicios');
const { Op } = require('sequelize');
exports.getTodosLosEquipos = async (peticion, respuesta) => {
    try {
        const registro = await  Sevicios.findAll();
        respuesta.json(registro);
    } 
    catch (error) {
        console.log(error);
        respuesta.status(500).send(error);
    }
};
//empod por id elecetronico
exports.getServicioPorId = async (peticion, respuesta) => {
    try {
        const { id } = peticion.params;
        const servicios = await Sevicios.findByPk(id);
        if (Sevicios)
            respuesta.json(servicios);
        else
        respuesta.status(404).send({mensaje: 'equipo  no encontrado'});
    } 
    catch (error) {
        console.log(error);
        respuesta.status(500).send(error);
    }
};
//emp CREAR electronicos
exports.crearMantenimiento = async (peticion, respuesta) => {
    try {
        const nuevoRgistro = await Sevicios.create(peticion.body);
        respuesta.status(201).json(nuevoRgistro);

    } 
    catch (error) {
        console.log(error);
        respuesta.status(500).send(error);
    }
};
// actualizar
exports.actualizarRegistro = async (peticion, respuesta) => {
    try {
      const { id } = peticion.params;
      const [listaActualizado] = await Sevicios.update(peticion.body,{
        where : {IdEquipo: id}
      });
      if (listaActualizado){
        const electronicoAct = await Sevicios.findByPk(id);
        respuesta.json(electronicoAct);
      }
      else {
        respuesta.status(404).send({mensaje: 'equipo no actualizado'});
      }
    } 
    catch (error) {
        console.log(error);
        respuesta.status(500).send(error);
    }
};
//eliminar libro
exports.eliminarEquipo = async (peticion, respuesta) => {
    try {
        const { id } = peticion.params;
        const eliminado = await Sevicios.destroy({
            where : {IdEquipo : id}
        });
        if (eliminado)
            respuesta.status(200).json({mensaje: 'Equipo eliminad'});
        else
        respuesta.status(404).json({mensaje: 'Equipo encontrado'});
    } 
    catch (error) {
        console.log(error);
        respuesta.status(500).send(error);
    }
};
//buscar libro
exports.buscarEquipo = async (peticion, respuesta) => {
    try {
        const { nombre } = peticion.query;
        const equipo = await Sevicios.findAll({
            where : { nombre : { [Op.like] : `%${nombre}%`} }
        });
        respuesta.json(equipo);
    } 
    catch (error) {
        console.log(error);
        respuesta.status(500).send(error);
    }
};