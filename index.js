const express = require('express')
const app= express()

require('dotenv').config()

const PORT = process.env.PORT || 3000;

//middleware to parse 
app.use(express.json());

// import routes for todo API
const todoRoutes = require('./routes/todos')
app.use("/api/v1",todoRoutes)

app.listen(PORT,() => {
    console.log(`server started at ${PORT}`);
})

const dbConnect = require('./config/database')
dbConnect();

app.get("/",(req,res) => {
    res.send(`<h1>This is Homepage Baby</h1>`)
})