
const mongoose = require("mongoose")


const userSchema = new mongoose.Schema(
  {
    
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },


    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    },
    mobileNumber :{
      type:String,
      required:true,
    },
    items:[
      {
      type:mongoose.Schema.Types.ObjectId,
      ref:"item"
      }
  ]

  }    
)

module.exports = mongoose.model("user", userSchema)

