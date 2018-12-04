var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 4201; // this needs to be changed to process.env.PORT when deploying

app.set('port', port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var chatHistory = [];
var nicknames = [];
var colors = [];

// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    // Pass to next layer of middleware
    next();
});

// test
app.get('/', function (req, res, next) {
    res.json({ message: 'API funktioniert...' });
});

// history
app.get('/history', function (req, res, next) {
    res.send(chatHistory);
});

app.post('/history', function (req, res, next) {
    var date = new Date();

    console.log(req.body);
    chatHistory.push({ message: req.body.message, nickname: req.body.nickname, color: req.body.color, date: date });

    res.json({ message: 'History created!' });
});

// nicknames
app.get('/nicknames', function (req, res, next) {
    res.send(nicknames);
});

app.get('/nicknames/:id', function (req, res, next) {
    for (var i = 0; nicknames.length > 0; i++) {
        if (nicknames[i] && nicknames[i].id === req.params.id) {
            res.send({ username: nicknames[i].username, id: nicknames[i].id });
        }
    }
});

app.post('/nicknames', function (req, res, next) {
    console.log(req.body);
    nicknames.push({ username: req.body.username, id: nicknames.length + 1 });

    res.json({ username: req.body.username });
});

// colors
app.get('/colors', function (req, res, next) {
    res.send(colors);
});

app.get('/colors/:id', function (req, res, next) {
    for (var i = 0; colors.length > 0; i++) {
        if (colors[i] && colors[i].id === req.params.id) {
            res.send({ usercolor: colors[i].usercolor, id: colors[i].id });
        }
    }
});

app.post('/colors', function (req, res, next) {
    console.log(req.body);
    colors.push({ usercolor: req.body.usercolor, id: colors.length + 1 });

    res.json({ usercolor: req.body.usercolor });
});


app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});