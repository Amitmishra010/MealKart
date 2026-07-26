import foodModel from "../models/foodModel.js"
import cloudinary from "../config/cloudinary.js"
import fs from "fs"

//add food item
const addFood = async (req, res) => {
    try {
        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "MealKart"
        });

        // Delete temporary file from uploads folder
        fs.unlinkSync(req.file.path);

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: result.secure_url
        });

        await food.save();

        res.json({
            success: true,
            message: "Food item added"
        });

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error"
        });
    }
};
//All food list
const listFood=async (req,res)=>{
     try {
        const foods=await foodModel.find({});
        res.json({success:true,data:foods})
     } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
     }
}
//remove food item
const removeFood = async (req, res) => {
    try {
        await foodModel.findByIdAndDelete(req.body.id);

        res.json({
            success: true,
            message: "Food item deleted"
        });

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error"
        });
    }
}
export {
    addFood,
    listFood,
    removeFood
}