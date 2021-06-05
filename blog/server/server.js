var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server,{
      cors:{
            origin: '*'
      }
});

io.on('connection', (socket)=> {

      console.log('User Online');
      socket.on('disconnect', () => {
            console.log('user disconnected');
      });

      // Print messages
      socket.on('message', comment => {
            console.log('Message: ' + comment);
            io.emit('message', comment);
      });

})

var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
http.listen(server_port, () => {
    console.log("Started on : "+ server_port);
})
console.log("Server connected");