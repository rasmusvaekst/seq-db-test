const express = require('express');
const sequelize = require('./db'); // Import the Sequelize instance
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Express server is up and running!');
});

// Sync Sequelize models and start the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
