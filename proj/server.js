const express = require('express'); //Sets up the express module
const app = express();
const port = 8080;
const path = require('path')

let server = app.listen(port, function () {
    console.log("App server is running on port", port);
    console.log("to end press Ctrl + C");
});

const sqlite3 = require('sqlite3').verbose();  // verbose() gives you better error codes. Remove when done debugging
// Open a new database connection to the database file
let database = new sqlite3.Database('edensRoseDB.db', function (error) {
    if (error) {
        console.error(err.message);
        return {};
    }
});

/*
async function addUser(db, name) {
    return new Promise((resolve, reject) => {
        db.get("SELECT MAX(id) AS maxid FROM users", function (err, row) {
            if (err) {
                reject(err);
            } else {
                console.log(row);
                let id = row.maxid + 1;
                db.run("INSERT INTO users ('id', 'name') VALUES (?, ?)", [id, name], function (err, rows) {
                    if (err) {
                        reject(err);
                    } else {
                        // perhaps put the new userid into a cookie or
                        // return it to the browser to save
                        resolve();
                    }
                });
            }
        });
    });
}

async function getUsers(db) {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM users', (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}


// Start listening for requests on the designated port
// This can be at the beginning, or the end, or in-between.
// Conventionally it is put at the end
let server = app.listen(port, function () {
    console.log("App server is running on port", port);
    console.log("to end press Ctrl + C");
});
*/

app.get(['/*.html', '/*.css', '/*.js', '/*.jpg', '/*.jpeg'], (req, res) => {
    res.sendFile(path.join(__dirname, req.path));
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'home.html'));
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
/* 
import express from "express";
import exphbs from "express-handlebars";
import bcrypt from "bcrypt";

import sqlite3 from "sqlite3";
import { open } from "sqlite";

const SALT_ROUNDS = 10;

const dbPromise = open({
  filename: "data.db",
  driver: sqlite3.Database,
});

const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.urlencoded());

app.get("/", async (req, res) => {
  const db = await dbPromise;
  const messages = await db.all("SELECT * FROM Message;");
  res.render("home", { messages });
});

app.get("/register", async (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const db = await dbPromise;
  const { username, password, passwordRepeat } = req.body;
  if (password !== passwordRepeat) {
    res.render("register", { error: "Passwords must match" });
    return;
  }
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
  await db.run(
    "INSERT INTO User (username, password) VALUES (?, ?)",
    username,
    passwordHash
  );
  res.redirect("/");
});

app.post("/message", async (req, res) => {
  const db = await dbPromise;
  const messageText = req.body.messageText;
  await db.run("INSERT INTO Message (text) VALUES (?);", messageText);
  res.redirect("/");
});

app.get("/time", (req, res) => {
  res.send("the current time is " + new Date().toLocaleTimeString());
});

const setup = async () => {
  const db = await dbPromise;
  await db.migrate();
  app.listen(8000, () => {
    console.log("listening on http://localhost:8000");
  });
};
setup();


*/