import dotenv from "dotenv";
import express from "express";
import {createServer} from "http"
import { Server } from "socket.io";
// Config
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import Routes
import userRouter from "./routes/user.routes.js";
import documentRouter from "./routes/documents.routes.js";

// Connection
import "./db/connection.js";

//Router
app.use("/user", userRouter);
app.use("/docs", documentRouter);

// Socket
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: "*" } });
io.on("connection", (socket) => {
  console.log(`A new connection has been made: ${socket.id}`);
  socket.on("join-document", (id) => {
    socket.join(id);
  });
  socket.on("send-editorData", (data, documentId) => {
    socket.to(documentId).emit("broadcast-editorData", data);
  });
});

app.set("port", process.env.PORT || 5000);

httpServer.listen(app.get("port"), function () {
  var port = httpServer.address().port;
  console.log("Running on : ", port);
});
