import mongoose from "mongoose";

const userModel = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        pic: { type: String, default: 'https://www.pngkey.com/png/detail/73-730434_04-dummy-avatar.png' },
    },
    {
        timestams: true,
    }
)

const User = mongoose.model('User', userModel);

module.exports = User; 
