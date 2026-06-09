const jwt=require("jsonwebtoken")

const protect=async(req,res,next)=>{
    try {
        const token = req.headers.authorization;
        if(!token){
            return res.status(401).json({success:false,message:"Unauthorized",error:"Unauthorized"})
        }
        
    } catch (error) {
        return res.status(500).json({success:false,message:"Error In Protecting Route",error})
    }
}

module.exports=protect
