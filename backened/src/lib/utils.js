import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
    return jwt.sign({id:user._id},process.env.JWT_SECRET,{
        expiresIn:"7d",
    });
  res.cookie("jwt",token,{
    maxAge:7*24*60*60*1000,
    httpOnly:true,
    sameSite:"stric" ,
    secure:process.env.NODE_ENV==="development"?false:true,
  });
    return token;
};