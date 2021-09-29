const mysql = require('mysql2');
const createTables = require('./config');
const Promise = require('bluebird');
const database = 'data2';

const connection = mysql.createConnection({
  user: 'root',
  password: 'root'
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to ${database} database as ID ${db.threadId}`))
  .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))
  .then(() => createTables(db));

module.exports = db;