import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://faisalakram:faisalakram@cluster0.wjkvz1t.mongodb.net/?retryWrites=true&w=majority");
        console.log('mongoDb Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit();
    }
};
mongoose.set('strictQuery', false);

connectDB();
const app = express();
app.use(express.json());

app.use('/api/user', userRoutes);

dotenv.config();
// dotenv.config({ path: path.resolve(".env") })

// app.get('/', (req, res) => {
//     res.send("aye haye chat app")
// })



const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server runing on port ${PORT}`));