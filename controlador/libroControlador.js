//----------controlador
//llamando nuuestro modelo
const { where } = require('sequelize');
const Libro = require('../modelos/Libro');

exports.getTodosLosLibros = async (peticion, respuesta) => {
    try {
        const libros = await  Libro.findAll();
        respuesta.json(libros);
    } 
    catch (error) {
        console.log(error);
        respuesta.status(500).send(error);
    }
};
//empod por id libro
exports.getLibroPorId = async (peticion, respuesta) => {
    try {
        const { id } = peticion.params;
        const libro = await Libro.findByPk(id);
        if (libro)
            respuesta.json(libro);
        else
        respuesta.status(404).send({mensaje: 'libro no encontrado'});
    } 
    catch (error) {
        console.log(error);
        respuesta.status(500).send(error);
    }
};
//emp CREAR LIBROS
exports.crearLibro = async (peticion, respuesta) => {
    try {
        const nuevoLibro = await Libro.create(peticion.body);
        respuesta.status(201).json(nuevoLibro);

    } 
    catch (error) {
        console.log(error);
        respuesta.status(500).send(error);
    }
};
// actualizar
exports.actualizarLibro = async (peticion, respuesta) => {
    try {
      const { id } = peticion.params;
      const [libroActualizado] = await Libro.update(peticion.body,{
        where : {idLibro: id}
      });
      if (libroActualizado){
        const libroAct = await Libro.findByPk(id);
        respuesta.json(libroAct);
      }
      else {
        respuesta.status(404).send({mensaje: 'libro no actualizado'});
      }
    } 
    catch (error) {
        console.log(error);
        respuesta.status(500).send(error);
    }
};
//eliminar libro
exports.eliminarLibro = async (peticion, respuesta) => {
    try {
        const { id } = peticion.params;
        const eliminado = await Libro.destroy({
            where : {idLibro : id}
        });
        if (eliminado)
            respuesta.status(200).json({mensaje: 'libro eliminad'});
        else
        respuesta.status(404).json({mensaje: 'libro no encontrado'});
    } 
    catch (error) {
        console.log(error);
        respuesta.status(500).send(error);
    }
};
//buscar libro
exports.buscarLibro = async (peticion, respuesta) => {
    try {
        const { nombre } = peticion.query;
        const libros = await Libro.findAll({
            where : { nombre : { [Op.like] : `%${nombre}%`} }
        });
        respuesta.json(libros);
    } 
    catch (error) {
        console.log(error);
        respuesta.status(500).send(error);
    }
};