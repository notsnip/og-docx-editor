import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    username: {type: String, required: true},  //username of the user
    password: { type: String, required: true },   //password for the user to login
    email: { type: String, unique :true ,required: true } ,//email id
})

const userModel= new mongoose.model("User",userSchema);

export default userModel
