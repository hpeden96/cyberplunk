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

    socket.emit('startUserCreation');

    const user = userJoin(socket.id, username, room, false, null, getRandomInt(100), null, 0);

    socket.join(user.room);

    io.to(user.room).emit('roomUsers', {
      room: user.room,
      users: getRoomUsers(user.room)
    });
  })

  socket.on('chat message', (msg) => {
    const user = getCurrentUser(socket.id);

    if (!user.characterCreated){
      if(["solo", "medtech", "netrunner"].includes(msg.toLowerCase())){
        user.role = msg.toLowerCase();
        if (user.role === "solo"){
          user.health += 20;
          user.unlockChance = 20
        }
        else if (user.role === "medtech"){
          user.health += 30;
          user.unlockChance = 40
        }
        else if (user.role === "netrunner"){
          user.health += 10
          user.unlockChance = 90
        }
        user.characterCreated = true;
      }
      console.log(user);
    }

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

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

server.listen(PORT, () => {
  console.log(`listening on ${ PORT }`);
});