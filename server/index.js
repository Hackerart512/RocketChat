const express = require('express');
const cors = require('cors');
const port = 5000;

const connectToMogoose= require('./database');

const app = express();
app.use(express.json());
app.use(cors());

// All Routes

app.use('/api/auth', require('./src/routers/auth'))

app.use('/api/conversation', require('./src/routers/conversation'))

app.get("/", (req, res)=>{
    res.send("hello");
})

app.listen(port, ()=>{
    console.log(`Listening on port: http:localhost:${port}`)
});