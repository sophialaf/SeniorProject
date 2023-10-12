const express = require('express');
const app = express();
const path = require('path');

// Serve static files (images, CSS, etc.)
app.use(express.static(path.join(__dirname, 'proj')));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'proj/Home.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'proj/aboutUs.html'));
});

// Define routes for individual projects
app.get('/projects/:projectName', (req, res) => {
    const projectName = req.params.projectName;
    const projectPath = path.join(__dirname, `proj/projects/${projectName}.html`);

    res.sendFile(projectPath);
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'proj/Contact.html'));
});

app.get('/events', (req, res) => {
    res.sendFile(path.join(__dirname, 'Events.html'));
});

// Define routes for shared elements (header, footer, etc.)
app.get('/shared/:elementName', (req, res) => {
    const elementName = req.params.elementName;
    const elementPath = path.join(__dirname, `proj/shared/${elementName}.html`);

    res.sendFile(elementPath);
});

// Start the server
const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
