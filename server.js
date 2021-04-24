const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
require('./db/conn');
const cors = require('cors');
const app = express();
const router = require('./routes/router');
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/', router);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('api running');
  });
}

app.listen(PORT, () => console.log(`Server Running  ${PORT}`));
