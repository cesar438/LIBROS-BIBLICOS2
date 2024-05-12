const express = require('express');
const libroRutas = require('./rutas/libroRutas')
const app = express();

//
app.use(express.json());
//
app.use('/api/libros', libroRutas);
//levantar el servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log('Servidor levantado http://localhost:'+PORT);
});