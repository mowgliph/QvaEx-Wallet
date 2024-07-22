import { DataTypes } from "sequelize";
import sequelize from "../db/connect";


export const p2p = sequelize.define('p2p', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    typeOfert: {
        type: DataTypes.STRING,
        defaultValue: 'Compra o Venta'
    },
    methodPay: {
        type: DataTypes.STRING,
        defaultValue: 'Criptomonedas / Enzona / Transfermovil'
    },
    cantidad: {
        type: DataTypes.FLOAT,
        defaultValue: '1000'
    },
    datosFinance: {
        type: DataTypes.TEXT
    }
})