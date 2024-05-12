const Sequelize = require('sequelize');

const sequelize = new Sequelize('bibleadb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps : false
    }
});
//exportar
module.exports = sequelize;