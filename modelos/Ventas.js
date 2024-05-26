const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Electronicos = require('./Electronicos');
const Ventas = sequelize.define('ventas', {
    idVenta :{
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
    reporte: {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    fecha : {
        type : DataTypes.STRING,
        allowNull : false
    }
}, { freezeTableName: true});
// relacion 1 a 1
Ventas.belongsTo(Electronicos, {foreignKey: 'idEquipo', as: 'electronicos'});
// relacion 1 a muhcos
Electronicos.hasMany(Ventas, {foreignKey : 'idEquipo', as: 'ventas'})
module.exports = Ventas;