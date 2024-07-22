"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const sequelize_1 = require("sequelize");
const connect_1 = __importDefault(require("../db/connect"));
exports.Users = connect_1.default.define('users', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: 'elonmosk'
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: 'Elon'
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: 'Elon Mosk'
    },
    email: {
        type: sequelize_1.DataTypes.TEXT,
        defaultValue: 'elonmosk@hotmail.com'
    },
    checkemail: {
        type: sequelize_1.DataTypes.TEXT,
    },
    celular: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    biografia: {
        type: sequelize_1.DataTypes.TEXT,
        defaultValue: 'Multi Billonario'
    }
});
