const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Sevicios = sequelize.define('servicios',{
    idServicios : {
        type :  DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true       
    },
    nombre : {
        type : DataTypes.STRING,
        allowNull: false
    },
    equipo : {
        type : DataTypes.STRING,
        allowNull: false
    },
    cantidad : {
        type : DataTypes.INTEGER,
        allowNull: false
    },
    matenimiento : {
        type : DataTypes.STRING,
        allowNull: false
    },

    fecha : {
        type : DataTypes.STRING,
        allowNull: false
    }
});
module.exports = Sevicios;
