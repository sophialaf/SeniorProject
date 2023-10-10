// routes.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/./home.html');
});

router.get('/about', (req, res) => {
    res.sendFile(__dirname + '/./proj/about.html');
});

router.get('/events', (req, res) => {
    res.sendFile(__dirname + '/./proj/events.html');
});

router.get('/projects/:projectName', (req, res) => {
    const projectName = req.params.projectName;
    res.sendFile(__dirname + `/./proj/${projectName}.html`);
});

router.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/../proj/contact.html');
});

router.get('/login', (req, res) => {
    res.sendFile(__dirname + '/../proj/login.html');
});

module.exports = router;
