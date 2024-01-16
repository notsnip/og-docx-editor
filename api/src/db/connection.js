import mongoose from 'mongoose';




mongoose.connect(`mongodb+srv://snipc:IchigoBankai@cluster0.xqbuymk.mongodb.net/`)
.then(() => {
  console.log("Succesfully Connected to MongoDB");
})
.catch((error) => {
  console.log("Connection to Mongodb failed", error);
  process.exit(1); // This will exit the program with a non-zero exit code, indicating that an error occurred.
});