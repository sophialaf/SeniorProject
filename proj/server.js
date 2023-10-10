const express = require('express');
const app = express();

app.use(express.static('public'));

const router = require('./routes');
app.use('/', router);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
