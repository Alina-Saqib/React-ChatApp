const express = require ('express')
const chats = require ('./data/data')
const dotenv = require ('dotenv')
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
const messageRoutes = require('./routes/messageRoutes')
const app = express()
const {notFound, errorHandler} = require('./Middleware/errorMiddleware')

app.use(express.json());


dotenv.config();

connectDB();
app.get('/',(req,res)=>{
    res.send('Api is running');
})

app.use('/api/users',userRoutes);
app.use('/api/chats',chatRoutes);
app.use('/api/message',messageRoutes);

app.use(notFound);
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

const server =app.listen(PORT, console.log('Server listening on port 5000'));

const io = require("socket.io")(server, {
    pingTimeout: 60000,
    cors: {
      origin: "http://localhost:3000",
    },
  });

io.on("connection",(socket) =>{
    console.log('Connected to socket.io');
    socket.on("setup",(userData)=>{
        socket.join(userData._id);
        socket.emit("connected");

    });

    socket.on("join chat",(room)=>{
        socket.join(room);
        console.log('user join room:' + room);

    });


    socket.on("typing", (room)=>socket.in(room).emit("typing"));
    socket.on("stop typing", (room)=>socket.in(room).emit("stop typing"));


    socket.on("new message", (newMessageRecieved) => {
        var chat = newMessageRecieved.chat;
    
        if (!chat.users) return console.log("chat.users not defined");
    
        chat.users.forEach((user) => {
          if (user._id == newMessageRecieved.sender._id) return;
    
          socket.in(user._id).emit("message recieved", newMessageRecieved);
        });
      });

      socket.off("setup", ()=>{
        console.log("User Disconnected");
        socket.leave(userData._id);
            });
    
});