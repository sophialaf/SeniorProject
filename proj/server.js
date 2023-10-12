/*------------------------------------------------------------------------------------------------------
Initializing Express and Setting Up Middleware
------------------------------------------------------------------------------------------------------*/

// Importing necessary modules
const express = require('express'); // Imports the Express framework
const app = express(); // Creates an instance of the Express application
const sqlite3 = require('sqlite3'); // Imports SQLite3 for database functionality
const bodyParser = require('body-parser'); // Middleware for parsing request bodies

// Creating a connection to the database
const db = new sqlite3.Database('myDatabase.db');

/*------------------------------------------------------------------------------------------------------
Database Connection Setup
------------------------------------------------------------------------------------------------------*/

// Middleware to parse JSON and urlencoded form data
app.use(bodyParser.json()); // Parses incoming JSON requests
app.use(bodyParser.urlencoded({ extended: true })); // Parses incoming URL-encoded form data

// Creating a table for users if it doesn't already exist
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

/*------------------------------------------------------------------------------------------------------
Handling Form Submission
------------------------------------------------------------------------------------------------------*/

// Define a route to handle form submission
app.post('/submitForm', (req, res) => {
    console.log(req.body); // Logs the data received from the form submission
    const userData = req.body; // Extracts user data from the request body
    db.run(
        'INSERT INTO users (firstName, lastName, projects, age, email, phoneNumber) VALUES (?, ?, ?, ?, ?, ?)',
        [userData.firstName, userData.lastName, userData.projects, userData.age, userData.email, userData.phoneNumber],
        (err) => {
            if (err) {
                res.status(500).send(err.message); // Sends an error response if insertion fails
            } else {
                res.status(200).send('Data saved successfully!'); // Sends a success response if insertion is successful
            }
        }
    );
});

/*------------------------------------------------------------------------------------------------------
Serving Static Files and HTML
------------------------------------------------------------------------------------------------------*/

app.use(express.static(__dirname)); // This line serves all files in the current directory

// Serve the same HTML file for all routes
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/home.html'); // Sends the 'home.html' file as a response for all routes
});

/*------------------------------------------------------------------------------------------------------
Starting the Server
------------------------------------------------------------------------------------------------------*/

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001'); // Starts the server and logs a message on successful startup
});
