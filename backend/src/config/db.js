import mongoose from "mongoose";
import config from "./config.js";

const connectDB=async (req,res)=>{
    try{
    await mongoose.connect(config.MONGO_URI)
    console.log("database connected successfully")
    }
    catch(err)
    {
        console.log(err)
    }
}

export default connectDB