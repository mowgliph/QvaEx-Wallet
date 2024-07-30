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
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false

    },
    name: {
        type: DataTypes.STRING

    },
    lastname: {
        type: DataTypes.STRING

    },
    email: {
        type: DataTypes.STRING

    },
    numTele: {
        type: DataTypes.INTEGER

    },
    biografia: {
        type: DataTypes.TEXT
    }
}) 