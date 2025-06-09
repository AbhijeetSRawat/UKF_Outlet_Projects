const express = require("express");
const app = express();
const cors = require("cors");

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//cors 
app.use(
    cors({
        origin:"http://localhost:5173",
        credentials:true,
    })
)

//import routes
const userRoutes = require("./routes/user");

//mounting
app.use("/api/v1",userRoutes);



//server instantiate
app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})

//database connection
const dbConnect= require("./config/database");
dbConnect();



//dummyroute
app.get("/",(req,res)=>{
    res.send(`<h1>This is a dummy route.</h1>`);
})