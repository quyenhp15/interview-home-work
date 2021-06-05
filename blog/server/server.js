var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', (socket)=> {

      console.log('User Online');
      socket.on('disconnect', () => {
            console.log('user disconnected');
      });

      // Print messages
      socket.on('chat message', (msg) => {
            console.log('message: ' + msg);
            io.emit('chat message', msg);
      });

})

var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
http.listen(server_port, () => {
    console.log("Started on : "+ server_port);
})