import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    googleId: String,
    displayName: String,
    email: String,
    accessToken: String,
    refreshToken: String,
    picture: String,
    role: {
        type: String,
        default: 'user',
    },
});

export const User = mongoose.model('User',userSchema);