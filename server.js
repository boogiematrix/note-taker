const express = require('express');
const path = require('path');
const fs = require('fs')
const database = require('./db/db.json')

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));

app.get('/api/notes', (req, res) => {
    res.json(database)
})

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));