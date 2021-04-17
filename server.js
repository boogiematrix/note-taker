const express = require('express');
const path = require('path');
const fs = require('fs')
const database = require('./db/db.json')

const app = express();
const PORT = process.env.PORT || 8080;

//app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))

app.get('/', (req, res) => res.redirect('/index.html'));

app.get('/notes', (req, res) => res.redirect('/notes.html'));

app.get('/api/notes', (req, res) => {
    res.json(database)
})

app.post('/api/characters', (req, res) => {
    const newNote = req.body;
    database.push(newNote);
    res.json(newNote);
});


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));