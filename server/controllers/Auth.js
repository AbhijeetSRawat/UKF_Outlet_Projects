const { FaJarWheat } = require("react-icons/fa6");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signUp = async(req,res)=>{
    try{
        //desturcture values from the body
        const {name,email,password,mobileNo} = req.body;

        //check whether something is missing or not
        if(!name || !email || !password || !mobileNo){
            return res.status(400).json({
                success:false,
                message:"All fields are necessary",
            })
        }

        //check whether the user already existed

        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(409).json({
                success:false,
                message:"User already existed with this email",
            })
        }

        //check the otp

        //hash the password

        //save the data into user model
        const hashedPassword =await bcrypt.hash(password,10);

  

        const user = await User.create({
            name,
            email,
            password : hashedPassword,
            mobileNumber:mobileNo,
        })

        console.log(user);

        return res.status(201).json({
            success:true,
            message:"User has been registered successfully!",
            user
        })
    }
    catch(error){
        console.log("Internal Server Error while SignUp");
        return res.status(500).json({
            success:false,
            message:error,
        })
    }
}

exports.logIn = async(req,res)=>{
    try{

        //destructure from body
        const {email,password} = req.body;

        //check all the values are present or not
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are mandatory!"
            })
        }
        
        //check whether the user exists or not
        const user = await User.findOne({email});

        if(!user){
            return res.status(404).json({
                success:false,
                message:"User is not registered, Please Sign In"
            })
        }

        //compare the credentials and token accordingly
        if(await bcrypt.compare(password,user.password)){
            const payload = {
                email:user.email,
                id:user._id,
            }

            const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"2h"});
            
            user.token = token;
            user.password = undefined;

            res.status(200).json({
                success:true,
                message:"User has successfully login",
                user
            })
        }
        else{
            return res.status(401).json({
                success:false,
                message:"Incorrect Password",
            })
        }

    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal server error while LogIn"
        })
    }
}