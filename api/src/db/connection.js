import mongoose from "mongoose";
import { DB_USER, DB_PASS } from "../constants.js";

mongoose
  .connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.xqbuymk.mongodb.net/`)
  .then(() => {
    console.log("Succesfully Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Connection to Mongodb failed", error);
    process.exit(1);
  });
