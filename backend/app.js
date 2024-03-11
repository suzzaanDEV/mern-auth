import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("MongoDB Connected");
    app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        })
}).catch((err)=>{
    console.log(err);
})

// mongoose.connect(dbUrl).then((db) => {
//     if (db){
//
//     }
// })
