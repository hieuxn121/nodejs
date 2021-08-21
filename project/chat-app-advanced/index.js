const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const server = http.createServer(app)
const PORT = 3002 || process.env.PORT
// SET static foler
app.use(express.static(path.join(__dirname, 'public')))
server.listen(PORT, () => {
    console.log("Server is running on PORT " + PORT);
})
const socketio = require('socket.io')
const io = socketio(server);
const formatMessage = require('./utils/message');
const {userjoin, getCurrentUser, getRoomUsers, getUserLeave} = require('./utils/users')
const botName = 'CartCord Bot';
// Run when client connect
io.on('connection', (socket) => {
    console.log("New WS connection...");
    socket.on('join-chat', ({username, room}) => {
        const user = userjoin(socket.id, username, room);
        // Get room current
        io.emit('current-room', user.room);
        socket.join(user.room);
        // Welcome to current user
        socket.emit('message', formatMessage(botName,'Welcome to ChatCord'));
        // Broadcast when a user connects
        socket.broadcast
        .to(user.room)
        .emit('message', formatMessage(botName,`${user.username} has joined in the chat`));
         // Send user and room info
        io.to(user.room).emit('room-user', {
            room: user.room,
            users: getRoomUsers(user.room)
        }) 
    })
    // Listen for chat message
    socket.on('chatMessage', (message) => {
        const user = getCurrentUser(socket.id)
        io.to(user.room).emit('user-chat', formatMessage(user.username, message ))
    })
    socket.on('disconnect', () => {
        const user = getUserLeave(socket.id);
        if(user){
            io.to(user.room).emit('message', formatMessage(botName,`${user.username} has left the chat`));
            // Send user and room info
            io.to(user.room).emit('room-user', {
                room: user.room,
                users: getRoomUsers(user.room)
            }) 
        }
     })
})
