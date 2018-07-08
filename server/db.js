const mysql = require("mysql");
const config = require('./config');
const colors = require('colors');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'CHEQ_DB'
  });
  
  db.connect((err) => {
  
    if (err) 
      throw err;
  
    console.log(colors.green('[CHEQ_DB][CONNECTED]')); 
  
  });
  
  module.exports = db;