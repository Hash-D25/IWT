// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const app = express();
// const port = 3000;

// app.use(express.static(__dirname));
// app.use(bodyParser.urlencoded({ extended: true }));

// // Serve the form (GET)
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// // Handle form submission (POST)
// app.post('/submit', (req, res) => {
//     const data = req.body;
//     const params = new URLSearchParams(data).toString();
//     res.redirect('/result.html?' + params);
// });

// // Handle GET submission (optional)
// app.get('/submit', (req, res) => {
//     const data = req.query;
//     res.send(`
//         <h1>Submitted Data (GET)</h1>
//         <pre>${JSON.stringify(data, null, 2)}</pre>
//         <a href="/">Back to form</a>
//     `);
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });


const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db'); // Make sure this connects to IWT database

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)));

app.post('/submit', (req, res) => {
    const {
        first_name, last_name, email, mobile, gender, dob, address,
        city, pincode, state, country, course
    } = req.body;

    // Handle checkboxes (hobbies, qualification)
    let hobbies = req.body.hobbies;
    if (Array.isArray(hobbies)) hobbies = hobbies.join(', ');
    if (!hobbies) hobbies = '';

    let qualification = req.body.qualification;
    if (Array.isArray(qualification)) qualification = qualification.join(', ');
    if (!qualification) qualification = '';

    const sql = `
        INSERT INTO users2
        (first_name, last_name, email, mobile, gender, dob, address, city, pincode, state, country, hobbies, qualification, course)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
        first_name, last_name, email, mobile, gender, dob, address,
        city, pincode, state, country, hobbies, qualification, course
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error inserting into users2:', err);
            return res.status(500).send('Database error');
        }
        // Redirect to result.html after successful registration
        res.redirect('/result.html');
    });
});

app.get('/api/users2', (req, res) => {
    db.query('SELECT * FROM users2 ORDER BY id DESC LIMIT 1', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.json(results); // results will be an array with one object (latest entry)
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});