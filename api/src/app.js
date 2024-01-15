const io = require("socket.io")(3001,{
    cors:{
        origin: ["http://localhost:5173", process.env.CLIENT]
    }
});

io.on('connection', (socket)=>{
    console.log(`A new connection has been made: ${socket.id}`);


    socket.on('join-document',id=>{
        socket.join(id);
    })
    socket.on('send-editorData',(data,documentId)=>{
        socket.to(documentId).emit('broadcast-editorData',data);

    });
    
})

