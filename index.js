const express = require('express');
const app = express();
const port = 8000;

const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/home.html'));
});

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname + '/script.js'));
});

app.get('/selectize.js', (req, res) => {
    res.sendFile(path.join(__dirname + '/selectize.js'));
});

app.get('/selectize.css', (req, res) => {
    res.sendFile(path.join(__dirname + '/selectize.css'));
});

app.listen(port, ()=>{
    console.log('Listening on Port 8000');
});