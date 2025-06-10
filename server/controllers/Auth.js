/* eslint-disable no-undef */
const { FaJarWheat } = require("react-icons/fa6");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;
const ADMIN_MOBILE = "8107142344";
const ADMIN_PASSWORD = "123";
const twilio = require("twilio");
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

exports.signUp = async(req,res)=>{
    try{
        //desturcture values from the body
        const {name,email,password,mobileNo,otp} = req.body;

        //check whether something is missing or not
        if(!name || !email || !password || !mobileNo || !otp){
            return res.status(400).json({
                success:false,
                message:"All fields are necessary",
            })
        }

        //check whether the user already existed

        const existingUser = await User.findOne({mobileNumber : mobileNo});

        if(existingUser){
            return res.status(409).json({
                success:false,
                message:"User already existed with this ph no.",
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



exports.sendOtp = async (req, res) => {
    try {
        const { mobile } = req.body;
        if (!mobile) return res.status(400).json({ message: "Mobile number is required." });

        const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

        const formattedMobile = mobile.startsWith("+") ? mobile : `+91${mobile}`;
        const otp = generateOTP();
        const otpExpiresAt = new Date(Date.now() + 5 * 60000);

        let user = await UserLogin.findOne({ mobile });
        if (user) {
            user.otp = otp;
            user.otpExpiresAt = otpExpiresAt;
        } else {
            user = new UserLogin({ name: "Unknown", mobile, password: "defaultpassword", otp, otpExpiresAt });
        }
        await user.save();

        await client.messages.create({
            body: `Your OTP is: ${otp}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: formattedMobile
        });

        res.status(200).json({ message: "OTP sent successfully." });
    } catch (error) {
        console.error("Twilio Error:", error);
        res.status(500).json({ message: "Failed to send OTP. Try again later." });
    }
};

exports.logIn = async (req, res) => {
    try {
        const { mobile, password } = req.body;

        if (mobile === ADMIN_MOBILE) {
            if (password !== ADMIN_PASSWORD) {
                return res.status(401).json({ message: "Invalid admin credentials." });
            }
            let admin = await User.findOne({ mobile: ADMIN_MOBILE });
            if (!admin) {
                admin = new User({
                    name: "Admin",
                    mobile: ADMIN_MOBILE,
                    password: await bcrypt.hash(ADMIN_PASSWORD, 10),
                    role: "admin"
                });
                await admin.save();
            }
            const token = jwt.sign({ role: "admin" }, JWT_SECRET, { expiresIn: "7d" });
            return res.status(200).json({ message: "Admin login successful.", token, role: "admin" });
        }

        const user = await User.findOne({ mobileNumber : mobile });
        if (!user) return res.status(400).json({ message: "User not found." });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials." });

        const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: "7d" });

        res.status(200).json({ message: "Login successful.", token, role: user.role });
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}

exports.logout = async (req, res) => {
    try {
        // Token frontend se remove karwana hoga
        res.status(200).json({ message: "Logout successful." });
    } catch (error) {
        res.status(500).json({ message: "Logout failed.", error: error.message });
    }
}
