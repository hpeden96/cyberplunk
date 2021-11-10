const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const path = require('path');
const { userJoin, getCurrentUser, userLeave, getRoomUsers } = require('./utils/users');
const { formatMessage } = require('./utils/messages');
const PORT = process.env.PORT || 5000;

const messageHistory = [];

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  socket.on('joinRoom', ({username, room}) => {

    socket.emit('previous messages', { messageHistory, room });

    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

    io.to(user.room).emit('roomUsers', {
      room: user.room,
      users: getRoomUsers(user.room)
    });
  })

  socket.on('chat message', (msg) => {
    const user = getCurrentUser(socket.id);
    messageHistory.push({ ...formatMessage(user.username, msg), messageRoom: user.room })
    io.to(user.room).emit('chat message', formatMessage(user.username, msg));
  });

  socket.on('disconnect', () => {
    const user = userLeave(socket.id);
    if (user){
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
      });
    }
  })
})

server.listen(PORT, () => {
  console.log(`listening on ${ PORT }`);
});