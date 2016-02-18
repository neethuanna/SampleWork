var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, '../client')));
app.get('/', function (req, res) {
    res.render('index.html');
});

var http = require('http'),
io = require('socket.io');
var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('SamplpeWorks app listening at http://%s:%s', host, port);
});
server.listen(8080);
io = io.listen(server);

// Add a connect listener
io.sockets.on('connection', function(socket)
{
  console.log('Auth server connected.');

  // Disconnect listener
  socket.on('disconnect', function() {
  console.log('Auth Server disconnected.');
  });
});
////////////////////////////////////
// Connect to server
var io = require('socket.io-client');
var socket = io.connect('http://localhost:8082', {reconnect: true});

console.log('Connecting to server....');

// Add a connect listener
socket.on('connect', function(socket) { 
  console.log('Connected! to Auth Server ');
});

console.log('Connecting to server....');
