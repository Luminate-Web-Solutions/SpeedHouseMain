const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'sql_speed_lumina',       // ✅ Your actual database name
  'sql_speed_lumina',             // ✅ Your MySQL username (XAMPP default)
  'd699678dbae29',                 // ✅ Password (blank if none)
  {
    host: 'localhost',
    port: 3306,        // ✅ Confirm this is correct in XAMPP
    dialect: 'mysql',  // ✅ MUST BE 'mysql'
    logging: false,
    pool: {

      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection established successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
    process.exit(1);
  }
})();

module.exports = sequelize;