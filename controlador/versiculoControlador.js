const Versiculos = require('../modelos/Versiculos');

exports.getTodosLosVersiculos = async (peticion, respuesta) => {
    try {
        const Versiculo= await  Versiculos.findAll();
        respuesta.json(Versiculo);
    } 
    catch (error) {
        console.log(error);
        respuesta.status(500).send(error);
    }
};