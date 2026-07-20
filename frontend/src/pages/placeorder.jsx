import React, { useContext, useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import { StoreContext } from '../context/storeContext'
import { useState } from 'react'
import axios from 'axios'
function Placeorder() {
    const {getTotalCartAmount,token,food_list,cartItem,url}=useContext(StoreContext)
    const navigate=useNavigate();
    const [data,setData]=useState({
        firstName:"",
        LastName:"",
        email:"",
        street:"",
        city:"",
        state:"",
        zipcode:"",
        country:"",
        phone:"" 
    })

    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))
    }
   
    const placeOrder=async (event)=>{
        event.preventDefault();
        let orderItems=[];
        console.log(cartItem);
        food_list.map((item)=>{
            if(cartItem[item._id]>0){
                let itemInfo=item;
                itemInfo["quantity"]=cartItem[item._id];
                orderItems.push(itemInfo) 
            }
        })
        let orderData={
            address:data,
            items:orderItems,
            amount:getTotalCartAmount()+2,
        }
        console.log(url)
        let response=await axios.post(`${url}/api/order/place`,orderData,{headers:{token}})
        console.log("Url is been hittinh repsponse is ",response)
        if(response.data.success){
           
        const razorpayOrder = response.data.order;
         const mongoOrderId=response.data.orderId;   
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: razorpayOrder.amount,
            currency: razorpayOrder.currency,
            name: "Food Delivery",
            description: "Order Payment",
            order_id: razorpayOrder.id,

            handler: async function (paymentResponse) {

                console.log(paymentResponse);
                const verifyResponse=await axios.post(url+"/api/order/verify",{...paymentResponse,orderId:mongoOrderId},{headers:{token}})
                // Send paymentResponse to backend for verification
                if(verifyResponse.data.success){
                    navigate("/verify?success=true");
                }else{
                    navigate("/verify?success=false");
                }
            }
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
        }
    }
    
    useEffect(()=>{
        if(!token){
            navigate('/cart')
        }else if(getTotalCartAmount===0){
            navigate('/cart')
        }
    },[token])
    return (
        <form onSubmit={placeOrder} className='place-order flex items-start justify-between gap-12.5 mt-25 pb-25 pt-25'>
            <div className="place-order-left  w-full max-w-[max(30%,500px)]">
                <p className="title text-[30px] font-medium mb-12.5">Delivery Information</p>
                <div className="multi-fields flex gap-2.5">
                    <input required  className='m-3.75 w-full p-2.5 border-[#c5c5c5] rounded-sm outline-amber-700' name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name' />
                    <input required  className='mb-3.75 w-full p-2.5 border-[#c5c5c5] rounded-sm outline-amber-700' name='LastName' onChange={onChangeHandler} value={data.LastName} type="text" placeholder='Last Name' />
                </div>
                <input required  className='mb-3.75 w-full p-2.5 border-[#c5c5c5] rounded-sm outline-amber-700' name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email' />
                <input required  className='mb-3.75 w-full p-2.5 border-[#c5c5c5] rounded-sm outline-amber-700' name='street'onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />
                <div className="multi-fields flex gap-2.5">
                    <input required  className='mb-3.75 w-full p-2.5 border-[#c5c5c5] rounded-sm outline-amber-700' name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
                    <input required  className='mb-3.75 w-full p-2.5 border-[#c5c5c5] rounded-sm outline-amber-700' name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
                </div>
                <div className="multi-fields flex gap-2.5">
                    <input required  className='mb-3.75 w-full p-2.5 border-[#c5c5c5] rounded-sm outline-amber-700' name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip Code' />
                    <input required  className='mb-3.75 w-full p-2.5 border-[#c5c5c5] rounded-sm outline-amber-700' name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />
                </div>
                <input required  className='mb-3.75 w-full p-2.5 border-[#c5c5c5] rounded-sm outline-amber-700' name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone No.' />
            </div>
            <div className="place-order-right w-full max-w-[max(40%,500px)] ">
                 <div className="cart-total flex-1 flex flex-col gap-5">
                        <h2 className='text-[20px] font-medium px-2.5'>Cart Totals</h2>
                        <div className='px-2.5 py-0.5' >
                            <div className="cart-total-details flex justify-between text-[#555] py-1">
                                <p>Subtotal</p>
                                <p>₹{getTotalCartAmount()}</p>
                            </div>
                            <hr className='m-[10px_0px]' />
                            <div className="cart-total-details flex justify-between text-[#555] py-1">
                                <p>Delivery Fee</p>
                                <p>₹{0}</p>
                            </div>
                            <hr className='m-[10px_0px]' />
                            <div className="cart-total-details flex justify-between text-[#555] py-1">
                                <b>Total</b>
                                <b>₹{getTotalCartAmount()}</b>
                            </div>
                        </div>
                        <div className='px-2.5 py-1.5'>
                            <button className='border-none text-white bg-amber-600 w-[min(15vw,200px)] p-[12px_0px] rounded-sm cursor-pointer' type='submit'>Procced To Payment </button>
                        </div>
                        
                    </div>
            </div>
        </form>
    )
}

export default Placeorder
