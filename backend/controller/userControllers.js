import asyncHandler from 'express-async-handler';
import User from '../models/userModel';
import { generateToke } from '../config/token';

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error('enter all the fields');

    }
    const userExist = await User.findOne({ email });

    if (userExist) {
        res.status(400);
        throw new Error('user already exist');
    };

    const user = await User.creare({
        name, email, password, pic
    });


    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToke(user.id)
        })
    } else {
        res.status(400);
        throw new Error('fail to create user');
    }


});



const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error('enter all the fields');

    }
    const userExist = await User.findOne({ email });

    if (userExist) {
        res.status(400);
        throw new Error('user already exist');
    };

    const user = await User.creare({
        name, email, password, pic
    });


    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            pic: user.pic
        })
    } else {
        res.status(400);
        throw new Error('fail to create user');
    }


});


module.exports = { registerUser, loginUser }