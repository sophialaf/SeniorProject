const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');

const db = new sqlite3.Database('myDatabase.db');

// Middleware to parse JSON and urlencoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a table for users
db.run(`
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    firstName TEXT,
    lastName TEXT,
    projects TEXT,
    age TEXT,
    email TEXT,
    phoneNumber TEXT
    )
    `, (err) => {
        if (err) {
            console.error('Error creating users table:', err);
        } else {
            console.log('Users table created successfully');
        }
    });

// Define a route to handle form submission
app.post('/submitForm', (req, res) => {
    const userData = req.body;
    db.run(
        'INSERT INTO users (firstName, lastName, projects, age, email, phoneNumber) VALUES (?, ?, ?, ?, ?, ?)',
        [userData.firstName, userData.lastName, userData.projects.join(','), userData.age, userData.email, userData.phoneNumber],
        (err) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.status(200).send('Data saved successfully!');
            }
        }
    );
});

app.use(express.static(__dirname)); // This line serves all files in the current directory

const router = require('./routes');
app.use('/', router);

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});


