import mongoose from 'mongoose';

const connectDB = async () => {
    // console.log("process.env.MONGO_URI", process.env.MONGO_URI)
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('mongoDb Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit();
    }
};

module.exports = connectDB;