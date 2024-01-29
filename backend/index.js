import Express from "express";
import 'dotenv/config';
import mongoose from 'mongoose';
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';

const app = Express();
app.use(cors())

app.use(Express.json())

app.get('/', (req, res) => {
    console.log(req);
    res.status(234).send("Welcome to our book store")
})

app.use('/books', booksRoute)

//Connecting DB and starting server
mongoose
.connect(process.env.mongodbURL)
.then(()=>{
    console.log("DB connected")
    app.listen(process.env.PORT, () => {
        console.log("App is running on port:", process.env.PORT);
    })
    
})
.catch((err)=>{
    console.log(err)
})