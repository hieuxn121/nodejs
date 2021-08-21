const socket = io();

socket.on('message', message => {
    outputMessage(message)
})
const { username, room} = Qs.parse(location.search,{
    ignoreQueryPrefix: true
});
socket.emit('join-chat', {username,room})
const chatForm = document.querySelector('#chat-form');
const inputChat = document.querySelector('#msg');
const roomName = document.querySelector('#room-name');
const usersRoom = document.querySelector('#users');
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const textChat = inputChat.value;
    socket.emit('chatMessage', textChat);
    inputChat.value = '';
    inputChat.focus();
})
socket.on('user-chat', (data) => {
    outputMessage(data);
    //Scroll down
    document.querySelector('.chat-messages').scrollTop = document.querySelector('.chat-messages').scrollHeight;
})
socket.on('room-user', ({room, users}) => {
    console.log({room, users})
    getRoomCurrent(room);
    getUsersRoom(users);
})
function outputMessage (message) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class = "meta" >${message.username} <span>${message.time}</span></p>
    <p class = "text">
        ${message.text}
    </p>`;
    document.querySelector('.chat-messages').appendChild(div);
}
function getRoomCurrent(room) {
    roomName.textContent = room;
}
function getUsersRoom(users) {
    users.map(user => {
        const chatItem = document.createElement('li');
        chatItem.textContent = user.username
        usersRoom.appendChild(chatItem)
    })
}