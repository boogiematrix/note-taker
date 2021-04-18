const express = require('express');
const path = require('path');
const fs = require('fs')
const database = require('./db/db.json')
const uniqid = require('uniqid');
const app = express();
const PORT = process.env.PORT || 8080;

//app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))

app.get('/', (req, res) => res.redirect('/index.html'));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

app.get('/api/notes', (req, res) => {
    res.json(database)
})

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uniqid();
    database.push(newNote);
    res.json(newNote);
    console.log(database)
});

app.delete('/api/notes/:id', (req, res) => {
    const noteId = req.params.id;
    const noteIndex = database.findIndex((note) => {
        note.id === noteId;
    });
    database.splice(noteIndex, 1);
    res.send()
})


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));