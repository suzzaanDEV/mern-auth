import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cors from "cors";
dotenv.config();

const app = express();

const port = process.env.PORT;
app.use(express.json());
app.use(express.static("public"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("MongoDB Connected");
    app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        })
}).catch((err)=>{
    console.log(err);
})

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
    res.status(500).send({
        success: false,
        message: err.message || "Something went wrong",
        status: err.status || 500,
    })
})