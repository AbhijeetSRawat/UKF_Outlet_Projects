/* eslint-disable no-undef */
const Item = require("../models/Items")
const Category = require("../models/Category")
const User = require("../models/User")
const {uploadImageToCloudinary} = require("../utils/imageUploader")


exports.createItem = async (req,res) => {
    try{
        const {name,description,price,category,quantity} = req.body;

        const thumbnail = req.files.thumbnailImage;

        if(!name || !description || !price || !category || !quantity || !thumbnail){
            return res.status(400).json({
                success:false,
                message:"Give all details while creating an item"
            })
        }

        const userId = req.user.id;
        const sellerDetails = await User.findById(userId);
        console.log("seller Details : ", sellerDetails);

        if(!sellerDetails){
            return res.status(404).json({
                success:false,
                message:"seller Details not found"
            })
        }

        const categoryDetails = Category.findById(category);

        if(!categoryDetails){
            return res.status(404).json({
                success:false,
                message:"Category Details not found"
            })
        }

        const thumbnailImage = await uploadImageToCloudinary(thumbnail,process.env.FOLDER_NAME);

        const newItem = await Item.create({
            name,
            itemDescription : description,
            price,
            category:categoryDetails._id,
            quantity,
            thumbnail : thumbnailImage,
            seller : sellerDetails._id
        });

        await User.findByIdAndUpdate(
            {_id : sellerDetails._id},
            {
                $push:{
                    items:newItem._id,
                }
            },
            {new : true}
        )

        await Category.findByIdAndUpdate(
            {_id : categoryDetails._id},
            {
                $push:{
                    items:newItem._id,
                }
            },
            {new : true}
        )

        return res.status(200).json({
            success:true,
            message:"Item created successfully",
            data:newItem
        })
    }
    catch(error){
        console.log("Error while creating item is : ",error)
        return res.status(500).json({
            success:false,
            message:"Error while creating the item",
            error : error.message
        })
    }
}

exports.getItemDetails = async (req,res)=>{
    try{

        const {itemId} = req.body;

        const itemDetails = await Item.find({_id : itemId}).populate("seller")
                                                            .populate("category")
                                                            .populate("ratingAndReview")
                                                            .populate("customer")
                                                            .exec();

        if(!itemDetails){
            return res.status(400).json({
                success:false,
                message : `could not find the item with ${itemId}`
            })
        }

        return res.status(200).json({
            success:true,
            message:"Item details fetched successfuly",
            data:itemDetails,
        })

    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"Can not find the items details",
            error:error,
        })
    }
}

exports.showAllItems = async (req,res)=>{
    try{
        const allItems = await Item.find({},{
                                            name:true,
                                            price:true,
                                            thumbnail:true,
                                            itemDescription:true,
                                            ratingAndReviews : true,
                                            category : true,
                                            quantity:true,
                                        });

        return res.status(200).json({
            success:true,
            message:"Data for all items fetched successfully",
            data:allItems,
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"Error while fetching all the items",
            error:error
        })
    }
}