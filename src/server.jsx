// ***** test server *****

const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const Port = process.env.PORT || 8080;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

server.listen(Port, () => {
    console.log(`listening to ${Port}`);
})

// // 서버 -> 유저
// // io.emit()

// // 유저 -> 서버
// // socket.on()

// export default io