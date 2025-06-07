const mongoose = require("mongoose");
require("dotenv").config();

//database connection
const dbConnect = ()=>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("DB connected successfully")
    })
    .catch((error)=>{
        console.log("Error while DB connection");
        console.log(error.message);

        process.exit(1); //unsuccessfull termination
    })
}

module.exports=dbConnect;