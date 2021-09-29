const express = require('express');
const db = require('./db');
const app = express();
const port = 1337;

// link frontend + backend 
app.use(express.static(__dirname + '/../client/build'))

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});