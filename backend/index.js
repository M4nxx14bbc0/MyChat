const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server,{
    cors: { origin:'*'}
});

io.on('connection', client =>{
    client.on('message',message=>{
        console.log(message);
        io.emit('message', client.id.substr(0,2)+' said '+message)
    });
});
server.listen(3000,(socket)=>{
    console.log(socket);
    console.log("Port listening on %s:%d", "http://localhost",3000);
});