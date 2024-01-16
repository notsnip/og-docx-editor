import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';


const httpServer = createServer();
const io = new Server(httpServer, { cors: { origin: '*' } });

io.on('connection', (socket)=>{
    console.log(`A new connection has been made: ${socket.id}`);
    socket.on('join-document',id=>{
        socket.join(id);
    })
    socket.on('send-editorData',(data,documentId)=>{
        socket.to(documentId).emit('broadcast-editorData',data);
    });
    
});

