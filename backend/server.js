import express from 'express';
import dotenv from 'dotenv'

const app = express();
dotenv.config();




const data = [{ id: 1, chat: 1 }, { id: 2, chat: 2 }]

app.get('/', (req, res) => {
    res.send("aye haye chat app")
})

app.get('/chats', (req, res) => {
    res.send(data)
})

app.get('/chats/:id', (req, res) => {
    const ans = data.filter((item) => item.id == req.params.id);
    res.send(ans);
})





const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server runing on port ${PORT}`));