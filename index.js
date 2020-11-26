const express = require('express');
const app = express();
const port = 8000;
const open = require("open");

const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/home.html'));
});

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname + '/script.js'));
});

app.get('/data.js', (req, res) => {
    res.sendFile(path.join(__dirname + '/data.js'));
});


app.get('/selectize.js', (req, res) => {
    res.sendFile(path.join(__dirname + '/selectize.js'));
});

app.get('/selectize.css', (req, res) => {
    res.sendFile(path.join(__dirname + '/selectize.css'));
});

app.listen(port, () => {
    console.log('Opened on Chrome at http://localhost:8000');
    console.log("If Google Chrome is not installed, please head to the above URL on any browser EXCEPT for Internet Explorer.")
    open("http://localhost:8000", { app: "chrome" });
});