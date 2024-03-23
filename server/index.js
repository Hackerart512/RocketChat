const express = require('express');
const cors = require('cors');
const port = 5000;

const connectToMogoose = require('./database');

const app = express();
app.use(express.json());
app.use(cors());

// All Routes

app.use('/api/auth', require('./src/routers/auth'))

app.use('/api/conversation', require('./src/routers/conversation'))

app.use('/api/message', require('./src/routers/message'))

app.get("/", (req, res) => {
    res.send("hello");
})

app.listen(port, () => {
    console.log(`Listening on port: http:localhost:${port}`)
});



// ................... Socket IO ..........................

const { Server } = require('socket.io');

const io = new Server(9000, {
    cors: {
        ogirin: 'http://localhost:3000'
    }
})

let users = [];

const addUser = (userData, socketId) => {
    !users.some(user => user._id === userData._id) && users.push({ ...userData, socketId });
}


const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
}

const getUser = (userId) => {
    return users.find(user => user._id === userId);
}


io.on('connection', (socket) => {
    console.log("user connected");

    //connect
    socket.on("addUser", userData => {
        addUser(userData, socket.id);
        io.emit("getUsers", users);
    })

    //send message
    socket.on('sendMessage', (data) => {
        const user = getUser(data.receiverId);
        io.to(user.socketId).emit('getMessage', data)
    })

    //disconnect
    socket.on('disconnect', () => {
        console.log('user disconnected');
        removeUser(socket.id);
        io.emit('getUsers', users);
    })
})