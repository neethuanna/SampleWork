var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, '../client')));
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
app.get('/login', function (req, res) {
    res.redirect('http://localhost:3001/auth?continue=http://localhost:8001');
});
app.get('/logout', function (req, res) {
    res.redirect('http://localhost:3001/logOut?continue=http://localhost:8001');
});
app.get('/dashboard', function (req, res) {
    //res.render('index.html');
    app.locals.username =req.query.user;
    res.send("Welcome "+app.locals.username)
});

var server = app.listen(8001, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('SampleWorks app listening at http://%s:%s', host, port);
});

server.listen(8080);

