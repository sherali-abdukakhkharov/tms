const { Sequelize } = require('sequelize');
const { POSTGRES } = require('../../config');

const sequelize = new Sequelize(
  POSTGRES.database,
  POSTGRES.user,
  POSTGRES.password,
  {
    host: POSTGRES.host,
    dialect: 'postgres',
  }
);

module.exports = sequelize;
