require('dotenv').config();
const express = require('express');
const app = express();

// /places sets all routes in the places controller relative to /places (any other path will have /places in front for this controller)
app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
});

app.listen(process.env.PORT);