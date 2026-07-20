import express from "express"
import { listOrders, placeOrder, updateStatus, userOrders, verifyPayment } from "../controllers/orderController.js";
import authMiddleware from "../middlewares/auth.js";

const orderRouter=express.Router()
console.log("order route is running")
orderRouter.post("/place",authMiddleware,placeOrder)
orderRouter.post("/verify",authMiddleware,verifyPayment)
orderRouter.post("/userorders",authMiddleware,userOrders)
orderRouter.get("/list",listOrders)
orderRouter.post("/status",updateStatus)
export default orderRouter;