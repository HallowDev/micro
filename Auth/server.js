const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use('/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.listen(process.env.PORT, () => {
  console.log(`Le service d'authentification est en cours d'exécution sur le port ${process.env.PORT}`);
});
