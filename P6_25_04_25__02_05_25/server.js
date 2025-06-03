const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the form (GET)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission (POST)
app.post('/submit', (req, res) => {
    const data = req.body;
    const params = new URLSearchParams(data).toString();
    res.redirect('/result.html?' + params);
});

// Handle GET submission (optional)
app.get('/submit', (req, res) => {
    const data = req.query;
    res.send(`
        <h1>Submitted Data (GET)</h1>
        <pre>${JSON.stringify(data, null, 2)}</pre>
        <a href="/">Back to form</a>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});