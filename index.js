require('dotenv').config()
const express = require('express')
// import express from express
const app = express()
const port = process.env.PORT || 4000

app.get("/",(req,res) =>{
    res.send("Hello World")
})
app.get("/ronaldo",(req,res)=>{
    res.send("<h1>SUIIIIIIII</h1>")
})

app.listen(process.env.PORT, () =>{
    console.log('Machine is Litening on http://localhost:3000',)
})