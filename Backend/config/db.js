require('dotenv').config(); // Load environment variables
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,    // Database name
  process.env.DB_USER,    // Database username
  process.env.DB_PASS,    // Database password
  {
    host: process.env.DB_HOST || 'localhost',  // Database host (default: localhost)
    dialect: 'mysql',                          // Database dialect
    logging: false,                            // Disable SQL query logging in production
    pool: {                                    // Connection pool settings
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

// Test the database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection established successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
    process.exit(1); // Exit if DB connection fails
  }
})();

module.exports = sequelize;