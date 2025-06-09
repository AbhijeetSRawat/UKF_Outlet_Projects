
const mongoose = require("mongoose")


const itemSchema = new mongoose.Schema(
  {
    
    name: {
      type: String,
      required: true,
      trim: true,
    },
    
    price: {
        type:Number,
        required:true,
    },
    

    }    
)

module.exports = mongoose.model("item", itemSchema)
