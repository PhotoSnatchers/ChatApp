var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

users = [];
connections = [];

server.listen(3000);


io.sockets.on('connection', function(socket){
connections.push(socket);
    console.log('connected: %s', connections.length);  
    socket.on('disconnect', function(data){
        connections.splice(connections.indexOf(socket),1);
        console.log('connected: %s', connections.length);  
    });
    socket.on('sendMessage', function(data) {
        // storeMessage(data);
        io.sockets.emit('new Message', {msg: data});
    });
});

function storeMessage(data) {
}