const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {
    Server
} = require('socket.io');
const io = new Server(server);

app.get('/', (req,res,next) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('on-chat', data => {
        io.emit('user-chat', data);
    })
})
server.listen(3003, () => {
    console.log("listening on port 3000")
})