//server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)));

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(sql, [name, email], (err, result) => {
    if (err) {
      console.error('Error inserting into database:', err);
      return res.status(500).send('Database error');
    }
    res.send('User added successfully!');
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
