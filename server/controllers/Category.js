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