const express = require("express")
const request = require("request")

const app = express()

app.get("/", (req,res)=>{
    res.send("Hello, This is Backend Server!")
})

app.listen(3000, () => console.log("Server Started at port 3000"))