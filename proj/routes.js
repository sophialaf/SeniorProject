const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/proj/home.html');
});

router.get('/about', (req, res) => {
    res.sendFile(__dirname + '/proj/about.html');
});

router.get('/events', (req, res) => {
    res.sendFile(__dirname + '/proj/events.html');
});

router.get('/projects/AVG', (req, res) => {
    res.sendFile(__dirname + '/proj/AVG.html');
});

router.get('/projects/lamaChopda', (req, res) => {
    res.sendFile(__dirname + '/proj/lamaChopda.html');
});

router.get('/projects/seva', (req, res) => {
    res.sendFile(__dirname + '/proj/seva.html');
});

router.get('/projects/wheelsUP', (req, res) => {
    res.sendFile(__dirname + '/proj/wheelsUP.html');
});

router.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/proj/contact.html');
});

router.get('/login', (req, res) => {
    res.sendFile(__dirname + '/proj/login.html');
});

module.exports = router;
