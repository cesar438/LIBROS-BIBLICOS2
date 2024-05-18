const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Libro = require('./Libro');
const Versiculos = sequelize.define('versiculos', {
    idVersiculos :{
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idLibro : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : Libro,
            key : 'idLibro'
        }
    },
    capitulo : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    versiculo : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    texto : {
        type : DataTypes.STRING,
        allowNull : false
    }
});
module.exports = Versiculos;