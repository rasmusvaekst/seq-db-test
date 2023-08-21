const { Sequelize } = require('sequelize');
require('dotenv').config();

const encrypt = process.env.DB_ENCRYPT;
const trustServerCertificate = process.env.DB_TRUST_SERVER_CERTIFICATE;

const sequelize = new Sequelize('COPY_MAKESENSUS', 'makesensus_prod', 'AC752HiSN7PSSnc4^d3We^', {
  host: 'makesensus.database.windows.net,1433',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: encrypt === 'True',
      trustServerCertificate: trustServerCertificate === 'True',
    },
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
});

module.exports = sequelize;
