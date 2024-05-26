const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Electronicos = sequelize.define('electronicos',{
    idEquipo : {
        type :  DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true       
    },
    nombre : {
        type : DataTypes.STRING,
        allowNull: false
    }
});
module.exports = Electronicos;
