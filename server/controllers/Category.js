/* eslint-disable no-undef */
const Category = require("../models/Category")

exports.createCategory = async (req,res)=>{
    try{

        const {name,description} = req.body;

        if(!name || ! description){

            console.log("Details missing while creating the category")

            return res.status(400).json({
                success:false,
                message:"Details missing while creating the category"
            })
        }

        const categoryDetails = await Category.create({
            name:name,
            description:description
        })

        console.log(categoryDetails);

        return res.status(200).json({
            success:true,
            message:"New category has been created successfully"
        })

    }
    catch(error){

        console.log("Category can't be created");
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Category can't be created"
        })
    }
}


exports.showAllCategories = async (req,res)=>{
    try{
        const allCategories = await Category.find({},{
                                                    name:true,
                                                    description:true
                                                    })

        res.status(200).json({
            success:true,
            message:"All the categories fetched successfully"
        })
    }
    catch(error){
      console.log(error)
        return res.status(500).json({
            success:false,
            message:"Categories can't be fetched"
        })  
    }
}

exports.getCategoryDetails = async (req,res) => {
    try{
        const {categoryId} = req.body;

        const categoryDetails = await Category.find({_id : categoryId}).populate(
                                                                            {
                                                                                path : "items",
                                                                                populate : {
                                                                                    path:"ratingAndReview"
                                                                                }
                                                                            }
                                                                        )
                                                                        .exec();

        if(!categoryDetails){
            return res.status(400).json({
                success:false,
                message:`could not get category details of the category ${categoryId}` 
            })
        }

        return res.staus (200).json({
            success:true,
            message:"Category details fetched successfully",
            data:categoryDetails,
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"error while fetching category details",
            error:error
        })
    }
}