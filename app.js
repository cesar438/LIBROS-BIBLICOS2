const express = require('express');
const libroRutas = require('./rutas/libroRutas');
const versiculosRutas = require('./rutas/versiculosRutas');
const app = express();

//
app.use(express.json());
//
app.use('/api/libros', libroRutas);
app.use('/api/Versiculos', versiculosRutas);
//levantar el servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log('Servidor levantado http://localhost:'+PORT);
});