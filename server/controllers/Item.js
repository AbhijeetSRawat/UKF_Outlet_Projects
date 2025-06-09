const Item = require("../models/Items")
const Category = require("../models/Category")
const User = require("../models/User")
const {uploadImageToCloudinary} = require("../utils/imageUploader")

exports.createItem = async (req,res) => {
    try{
        const {name,description,price,category,quantity} = req.body;

        const thumbnail = req.files.thumbnailImage;

        if(name,description ||price || category || quantity || thumbnail)

    }
    catch(error){
        console.log("Error while creating item is : ",error)
        return res.status(500).json({
            success:false,
            message:"Error while creating the item"
        })
    }
}