import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Razorpay from "razorpay";
import crypto from "crypto"
import { response } from "express";
//setup razorpay

const razorpay=new Razorpay(
    {
    key_id:process.env.RAZORPAY_KEY_ID,
    key_secret:process.env.RAZORPAY_SECRET_KEY
});


//placing user order for frontend
const placeOrder=async (req,res)=>{
    console.log("place order controller is running")
     try {
        console.log("place order ke try block me")
        const newOrder=new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

        const options = {
            amount: req.body.amount * 100, // amount in paise
            currency: "INR",
            receipt: newOrder._id.toString()
        };

        const razorpayOrder = await razorpay.orders.create(options);

        res.json({
            success: true,
            order: razorpayOrder,
            orderId: newOrder._id
        });

    } catch (error) {

        console.log(error);

        res.json({
            success: false,
            message: error.message
        });

    }
};


//verify payment
const verifyPayment=async (req,res)=>{
   try {
     const {razorpay_order_id,razorpay_payment_id,razorpay_signature,orderId}=req.body;
    console.log(process.env.RAZORPAY_SECRET_KEY)
     const generateSignature=crypto.createHmac("sha256",process.env.RAZORPAY_SECRET_KEY)
     .update(razorpay_order_id+"|"+razorpay_payment_id)
     .digest("hex");
     if(generateSignature===razorpay_signature){
         
         //mark order as paid
         await orderModel.findByIdAndUpdate(orderId,{
            payment:true
         });
         //clear cart only after successfull payment
         console.log("orderId",orderId);
         
         const order=await orderModel.findById(orderId);
         console.log("order from db:",order);
         await userModel.findByIdAndUpdate(order.userId,{
            cartData:{}
         });
         res.json({success:true,message:"Payment Verified"});
     }else{
         res.json({success:false,message:"signature invalid"});
     }
   } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
   }
}
//users order for frontend
const userOrders=async (req,res)=>{
    try {
        console.log("ye rahi user id",req.body.userId)
        const orders=await orderModel.find({userId:req.body.userId});
        res.json({success:true,data:orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
    }
}
//listing orders for admin panel
const listOrders=async (req,res)=>{
    try {
        const orders=await orderModel.find({});
        console.log(orders)
        res.json({success:true,data:orders})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}
//api for updating order status

const updateStatus=async (req,res)=>{
    try {
        const order=await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
        
             res.json({success:true,message:"Status updated"})
    
       
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
} 
export {
    placeOrder,
    verifyPayment,
    userOrders,
    listOrders,
    updateStatus
}