import { Sequelize } from "sequelize";

const sequelize = new Sequelize('qvaex','root','Alimatic.18*', {
    host: 'localhost',
    dialect: 'mysql',

});

export default sequelize;