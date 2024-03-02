require('dotenv').config()
const express = require('express')
// import express from express
const app = express()
const port = 4000

app.get("/",(req,res) =>{
    res.send("Hello World")
})
app.get("/love",(req,res)=>{
    res.send("<h1>Aran Loves Nasreennnnnnnnn</h1>")
})

app.listen(process.env.PORT, () =>{
    console.log('Machine is Litening on ${port}')
})