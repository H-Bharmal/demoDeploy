// This app aims to understand the basics of Express to Listen, Response etc. and to use ENV moudle for production deployement

// Please install Express before using express
// To have a dotenv file
require('dotenv').config();
// console.log(process.env);

// Below code is an Express code
const { log } = require('console');
const express = require('express');
const app = express();
// const port = 3000; 

app.get('/', (req, res)=>{
    res.send("This is a demo app for express. Hehehehehehe.Try /chickenlegpiece");
})

app.get('/chickenlegpiece', (req, res)=>{
    res.send("<h1>Chicken Says Hello !</h1>");
})

const port = process.env.PORT ;
app.listen(port,()=>{
    console.log(`Example app listening on port yanga poda ${port}`)
})