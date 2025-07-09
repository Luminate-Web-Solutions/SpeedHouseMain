const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sql_speed_lumina', 'sql_speed_lumina', 'd699678dbae29', {
  host: 'localhost',
  dialect: "mysql"
});

module.exports = sequelize;