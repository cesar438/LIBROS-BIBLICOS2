const Modelo = require('../modelos/Modelo');
const Electronicos = require('../modelos/Electronicos');
const sequelize = require('../config/database');
const Seq =  require('sequelize');

exports.getTodosLosModelo = async (peticion, respuesta) => {
    try {
        const Modeloe= await  Modelo.findAll();
        respuesta.json(Modeloe);
    } 
    catch (error) {
        console.log(error);
        respuesta.status(500).send(error);
    }
};
//encontrar por nombre los versiculos
exports.getModeloPorElectronico = async (peticion, respuesta) => {
    const { nombreElectronico } = peticion.params;
    try {
        const electronicoEncontrado = await Electronicos.findOne({ where : { nombre: nombreElectronico } } );
        if (!electronicoEncontrado)
            return respuesta.status(404).json({mensaje: 'Electronico no encontrado'});
        const todosModelos = await Modelo.findAll({
            where : {idEquipo : electronicoEncontrado.idEquipo},
            include: [{ model: Electronicos, as: 'electronico' }]
        });
        respuesta.json(todosModelos);
    }
    catch(error){
        console.log(error);
        respuesta.status(500).send(error);
    }
}

exports.ContarModelosPorElectronico = async (peticion, respuesta) => {
    try {
        const todosModeloss = await Modelo.findAll({
            attributes: [
                'idEquipo',
                [Seq.fn('COUNT', Seq.col('idModelo')), 'contarModelos' ]
            ],
            group: ['idEquipo'],
            include: [{ model: Electronicos, as: 'electronicos', attributes: ['nombre'] }]
        });
        respuesta.json(todosModeloss);
    }
    catch(error){
        console.log(error);
        respuesta.status(500).send(error);
    }
}