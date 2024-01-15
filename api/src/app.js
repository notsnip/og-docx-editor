const io = require("socket.io")(3001,{
    cors:{
        origin: ["http://localhost:5173", process.env.CLIENT]
    }
});

io.on('connection', (socket)=>{
    console.log(`A new connection has been made: ${socket.id}`);

    socket.on('send-editorData',data=>{
        socket.broadcast.emit('broadcast-editorData',data)
    });
    
})

