const mysql = require('mysql2');

// Create a MySQL connection pool (recommended)
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',         // Replace with your MySQL username
  password: '*****me**',         // Replace with your MySQL password
  database: 'IWT'
});

module.exports = pool;
