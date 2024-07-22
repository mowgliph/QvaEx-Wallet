"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.p2p = void 0;
const sequelize_1 = require("sequelize");
const connect_1 = __importDefault(require("../db/connect"));
exports.p2p = connect_1.default.define('p2p', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    typeOfert: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: 'Compra o Venta'
    },
    methodPay: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: 'Criptomonedas / Enzona / Transfermovil'
    },
    cantidad: {
        type: sequelize_1.DataTypes.FLOAT,
        defaultValue: '1000'
    },
    datosFinance: {
        type: sequelize_1.DataTypes.TEXT
    }
});
