const express = require('express'); //Sets up the express module
const app = express();
const port = 8080;
const path = require('path')
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const db = new sqlite3.Database('./myDatabase.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the database.');
    }
});

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parse application/json
app.use(bodyParser.json());


let server = app.listen(port, function () {
    console.log("App server is running on port", port);
    console.log("to end press Ctrl + C");
});


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'homePage.html'));
});
app.get(['/*.html', '/*.css', '/*.js', '/*.jpg', '/*.jpeg'], (req, res) => {
    res.sendFile(path.join(__dirname, req.path));
});

app.post('/submitForm', (req, res) => {
    const { firstName, lastName, projects, age, email, phoneNumber } = req.body;

    db.run(`INSERT INTO users(firstName, lastName, projects, age, email, phoneNumber) 
            VALUES (?, ?, ?, ?, ?, ?)`,
        [firstName, lastName, projects, age, email, phoneNumber], (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log(`Row inserted with ID: ${this.lastID}`);
            res.send('Form submitted successfully!');
        });
});



