import 'dotenv/config'
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"
import userRouter from "./routes/userRoutes.js"
import cartRouter from "./routes/cartRoutes.js"
import orderRouter from "./routes/orderRoutes.js"



//config app
const app=express()
const port=4000

//middleware
app.use(express.json())
app.use(cors())

//db connection

connectDB();
//routes,api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)
app.get("/",(req,res)=>{
    res.send("api is working")
})

app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})
