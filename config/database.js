const Sequelize = require('sequelize');

const sequelize = new Sequelize('registrodb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps : false
    }
});
//exportar
module.exports = sequelize;