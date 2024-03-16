require("dotenv").config()
const express=require("express")//---> module js
//import express from "express"----> common js
const app=express()
const port=3000

app.get("/",(req,res)=>{
    res.send("Hello,World")
})

app.get("/twitter",(req,res)=>{
    res.send("twitter")
})

app.get("/login",(req,res)=>{
    res.send("<h1>please login</h1>")
})

app.listen(process.env.PORT,()=>{
    console.log(`app listening on port ${port}`)
})
