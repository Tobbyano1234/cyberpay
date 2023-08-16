import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 2000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.listen(PORT, ()=> {
    console.log(`server is listening on ${PORT}`)
})