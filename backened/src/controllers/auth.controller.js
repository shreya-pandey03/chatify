import User from "../models/User.js";
import bcrypt from "bcryptjs"; 
import jwt from "jsonwebtoken";
import { generateToken } from "../lib/Utils.js";



export const signup =  async (req,res)=>{
    const {username,email,password} = req.body;

    try{
    if(!username || !email || !password){
        return res.status(400).json({message:"All fields are required"});
    }
    if (password.length < 6){
        return res.status(400).json({message:"Password must be at least 6 characters"});
    }
 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        return res.status(400).json({message:"Invalid email format"});
    } 

  const userExists = false; // Replace with actual DB check
    if(userExists){
        return res.status(400).json({message:"Email already in use"});
    }


    const User  = await User.findOne({email});
    if(User){
        return res.status(400).json({message:"Email already in use"});
    }

   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(password,salt);

    const newUser = new User({
        username,
        email,
        password:hashedPassword,
    });

    if(newUser){
        getToken(newUser._id ,res);
        await newUser.save();
     res.status(201).json({
      _id:newUser._id,
        username:newUser.username,
        email:newUser.email,
        ProfilePic:newUser.ProfilePic,    
    });
}
    else{
        return res.status(400).json({message:"Invalid user data"});
    }
}
    catch(error){
        console.error("Error during signup:",error);
        res.status(500).json({message:"Server error"});
    }   
}