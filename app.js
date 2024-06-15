const express = require('express');

const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const { sequelize } = require ('./models');
const passportConfig = require('./config/passport');

const electronicosRutas = require('./routes/electronicosRutas');
const modeloRutas = require('./routes/modeloRutas');
const ventasRutas =require('./routes/ventasRutas');
const servicioRutas =require('./routes/servicioRutas');

const authRutas = require('./routes/authRutas');
const app = express();

//Configuracion de vistas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); //fixed
//-----------configuraciones del cors
const corsOption = {
    origin: '*',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true
};
app.use(cors(corsOption))// cors con opciones configuradas

//
app.use(express.json());

app.use(express.urlencoded({extended : false}));
//directorio publico
app.use(express.static('public'));

app.use(session({
    secret: 'clave_secreta',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);
//Rutas
// NOTAS: verificar dirnmae_no estair funcionado en este nivel
app.get('/', function(req, res) {
    res.render('index'); //fixed
});

app.use('/auth', authRutas);
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