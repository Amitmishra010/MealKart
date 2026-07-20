import mongoose from "mongoose";
export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://Mishra:921177@cluster0.00ysotw.mongodb.net/?appName=Cluster0').then(()=>console.log("DB connected!!"));
}