import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true },
    password: {
        type: String,
        required: true,
        trim: true },
    profilePicture:{
        type: String,
        default:'https://www.pngitem.com/pimgs/m/504-5040528_empty-profile-picture-png-transparent-png.png',
    }
},{timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;