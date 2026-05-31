
const express = require('express');
const app = express();

// adding middleware
app.use(express.json());

// load PORT
require("dotenv").config();
const PORT = process.env.PORT;
console.log("PORT =", PORT);


// Connectig to the DB
const dbConnect = require("./database/database.js");
dbConnect();


// Mounting the routes
const route = require("./routes/todoRoutes.js");
app.use("/api/v1",route);

// Default Route
app.get("/",(req,res)=>{
    res.send(`<h1>This is default Route</h1>`)
})


// Staring the Server
app.listen(PORT,()=>{
    console.log(`App is running on port : ${PORT}`)
})