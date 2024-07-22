import { DataTypes } from "sequelize";
import sequelize from "../db/connect";


export const Users = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        defaultValue: 'elonmosk'
    },
    password: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
        defaultValue: 'Elon'
    },
    lastname: {
        type: DataTypes.STRING,
        defaultValue: 'Elon Mosk'
    },
    email: {
        type: DataTypes.TEXT,
        defaultValue: 'elonmosk@hotmail.com'
    },
    checkemail: {
        type: DataTypes.TEXT,
    },
    celular: {
        type: DataTypes.INTEGER,
    },
    biografia: {
        type: DataTypes.TEXT,
        defaultValue: 'Multi Billonario'
    }
}) 