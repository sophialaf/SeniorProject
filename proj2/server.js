// Require necessary modules
const express = require('express'); // Express framework for handling HTTP requests
const app = express(); // Create an instance of the Express application
const port = 8080; // Define the port for the server to listen on
const path = require('path') // Provides utilities for working with file and directory paths
const sqlite3 = require('sqlite3').verbose(); // SQLite3 for database operations
const bodyParser = require('body-parser'); // Middleware to parse request body

// Create a new SQLite3 database instance
const db = new sqlite3.Database('./myDatabase.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the database.');
    }
});

// Parse application/x-www-form-urlencoded and application/json requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Start the server and listen on specified port
let server = app.listen(port, function () {
    console.log("App server is running on port", port);
    console.log("To end, press Ctrl + C");
});

// Define routes

// Serve the home page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'homePage.html'));
});

// Serve static files (html, css, js, images, etc.)
app.get(['/*.html', '/*.css', '/*.js', '/*.jpg', '/*.jpeg'], (req, res) => {
    res.sendFile(path.join(__dirname, req.path));
});

// Handle form submission
app.post('/submitForm', function(req, res) {
    const { firstName, lastName, projects, age, email, phoneNumber } = req.body;

    // Insert form data into the database
    db.run(`INSERT INTO users(firstName, lastName, projects, age, email, phoneNumber) 
            VALUES (?, ?, ?, ?, ?, ?)`,
        [firstName, lastName, projects, age, email, phoneNumber], function(err) {
            if (err) {
                return console.error(err.message);
            }
            console.log(`Row inserted with ID: ${this.lastID}`);
            res.send('Form submitted successfully!');
        });
});
