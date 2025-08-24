import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { callGenApi } from './gemini_api.js';

const server = express();
const PORT = process.env.SERVER_DEFAULT_PORT;

server.use(cors(), express.json());

server.post("/submit", async (req, res) => {
    let { message } = req.body
    try {
        let text = await callGenApi(message)
        res.send(text)
    } catch (error) {
        console.log(error)
        res.status(500).send("Algo de ")
    }
})

server.listen(PORT, () => {
    console.log("Server started!")
})
