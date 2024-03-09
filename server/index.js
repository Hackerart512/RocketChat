const express = require('express');
const cors = require('cors');
const port = 5000;

const connectToMogoose= require('./database');

const app = express();
app.use(express.json());
app.use(cors());

// app.use('/api/auth', require(''))
app.get("/", (req, res)=>{
    res.send("hello");
})

app.listen(port, ()=>{
    console.log(`Listening on port: http:localhost:${port}`)
});