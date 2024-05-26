const Ventas = require('../modelos/Ventas');
const Electronicos = require('../modelos/Electronicos');
const sequelize = require('../config/database');
const Seq =  require('sequelize');

exports.getTodosLosVentas = async (peticion, respuesta) => {
    try {
        const Mante= await  Ventas.findAll();
        respuesta.json(Mante);
    } 
    catch (error) {
        console.log(error);
        respuesta.status(500).send(error);
    }
};
//encontrar por nombre los mantenimiento
exports.getVentasPorElectronico = async (peticion, respuesta) => {
    const { nombreElectronico } = peticion.params;
    try {
        const electronicoEncontrado = await Electronicos.findOne({ where : { nombre: nombreElectronico } } );
        if (!electronicoEncontrado)
            return respuesta.status(404).json({mensaje: 'Electronico no encontrado'});
        const todosVentas = await Ventas.findAll({
            where : {idEquipo : electronicoEncontrado.idEquipo},
            include: [{ model: Electronicos, as: 'electronico' }]
        });
        respuesta.json(todosVentas);
    }
    catch(error){
        console.log(error);
        respuesta.status(500).send(error);
    }
}

exports.ContarVentasPorElectronico = async (peticion, respuesta) => {
    try {
        const todosVentass= await Ventas.findAll({
            attributes: [
                'idEquipo',
                [Seq.fn('COUNT', Seq.col('idVenta')), 'contarVentas' ]
            ],
            group: ['idEquipo'],
            include: [{ model: Electronicos, as: 'electronicos', attributes: ['nombre'] }]
        });
        respuesta.json(todosVentass);
    }
    catch(error){
        console.log(error);
        respuesta.status(500).send(error);
    }
}