const express = require('express'); //Sets up the express module
const app = express();
const port = 443;
const path = require('path')

let server = app.listen(port, function () {
    console.log("App server is running on port", port);
    console.log("to end press Ctrl + C");
});


app.get(['/*.html', '/*.css', '/*.js', '/*.jpg', '/*.jpeg'], (req, res) => {
    res.sendFile(path.join(__dirname, req.path));
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'homePage.html'));
});

app.get('/AVG', function (req, res) {
    res.sendFile(path.join(__dirname, 'AVG.html'));
});

app.get('/aboutUs', function (req, res) {
    res.sendFile(path.join(__dirname, 'aboutUs.html'));
});

app.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/lamaChopda', function (req, res) {
    res.sendFile(path.join(__dirname, 'lamaChopda.html'));
});

app.get('/events', function (req, res) {
    res.sendFile(path.join(__dirname, 'events.html'));
});

app.get('/loginPage', function (req, res) {
    res.sendFile(path.join(__dirname, 'loginPage.html'));
});

app.get('/seva', function (req, res) {
    res.sendFile(path.join(__dirname, 'seva.html'));
});

app.get('/wheelsUp', function (req, res) {
    res.sendFile(path.join(__dirname, 'wheelsUp.html'));
});

// const sqlite3 = require('sqlite3').verbose();  // verbose() gives you better error codes. Remove when done debugging
// // Open a new database connection to the database file
// let database = new sqlite3.Database('edenRoseDB.db', function (error) {
//     if (error) {
//         console.error(err.message);
//         return {};
//     }
// });
