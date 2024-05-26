const express = require('express');
const electronicosRutas = require('./rutas/electronicosRutas');
const modeloRutas = require('./rutas/modeloRutas');
const ventasRutas =require('./rutas/ventasRutas');
const servicioRutas =require('./rutas/servicioRutas');
const app = express();

//
app.use(express.json());
//
app.use('/api/electronicos', electronicosRutas);
app.use('/api/modelo', modeloRutas);
app.use('/api/venta',ventasRutas);
app.use('/api/servicio',servicioRutas);
//levantar el servidor
const PORT = 6000;
app.listen(PORT, () => {
    console.log('Servidor levantado http://localhost:'+PORT);
});