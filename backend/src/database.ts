import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('mysql://root:001488@localhost:3306/pitu');

export default sequelize;