const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Contact = sequelize.define('Contact', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telephone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'contacts',
  timestamps: true,
});

module.exports = Contact;
