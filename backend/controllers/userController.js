import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


//login user
const loginUser=async (req,res)=>{
    const {email,password}=req.body;
    
    try {
        const user=await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:"User does not exist"});
        }
        const isMatched=await bcrypt.compare(password,user.password)
        if(!isMatched){
            return res.json({success:false,message:"invalid credentials"})
        }
        const token=createToken(user._id);
        res.json({success:true,token})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
    }

}
//creating token
const createToken=(id)=>{
   
    return jwt.sign({id},process.env.JWT_SECRET)
}
//register user
const registerUser=async (req,res)=>{
    const {name,email,password}=req.body;
    console.log("ye rahi email",email);
    try {
        const exists=await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"user already exist"})
        }
        //validating email and strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter valid email"})
        }
        if(password.length<8){
            return res.json({success:false,message:"Password length should minimum 8"})
        }
        //hashing user password
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)
        //now we create new user
        const newUser=new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })
        //now save the new user
        const user=await newUser.save()
        //after saving we will create the token and will send this token with response-token funcion is above
        const token=createToken(user._id)
        res.json({success:true,token});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}
//logout user
export {
    loginUser,
    registerUser
}