const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

router.get('/about', (req, res) => {
    res.sendFile(__dirname + '/aboutUs.html');
});

router.get('/events', (req, res) => {
    res.sendFile(__dirname + '/events.html');
});

router.get('/projects/bluebs', (req, res) => {
    res.sendFile(__dirname + '/project/blueb.html');
});

router.get('/projects/avg', (req, res) => {
    res.sendFile(__dirname + '/project/AVG.html');
});

router.get('/projects/avg', (req, res) => {
    res.sendFile(__dirname + '/project/bees.html');
});

router.get('/projects/avg', (req, res) => {
    res.sendFile(__dirname + '/project/frontlines.html');
});

router.get('/projects/avg', (req, res) => {
    res.sendFile(__dirname + '/project/lamaChopda.html');
});

router.get('/projects/avg', (req, res) => {
    res.sendFile(__dirname + '/project/micro.html');
});

router.get('/projects/avg', (req, res) => {
    res.sendFile(__dirname + '/project/ppp.html');
});

router.get('/projects/avg', (req, res) => {
    res.sendFile(__dirname + '/project/seva.html');
});

router.get('/projects/avg', (req, res) => {
    res.sendFile(__dirname + '/project/uftp.html');
});

router.get('/projects/avg', (req, res) => {
    res.sendFile(__dirname + '/project/wheelsUp.html');
});

router.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

module.exports = router;
