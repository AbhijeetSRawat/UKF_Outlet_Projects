
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
    
    itemDescription: { type: String },

    ratingAndReview: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "RatingAndReview",
        },
    ],

    thumbnail: {
         type: String,
    },
    
    category: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: "Category",
    },
    
    seller:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },

    customer:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    }],

    quantity:{
        type:Number
    }
    }
)

module.exports = mongoose.model("item", itemSchema)
