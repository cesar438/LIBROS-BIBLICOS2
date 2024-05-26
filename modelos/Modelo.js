const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Electronicos = require('./Electronicos');
const Modelo = sequelize.define('modelo', {
    idModelo :{
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idEquipo : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : Electronicos,
            key : 'idEquipo'
        }
    },
    cantidad : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    modelo: {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    detalle : {
        type : DataTypes.STRING,
        allowNull : false
    }
}, { freezeTableName: true});
// relacion 1 a 1
Modelo.belongsTo(Electronicos, {foreignKey: 'idEquipo', as: 'electronicos'});
// relacion 1 a muhcos
Electronicos.hasMany(Modelo, {foreignKey : 'idEquipo', as: 'modelo'})
module.exports = Modelo;