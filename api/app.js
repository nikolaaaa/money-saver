console.log('test');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to Mongo Database
mongoose.connect('mongodb+srv://niko:gI8kWVPVA3Sh0gjG@cluster0-b8f2j.mongodb.net/money-saver', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database');
    })
    .catch(() => {
        console.log('Connection failed')
    });

// Parse requests bodies
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Enable CORS - set Headers
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

module.exports = app;