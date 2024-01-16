import dotenv  from "dotenv";
import express from "express";

dotenv.config();
const app= express()
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// Connection
import './sockets/index.socket.js';
import './db/connection.js';

//Router
import userRouter from './routes/user.routes.js';


app.use('/', userRouter);

app.listen(1234, () => {
    console.log(`Server is running on port 1234`);
  });