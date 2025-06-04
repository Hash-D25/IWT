//server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');

const app = express();
const port = 3000;

// Parse URL-encoded bodies (from forms)
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (e.g., index.html)
app.use(express.static(path.join(__dirname)));

// Handle form submission
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

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
