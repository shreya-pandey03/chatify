import "dotenv/config";

export const ENV={
 PORT : process.env.PORT || 5000,     
 MONGO_URL : process.env.MONGO_URL,
 JWT_SECRET : process.env.JWT_SECRET,
 Node_ENV : process.env.NODE_ENV || "development",
 CLOUDINARY_CLOUD_NAME : process.env.CLOUDINARY_CLOUD_NAME,
 CLOUDINARY_API_KEY : process.env.CLOUDINARY_API_KEY,
 CLOUDINARY_API_SECRET : process.env.CLOUDINARY_API_SECRET,
 CLIENT_URL : process.env.CLIENT_URL || "http://localhost:3000",
 EMAIL_USER : process.env.EMAIL_USER,
 EMAIL_PASSWORD : process.env.EMAIL_PASSWORD,
 ARCJET_KEY : process.env.ARCJET_KEY,
 ARCJET_ENV : process.env.ARCJET_ENV || "development",
};