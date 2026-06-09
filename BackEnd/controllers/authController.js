const User=require("../models/User")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

//Register

const register=async(req,res)=>{
    try {
        const{username,email,password,confirmPassword}=req.body;
        const existingUser=await User.findOne({email});
       
        if(existingUser){
            return res.status(400).json({success:false,message:"User already exists",error:"User already exists"})
        }
      
        const hashPassword = await bcrypt.hash(password,10)

        const user= await User.create({
            username,email,password:hashPassword
        })

        const token =jwt.sign(
            { id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:"2d"}
        )
        res.status(200).json({
            success:true,
            message:"User Registered Sucessfully",
            data:user,
            token,
            
        })
        
    } catch (error) {
        res.status(500).json({success:false,message:"Error In Registering User",error})
    }
}


//login

const login =async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email})

        if(!user){
            return res.status(400).json({success:false,message:"User not found",error:"user not found"})
        }
        
       const isMatch=await bcrypt.compare(password,user.password)

       if(!isMatch){
        return res.status(400).json({success:false,message:"Invalid password",error:"invalid password"})
       }
       
        
    } catch (error) {
        res.status(500).json({success:false,message:"Error In Logging In User",error})
        
    }
}

mosule.exports={register,login}