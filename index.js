import express from 'express';
import mongoose from 'mongoose'
import router from "./router.js";

const PORT = 5000;
const DB_URL = `mongodb+srv://ma:Mongodb_2022@cluster0.duzhxff.mongodb.net/?retryWrites=true&w=majority`

const app = express()

app.use(express.json()) // преобразовывает в Json формат
app.use('/api', router)

// app.get('/', (req, res) => {
//     console.log(req.query.name)
//     console.log(req.body)
//     res.status(200).json('Сервер работает good')
// })

// app.post('/', async (req, res) => {
//     try {
//         const {author, title, content, picture} = req.body
//         const post = await Post.create({author, title, content, picture});
//         // console.log(req.query.name)
//         // console.log(req.body)
//         res.json(post)
//     }
//     catch (e) {
//         res.status(500).json(e);
//     }
// })


async function startApp() {
    try {
            await mongoose.connect(DB_URL,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                },
                app.listen(PORT, () => console.log('SERVER STARTED PORT ' + PORT)))
    }
    catch (e) {
        console.log(e)
    }
}

startApp();


